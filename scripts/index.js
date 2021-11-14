import { attDataList } from './attDataList.js';
import { saveInLocalStorage } from './saveInLocalStorage.js';

function saveData(event) {
  // Remove o evento padrão da tag <form> (o evento padrão envia os dados automáticamente pela URL e recarrega a página)
  event.preventDefault();

  const name = document.getElementById("name");
  const email = document.querySelector("#email");
  const tel = document.querySelector("#tel");

  const array = [name, email, tel]

  saveInLocalStorage('myKey', { 
    id: Math.random(),
    name: name.value, 
    email: email.value, 
    tel: tel.value 
  });

  attDataList();

  for (let i = 0; i < array.length; i++) {
    array[i].value = ''
  }
}

document.getElementById('form').addEventListener('submit', saveData);