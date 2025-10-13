# Next.js eCommerce Frontend

This is a modern eCommerce frontend application built with Next.js and styled using TailwindCSS. The application features a responsive design and includes essential pages for a complete shopping experience.

## Features

-   Home Page: A welcoming landing page with a hero banner and featured products.
-   Product Listing: A page displaying all available products with options for filtering and sorting.
-   Product Details: Dynamic product detail pages that showcase individual product information.
-   Shopping Cart: A dedicated cart page that lists all items added to the cart, along with a subtotal and checkout button.
-   Checkout: A simple checkout page for entering shipping and payment information (frontend only).
-   Global Cart State Management: Utilizes React Context API for managing cart state across the application.

## Technologies Used

-   Next.js: A React framework for building server-rendered applications.
-   TailwindCSS: A utility-first CSS framework for styling.
-   React Context API: For global state management of the shopping cart.
-   Local Storage: For persisting cart data across sessions.

## Getting Started

To get started with the project, follow these steps:

1. Clone the repository:

    ```
    git clone <repository-url>
    ```

2. Navigate to the project directory:

    ```
    cd nextjs-ecommerce-frontend
    ```

3. Install the dependencies:

    ```
    npm install
    ```

4. Run the development server:

    ```
    npm run dev
    ```

5. Open your browser and go to `http://localhost:3000` to view the application.

## Folder Structure

```
nextjs-ecommerce-frontend
├── public
│   └── favicon.ico
├── src
│   ├── components
│   ├── context
│   ├── data
│   ├── pages
│   ├── styles
│   └── utils
├── tailwind.config.js
├── postcss.config.js
├── package.json
└── README.md
```

## Contributing

Contributions are welcome! If you have suggestions for improvements or features, feel free to open an issue or submit a pull request.

## License

This project is open-source and available under the [MIT License](LICENSE).
