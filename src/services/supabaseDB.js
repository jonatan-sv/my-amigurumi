import { supabase } from "@services/supabaseClient";

export async function fetchProdutos() {
  const { data } = await supabase.from("produtos").select("*");
  return { data };
}
