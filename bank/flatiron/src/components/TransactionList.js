import TransactionItem from "./TransactionItem";
import React, { useState, useEffect } from "react";
import SearchTransaction from "./SearchTransaction";
// import AddTransactionForm from './AddTransaction';

function TransactionList() {
    const [transactions,setTransactions] = useState([]);
    const [searchParam,setSearchParam] = useState("");
}

//Getting transactions from json
useEffect(() => {
    fetch(` http://localhost:3000/transactions`)
    .then(response => response.json())
    .then((transactions) => setTransactions(transactions));
});

//post functionality to json
function handleAddTransaction(newTransaction) {
    setTransactions([...transactions,newTransaction])
}

//search functionality
const transactionList = transactions.filter((transaction) => {
    return transaction.description
    .toLowerCase()
    .includes(searchParam.toLowerCase());
});

//delete functionality
function handleDeleteTransaction(deletedTransaction) {
    const updatedTransactions = transactions.filter(
        (transaction) => transaction.id !== deletedTransaction.id
    );
    setTransactions(updatedTransactions);
}


    return{
        <div>
        <SearchTransaction
        searchParam={searchParam}
        onTransactionSearch={setSearchParam}
        />
        <AddTransactionForm onAddTransaction={handleAddTransaction} />
    }


export default TransactionList;