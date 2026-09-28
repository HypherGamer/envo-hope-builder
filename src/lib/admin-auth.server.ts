import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";
import {
  requireAdmin,
  performAdminLogin,
  performAdminLogout,
  type AdminUser,
} from "./admin-session.server";

export type { AdminUser };

export const checkAdminSessionFn = createServerFn({ method: "GET" }).handler(
  async (): Promise<{ authenticated: boolean; email?: string; name?: string }> => {
    try {
      const admin = await requireAdmin();
      return {
        authenticated: true,
        email: admin.email,
        name: admin.name,
      };
    } catch {
      return { authenticated: false };
    }
  },
);

export const adminLoginWithGoogle = createServerFn({ method: "POST" })
  .validator((data: unknown) => {
    return z
      .object({
        idToken: z.string().min(10, "Invalid ID token"),
      })
      .parse(data);
  })
  .handler(async ({ data }): Promise<{ success: boolean; email?: string; error?: string }> => {
    return performAdminLogin(data.idToken);
  });

export const adminLogout = createServerFn({ method: "POST" }).handler(
  async (): Promise<{ success: boolean }> => {
    return performAdminLogout();
  },
);
