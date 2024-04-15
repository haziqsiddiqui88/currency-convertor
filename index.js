import inquirer from "inquirer";
let conversion = {
    "PKR": {
        "USD": 0.0036,
        "GBP": 0.0037,
        "AFN": 0.26,
        "PKR": 1
    },
    "GBP": {
        "USD": 1.21,
        "PKR": 350,
        "AFN": 90.07,
        "GBP": 1
    },
    "USD": {
        "PKR": 277.58,
        "GBP": 0.83,
        "AFN": 71.16,
        "USD": 1
    },
    "AFN": {
        "PKR": 3.91,
        "GBP": 0.011,
        "USD": 0.014,
        "AFN": 1
    },
};
const answer = await inquirer.prompt([
    {
        name: "from",
        type: "list",
        choices: ["PKR", "USD", "GBP", "AFN"],
        message: "Select Your Currency...?"
    },
    {
        name: "to",
        type: "list",
        choices: ["PKR", "USD", "GBP", "AFN"],
        message: "Select Your Conversion Currency"
    },
    {
        name: "amount",
        type: "number",
        message: "Enter Your Conversion Amount"
    },
]);
const { from, to, amount } = answer;
if (from && to && amount) {
    let result = conversion[from][to] * amount;
    console.log(`your conversion from ${from} to ${to} is ${result}`);
}
else {
    console.log("Invalid Input");
}
