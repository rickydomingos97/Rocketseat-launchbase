const user = {
  name: 'Irina',
  transactions: [],
  balance: 0
}

function createTransaction (transaction) {
  user.transactions.push(transaction)

  if (transaction.type == "credit") {
    user.balance = user.balance + transaction.value
  } else {
    user.balance = user.balance - transaction.value
  }
}
function getHigherTransactionByType (type) {
  
  let higherTransaction
  let higherValue = 0

  for (let transaction of user.transactions) {
    if (type == transaction.type && higherValue < transaction.value) {
      // setamos o higherValue com = transaction.value por que ele inicia com 0
      higherValue = transaction.value
      higherTransaction = transaction
    }
  }
  return higherTransaction
}

function getAverageTransactionValue() {
  let sum = 0
  for (let transaction of user.transactions) {
    sum += transaction.value
  }

  return sum / user.transactions.length
}
function getTransactionsCount() {
  let countCredit = 0
  let countDebit = 0

  for (let transaction of user.transactions) {
    if(transaction.type == "credit") {
      // countCredit + countcredit ou
      countCredit++
    } else {
      countDebit++
    }

  }

  return {
    credit: countCredit,
    debit: countDebit
  }

}

createTransaction({ type: "credit", value: 50 });
createTransaction({ type: "credit", value: 120 });
createTransaction({ type: "debit", value: 80 });
createTransaction({ type: "debit", value: 30 });

console.log(user.balance); // 60

console.log(getHigherTransactionByType("credit"));
console.log(getHigherTransactionByType("debit"));

console.log(getAverageTransactionValue());

console.log(getTransactionsCount());
