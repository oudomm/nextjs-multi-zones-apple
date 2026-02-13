// packages/shared-state/src/ui-events.ts
export const OPEN_CART_EVENT = 'open-cart-drawer';

export const uiEvents = {
  openCart: () => {
    if (typeof window === 'undefined') return;
    window.dispatchEvent(new CustomEvent(OPEN_CART_EVENT));
  },

  subscribeOpenCart: (callback: () => void) => {
    if (typeof window === 'undefined') return () => {};

    const handler = () => callback();
    window.addEventListener(OPEN_CART_EVENT, handler);

    return () => window.removeEventListener(OPEN_CART_EVENT, handler);
  }
};
