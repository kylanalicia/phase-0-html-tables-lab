import React, { useEffect } from "react";

useEffect(() => {
    fetch(` http://localhost:3000/transactions`)
    .then(response => response.json())
    .then((transactions) => setTransactions(transactions));
});