import { supabase } from "@services/supabaseClient";

export async function fetchProdutos() {
  const { data } = await supabase.from("produtos").select("*");
  return { data };
}

export async function updateProduto(id, produto) {
  const { error } = await supabase
    .from("produtos")
    .update({ ...produto })
    .eq("id", id);
  if (error) return { success: false };
  else return { success: true };
}

export async function deleteProduto(id) {
  const { error } = await supabase.from("produtos").delete().eq("id", id);
  if (error) return { success: false };
  else return { success: true };
}

export async function addProduto(produto) {
  const { error } = await supabase.from("produtos").insert({ ...produto });
  if (error) return { success: false };
  else return { success: true };
}

/* Adicionar a funções de atualizar e apagar produtos */

export async function fetchLojaInfo() {
  const { data } = await supabase
    .from("infos")
    .select("*")
    .eq("id", 1)
    .single();
  return { data };
}

export async function updateLojaInfo(lojaInfo) {
  const { error } = await supabase
    .from("infos")
    .update({ ...lojaInfo })
    .eq("id", 1);
  if (error) return { succes: false };
  else return { succes: false };
}