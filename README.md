Technical Foundation of E-commerce Website
Furniture Website(Comforty)
	My Website “Comforty” will sell furniture like Chairs, stool, sofa
Here is the Roadmap
Front-End Requirements
User Friendly Interface
The website have user friendly interface where the customer will find different categories products ,chairs sofa, stools
Responsive Design
The Website looks Perfect in Mobile as well as Desktop
Main Pages
1-Home Page
A page showcasing different categories products
Product Items Page
This page displays different items
Product Details Page
This page gives In-depth Information about the items
Cart Page
This page includes the items customer want to purchase
Checkout Page
A simple secure process to review the order before finalized order
Order Confirmation Page
Display Summary of Order Details Page

Backend Requirements
1-Product Management
Store and manage products easy updates to product catalog via sanity CMS
Customer and Order Management
Manage Order and Shipping Details. Track Customer data (names, address, order history).


 Required API’s
    Display Product Information (GET API)
The GET Api display all the products in the catalog along with their details (name, price, description, stock, and image) retrieves a list of products and their details.
    2. View Specific Product Details (GET API)
             When the customer clicks on a product to view more details, then GET API to fetch detailed information about a specific product.
  3- Add Product to Cart (POST API)
              When a customer decides to purchase a product, and add product in their cart. This is done by Context API.
4. View Cart (GET API)
After add to cart GET Api shows the customer their cart contents, including product names, quantities, individual prices, and total price.
5. Proceed to Checkout (POST API)
Once the customer is ready to finalize the purchase, they will proceed to checkout. This involves providing a shipping address and selecting a payment method. This is done by POST Api.
6. Payment Processing (POST API)
After the checkout, the customer will make a payment. This is done by payment gateway (e.g., Stripe, PayPal).
7-Order Confirmation (PUT API)
After payment, update the order status to "confirmed," and notify the customer about the successful order placement it is done by PUT Api.
8. Shipping (PUT API)
Once the order is shipped, then order status updated to "shipped" and provide a tracking number.
9. Customer View Order Status (GET API)
The customer can check the status of their order at any time.
Complete API Workflow:
1.	GET /products - Display a list of products.
2.	GET /products/{product_id} - Show detailed product information.
3.	POST /cart /Context/- Add products to cart.
4.	GET /cart/{cart_id} - View the cart.
5.	POST /checkout - Start the checkout process.
6.	POST /orders/{order_id}/payment - Process payment.
7.	PUT /orders/{order_id}/confirm - Confirm the order.
8.	PUT /orders/{order_id}/shipment - Update shipment status.
9.	GET /orders/{order_id} - Check order status.
Work Flow Explanation
 Visit HOME Page
•	The customer lands on your homepage where they can start browsing products.
 Browse Products
•	The customer can browse through a list of products. You might have filters for categories, price range, etc., to make the browsing experience easier.
 View Product Detail Page
•	When the customer clicks on a specific product, they are directed to the product detail page. Here, they can see more information like the product description, price, reviews, and stock availability.
 Add to Cart
•	The customer decides to add the product to their shopping cart. The product, quantity, and price are added to the cart.
 Proceed to Checkout
•	The customer clicks on the "Proceed to Checkout" button in the cart to begin the order completion process.
 Complete Profile & Payment Details
•	At checkout, the customer provides their shipping address and payment details (credit card, PayPal, etc.). They confirm their information and proceed with the payment.
Order Confirmation
•	After successful payment, the order is confirmed. The customer receives a confirmation message and email with order details, including shipping information.


Tools and Libraries
Tailwind CSS: Styling
Clerk: Authentication,
Ship Engine API: Shipping and tracking,
Sanity CMS: Content Management,
Stripe: Payment gateway,
React Context API: Cart functionality.





