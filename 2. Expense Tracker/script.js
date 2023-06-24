document.getElementById('expense-form').addEventListener('submit', addExpense);

function addExpense(e) {
  e.preventDefault();

  var description = document.getElementById('expense-input').value;
  var amount = document.getElementById('amount-input').value;

  if (description.trim() === '' || amount.trim() === '') {
    alert('Please enter both description and amount.');
    return;
  }

  var expenseItem = document.createElement('div');
  expenseItem.classList.add('expense-item');
  expenseItem.innerHTML = '<span class="description">' + description + '</span> - <span class="amount">$' + amount + '</span>';
  document.getElementById('expense-list').appendChild(expenseItem);

  updateTotalAmount(Number(amount));

  document.getElementById('expense-input').value = '';
  document.getElementById('amount-input').value = '';
}

function updateTotalAmount(amount) {
  var totalAmountElement = document.getElementById('total-amount');
  var currentTotal = Number(totalAmountElement.textContent.substr(1));
  totalAmountElement.textContent = '$' + (currentTotal + amount);
}
