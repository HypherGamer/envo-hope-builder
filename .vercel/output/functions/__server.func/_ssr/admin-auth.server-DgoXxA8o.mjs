import { c as createServerRpc } from "./firebase-admin.server-DIx8P1Z3.mjs";
import { c as createServerFn } from "./server-D7pJ5bR7.mjs";
import { r as requireAdmin, p as performAdminLogin, a as performAdminLogout } from "./admin-session.server-RIfjfGk-.mjs";
import "../_libs/seroval.mjs";
import "../_libs/react.mjs";
import { o as objectType, s as stringType } from "../_libs/zod.mjs";
import "node:async_hooks";
import "../_libs/h3-v2.mjs";
import "../_libs/rou3.mjs";
import "../_libs/srvx.mjs";
import "node:stream";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval-plugins.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const checkAdminSessionFn_createServerFn_handler = createServerRpc({
  id: "1939854af26f8feb9475414b037dcbaa144c906b9e74113adb40abee7c711fe2",
  name: "checkAdminSessionFn",
  filename: "src/lib/admin-auth.server.ts"
}, (opts) => checkAdminSessionFn.__executeServer(opts));
const checkAdminSessionFn = createServerFn({
  method: "GET"
}).handler(checkAdminSessionFn_createServerFn_handler, async () => {
  try {
    const admin = await requireAdmin();
    return {
      authenticated: true,
      email: admin.email,
      name: admin.name
    };
  } catch {
    return {
      authenticated: false
    };
  }
});
const adminLoginWithGoogle_createServerFn_handler = createServerRpc({
  id: "7930f50442db3f840af5b601ea944dbaf8a302815ba34101b530646bcfb8a15c",
  name: "adminLoginWithGoogle",
  filename: "src/lib/admin-auth.server.ts"
}, (opts) => adminLoginWithGoogle.__executeServer(opts));
const adminLoginWithGoogle = createServerFn({
  method: "POST"
}).validator((data) => {
  return objectType({
    idToken: stringType().min(10, "Invalid ID token")
  }).parse(data);
}).handler(adminLoginWithGoogle_createServerFn_handler, async ({
  data
}) => {
  return performAdminLogin(data.idToken);
});
const adminLogout_createServerFn_handler = createServerRpc({
  id: "b470c62d670ddb6ecf22857062b52245191d08913873a8443fe33368fe0198b7",
  name: "adminLogout",
  filename: "src/lib/admin-auth.server.ts"
}, (opts) => adminLogout.__executeServer(opts));
const adminLogout = createServerFn({
  method: "POST"
}).handler(adminLogout_createServerFn_handler, async () => {
  return performAdminLogout();
});
export {
  adminLoginWithGoogle_createServerFn_handler,
  adminLogout_createServerFn_handler,
  checkAdminSessionFn_createServerFn_handler
};
