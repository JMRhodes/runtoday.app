import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";

export const GET: APIRoute = async ({ cookies, redirect }) => {
  // sign out from the current session only
  await supabase.auth.signOut({ scope: "local" });

  // remove the access and refresh tokens from cookies
  cookies.delete("sb-access-token", { path: "/" });
  cookies.delete("sb-refresh-token", { path: "/" });

  return redirect("/");
};
