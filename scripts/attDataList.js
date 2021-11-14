import { getItemsOfLocalStorage } from './getItemsOfLocalStorage.js';

function removeListItem(id) {
  const items = getItemsOfLocalStorage('myKey');

  const newItems = items.filter((item) => item.id !== +id);

  localStorage.setItem('myKey', JSON.stringify(newItems));

  attDataList();
}

export function attDataList() {
  const tbody = document.querySelector('#table-body'); 
  const items = getItemsOfLocalStorage('myKey');
  
  tbody.innerHTML = '';
  
  for(let i = 0; i < items.length; i++) {
    const tr = document.createElement('tr');

    tr.innerHTML = `
      <tr data-id=${items[i].id}>
        <td>${items[i].name}</td>
        <td>${items[i].email}</td>
        <td>${items[i].tel}</td>
        <td>
          <button class="remove" type="button">
            <img src="./images/trash.svg" alt="Deletar" />
          </button>
        </td>
      </tr>
    `;

    tr.querySelector('.remove').addEventListener('click', () => removeListItem(items[i].id));

    tbody.appendChild(tr);
  }
}

document.addEventListener('DOMContentLoaded', attDataList);
