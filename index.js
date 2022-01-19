document.getElementById("second-increase").addEventListener("click", function () {
    const currentPerson = document.getElementById("second-person");
    const newPerson = parseInt(currentPerson.value);
    const totalPerson = newPerson + 1;
    currentPerson.value = totalPerson;
  });
document.getElementById("second-increase").addEventListener("click", function () {
    const currentPerson = document.getElementById("second-person");
    const newPerson = parseInt(currentPerson.value);
    const totalPerson = newPerson - 1;
    currentPerson.value = totalPerson;
  });


  function personHandler(person,increase){
      const newPerson = getInputValue(person);
      if(increase == true){
      totalPerson = newPerson + 1;
      }
      if(increase == false && newPerson > 0){
      totalPerson = newPerson - 1;
      }
      document.getElementById(person +'-person').value = totalPerson;
      if(person == 'first'){
      totalNewPerson = totalPerson * 150;
      }
      if(person == 'second'){
      totalNewPerson = totalPerson * 100;
      }
      document.getElementById("total-amount").innerText = '$' + totalNewPerson;
      const totalVat = totalNewPerson * 0.1;
      document.getElementById("total-vat").innerText = '$' + totalVat;
      const grandAmount = totalNewPerson + totalVat;
      document.getElementById("grand-amount").innerText = '$' + grandAmount;
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