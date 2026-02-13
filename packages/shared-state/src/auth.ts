import { userOperations } from "./global-state";

export type BffProfile = {
  isAuthenticated: boolean;
  uuid?: string;
  username?: string;
  fullName?: string;
  email?: string;
  picture?: string;
  roles?: any;
};

export async function bootstrapAuth(): Promise<BffProfile | null> {
  if (typeof window === "undefined") return null;

  try {
    // IMPORTANT: relative URL so it works behind gateway (9990)
    const res = await fetch("/auth/me", {
      method: "GET",
      credentials: "include",
      headers: { "Accept": "application/json" },
    });

    if (!res.ok) {
      userOperations.logout();
      return null;
    }

    const profile: BffProfile = await res.json();

    if (!profile?.isAuthenticated) {
      userOperations.logout();
      return profile;
    }

    userOperations.login({
      id: profile.uuid ?? "unknown",
      name: profile.fullName ?? profile.username ?? "User",
      email: profile.email ?? "",
      avatar: profile.picture,
    });

    return profile;
  } catch (e) {
    // If BFF is down, don't crash UI
    return null;
  }
}
