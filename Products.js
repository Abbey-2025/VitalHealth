// Initialize cart from localStorage if it exists
let cart = JSON.parse(localStorage.getItem("cart")) || [];

// Function to show notification
function addToCart(id) {
    const product = productData[id];
    if (!product) {
        console.error('Product not found:', id);
        return;
    }
    cart.push(product);
    updateCartCount();
    showNotification(`${product.name} added to cart!`);
}


// Function to add product to cart
function addToCart(productId, price, productName, productImage, description) {
    const product = {
        id: productId,
        name: productName,
        price: price,
        image: productImage,
        description: description,
        quantity: 1
    };
    
    // Check if product already exists in cart
    const existingItem = cart.find(item => item.id === productId);
    if (existingItem) {
        existingItem.quantity += 1;
    } else {
        cart.push(product);
    }
    
    localStorage.setItem("cart", JSON.stringify(cart));
    showNotification(`${productName} added to cart!`);
    updateCartCount();
}

// Function to update cart count
function updateCartCount() {
    const cartCountElements = document.querySelectorAll(".cart-count");
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    
    cartCountElements.forEach(element => {
        element.textContent = totalItems;
    });
}

// Function to display items in cart
function renderCartItems(){
    const cart_items = document.getElementById("cart_items");
    if (cart.length <= 0) {
        // print empty message
        cart_items.innerHTML = "No items in cart";
    } else {
        

        cart_items.innerHTML = `
        <button style="width: 90px; height: 30px; position: relative; left: 23px; background-color: #90cf8e;" onclick="removeAll();">Remove All</button>
        <button style="width: 90px; height: 30px; position: relative; left: 957px; background-color: #90cf8e;" onclick="exit();">Exit Cart</button>
        <div class="products-container" style="margin-bottom: 50px;">
            
            <table>
                <tr>
                    <th></th>
                    <th>Item</th>
                    <th>Price</th>
                    <th>Quantity</th>
                    <th>Total</th>
                </tr>
                
                ${cart.map((item, idx) => `                    
                    <tr>
                        <td><button type="button" id="remove" style="width: 90px; height: 30px; background-color: #90cf8e;" onclick="removeFromCart(${item.id});">Remove</button></td>
                        <td style="text-align: center;"><h4>${item.name}</h4></td>
                        <td style="text-align: center;">${item.price}</td>
                        <td style="text-align: center;">                            
                            <select class="quantity-selector" data-id="${item.id}" onchange="updateQuantity(${item.id}, event.target.value)"> 
                                ${Array.from({length: 20}, (_, i) => {
                                const value = i + 1;
                                return `<option value="${value}" ${item.quantity === value ? 'selected' : ''}>${value}</option>`;
                                }).join('')}                                     
                                
                            </select>                           
                        </td>
                        <td style="text-align: center;">${calculateTotal(item.quantity, item.price)}</td>                    
                    </tr>  

                `).join('')} 
                
            </table>
        </div>
        <div style="width: 220px; height: 150px; justify-content: end; position: relative; left: 920px;">
            <div style="display: flex; justify-content: space-between;">
                <p>Subtotal</p>
                <p id="subtotal">$${calculateSubtotal(cart).toFixed(2)}</p>
            </div>
            <div style="display: flex; justify-content: space-between;">
                <p>Discount</p>
                <input type="number" id="discount" id="discount" min="0" max="100" value="0" oninput="applyDiscount()"> 
            </div>
            <div style="display: flex; justify-content: space-between;">
                <p>Grand Total</p>               
                <p id="grand-total">$${(calculateSubtotal(cart)).toFixed(2)}</p>
            </div>
        </div>
        <button type="button" style="width: 220px; height: 30px; position: relative; left: 920px; background-color: #90cf8e;" onclick="checkout();">Checkout</button>
        `   
    }

}

// Update cart count on page load
document.addEventListener("DOMContentLoaded", updateCartCount);

