function updateOrderValue() {
  const orders = parseInt(document.getElementById('orders').value);
  document.getElementById('orderValue').textContent = orders;
  calculateOpportunity();
}

function calculateOpportunity() {
  const orders = parseInt(document.getElementById('orders').value);
  const aov = parseFloat(document.getElementById('aov').value);
  const upliftPercentage = 0.01;

  const opportunity = orders * aov * upliftPercentage;

  document.getElementById('result').textContent = opportunity.toLocaleString(undefined, {
    minimumFractionDigits: 0,
    maximumFractionDigits: 0
  });
}

// Trigger initial calc
updateOrderValue();
