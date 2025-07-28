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

export async function deleteProduto(id, imagemPath) {
  // 1. Tenta remover a imagem do Supabase Storage
  const { error: imageError } = await supabase.storage
    .from("imagens")
    .remove([imagemPath]);

  if (imageError) {
    console.error("Erro ao remover imagem:", imageError.message);
  }

  // 2. Remove o produto da tabela
  const { error: deleteError } = await supabase
    .from("produtos")
    .delete()
    .eq("id", id);

  if (deleteError) {
    console.error("Erro ao deletar produto:", deleteError.message);
    return { success: false };
  }

  return { success: true };
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