// Function to remove item from cart
function removeFromCart(productId) {
    cart = cart.filter(item => item.id !== productId);
    localStorage.setItem("cart", JSON.stringify(cart));
    updateCartCount();
    renderCartItems(); 
}

// Function to update quantity
function updateQuantity(productId, newQuantity) {
    const item = cart.find(item => item.id === productId);
    if (item) {
        item.quantity = Math.max(1, newQuantity);
        localStorage.setItem("cart", JSON.stringify(cart));
        renderCartItems();
    } 
}

function calculateTotal(qty, price){
    return qty*price;
}

function calculateSubtotal(cart) {
    return cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
}

function applyDiscount() {
    const discount = parseFloat(document.getElementById('discount').value) || 0;
    const subtotal = calculateSubtotal(cart);
    const discountedTotal = subtotal * (1 - discount/100);
    localStorage.setItem("cartTotal", discountedTotal)
    document.getElementById('grand-total').textContent = `$${discountedTotal.toFixed(2)}`;
}

function removeAll() {
    localStorage.clear();
    window.location.href="cart.html";
}

function exit() {
    window.location.href="products.html";
}

function checkout() {
    window.location.href="checkout.html";
}


const users = [
    { id: 1, name: "John_Jones", gender: "Male", age: 38 },
    { id: 2, name: "Julia_Brown", gender: "Female", age: 31 },
    { id: 3, name: "Jade_Paul", gender: "Female", age: 31 },
    { id: 4, name: "Jane_Smith", gender: "Female", age: 43 },
    { id: 5, name: "James_Brown", gender: "Male", age: 48 },
    { id: 6, name: "Jasmine_Ryce", gender: "Female", age: 28 },
    { id: 7, name: "Justin Bieber", gender: "Male", age: 35 },
    { id: 8, name: "Jessica_Simpson", gender: "Female", age: 33 },
    { id: 9, name: "Jace_Williams", gender: "Male", age: 41 },
    { id: 10, name: "Jonna_James", gender: "Female", age: 53 },
    { id: 11, name: "Jack_Sims", gender: "Male", age: 22 },
    { id: 12, name: "Julianna_Wins", gender: "Female", age: 29 },
    { id: 13, name: "Joseph_Taylor", gender: "Male", age: 45 },
    { id: 14, name: "Jocelyn_Williams", gender: "Female", age: 37 },
    { id: 15, name: "Joel_Reid", gender: "Male", age: 31 },
    { id: 16, name: "Joy_Grace", gender: "Female", age: 26 },
    { id: 17, name: "Jackson_Michael", gender: "Male", age: 34 },
    { id: 18, name: "June_Plum", gender: "Female", age: 40 },
    { id: 19, name: "Jordan_River", gender: "Male", age: 28 },
    { id: 20, name: "Jenna_Fox", gender: "Female", age: 32 }
];

// Function to categorize age into groups
function getAgeGroup(age) {
    if (age < 18) return "Under 18";
    if (age >= 18 && age <= 24) return "18-24";
    if (age >= 25 && age <= 34) return "25-34";
    if (age >= 35 && age <= 44) return "35-44";
    if (age >= 45 && age <= 54) return "45-54";
    if (age >= 55 && age <= 64) return "55-64";
    return "65+";
}

function processUserData() {
    users.forEach(user => {
        user.ageGroup = getAgeGroup(user.age);
    });

    // Calculate gender distribution
    const genderCounts = {};
    users.forEach(user => {
        genderCounts[user.gender] = (genderCounts[user.gender] || 0) + 1;
    });

    const ageGroupCounts = {};
    users.forEach(user => {
        ageGroupCounts[user.ageGroup] = (ageGroupCounts[user.ageGroup] || 0) + 1;
    });

    const combinedStats = {};
    users.forEach(user => {
        const key = `${user.gender}-${user.ageGroup}`;
        if (!combinedStats[key]) {
            combinedStats[key] = {
                gender: user.gender,
                ageGroup: user.ageGroup,
                count: 0
            };
        }
        combinedStats[key].count++;
    });

    const genderData = Object.entries(genderCounts).map(([gender, count]) => ({
        gender,
        count
    }));

    const ageGroupData = Object.entries(ageGroupCounts).map(([ageGroup, count]) => ({
        ageGroup,
        count
    }));

    const combinedData = Object.values(combinedStats);

    return {
        genderData,
        ageGroupData,
        combinedData,
        totalUsers: users.length
    };
}

