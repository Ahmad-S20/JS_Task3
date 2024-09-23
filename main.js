
var data = '';
var form = document.querySelector("form");
var products = [];

form.onsubmit = function(event) {
    event.preventDefault();
    var product = {
        name: document.querySelector("#name").value,
        description: document.querySelector("#description").value,
        price: document.querySelector("#price").value,
    }
    products.push(product);
    printData();
}


function printData() {
    data = '';
    for(var i =0;i<products.length;i++) {
        data += `<tr><td>${products[i].name}</td>
        <td>${products[i].description}</td>
        <td>${products[i].price}</td>
        </tr>`;
    }
    document.querySelector(".table tbody").innerHTML = data;
}