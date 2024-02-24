/* ------------------------------ TASK 3 -----------------------------------
Parašykite JS kodą, kuris leis vartotojui paspaudus ant mygtuko "Show users"
pamatyti vartotojus iš Github API (endpoint'as pateiktas žemiau).

Paspaudus mygtuką "Show users":
1. Pateikiamas informacijos atvaizdavimas <div id="output"></div> bloke
1.1. Informacija, kuri pateikiama: "login" ir "avatar_url" reikšmės (kortelėje)
2. Žinutė "Press "Show Users" button to see users" turi išnykti;

Pastaba: Informacija apie user'į (jo kortelė) bei turi turėti bent minimalų stilių;
-------------------------------------------------------------------------- */

// const ENDPOINT = 'https://api.github.com/users';

document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('btn');
    const outputDiv = document.getElementById('output');
  
    const fetchData = () => {
      fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(users => {
          const ul = document.createElement('ul');
  
          users.forEach(user => {
            const li = document.createElement('li');
            li.classList.add('kortele');
            const img = document.createElement('img');
            img.src = user.avatar_url;
            img.alt = `Avatar of ${user.login}`;
            const username = document.createElement('span');
            username.textContent = user.login;
  
            li.appendChild(img);
            li.appendChild(username);
            ul.appendChild(li);
          });
  
          outputDiv.innerHTML = '';
          outputDiv.appendChild(ul);
        })
        .catch(error => console.error('Klaida gavant duomenis:', error));
    };
  
    btn.addEventListener('click', fetchData);
  });
  