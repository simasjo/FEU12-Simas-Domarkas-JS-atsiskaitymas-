/* ------------------------------ TASK 4 -----------------------------------
Parašykite JS kodą, vartotojui atėjus į tinklapį kreipsis į cars.json failą
ir iš jo atvaizduos visus automobilių gamintojus ir pagamintus modelius. 
Kiekvienas gamintojas turės savo atvaizdavimo "kortelę", kurioje bus 
nurodomas gamintojas ir jo pagaminti modeliai.


Pastaba: Informacija apie automobilį (brand) (jo kortelė) bei turi turėti 
bent minimalų stilių;
-------------------------------------------------------------------------- */

const ENDPOINT = 'cars.json';

fetch(ENDPOINT)
  .then(res => res.json())
  .then(cars => {
    const outputDiv = document.getElementById('output');

    cars.forEach(car => {
      const carDiv = document.createElement('div');
      carDiv.classList.add('kortele');

      const brandHeading = document.createElement('h2');
      const brandText = document.createTextNode(car.brand);
      brandHeading.appendChild(brandText);

      const modelsList = document.createElement('ul');
      car.models.forEach(model => {
        const modelItem = document.createElement('li');
        const modelText = document.createTextNode(model);
        modelItem.appendChild(modelText);
        modelsList.appendChild(modelItem);
      });

      carDiv.append(brandHeading, modelsList);
      outputDiv.appendChild(carDiv);
    });
  });
