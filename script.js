// booking success message
document.getElementById("bookingButton").addEventListener("click", function () {
    document.getElementById("main-content").style.display = "none";
    document.getElementById("hiddenSuccess").style.display = "block";
});


//count change handle and call totalCalculate function
function handleCountChange(isIncrease, id) {
    const countInput = document.getElementById(id).value;
    const count = parseInt(countInput);
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
    const newFirstCount = getInputValue("firstClassInput");
    const newEconomyCount = getInputValue("economyClassInput");

    const subtotal = newFirstCount * 150 + newEconomyCount * 100;
    document.getElementById("subtotal").innerText = "$" + subtotal;

    const tax = subtotal * .1;
    document.getElementById("tax").innerText = "$" + tax;

    const total = subtotal + tax;
    document.getElementById("total").innerText = "$" + total;
}

function getInputValue(id) {
    const countInput = document.getElementById(id);
    const newCountInput = parseInt(countInput.value);
    return newCountInput;
}

