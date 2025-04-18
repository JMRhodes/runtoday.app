import type { APIRoute } from "astro";
import { supabase } from "@/lib/supabase";
import type { Provider } from "@supabase/supabase-js";

export const POST: APIRoute = async ({ request, cookies, redirect }) => {
  const formData = await request.formData();
  const provider = formData.get("provider")?.toString();

  if (provider) {
    const { data, error } = await supabase.auth.signInWithOAuth({
      provider: provider as Provider,
      options: {
        queryParams: {
          access_type: "offline",
          prompt: "consent",
        },
        redirectTo: "http://localhost:4321/api/auth/callback",
      },
    });

    if (error) {
      return new Response(error.message, { status: 500 });
    }

    return new Response(null, { status: 302, headers: { Location: data.url } });
  }

  return new Response("Invalid request", { status: 400 });
};
