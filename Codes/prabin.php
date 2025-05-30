<?php
session_start();
$uname=$_SESSION['uname'];
?>
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
                    <div class="filter-container" onclick="dispfilter()">
                    <div class="filter-icon"></div>
                    
                </div>
                <div class="cart-container" onclick="toggleCart(); cHideUnhide();">
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
         <div class="filter-div">     
   <form action="" method="post" >
    <input type="text" id="pname" placeholder="Enter Product Name"><br>
    <select  id="cfilter">
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
    <label>Price:</label>
    <select id="pra25" name="price" onchange="second()"required>
    <option value="">-- price --</option>
    <option value="high">High</option>
    <option value="low">Low</option>
  </select>
  
  <label>To:</label>
<select id="pra26" name="price1" onchange="second1()" required>
    <option value="">-- price --</option>
    <option value="high1">High</option>
    <option value="low1">Low</option>
  </select>


    <div class="rangeslider">
        <input type="range" min="1" max="150000" value="1" onchange="change()" id="sliderRange" name="range">
        <p>Price Range: <span id="demo">1</span></p>
    </div>
  <input type="button" value="filter" onclick="sortFilter()" style="margin-Top:100px;">

   </form>  
    </div>
    <div class="cart-div">

    </div>
        <div class="page-header">
            <h1 class="page-title">Product Catalog</h1>
            <p class="page-subtitle">Discover our wide range of quality products</p>
        </div>

        <!-- Products Grid -->
        <div class="products-grid" id="productsGrid">
            <!-- Products will be dynamically loaded here -->
        </div>
    </div>
    <script>
    const uname = <?php echo json_encode($uname); ?>;
</script>
    <script defer src="../jquery/jquery.js"></script>
    <script defer src="index.js"></script>
    
</body>
</html>
