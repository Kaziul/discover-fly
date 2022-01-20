function personHandler(person, increase) {
  const newPerson = getInputValue(person);
  let totalPerson = 0;
  if (increase == true) {
    totalPerson = newPerson + 1;
  }
  if (increase == false && newPerson > 0) {
    totalPerson = newPerson - 1;
  }
  document.getElementById(person + "-person").value = totalPerson;
  const inputPersonFirst = getInputValue("first");
  const inputPersonSecond = getInputValue("second");
  const allPerson = inputPersonFirst * 150 + inputPersonSecond * 100;
  document.getElementById("total-amount").innerText = "$" + allPerson;
  calculateTotal();
}

function calculateTotal() {
  const inputPersonFirst = getInputValue("first");
  const inputPersonSecond = getInputValue("second");
  const allPerson = inputPersonFirst * 150 + inputPersonSecond * 100;
  const totalVat = allPerson * 0.1;
  document.getElementById("total-vat").innerText = "$" + totalVat;
  const grandAmount = allPerson + totalVat;
  document.getElementById("grand-amount").innerText = "$" + grandAmount;
}

function getInputValue(person) {
  const productInput = document.getElementById(person + "-person");
  const productCount = parseInt(productInput.value);
  return productCount;
}



// document.getElementById("person-increment").addEventListener('click',function(){
//     const currentPerson = document.getElementById("total-person");
//     const newPerson = parseInt(currentPerson.value);
//     const totalPerson = newPerson + 1;
//     currentPerson.value = totalPerson;
// });
// document.getElementById("person-decrement").addEventListener("click", function () {
//     const currentPerson = document.getElementById("total-person");
//     const newPerson = parseInt(currentPerson.value);
//     const totalPerson = newPerson - 1;
//     currentPerson.value = totalPerson;
//   });
