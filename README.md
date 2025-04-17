https://abbeycreates.github.io/VitalHealth/
VitalHealthHub is a comprehensive e-commerce platform for a pharmacy business specializing in vitamins and health supplements. The website features a clean, modern design with intuitive navigation and responsive layouts for optimal viewing across all devices.

Key Pages
1. Home Page (NewHome.html)
Attractive banner section with promotional offers

Featured products carousel with "Deals of the Week"

Responsive design that works on mobile, tablet, and desktop

Interactive dropdown navigation menu

Clean, health-focused color scheme (#4CAF50 green palette)

2. Products Page (NewProduct.html)
Grid layout displaying 20 different health products

Detailed product information including:

High-quality product images

Descriptions of health benefits

Pricing information

"Add to Cart" functionality with:

Real-time cart updates

Notification system

Persistent cart storage using localStorage

Floating cart button with item counter

3. Cart Page (Cart.html)
Interactive shopping cart interface

Quantity adjustment controls

Item removal functionality

Discount application system

Order summary with subtotal and total calculations

Proceed to checkout option

4. Checkout Page (NewCheckout.html)
Order summary display

Customer information form

Payment processing simulation

Invoice generation

Order confirmation

5. Registration Page (Newregistration.html)
Comprehensive registration form

Form validation

Age verification (18+)

TRN validation

Password requirements enforcement

Data persistence using localStorage

6. Login Page (newlogin.html)
Secure login form

TRN-based authentication

Password reset functionality

Account lock after multiple failed attempts

Session management

7. About Us Page (NewAbout.html)
Company mission and vision

Core values

Contact information

Social media links

8. Dashboard Page (NewDashboard.html)
User statistics and analytics

Data visualization with charts

Invoice management

User demographic analysis

Interactive data tables

Technical Implementation
HTML5 semantic structure

CSS3 with:

Flexbox and Grid layouts

Custom animations and transitions

Responsive design with media queries

JavaScript for:

Shopping cart functionality

Form validation

Data visualization

Interactive elements

Chart.js for data visualization

Font Awesome icons

Google Fonts for typography

localStorage for data persistence

File Structure
Copy
Assets/
  - Logo2.jpeg (Website logo)
  - Various product images (Vitamin supplements)
Codes/
  - NewHome.html (Homepage)
  - NewProduct.html (Products listing)
  - Cart.html (Shopping cart)
  - NewCheckout.html (Checkout process)
  - Newregistration.html (User registration)
  - newlogin.html (User login)
  - NewAbout.html (Company information)
  - NewDashboard.html (Admin dashboard)
  - NewInvoice.html (Invoice generation)
Key Features
Responsive Design: Works seamlessly on all device sizes

Interactive Shopping Cart: Real-time updates and notifications

User Authentication: Secure registration and login system

Data Visualization: Charts and graphs for business analytics

Form Validation: Client-side validation for all user inputs

localStorage Integration: Persistent data across sessions

Modern UI: Clean, professional interface with smooth animations

Browser Support
The website is designed to work on all modern browsers including:

Chrome

Firefox

Safari

Edge

Future Enhancements
Payment gateway integration

Product search and filtering

User account management

Product reviews and ratings

Blog section for health tips

Order tracking system

Credits
Developed by Abbey-Gayle Haughton, Niyazi Daley, Steve-Ann Wilson, and Venice Leachman.

1. Home Page (NewHome.html)
Attractive banner section with promotional offers

Featured products carousel with "Deals of the Week"

Responsive design that works on mobile, tablet, and desktop

Interactive dropdown navigation menu

Clean, health-focused color scheme (#4CAF50 green palette)

2. Products Page (NewProduct.html)
Grid layout displaying 20 different health products

Detailed product information including:

High-quality product images

Descriptions of health benefits

Pricing information

"Add to Cart" functionality with:

Real-time cart updates

Notification system

Persistent cart storage using localStorage

Floating cart button with item counter

Responsive product grid that adapts to screen size

Technical Implementation
HTML5 semantic structure

CSS3 with:

Flexbox and Grid layouts

Custom animations and transitions

Responsive design with media queries

JavaScript for:

Shopping cart functionality

Interactive elements

Form validation

Font Awesome icons for visual enhancement

Google Fonts for typography

File Structure
Copy
Assets/
  - Logo2.jpeg (Website logo)
  - Various product images (Vitamin supplements)
Codes/
  - NewHome.html (Homepage)
  - NewProduct.html (Products listing page)
  - (Other supporting pages referenced in navigation)
How to Use
Clone or download the repository

Open NewHome.html in a web browser to view the homepage

Navigate to NewProduct.html to view the complete product catalog

Interact with the products by adding them to your cart

Use the floating cart button to view your selections

Browser Support
The website is designed to work on all modern browsers including:

Chrome

Firefox

Safari

Edge

Future Enhancements
User authentication system

Product search and filtering

Checkout and payment integration

Product reviews and ratings

Blog section for health tips

Contributors

Abbey-Gayle Haughton

This is the Registration Page for VitalHealthHub, a web-based e-commerce platform specializing in healthcare products. The page allows new users to securely register by submitting personal details. It includes real-time validations and data persistence using localStorage.



Features
	•	Modern, user-friendly, and responsive form layout
	•	Validates fields like name, TRN, password, and date of birth
	•	TRN uniqueness check to prevent duplicate registration
	•	Age validation (must be 18 or older)
	•	TRN and password pattern enforcement
	•	Error messages and live feedback
	•	Stores user data in localStorage for later access
	•	Smooth visual styling using custom CSS and Font Awesome icons



Installation
	1.	Clone the repository or download the registration files.
	2.	Ensure the project structure includes:├── Codes/
│   ├── newregistration.html (this file)
│   ├── newlogin.html (redirect target)
├── Assets/
│   ├── Logo2.jpeg
└── Related CSS and JS files if separated

3.	Open newregistration.html in your browser to test locally.



Usage
	1.	Fill in your:
	•	First and Last Name
	•	Date of Birth (must be at least 18 years old)
	•	Gender
	•	Phone Number
	•	Email
	•	TRN (format: 000-000-000)
	•	Password (minimum 8 characters)
	2.	Click Register to:
	•	Validate inputs
	•	Save data in localStorage under "RegistrationData"
	•	Redirect to login page
	3.	Click Cancel to:
	•	Clear the form
	•	Reset all validation messages



Technologies Used
	•	HTML5
	•	CSS3 (custom styles and layout)
	•	JavaScript (form validation and localStorage)
	•	Font Awesome Icons CDN



Configuration
	•	All data is stored in localStorage:
	•	RegistrationData — stores an array of user records
	•	No backend or external database required
	•	Redirection requires newlogin.html to be present in the Codes/ directory



Troubleshooting

Form not submitting?
	•	Ensure all fields are filled correctly
	•	Validate that the TRN is unique and properly formatted
	•	Make sure password is at least 8 characters

Not redirecting after registration?
	•	Ensure ../Codes/newlogin.html exists
	•	Check for typos in the file path

TRN validation failing unexpectedly?
	•	TRN must be unique and in the format 000-000-000



Contributors

Venice Leachman 

This is the Login Page of the VitalHealth Hub, a web-based e-commerce platform focused on healthcare products. The page allows users to log into their accounts securely. It provides a simple, intuitive form for user login with validation, error messages, and navigation to the password reset page if needed.



Features
	•	Responsive login form
	•	User validation with TRN and password fields
	•	Error messages for invalid input
	•	Password reset functionality
	•	Styled with custom CSS and Font Awesome icons
	•	Smooth navigation and animations



Installation
	1.	Clone or download the project files.
	2.	Ensure the directory structure includes:
	•	Codes/Login.html
	•	Assets/Logo2.jpeg
	•	Relevant CSS/JS files and referenced HTML pages (e.g., Home, Checkout, Product).
	3.	Open Login.html in a browser to test the functionality locally.



Usage
	1.	Navigate to the Login Page.
	2.	Fill in the required fields:
	•	Tax Registration Number (TRN)
	•	Password
	3.	Click Login to:
	•	Validate the entered credentials against stored registration data in localStorage
	•	If successful, redirect to the product catalog
	•	If unsuccessful, display error messages and limit login attempts
	4.	Click Cancel to clear the form and return to the cart or previous page.
	5.	Click Reset Password? to initiate the password reset process if needed.



Technologies Used
	•	HTML5 – Page structure
	•	CSS3 – Styling and responsiveness
	•	JavaScript (ES6+) – User validation, form handling, and localStorage management
	•	Font Awesome Icons CDN – Icons for the interface



Configuration
	1.	Ensure localStorage contains user registration data under the key "RegistrationData".
	2.	TRN and Password are validated against this data.
	3.	If incorrect credentials are entered too many times, the account is locked.



Troubleshooting

Login Not Working?
	•	Ensure that the correct TRN and password are entered. Double-check the stored data in localStorage.

Error Messages Not Displaying?
	•	Check if the validation logic is functioning properly by inspecting the trnError and passwordError elements.

Account Locked After Multiple Failed Attempts?
	•	Ensure the maxAttempts value is set correctly and that login attempts are being tracked properly.



Contributors
	•	Venice Leachman

Introduction

This section of the VitalHealth Hub project includes the Checkout and Invoice pages — key components of an e-commerce platform dedicated to health products. The Checkout Page allows users to finalize purchases, while the Invoice Page dynamically displays and summarizes purchase details pulled from localStorage.

Table of Contents

Introduction
Features
Installation
Usage
Technologies Used
Configuration
Examples
Troubleshooting
Contributors
License
Features

Checkout Page
Form to collect name, address, amount paid, and TRN
Displays real-time cart summary from localStorage
Automatically generates an invoice and stores it
Redirects to invoice display page
Invoice Page
Reads and displays latest invoice from localStorage
Calculates subtotal, tax, and final total
Displays each item’s quantity, price, discount, and total after discount
Styled invoice preview with branding
Installation

Clone or download the project directory.
Ensure the following structure:
/Assets/Logo2.jpeg
/Codes/Checkout.html
/Codes/Invoice.html
/Codes/Home.html
/Codes/NewProduct.html
...
Open Checkout.html or Invoice.html in a browser.
Usage

Add products to cart (handled via localStorage).
Navigate to Checkout.html.
Fill out and submit the form to:
Save invoice data to localStorage
Redirect to Invoice.html
On Invoice.html, the most recent invoice is displayed, showing:
Customer and company info
Line-by-line item breakdown
Discount per item
Subtotal, tax (15%), and total
Technologies Used

HTML5
CSS3
JavaScript (ES6+)
Font Awesome 6
Configuration

Cart Items Storage:
localStorage.setItem("cart", JSON.stringify([...]))
Invoice Generation Output:
AllInvoices: Stores history of invoices
latestInvoice: Used by Invoice.html for display
Expected Cart Item Structure:
{
  "name": "Product Name",
  "price": 10.0,
  "quantity": 2,
  "discount": 0.1
}
Examples

Invoice Preview
Panadol x2
Price (each): $5.00
Discount: 10%
Total (after discount): $9.00

Subtotal: $9.00
Taxes (15%): $1.35
Total: $10.35
Invoice Data Structure
{
  "companyName": "VitalHealth Hub",
  "date": "2025-04-16",
  "invoiceNumber": "INV1681652198375",
  "trn": "123456789",
  "shippingInfo": {
    "name": "Jane Doe",
    "address": "123 Health Lane",
    "amountPaid": "15.00"
  },
  "items": [...],
  "subtotal": 13.04,
  "taxes": 0.15,
  "total": 15.00
}
Troubleshooting

Issue	Solution
Cart summary doesn't show	Ensure localStorage has a valid "cart" array
Invoice doesn't appear	Check if "latestInvoice" exists in localStorage
Invoice totals incorrect	Verify product structure includes price, quantity, and discount
Redirect from Checkout fails	Ensure invoice.html exists in /Codes/ folder
Contributors

Niyazi Daley Developer 
License

Introduction

This is the Checkout Page for the VitalHealth Hub, a web-based e-commerce platform focused on healthcare products. The page allows users to confirm their cart, input shipping details, and generate invoices securely. It's styled for clarity, responsiveness, and ease of use while maintaining visual consistency with the rest of the site.

Table of Contents

Introduction
Features
Installation
Usage
Technologies Used
Configuration
Example
Troubleshooting
Contributors
License
Features

Responsive and user-friendly checkout form
Live cart summary fetched from localStorage
Invoice generation with unique ID and tax calculation
Invoice persistence in localStorage
Styled with custom CSS and Font Awesome icons
Seamless navigation and UX animations
Installation

Clone the repository or download the project files.
Make sure the directory structure includes:
Codes/Checkout.html
Assets/Logo2.jpeg
Related CSS/JS files and referenced HTML pages (e.g., Home, Cart, Invoice).
Open Checkout.html in a browser to test locally.
Usage

Navigate to the Checkout Page after adding items to your cart.
Fill in your:
Name
Address
Amount Paid
TRN (Taxpayer Registration Number)
Click Confirm to:
Generate an invoice
Store it in localStorage
Redirect to the Invoice display page
Click Cancel to return to the cart.
Technologies Used

HTML5
CSS3
JavaScript (ES6+)
Font Awesome Icons CDN
Configuration

Ensure localStorage contains cart data under the key "cart".
Invoice data is stored using:
"AllInvoices" — archive of all invoices
"latestInvoice" — most recent invoice
No external database or backend service is required for this standalone component.
Example

Cart Summary Display:

<p>Panadol - 2 x $5.00 = $10.00</p>
<p><strong>Total: $10.00</strong></p>
Invoice Object Structure:

{
  "companyName": "VitalHealth Hub",
  "date": "2025-04-16",
  "shippingInfo": {
    "name": "John Doe",
    "address": "123 Health St",
    "amountPaid": "50"
  },
  "invoiceNumber": "INV1681652198375",
  "trn": "123456789",
  "items": [...],
  "taxes": 0.15,
  "subtotal": 43.48,
  "total": 50.00
}
Troubleshooting

Cart Summary Not Displaying?
Ensure localStorage has a "cart" key with valid JSON data.
Invoice not generated?
Check if form fields are all filled and the submit event is firing.
Redirection doesn't work?
Confirm invoice.html exists in the referenced path.
Contributors

Niyazi Daley 
License

This is the Cart Page for VitalHealthHub, a web-based e-commerce platform specializing in healthcare products. This page allows users to view and adjust quantities, remove items and potentially apply discounts or promotional codes before proceeding to checkout. 

Features
	It's where customers can view and manage the items they've selected to purchase, adjust quantities, remove items, and potentially apply discounts or promotional codes before proceeding to checkout. 


Installation
1.	Creates the directory structure:
	── js/
     └── cart.js       
── cart.html          
── products.html      
── checkout.html      

2.	Creates the JavaScript file products.js in the js folder

3.	Integrates cart.html based on required HTML elements

4.	Structures cart data in array

4.	Ensures linked HTML pages exists



Usage
	1.	Calculations:
	•	Calculates the total price for single line items
	•	Calculate the sum of all items in the cart

	2.	Discount:
	•	Apply a discount percentage to the cart total

	3.	Cart Actions
	•	Completely clears the shopping cart by clicking the remove all button
	•	Exit cart by redirecting to product page
•	Proceeds to checkout page


Technologies Used
	•	HTML
	•	CSS 
	•	JavaScript 
	

Configuration
	•	HTML Structure Requirements
	•	Function specific configuration (calculates total & subtotal using quantity & price)
	•	Proceeds to checkout but applies applicable discount
	•	Clears session by clicking remove all button 

Troubleshooting

Functions don’t work?
	•	Check browser console for errors
	•	Verify the js file is link in the HTML 

















This is the Dashboard Page for VitalHealthHub, a web-based e-commerce platform specializing in healthcare products. Essentially, a dashboard aggregates data from various sources and presents it in a concise, easily digestible format, making it a valuable tool for various business functions and personal use. 


Features
	The dashboard page is primarily used to visualize and monitor important data in a concise and easily understandable way. 


Installation
1.	Creates the directory:
── dashboard/
   	── dashboard.html          
── css/
└── styles.css     
── js/
   	   └── dashboard.js   


2.	Creates the HTML page with a specific structure

3.	Saves the products.js code in the JavaScript folder.

4. Incudes HTML links

5. Initializes data from the databased stored in Local Storage

6. Analyses user data based on age groups and gender

7. Ensures HTML page launches properly with the required data by ensuring the HTML ID’s match those referenced in JavaScript







Usage
	1.	User Analytics:
	•	Displays total count of all registered user
	•	Shows the average age of all the registered users
	•	Identifies the most common gender in the user base
	•	Gender distribution pie chart that visually breaks down male vs female users
	•	Age group bar chart shows user distribution by age groups

	2.	Invoice Management
	•	Finds a specific users invoices using the user ID
	•	Presents invoices in a table with requested details
	•	Search through invoices using invoice ID	

	3.	Functionality
	•	Calculations done in real time
	•	Uses data stored in the session


Technologies Used
	•	HTML
	•	CSS 
	•	JavaScript 
	

Configuration
	•	Structures user objects, invoice data & registration data in an array 
	•	Predefined format for graph & pie charts
	•	Processes age group functions 
	•	The JavaScript references HTML code based on existing elements









Troubleshooting

Chart not displaying?
	•	Ensure chart.js is properly loaded
	•	References HTML for existing elements

Data not loading?
	•	Check localStorage data exists
	•	Verify data structure matches expected format

Invoice lookup failing?
	•	Confirms user is registered
	•	Verify data parsing





