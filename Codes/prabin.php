<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">
    <style>
    
      * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
            background-color: #f5f5f5;
            line-height: 1.6;
        }



    </style>
    <title>SuperMain</title>
    
</head>
<body>
    <!-- Navigation Bar -->
    <nav class="navbar">
        <div class="nav-container">
            <div class="logo">
           
</div>
            
            <div class="nav-center">
                <div class="search-container">
                    <input type="text" class="search-bar" placeholder="Search products..." id="searchInput">
                </div>
                
                <select class="filter-dropdown" id="categoryFilter">
                    <option value="">All Categories</option>
                    <option value="electronics">Electronics</option>
                    <option value="clothing">Clothing</option>
                    <option value="food">Food & Beverages</option>
                    <option value="home">Home & Garden</option>
                    <option value="books">Books and Stationary</option>
                    <option value="luxury">Luxury</option>
                    <option value="pet">Pets</option>
                    <option value="kids">Kids</option>
                </select>
            </div>
            
            <div class="nav-right">
                <div class="cart-container" onclick="toggleCart()">
                    <div class="cart-icon"></div>
                    <div class="cart-count" id="cartCount">0</div>
                </div>
                <!-- This portion is for upload -->
                <div class="upload-container" onclick="upload()">
                    <div class="upload-icon"></div>
                    
                </div>
                <!-- This portion is for logout -->
                <div class="logout-container" onclick="mainpage()">
                    <div class="logout-icon"></div>
                    
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <div class="container">
        <div class="page-header">
            <h1 class="page-title">Product Catalog</h1>
            <p class="page-subtitle">Discover our wide range of quality products</p>
        </div>

        <!-- Products Grid -->
        <div class="products-grid" id="productsGrid">
            <!-- Products will be dynamically loaded here -->
        </div>
    </div>
    <script defer src="../jquery/jquery.js"></script>
    <script defer src="index.js"></script>
    
</body>
</html>