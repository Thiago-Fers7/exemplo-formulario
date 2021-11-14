
// Essa função salva os dados no localStorage, e caso esse local ainda não exista ele é criado.
// Quando já existem dados, estes são trazidos para o código por meio do getItem (linha 8), assim é 
// possível adicionar uma nova posição no array com o uso do spread operator (... - linha 11), que faz uma cópia 
// do array (no caso o que estava no localStorage - Cópia dos dados) e adiciona mais um array (linha 7) 
// que nesse caso é objeto com os dados informados pelo usuário.
export function saveInLocalStorage(key, dataForm) {
  const localStorageValue = JSON.parse(localStorage.getItem(key));

  if (localStorageValue) { // Verifica se já existe algo salvo
    localStorageValue.push(dataForm)

    localStorage.setItem(key, JSON.stringify(localStorageValue));
    return;
  }

  localStorage.setItem(key, JSON.stringify([dataForm]));
}
