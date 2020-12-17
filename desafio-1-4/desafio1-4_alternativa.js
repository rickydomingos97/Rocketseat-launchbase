const user = {
    name: "Mariana",
    transactions: [],
    balance: 0
  };


function createTransaction (transaction) {
    if (transaction.type == "credit") {
        user.balance = user.balance+transaction.value
    } else if (transaction.type == "debit") {
        user.balance = user.balance-transaction.value
    }
    // inserir no array o objeto de transacao
    user.transactions.push(transaction)
}

function getHigherTransactionByType (type) {
    let maxValue = 0
    let maxtransaction 
    for (let transaction of user.transactions) {
        if ((type == transaction.type) && (transaction.value > maxValue)) {
            maxValue = transaction.value
            maxtransaction = transaction
        }
    }
    console.log (maxtransaction)
}

function getAverageTransactionValue () {
    let soma = 0
    for (let transaction of user.transactions) {
        soma = soma+transaction.value
    }
    console.log (soma/user.transactions.length)
}

function getTransactionsCount () {
    let creditTotal = 0
    let debitTotal = 0
    for (let transaction of user.transactions) {
        if (transaction.type == "credit") {
            creditTotal= creditTotal + 1
        }
        if (transaction.type == "debit") {
            debitTotal= debitTotal + 1
        }
    }
    console.log ({credit:creditTotal, debit:debitTotal})
}


createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); 

getHigherTransactionByType("credit");
getHigherTransactionByType("debit");

getAverageTransactionValue();

getTransactionsCount(); 