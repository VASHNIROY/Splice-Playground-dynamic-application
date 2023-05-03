let arr = [1, 7, 3, 1, 0, 20, 77];

let startIndexInput = document.getElementById("startIndexInput");
let deleteCountInput = document.getElementById("deleteCountInput");
let itemToAddInput = document.getElementById("itemToAddInput");
let spanElement = document.getElementById("updatedArray");
deleteCountInput.value = 0;
let buttonElement = document.getElementById("spliceBtn");


let stringified = JSON.stringify(arr);
spanElement.textContent = stringified;

buttonElement.onclick = function() {
    stringified = JSON.stringify(arr);
    let startIndexInputValue = startIndexInput.value;
    let deleteCountInputValue = deleteCountInput.value;
    let itemToAddInputValue = itemToAddInput.value;

    if (startIndexInputValue === "") {
        alert("enter the start index");
    } else {
        let updaterArray = arr.splice(startIndexInputValue, deleteCountInputValue, itemToAddInputValue);
        spanElement.textContent = arr;
    }
}
//addToSpan();