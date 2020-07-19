import '../scss/main.scss';


// uncomment the lines below to enable PWA
// import {registerSW} from './pwa.js';
// registerSW();

/* place your code below */
let id = 0;
let basketItems = [];
let basketContainer = document.getElementById("basket");
let buyButton = document.getElementById("kup");
let basketClass = document.querySelector('.basketClass');
buyButton.addEventListener("click", function () {
    id++;
    let basketItem = {};

 
    basketItem.Id = id;
    basketItem.Name = document.getElementById("product").value;
    basketItem.Category = document.getElementById("cat").value;
    basketItem.Qty = document.getElementById("quantity").value;
    basketItem.Weight = document.getElementById("weight").value;
    if (!/^[a-zA-Z]*$/g.test(basketItem.Name)) {
        alert("Podaj prawidłową nazwę produktu!");
    }
    else if (basketItem.Qty == "" && basketItem.Weight == "") {
        alert("Ilość lub waga produktów wymagana!");
    }
    else {
        basketItems.push(basketItem);

        let newEntry = document.createElement('div');
        if (basketItem.Qty !== "" && basketItem.Weight == "") {
            newEntry.innerHTML = "<b>" + basketItem.Name + "<br>" + "</b> Sztuk: " + basketItem.Qty + "<br>" + " Kategoria: " + basketItem.Category;
        }
        else if (basketItem.Weight !== "" && basketItem.Qty == "") {
            newEntry.innerHTML = "<b>" + basketItem.Name + "<br>" + "</b> Kategoria: " + basketItem.Category + "<br>"+ " Waga: " + basketItem.Weight + " kg";
        }
        else if (basketItem.Qty !== "" && basketItem.Weight !== ""){
            newEntry.innerHTML = "<b>" + basketItem.Name + "<br>" + "</b> Sztuk: " + basketItem.Qty + "<br>" + " Kategoria: " + basketItem.Category + "<br>" + " Waga: " + basketItem.Weight + " kg";
        }

        let newButton = document.createElement("button");
        newButton.addEventListener("click", function(){
            deleteTask(this, basketItem.Id);
        });
        newButton.innerText = "Usuń";

        let basketElement = document.createElement('div');
        basketElement.classList.add('basketElement');       
        basketElement.appendChild(newEntry);
        basketElement.appendChild(newButton);
        basketContainer.appendChild(basketElement);

    }
});
function deleteTask(button, idToRemove) {
    button.parentElement.remove(); 
    let idx = basketItems.findIndex(x=>x.Id==idToRemove);
    basketItems.splice(idx,1);
}


