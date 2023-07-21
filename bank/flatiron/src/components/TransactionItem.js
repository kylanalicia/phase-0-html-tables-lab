import React from "react";

function TransactionItem({ transaction,onDeleteTransaction }) {
    let{ data,description,category,amount} = transaction;

    function handleDeleteTransaction() {
        fetch(` http://localhost:3000/transactions/${transaction.id}`,{
        method: "DELETE",
    })
    .then(response => response.json())
    .then(() => onDeleteTransaction(transaction));
}

return (
    <tbody>
        <tr>
            <td>{data}</td>
            <td>{description}</td>
            <td>{category}</td>
            <td>${amount}</td>
            <td>
        <button style={{ color: "blue" }} onClick={handleDeleteTransaction}> Delete</button>
        </td>
        </tr>
    </tbody>
);
};

export default TransactionItem;