function renderDashboard() {
    const data = processUserData();

    document.getElementById('totalUsers').textContent = data.totalUsers;
    
    const avgAge = (users.reduce((sum, user) => sum + user.age, 0) / users.length).toFixed(1);
    document.getElementById('avgAge').textContent = avgAge;
    
    const topGender = data.genderData.reduce((prev, current) => 
        (prev.count > current.count) ? prev : current
    ).gender;
    document.getElementById('topGender').textContent = topGender;

    const genderCtx = document.getElementById('genderChart').getContext('2d');
    new Chart(genderCtx, {
        type: 'pie',
        data: {
            labels: data.genderData.map(item => item.gender),
            datasets: [{
                data: data.genderData.map(item => item.count),
                backgroundColor: [
                    '#36a2eb',
                    '#ff6384',
                    '#4bc0c0',
                    '#ff9f40',
                    '#9966ff'
                ]
            }]
        },
        options: {
            responsive: true,
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.label || '';
                            const value = context.raw || 0;
                            const percentage = Math.round((value / data.totalUsers) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    const ageCtx = document.getElementById('ageChart').getContext('2d');
    new Chart(ageCtx, {
        type: 'bar',
        data: {
            labels: data.ageGroupData.map(item => item.ageGroup),
            datasets: [{
                label: 'Number of Users',
                data: data.ageGroupData.map(item => item.count),
                backgroundColor: '#4bc0c0'
            }]
        },
        options: {
            responsive: true,
            scales: {
                y: {
                    beginAtZero: true,
                    ticks: {
                        stepSize: 1
                    }
                }
            },
            plugins: {
                tooltip: {
                    callbacks: {
                        label: function(context) {
                            const label = context.dataset.label || '';
                            const value = context.raw || 0;
                            const percentage = Math.round((value / data.totalUsers) * 100);
                            return `${label}: ${value} (${percentage}%)`;
                        }
                    }
                }
            }
        }
    });

    const tableBody = document.getElementById('statsTable');
    tableBody.innerHTML = '';
    
    data.combinedData.forEach(item => {
        const row = document.createElement('tr');
        const percentage = Math.round((item.count / data.totalUsers) * 100);
        
        row.innerHTML = `
            <td>${item.gender}</td>
            <td>${item.ageGroup}</td>
            <td>${item.count}</td>
            <td>${percentage}%</td>
        `;
        tableBody.appendChild(row);
    });
}

document.addEventListener('DOMContentLoaded', renderDashboard);



 localStorage.setItem('Allinvoices', JSON.stringify([
   { invoiceNumber: 'INV123', userId: 'user1', customerName: 'John Jones', items: ['item1'], totalAmount: 3800, date: '2024-01-01', status: 'Paid' },
   { invoiceNumber: 'INV456', userId: 'user2', customerName: 'James Brown', items: ['item5'], totalAmount: 8500, date: '2025-01-01', status: 'Paid' },
   { invoiceNumber: 'INV457', userId: 'user3', customerName: 'Jackie Chan', items: ['item2'], totalAmount: 2000, date: '2025-03-20'},
   { invoiceNumber: 'INV458', userId: 'user4', customerName: 'Julia Roberts', items: ['item2'], totalAmount: 9200, date: '2024-11-20', status: 'Refunded'},
   { invoiceNumber: 'INV459', userId: 'user5', customerName: 'Justin Bieber', items: ['item1'], totalAmount: 700, date: '2025-02-10', status: 'Paid'},
   { invoiceNumber: 'INV460', userId: 'user6', customerName: 'Jasmine Ryce', items: ['item2'], totalAmount: 3100, date: '2025-03-20', status: 'Paid'},
   { invoiceNumber: 'INV461', userId: 'user7', customerName: 'Jessica Simpson', items: ['item1'], totalAmount: 1000, date: '2025-04-10', status: 'Paid'},
   { invoiceNumber: 'INV462', userId: 'user8', customerName: 'Jane Smith', items: ['item2'], totalAmount: 1300, date: '2024-10-10', status: 'Refunded'},
   { invoiceNumber: 'INV463', userId: 'user9', customerName: 'Jenna Fox', items: ['item4'], totalAmount: 4280, date: '2024-12-15', status: 'Paid'},
   { invoiceNumber: 'INV464', userId: 'user10', customerName: 'Jace Williams', items: ['item2'], totalAmount: 1800, date: '2025-04-01', status: 'Paid'},
   { invoiceNumber: 'INV465', userId: 'user11', customerName: 'Joanna James', items: ['item2'], totalAmount: 1400, date: '2025-02-13', status: 'Paid'},
   { invoiceNumber: 'INV466', userId: 'user12', customerName: 'Jack Sims', items: ['item2'], totalAmount: 1500, date: '2025-03-13', status: 'Paid'},
   { invoiceNumber: 'INV467', userId: 'user13', customerName: 'Julianna Wins', items: ['item1'], totalAmount: 750, date: '2025-04-11', status: 'Paid'},
   { invoiceNumber: 'INV468', userId: 'user14', customerName: 'Joseph Taylor', items: ['item5'], totalAmount: 4500, date: '2025-01-13', status: 'Paid'},
   { invoiceNumber: 'INV469', userId: 'user15', customerName: 'Jocelyn Williams', items: ['item10'], totalAmount: 6500, date: '2025-04-01', status: 'Paid'},
   { invoiceNumber: 'INV470', userId: 'user16', customerName: 'Joel Reid', items: ['item1'], totalAmount: 1000, date: '2025-02-20', status: 'Paid'},
   { invoiceNumber: 'INV471', userId: 'user17', customerName: 'Joy Grace', items: ['item1'], totalAmount: 1150, date: '2025-02-08', status: 'Paid'},
   { invoiceNumber: 'INV472', userId: 'user18', customerName: 'Jackson Michael', items: ['item1'], totalAmount: 1200, date: '2025-03-10', status: 'Paid'},
   { invoiceNumber: 'INV473', userId: 'user19', customerName: 'June Plum', items: ['item1'], totalAmount: 900, date: '2025-04-05', status: 'Refunded'},
   { invoiceNumber: 'INV474', userId: 'user20', customerName: 'Jordan River', items: ['item2'], totalAmount: 920, date: '2025-04-06', status: 'Paid'}
]));

 localStorage.setItem('registerData', JSON.stringify([
  { userId: 'user1', name: 'John Jones', email: 'john@existingcustomer.com' },
  { userId: 'user2', name: 'James Brown', email: 'james@existingcustomer.com' },
  { userId: 'user3', name: 'Jackie Chan', email: 'jackie@existingcustomer.com'},
  { userId: 'user4', name: 'Julia Roberts', email: 'julia@existingcustomer.com'},
  { userId: 'user5', name: 'Justin Bieber', email: 'justin@existingcustomer.com'},
  { userId: 'user6', name: 'Jasmine Ryce', email: 'jane@existingcustomer.com'},
  { userId: 'user7', name: 'Jessica Simpson', email: 'jane@existingcustomer.com'},
  { userId: 'user8', name: 'Jane Smith', email: 'jane@existingcustomer.com'},
  { userId: 'user9', name: 'Jenna Fox', email: 'jenna@existingcustomer.com'},
  { userId: 'user10', name: 'Jace Williams', email: 'jace@existingcustomer.com'},
  { userId: 'user11', name: 'Joanna James', email: 'joanna@existingcustomer.com'},
  { userId: 'user12', name: 'Jack Sims', email: 'jack@existingcustomer.com'},
  { userId: 'user13', name: 'Julianna Wins', email: 'julianna@existingcustomer.com'},
  { userId: 'user14', name: 'Joseph Taylor', email: 'joseph@existingcustomer.com'},
  { userId: 'user15', name: 'Jocelyn Williams', email: 'jocelyn@existingcustomer.com'},
  { userId: 'user16', name: 'Joel Reid', email: 'joel@existingcustomer.com'},
  { userId: 'user17', name: 'Joy Grace', email: 'joy@existingcustomer.com'},
  { userId: 'user18', name: 'Jackson Michael', email: 'jackson@existingcustomer.com'},
  { userId: 'user19', name: 'June Plum', email: 'june@existingcustomer.com'},
  { userId: 'user20', name: 'Jordan River', email: 'jordan@existingcustomer.com'}
 ]));

  function getUserInvoices() {
    try {
        const registerData = JSON.parse(localStorage.getItem('registerData')) || [];
        const allInvoices = JSON.parse(localStorage.getItem('Allinvoices')) || [];
        
        const userId = prompt("Enter user ID to view invoices:");
        
        if (!userId) {
            showMessage("No user ID provided", 'error');
            return;
        }
        
        const user = registerData.find(user => user.userId === userId);
        
        if (!user) {
            showMessage(`User with ID ${userId} not found`, 'error');
            return;
        }
        
        const userInvoices = allInvoices
            .filter(invoice => invoice.userId === userId)
            .sort((a, b) => new Date(b.date) - new Date(a.date));
        
        document.getElementById('userInfo').innerHTML = `
            <h3>Invoices for ${user.name}</h3>
            <p>Email: ${user.email}</p>
            <p>User ID: ${user.userId}</p>
            <p>Total Invoices: ${userInvoices.length}</p>
        `;
        

        const tableBody = document.getElementById('userInvoicesBody');
        tableBody.innerHTML = '';
        
        if (userInvoices.length === 0) {
            tableBody.innerHTML = `<tr><td colspan="5" class="text-center">No invoices found for this user</td></tr>`;
            return;
        }
        
        userInvoices.forEach(invoice => {
            const row = document.createElement('tr');
            row.innerHTML = `
                <td>${invoice.invoiceNumber || 'N/A'}</td>
                <td>${formatDate(invoice.date)}</td>
                <td>${invoice.items ? invoice.items.length : 0}</td>
                <td>$${invoice.totalAmount ? invoice.totalAmount.toFixed(2) : '0.00'}</td>
                <td>${invoice.status || 'Pending'}</td>
                <td>
                    <button class="btn btn-sm btn-view" data-invoice="${invoice.invoiceNumber}">View</button>
                    <button class="btn btn-sm btn-download" data-invoice="${invoice.invoiceNumber}">Download</button>
                </td>
            `;
            tableBody.appendChild(row);
        });
        
        // Generate a new invoice number (just for demo)
        const newInvoiceNumber = generateInvoiceNumber();
        console.log(`New invoice number for this user would be: ${newInvoiceNumber}`);
        
        // Add event listeners to the buttons
        addInvoiceButtonListeners();
        
    } catch (error) {
        console.error("Error retrieving invoices:", error);
        showMessage("An error occurred while retrieving invoices", 'error');
    }
}

// Helper functions
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function generateInvoiceNumber() {
    return 'INV-' + Date.now().toString().slice(-6);
}

function showMessage(message, type = 'success') {
    const messageDiv = document.getElementById('message');
    messageDiv.textContent = message;
    messageDiv.className = `alert alert-${type}`;
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

function addInvoiceButtonListeners() {
    // View button click handler
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', function() {
            const invoiceNum = this.getAttribute('data-invoice');
            viewInvoiceDetails(invoiceNum);
        });
    });
    
    // Download button click handler
    document.querySelectorAll('.btn-download').forEach(btn => {
        btn.addEventListener('click', function() {
            const invoiceNum = this.getAttribute('data-invoice');
            downloadInvoice(invoiceNum);
        });
    });
}

function viewInvoiceDetails(invoiceNumber) {
    // You would implement this to show invoice details in a modal or new page
    console.log(`Viewing invoice ${invoiceNumber}`);
    // Example: window.location.href = `invoice-details.html?number=${invoiceNumber}`;
}

function downloadInvoice(invoiceNumber) {
    // You would implement this to generate a PDF or download
    console.log(`Downloading invoice ${invoiceNumber}`);
    // Example: generatePDF(invoiceNumber);
}

function showInvoices() {
    try {
        // Get invoices from localStorage
        const allInvoices = JSON.parse(localStorage.getItem('Allinvoices')) || [];
        
        // Display all invoices initially
        displayInvoices(allInvoices, "All Invoices");
        
        // Search functionality
        const searchTerm = prompt("Enter search term (invoice number, customer name, amount, date, etc.):");
        
        if (searchTerm) {
            const filteredInvoices = allInvoices.filter(invoice => 
                Object.values(invoice).some(value => 
                    String(value).toLowerCase().includes(searchTerm.toLowerCase())
                )
            );
            
            if (filteredInvoices.length === 0) {
                displayMessage(`No invoices found matching "${searchTerm}"`, 'warning');
            } else {
                displayInvoices(filteredInvoices, `Search results for "${searchTerm}"`);
            }
        }
    } catch (error) {
        console.error("Error showing invoices:", error);
        displayMessage("An error occurred while loading invoices", 'error');
    }
}

function displayInvoices(invoices, title = "Invoices") {
    // Update the title
    document.getElementById('invoicesTitle').textContent = title;
    
    const tableBody = document.getElementById('allInvoicesBody');
    tableBody.innerHTML = '';
    
    if (invoices.length === 0) {
        tableBody.innerHTML = `
            <tr>
                <td colspan="7" class="text-center">No invoices found</td>
            </tr>
        `;
        return;
    }
    
    invoices.forEach(invoice => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${invoice.invoiceNumber || 'N/A'}</td>
            <td>${invoice.userId || 'N/A'}</td>
            <td>${invoice.customerName || 'N/A'}</td>
            <td>${formatDate(invoice.date)}</td>
            <td>${invoice.items ? invoice.items.length : 0}</td>
            <td>$${invoice.totalAmount ? invoice.totalAmount.toFixed(2) : '0.00'}</td>
            <td>
                <span class="badge ${getStatusBadgeClass(invoice.status)}">
                    ${invoice.status || 'Pending'}
                </span>
            </td>
            <td>
                <button class="btn btn-sm btn-view" data-invoice="${invoice.invoiceNumber}">
                    <i class="fas fa-eye"></i> View
                </button>
            </td>
        `;
        tableBody.appendChild(row);
    });
    
    // Add event listeners to view buttons
    addViewButtonListeners();
}

// Helper functions
function formatDate(dateString) {
    if (!dateString) return 'N/A';
    const options = { year: 'numeric', month: 'short', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
}

function getStatusBadgeClass(status) {
    switch (status?.toLowerCase()) {
        case 'paid': return 'bg-success';
        case 'pending': return 'bg-warning text-dark';
        case 'cancelled': return 'bg-danger';
        case 'refunded': return 'bg-info';
        default: return 'bg-secondary';
    }
}

function displayMessage(message, type = 'success') {
    const messageDiv = document.getElementById('message');
    messageDiv.innerHTML = message;
    messageDiv.className = `alert alert-${type}`;
    messageDiv.style.display = 'block';
    
    setTimeout(() => {
        messageDiv.style.display = 'none';
    }, 5000);
}

function addViewButtonListeners() {
    document.querySelectorAll('.btn-view').forEach(btn => {
        btn.addEventListener('click', function() {
            const invoiceNum = this.getAttribute('data-invoice');
            viewInvoiceDetails(invoiceNum);
        });
    });
}

function viewInvoiceDetails(invoiceNumber) {
    // Implement your invoice detail view logic here
    console.log(`Viewing details for invoice ${invoiceNumber}`);
    // Example: window.location.href = `invoice-details.html?number=${invoiceNumber}`;
}





