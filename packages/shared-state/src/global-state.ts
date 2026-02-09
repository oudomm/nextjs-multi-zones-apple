/**
 * Global State Manager for Multi-Zone Architecture
 * Manages cart and user data across all zones using localStorage
 */

export interface CartItem {
  id: string;
  name: string;
  price: number;
  quantity: number;
  image?: string;
}

export interface UserProfile {
  id: string;
  name: string;
  email: string;
  avatar?: string;
}

export interface GlobalState {
  cart: CartItem[];
  user: UserProfile | null;
  theme: 'light' | 'dark';
}

const STORAGE_KEY = 'apple-global-state';
const STATE_CHANGE_EVENT = 'global-state-change';

/**
 * Get the current global state from localStorage
 */
export const getGlobalState = (): GlobalState => {
  if (typeof window === 'undefined') {
    return getDefaultState();
  }

  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      return JSON.parse(stored);
    }
  } catch (error) {
    console.error('Error reading global state:', error);
  }

  return getDefaultState();
};

/**
 * Update global state and notify all zones
 */
export const setGlobalState = (updater: (state: GlobalState) => GlobalState): void => {
  if (typeof window === 'undefined') return;

  const currentState = getGlobalState();
  const newState = updater(currentState);

  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(newState));
    
    // Dispatch custom event to notify other zones
    window.dispatchEvent(new CustomEvent(STATE_CHANGE_EVENT, {
      detail: newState
    }));
  } catch (error) {
    console.error('Error updating global state:', error);
  }
};

/**
 * Subscribe to state changes across zones
 */
export const subscribeToStateChanges = (
  callback: (state: GlobalState) => void
): (() => void) => {
  if (typeof window === 'undefined') {
    return () => {};
  }

  const handler = (event: Event) => {
    const customEvent = event as CustomEvent<GlobalState>;
    callback(customEvent.detail);
  };

  window.addEventListener(STATE_CHANGE_EVENT, handler);

  // Also listen to storage events for cross-tab sync
  const storageHandler = (event: StorageEvent) => {
    if (event.key === STORAGE_KEY && event.newValue) {
      try {
        const newState = JSON.parse(event.newValue);
        callback(newState);
      } catch (error) {
        console.error('Error parsing storage event:', error);
      }
    }
  };

  window.addEventListener('storage', storageHandler);

  return () => {
    window.removeEventListener(STATE_CHANGE_EVENT, handler);
    window.removeEventListener('storage', storageHandler);
  };
};

/**
 * Cart operations
 */
export const cartOperations = {
  addItem: (item: CartItem) => {
    setGlobalState((state) => {
      const existingItem = state.cart.find((i) => i.id === item.id);
      
      if (existingItem) {
        return {
          ...state,
          cart: state.cart.map((i) =>
            i.id === item.id
              ? { ...i, quantity: i.quantity + item.quantity }
              : i
          )
        };
      }

      return {
        ...state,
        cart: [...state.cart, item]
      };
    });
  },

  removeItem: (itemId: string) => {
    setGlobalState((state) => ({
      ...state,
      cart: state.cart.filter((i) => i.id !== itemId)
    }));
  },

  updateQuantity: (itemId: string, quantity: number) => {
    setGlobalState((state) => ({
      ...state,
      cart: state.cart.map((i) =>
        i.id === itemId ? { ...i, quantity } : i
      )
    }));
  },

  clearCart: () => {
    setGlobalState((state) => ({
      ...state,
      cart: []
    }));
  }
};

/**
 * User operations
 */
export const userOperations = {
  login: (user: UserProfile) => {
    setGlobalState((state) => ({
      ...state,
      user
    }));
  },

  logout: () => {
    setGlobalState((state) => ({
      ...state,
      user: null,
      cart: []
    }));
  }
};

/**
 * Default state factory
 */
function getDefaultState(): GlobalState {
  return {
    cart: [],
    user: null,
    theme: 'light'
  };
}

/**
 * Clear all global state
 */
export const clearGlobalState = (): void => {
  if (typeof window === 'undefined') return;
  
  localStorage.removeItem(STORAGE_KEY);
  setGlobalState(() => getDefaultState());
};