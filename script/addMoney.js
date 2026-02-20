document.getElementById("add-money-btn")
    .addEventListener("click", function () {

        // get the bank account
        const bankAccount = getValueFromInput("add-money-bank");
        if (bankAccount === "Select bank") {
            alert("Please select a bank");
            return;
        }

        // get the bank account number
        const accountNumber = getValueFromInput("add-money-number");
        if (accountNumber.length !== 11) {
            alert("Invalid account number");
            return;
        }

        // get the amount
        const amount = getValueFromInput("add-money-amount");
        const currentBalance = getBalance();
        const newBalance = currentBalance + Number(amount);

        // get the pin and verify
        const pin = getValueFromInput("add-money-pin");
        if (pin === "1234") {
            alert(`Add money successful from ${bankAccount} at ${new Date()}`);
            setBalance(newBalance);

            // get the history-container
            const history = document.getElementById("history-container");

            // create a new div
            const newHistory = document.createElement("div");

            // add innerHTML  to the new div
            newHistory.innerHTML = `
            <div class = "transaction-card p-5 bg-base-100">
                Add Money Successful from ${bankAccount} bank, account number ${accountNumber} at ${new Date}
            </div>
            `;

            // append newDiv to the histroy container
            history.append(newHistory);
        }
        else {
            alert("Invalid pin");
            return;
        }
    });