async function addExpense(e) {
  const category = document.querySelector(".category").value;
  const amount = parseFloat(document.getElementById("amount").value.trim());

  const response = await fetch("/api/transaction/liabilities", {
    method: "POST",
    body: JSON.stringify({ category, amount }),
    headers: { "Content-Type": "application/json" },
  });
  if (response.ok) {
    location.reload("/transaction/liabilities");
  } else {
    alert(`Something went wrong!`);
  }
}

document.querySelector("#add-expense").addEventListener("click", addExpense);

(async function findTotal(e) {
  let sum = 0;
  const amountClass = await document.querySelectorAll(".actual_expense");
  for (let each of amountClass) {
    console.log(parseInt(each.innerHTML));
    sum += parseInt(each.innerHTML);
  }
  console.log(sum);
  document.getElementById("total-amount").innerText = `$ ${sum}`;
})();
