// machine id - input value
function getValueFromInput(id) {
    const input = document.getElementById(id);
    const value = input.value;
    return value;
}

// machine - balance
function getBalance() {
    const balanceElement = document.getElementById("balance");
    const balance = balanceElement.innerText;
    return Number(balance);
}

// machine value - set balance
function setBalance(value) {
    const balanceElement = document.getElementById("balance");
    balanceElement.innerText = value;
    // 45000 = 50000
}