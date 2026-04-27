// Sample data (you can later replace this with API data)
const customers = [
  { id: 1, name: "Laiba Ali", charges: 2500 },
  { id: 2, name: "Mohammad Arsh Qureshi", charges: 2200 },
  { id: 3, name: "Riya Raghu", charges: 2700 },
  { id: 4, name: "Sneha Iyer", charges: 2400 },
  { id: 5, name: "Vikram Singh", charges: 2600 }
];

// Get table body
const tableBody = document.querySelector("tbody");

// Function to load data
function loadTableData() {
  tableBody.innerHTML = ""; // clear existing data

  customers.forEach(customer => {
    const row = `
      <tr>
        <td>${customer.id}</td>
        <td>${customer.name}</td>
        <td>₹${customer.charges}</td>
      </tr>
    `;
    tableBody.innerHTML += row;
  });
}

// Load data when page loads
window.onload = loadTableData;