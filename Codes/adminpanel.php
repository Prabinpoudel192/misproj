<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="index.css">

    <title>BuyMart Admin Panel</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
            font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
        }
        
        body {
            background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
            min-height: 100vh;
            padding: 20px;
        }
    </style>
</head>
<body>
    <div class="container">
        <div class="header">
            <h1>🚀 Buy Mart Management System</h1>
            <p class="subtitle">Admin Dashboard</p>
        </div>
        
        <!-- Navigation Buttons -->
        <div class="nav-buttons">
            <button class="nav-btn home active" onclick="adminHome()">
                🏠 Home
            </button>
            <button class="nav-btn credentials" onclick="udisplay()">
                👥 Login Credentials
            </button>
            <button class="nav-btn stocks" onclick="udisplay()">
                📦 Stocks Remaining
            </button>
            <button class="nav-btn sales" onclick="showSection('sales',event); udisplay();">
                💰 Sales
            </button>
        </div>
        
        <!-- Home Section -->
        <div id="home" class="section active">
            <h2 class="section-title">
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
                </svg>
                Dashboard Overview
            </h2>
            <div class="stats-grid">
                <div class="stat-card">
                    <div class="stat-number">3</div>
                    <div class="stat-label">Total Users</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">4</div>
                    <div class="stat-label">Products</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">$2,500</div>
                    <div class="stat-label">Total Sales</div>
                </div>
                <div class="stat-card">
                    <div class="stat-number">1</div>
                    <div class="stat-label">Low Stock Items</div>
                </div>
            </div>
        </div>
        
        <!-- Login Credentials Section -->
           <div id="credentials" class="section">
            <h2 class="section-title">
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                </svg>
                User Management
            </h2>
            <style>
    table, th, td {
        border: 2px solid black;
        border-collapse: collapse;
    }
    th, td {
        padding: 5px;
        text-align: center;
    }
    #bt1,#bt2{
        height:50px;
        width:50px;
        border-radius:50px;
    }
    #bt1 img,#bt2 img{
        height:50px;
        width:50px;
    }
</style>
            <table> 
                <thead>
                    <tr>
                        <th>First Name</th>
                        <th>Middle Name</th>
                        <th>Last Name</th>
                        <th>Address</th>
                        <th>Mobile</th>
                        <th>User Name</th>
                        <th>status</th>
                        <th>Management</th>
                    </tr>
                </thead>
                <tbody>
                    <?php
                    include "db.php";
                     $str;
                    $query="select *from login";
                    $res=$conn->query($query);
                    while($row=$res->fetch_assoc()){
                   $str .= "<tr>
                    <td>{$row['fname']}</td>
                    <td>{$row['mname']}</td>
                    <td>{$row['lname']}</td>
                    <td>{$row['address']}</td>
                    <td>{$row['mobile']}</td>
                    <td>{$row['uname']}</td>
                    <td>{$row['status']}</td>
                    <td>";
                    if ($row['status'] == 'inactive') {
                    $str .= "<button id='bt1' onclick=\"sapprove('{$row['uname']}')\"><img src='../images/approve.png'></button><br>";
                    }
                    $str .= "<button id='bt2' onclick=\"userdel('{$row['uname']}')\"><img src='../images/delete.jpg'></button></td></tr>";
                }
                    echo $str;
                    ?>
                </tbody>
            </table>
        </div>
        
        <!-- Stock Inventory Section -->
        <div id="stocks" class="section">
            <h2 class="section-title">
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M20 6h-2c0-2.21-1.79-4-4-4S10 3.79 10 6H8c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h12c1.1 0 2-.9 2-2V8c0-1.1-.9-2-2-2zm-10 0c0-1.1.9-2 2-2s2 .9 2 2h-4z"/>
                </svg>
                Stocks Remaining
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>Product ID</th>
                        <th>Product Name</th>
                        <th>Quantity</th>
                        <th>Status</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>P001</td>
                        <td>Laptop</td>
                        <td>45</td>
                        <td><span class="status active-status">In Stock</span></td>
                    </tr>
                    <tr>
                        <td>P002</td>
                        <td>Smartphone</td>
                        <td>12</td>
                        <td><span class="status low">Low Stock</span></td>
                    </tr>
                    <tr>
                        <td>P003</td>
                        <td>Headphones</td>
                        <td>0</td>
                        <td><span class="status out">Out of Stock</span></td>
                    </tr>
                    <tr>
                        <td>P004</td>
                        <td>Tablet</td>
                        <td>23</td>
                        <td><span class="status active-status">In Stock</span></td>
                    </tr>
                </tbody>
            </table>
        </div>
        
        <!-- Sales Section -->
        <div id="sales" class="section">
            <h2 class="section-title">
                <svg class="icon" viewBox="0 0 24 24">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"/>
                </svg>
                Sales
            </h2>
            <table>
                <thead>
                    <tr>
                        <th>Order ID</th>
                        <th>Product</th>
                        <th>Date</th>
                        <th>Amount</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>ORD-001</td>
                        <td>Laptop</td>
                        <td>2025-06-05</td>
                        <td>$1,200.00</td>
                    </tr>
                    <tr>
                        <td>ORD-002</td>
                        <td>Smartphone</td>
                        <td>2025-06-04</td>
                        <td>$800.00</td>
                    </tr>
                    <tr>
                        <td>ORD-003</td>
                        <td>Headphones</td>
                        <td>2025-06-04</td>
                        <td>$150.00</td>
                    </tr>
                    <tr>
                        <td>ORD-004</td>
                        <td>Tablet</td>
                        <td>2025-06-03</td>
                        <td>$350.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    </div>
    <script defer src="../jquery/jquery.js"></script>
    <script defer src="index.js"></script>
</body>
</html>
