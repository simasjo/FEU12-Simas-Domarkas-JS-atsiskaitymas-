/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */

document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("btn__element").addEventListener("click", function () {
      updateButtonClickCount();
    });
  });
  var clickCount = 0;
  
  function updateButtonClickCount() {
    clickCount++;

    var stateElement = document.getElementById('btn__state');
    stateElement.textContent = clickCount;
  }
  