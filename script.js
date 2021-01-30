// booking success message
document.getElementById("bookingButton").addEventListener("click", function () {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("hiddenSuccess").style.display = "block";
});


//count change handle and call totalCalculate function
function handleCountChange(isIncrease, id) {
    let countInput = document.getElementById(id).value;
    let count = parseInt(countInput);
    let newCount = count;

    if (isIncrease == true) {
        newCount = count + 1;
    }

    if (isIncrease == false && count > 0) {
        newCount = count - 1;
    }

    document.getElementById(id).value = newCount;
    totalCalculate();
}


// total Calculate function
function totalCalculate() {
    let newFirstCount = getInputValue("firstClassInput");
    let newEconomyCount = getInputValue("economyClassInput");

    let subtotal = newFirstCount * 150 + newEconomyCount * 100;
    document.getElementById("subtotal").innerText = "$" + subtotal;

    let tax = subtotal * .1;
    document.getElementById("tax").innerText = "$" + tax;

    let total = subtotal + tax;
    document.getElementById("total").innerText = "$" + total;
}

function getInputValue(id) {
    const countInput = document.getElementById(id);
    const newCountInput = parseInt(countInput.value);
    return newCountInput;
}

