import { supabase } from "@services/supabaseClient";

export async function loginHandler({ email, password }) {
  const { error } = await supabase.auth.signInWithPassword({ email, password });

  if (!error) return { success: true, text: null };

  const text =
    error.code === "invalid_credentials"
      ? "E-mail ou senha inválidos!"
      : "Erro ao tentar entrar!";

  return { success: false, text: text };
}

export async function logoutHandler() {
  const { error } = await supabase.auth.signOut();
  return { success: !error };
}
