// Busca os dados do localStorage através da chave informada
export function getItemsOfLocalStorage(key) {
  const items = JSON.parse(localStorage.getItem(key));

  if (items) {
    return items;
  }

  return [];
}
