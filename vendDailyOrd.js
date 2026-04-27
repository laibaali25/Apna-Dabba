// Sample data (replace later with backend/API)
const orders = [
  {
    id: 1,
    name: "Rahul Sharma",
    tiffin: "Veg Lunch",
    startDate: "01 Apr 2026",
    charges: 2500
  },
  {
    id: 2,
    name: "Priya Mehta",
    tiffin: "Jain Meal",
    startDate: "05 Apr 2026",
    charges: 2200
  },
  {
    id: 3,
    name: "Amit Patel",
    tiffin: "Non-Veg Dinner",
    startDate: "10 Apr 2026",
    charges: 3000
  },
  {
    id: 4,
    name: "Sneha Iyer",
    tiffin: "South Indian Meal",
    startDate: "12 Apr 2026",
    charges: 2400
  }
];

// Select table body
const tableBody = document.getElementById("orderTable");

// Function to load data
function loadOrders() {
  tableBody.innerHTML = "";

  orders.forEach(order => {
    const row = `
      <tr>
        <td>${order.id}</td>
        <td>${order.name}</td>
        <td>${order.tiffin}</td>
        <td>${order.startDate}</td>
        <td>₹${order.charges}</td>
      </tr>
    `;

    tableBody.innerHTML += row;
  });
}

// Load data when page is ready
document.addEventListener("DOMContentLoaded", loadOrders);