// Simple token-based auth for the admin module.
// Token is stored as an HttpOnly cookie and compared server-side.
// Credentials and secret are read from environment variables.

export const ADMIN_USERNAME = process.env.ADMIN_USERNAME ?? "admin";
export const ADMIN_PASSWORD = process.env.ADMIN_PASSWORD ?? "wanderlust123";
export const ADMIN_COOKIE = "wl_admin_session";

// The session token is derived from the secret at startup.
// Change ADMIN_SECRET in production to invalidate all existing sessions.
export const ADMIN_TOKEN = process.env.ADMIN_SECRET ?? "wl_admin_secret_change_me";

export function isValidCredentials(username: string, password: string): boolean {
  return username === ADMIN_USERNAME && password === ADMIN_PASSWORD;
}
