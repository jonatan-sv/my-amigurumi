import { supabase } from "@services/supabaseClient";

export async function fetchProdutos() {
  const { data } = await supabase.from("produtos").select("*");
  return { data };
}

export async function fetchLojaInfo() {
  const { data } = await supabase
    .from("infos")
    .select("*")
    .eq("id", 1)
    .single();
  return { data };
}
