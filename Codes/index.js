
let cart = [];
let filteredProducts = [];
let str;
let tc = 1;
toggleCart();

function login() {
    setTimeout(() => {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('pra4').style.display = 'block';
        document.getElementById('pra5').style.display = 'none';
        document.getElementById('pra10').style.display = 'none';
    }, 2000);
}
function signup() {
    setTimeout(() => {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('pra4').style.display = 'none';
        document.getElementById('pra5').style.display = 'block';
        document.getElementById('pra10').style.display = 'none';
    }, 2000);
}
function admin() {
    setTimeout(() => {
        document.getElementById('welcome').style.display = 'none';
        document.getElementById('pra4').style.display = 'none';
        document.getElementById('pra5').style.display = 'none';
        document.getElementById('pra10').style.display = 'block';
    }, 2000);
}
function home() {
    window.location.href = "prabin.php";
}
function esewa(pid) {
    window.location.href = "esewa.php?pid=" + pid;
}
function esewa1(pid) {
    window.location.href = "esewa1.php?pid=" + pid;
}

function display() {
    document.getElementById("pra18").style.display = "block";
    document.getElementById("pra20").style.display = "none";

}

function second() {

    var current = document.getElementById("pra25").value;
    if (current === "high") {
        document.getElementById("pra26").value = "low1";

    } else {
        document.getElementById("pra26").value = "high1";

    }
}
function filter() {


    document.getElementById("pra24").style.display = "block";
    document.getElementById("pra29").style.display = "none";

}
function filter1() {

    document.getElementById("pra29").style.display = "flex";
    document.getElementById("pra24").style.display = "none";


}
function addToCart1() {

    document.getElementById("pra35").style.display = "block";



}
function addToCart(productId) {
    $.ajax({
        url: 'cart.php',
        method: 'POST',
        data: { pid: productId },
        dataType: 'json',
        success: function (res) {

            alert(`${res[0].name} added to the cart`);
            toggleCart();
            updateCartCount();

        },
        error: function () {
            alert('Error fetching product data.');
        }
    });
}
function second1() {

    var current = document.getElementById("pra26").value;
    if (current === "high1") {
        document.getElementById("pra25").value = "low";

    } else {
        document.getElementById("pra25").value = "high";
    }
}

function fa() {
    $(document).ready(function () {

        let pn = $("#pra19").val();
        $.ajax({
            url: 'search.php',
            method: 'POST',
            data: { pname: pn },
            dataType: 'json',
            success: function (data) {
                $('#pra18').css("z-index", 6);
                $('#pra31').css("display", "block");
                $('#pra23').css("display", "none");
                $('#pra28').css("display", "none");
                $('#pra32').css("display", "block");
                $('#pra32').html("");
                for (let i = 0; i < data.length; i++) {
                    $('#pra32').append('<a href="#" onclick="pra(\'' + data[i] + '\')">' + data[i] + '</a><br>');

                }
                $("#pra32").css("font-size", "35px");
                $('#pra32').css("color", "green");
                if (data.length === 0) {
                    $("#pra29").css("display", "flex");
                    $('#pra32').css("display", "none");
                    $('#pra23').css("display", "flex");
                    $('#pra28').css("display", "flex");
                }
            }
        })
    })
}
//search anchor logic starts here

//search andchor logic ends here

function upload() {
    window.location.href = "upload.php";
}


function hideUnhide() {
    document.getElementById("pra24").style.display = "none"
    document.getElementById("pra32").style.display = "none"
    document.getElementById("pra29").style.display = "flex"
    document.getElementById("pra23").style.display = "flex"
    document.getElementById("pra28").style.display = "flex"


}
function pra(data) {
    document.getElementById("pra32").style.display = "none";
    document.getElementById("pra20").style.display = "flex";
    document.getElementById("pra29").style.display = "flex";
    document.getElementById("pra23").style.display = "flex";
    document.getElementById("pra28").style.display = "flex";
    document.getElementById("pra19").value = "";

    let pn = data;
    $(document).ready(function () {
        $.ajax({
            url: 'display.php',
            method: 'POST',
            data: { pname: pn },
            dataType: 'text',
            success: function (data) {
                console.log(data);
                $('#pra18').css("z-index", 6);
                $('#pra31').css("display", "block");
                $('#pra23').css("display", "flex");
                $('#pra28').css("display", "flex");
                $('#pra29').css("display", "flex");
                $('#pra32').css("display", "none");
                $('#pra34').html("");
                $('#pra34').html(data);
                $("#pra32").css("font-size", "35px");
                $('#pra32').css("color", "green");
            }
        })
    })

}
const products = [];
datafetch();
function datafetch() {
    $(document).ready(function () {
        $.ajax({
            url: 'display1.php',
            method: 'POST',
            dataType: 'json',
            success: function (res) {
                res.forEach(element => {
                    products.push(element);
                });

                filteredProducts = [...products];
                init();


            }
        });
    });

}
// Initialize the page
function init() {
    displayProducts(filteredProducts);
    updateCartCount();
     starrating();
     recommendation();
}

// Display products in grid
function displayProducts(productsToShow) {
    const grid = document.getElementById('productsGrid');
    grid.innerHTML = '';

    productsToShow.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
}
//Star rating function starts here

function rating(productId,number,username){
        $.ajax({
        url: 'star.php',
        method: 'POST',
        data: {
            pid: productId,
            qty:number,
            uname:username
        },
        dataType: 'json',
        success: function (res) {
                    let num=res.cstar;
                    let pid=res.pid;
                    if(num===null){
                      exit(0);
                    }
               if(num==1){
        document.getElementById(`star1${pid}`).style.color="gold";
        document.getElementById(`star2${pid}`).style.color="lightgray";
        document.getElementById(`star3${pid}`).style.color="lightgray";
        document.getElementById(`star4${pid}`).style.color="lightgray";
        document.getElementById(`star5${pid}`).style.color="lightgray";
    }if(num==2){
        document.getElementById(`star1${pid}`).style.color="gold";
        document.getElementById(`star2${pid}`).style.color="gold";
        document.getElementById(`star3${pid}`).style.color="lightgray";
        document.getElementById(`star4${pid}`).style.color="lightgray";
        document.getElementById(`star5${pid}`).style.color="lightgray";
    }if(num==3){
       document.getElementById(`star1${pid}`).style.color="gold";
        document.getElementById(`star2${pid}`).style.color="gold";
        document.getElementById(`star3${pid}`).style.color="gold";
        document.getElementById(`star4${pid}`).style.color="lightgray";
        document.getElementById(`star5${pid}`).style.color="lightgray";
    }if(num==4){
        document.getElementById(`star1${pid}`).style.color="gold";
        document.getElementById(`star2${pid}`).style.color="gold";
        document.getElementById(`star3${pid}`).style.color="gold";
        document.getElementById(`star4${pid}`).style.color="gold";
        document.getElementById(`star5${pid}`).style.color="lightgray";
    }if(num==5){
        document.getElementById(`star1${pid}`).style.color="gold";
        document.getElementById(`star2${pid}`).style.color="gold";
        document.getElementById(`star3${pid}`).style.color="gold";
        document.getElementById(`star4${pid}`).style.color="gold";
        document.getElementById(`star5${pid}`).style.color="gold";
     }
        },
        error: function () {
            alert('Error fetching product data.');
        }
    });
}

//star rating function ends here
//star rating initialization function starts here
function starrating(){
   
    $.ajax({
        url: 'star1.php',
        method: 'GET',      
        dataType: 'json',
        success: function (res) {
            res.forEach((item,i) => {
                let k=parseInt(item.cstar);
               console.log(item.pid);
             if(k==1){
        document.getElementById(`star1${item.pid}`).style.color="gold";
        document.getElementById(`star2${item.pid}`).style.color="lightgray";
        document.getElementById(`star3${item.pid}`).style.color="lightgray";
        document.getElementById(`star4${item.pid}`).style.color="lightgray";
        document.getElementById(`star5${item.pid}`).style.color="lightgray";
    }if(k==2){
        document.getElementById(`star1${item.pid}`).style.color="gold";
        document.getElementById(`star2${item.pid}`).style.color="gold";
        document.getElementById(`star3${item.pid}`).style.color="lightgray";
        document.getElementById(`star4${item.pid}`).style.color="lightgray";
        document.getElementById(`star5${item.pid}`).style.color="lightgray";
    }if(k==3){
        document.getElementById(`star1${item.pid}`).style.color="gold";
        document.getElementById(`star2${item.pid}`).style.color="gold";
        document.getElementById(`star3${item.pid}`).style.color="gold";
        document.getElementById(`star4${item.pid}`).style.color="lightgray";
        document.getElementById(`star5${item.pid}`).style.color="lightgray";
    }if(k==4){
        document.getElementById(`star1${item.pid}`).style.color="gold";
        document.getElementById(`star2${item.pid}`).style.color="gold";
        document.getElementById(`star3${item.pid}`).style.color="gold";
        document.getElementById(`star4${item.pid}`).style.color="gold";
        document.getElementById(`star5${item.pid}`).style.color="lightgray";
    }if(k==5){
        document.getElementById(`star1${item.pid}`).style.color="gold";
        document.getElementById(`star2${item.pid}`).style.color="gold";
        document.getElementById(`star3${item.pid}`).style.color="gold";
        document.getElementById(`star4${item.pid}`).style.color="gold";
        document.getElementById(`star5${item.pid}`).style.color="gold";
     }


        });
                
            
        },
        error: function () {
            alert('Error fetching product data.');
        }
    });
}


//star rating initialization function ends here
// Create product card element
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card';

    const stockStatus = getStockStatus(product.stock);
    card.innerHTML = `
   
                <div class="product-image"><img src="${product.image}" alt="${product.name}" style="width:85%; height:100%;"></div>
                <div class="product-info">
                    <h3 class="product-name">${product.name}</h3>
                    <p class="product-description">${product.description}</p>
                         <div class="product-footer">
                        <span class="product-price" style="margin-left:80px;">Rs.${product.price}</span>
                        <div style="margin-left:30px; paddin:30px;">
                        <button class="add-to-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                            ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
                        <button class="add-to-cart" onclick="esewa(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                            ${product.stock === 0 ? 'Out of Stock' : 'Esewa Payment'}
                        </button></div>
                    </div>
                    <div class="stock-status ${stockStatus.class}">${stockStatus.text}</div>
                    <div class="stars" >
                    <h6>Please Rate this product<br></h6>
                        <span class="star" id="star1${product.id}"   onclick="rating('${product.id}',1,'${uname}')">&#9733;</span>
                        <span class="star" id="star2${product.id}"   onclick="rating('${product.id}',2,'${uname}')">&#9733;</span>
                        <span class="star" id="star3${product.id}"   onclick="rating('${product.id}',3,'${uname}')">&#9733;</span>
                        <span class="star" id="star4${product.id}"   onclick="rating('${product.id}',4,'${uname}')">&#9733;</span>
                        <span class="star" id="star5${product.id}"   onclick="rating('${product.id}',5,'${uname}')">&#9733;</span>
                             </div>
                </div>
            `;

    return card;
}

// Get stock status
function getStockStatus(stock) {
    if (stock === 0) {
        return { class: 'out-of-stock', text: 'Out of Stock' };
    } else if (stock < 10) {
        return { class: 'low-stock', text: `Low Stock (${stock} left)` };
    } else {
        return { class: 'in-stock', text: `In Stock (${stock} available)` };
    }
}
// Update cart count
function updateCartCount() {
    document.getElementById('cartCount').textContent = cart.length;
}
//Recommendation div logic starts here
function recommendation(){
       $.ajax({
        url: 'recommendation.php',
        method: 'POST',
        dataType: 'json',
        success: function (res) {
          const recommendationDiv = document.getElementsByClassName("recommendation-div")[0];
            
            if (res.length > 0) {
                recommendationDiv.innerHTML = '';
                const recommendationContainer = document.createElement('div');
                recommendationContainer.className = 'recommendation-container';
               recommendationContainer.innerHTML = `
                    <div style="
                        display: flex; 
                        justify-content: space-between; 
                        align-items: center; 
                        padding: 10px 20px; 
                        background-color: inherit;
                        color: #333;
                    ">
                        <h3 style="margin: 0;">Recommended Products</h3>
                        <div 
                            onclick="document.getElementsByClassName('recommendation-div')[0].style.display='none'" 
                            style="
                                height: 50px; 
                                width: 50px; 
                                border-radius: 50%; 
                                overflow: hidden; 
                                cursor: pointer;
                                background-color: #eee;
                                display: flex;
                                align-items: center;
                                justify-content: center;
                            ">
                            <img src="../images/close.jpg" style="height: 100%; width: 100%; object-fit: cover;" />
                        </div>
                    </div>
                `;
                const recommendationGrid = document.createElement('div');
                recommendationGrid.className = 'recommendation-grid';
                recommendationGrid.style.display = 'grid';
                recommendationGrid.style.gridTemplateColumns = 'repeat(auto-fill, minmax(300px, 1fr))';
                recommendationGrid.style.gap = '20px';
                recommendationGrid.style.padding = '20px';
                res.forEach(product => {
                    const productCard = createProductCard(product);
                    recommendationGrid.appendChild(productCard);
                });
                recommendationContainer.appendChild(recommendationGrid);
                recommendationDiv.appendChild(recommendationContainer);
                recommendationDiv.style.display = "flex";
                setTimeout(() => {
                    starrating();
                }, 100);
            }
        },
        error: function () {
            alert('Error fetching product data.');
        }
    });

}

//Recommendation div logic ends here
// Toggle cart (placeholder function)
function toggleCart() {
    product = [];
    cart = []; 

    $.ajax({
        url: 'cart1.php',
        method: 'POST',
        dataType: 'json',
        success: function (res) {
            if (res.length > 0) {
                res.forEach((product, i) => {
                    cart.push(product);
                });
                updateCartCount();
                const cartItems = cart;
                str = '<table border="2" class="cart-table">';
                str += `<thead>
                            <tr>
                                <th>Product-Name</th>
                                <th>Price</th>
                                <th>Image</th>
                                <th>Quantity</th>
                                <th>Buy/Remove</th>
                            </tr>
                        </thead>`;
                str += '<tbody>';
                for (let i = 0; i < cartItems.length; i++) {
                    str += `<tr>
                                <td>${cartItems[i].name}</td>
                                <td>RS.${cartItems[i].price}</td>
                                <td><img src="${cartItems[i].image}" alt="Product Image"></td>
                                <td><div id="qtyadd"> <button onclick="toggleCart(); increase(${cartItems[i].id});">➕</button>
                                <span id="qtyspan-${cartItems[i].id}">${cartItems[i].qty}</span>
                                <button onclick="decrease(${cartItems[i].id})">➖</button></div></td>
                                <td><div id="buydel"><Button onclick="esewa1(${cartItems[i].id})"><img src="../images/esewa.png" width="50px" height="50px"></Button><br><Button onclick="del(${cartItems[i].id})"><img src="../images/delete.jpg" width="50px" height="50px"></Button></div></td>
                            </tr>`;
                }
                str += '</tbody></table>';

            } else {
                alert('The cart is empty');
            }
        },
        error: function () {
            alert('Error fetching product data.');
        }
    });
}
function cHideUnhide() {
    if (tc % 2 == 0) {
        document.getElementsByClassName('cart-div')[0].style.display = "none";
        tc = 0;
    } else {
        document.getElementsByClassName('cart-div')[0].style.display = "block";
        document.getElementsByClassName('cart-div')[0].innerHTML = str;
        str = "";
    }
    tc++;
}
//cart to add the qty by one unit per click
function increase(pid) {

    let productId = pid;
    $.ajax({
        url: 'qtyinc.php',
        method: 'POST',
        data: {
            pid: productId,
        },
        dataType: 'json',
        success: function (res) {
            if (res == "exit") {
                alert(`Exceeds the stock limit`);
            } else {
                document.getElementById(`qtyspan-${pid}`).innerText = res;
            }
        },
        error: function () {
            alert('Error fetching product data.');
        }
    });

}
function decrease(pid) {

    let productId = pid;
    $.ajax({
        url: 'qtydec.php',
        method: 'POST',
        data: {
            pid: productId,
        },
        dataType: 'json',
        success: function (res) {
            if (res == "exit") {
                alert("Low on stock");
            } else {
                document.getElementById(`qtyspan-${pid}`).innerText = res;
            }
        },
        error: function () {
            alert('Error fetching product data.');
        }
    });

}
function del(pid) {
    let productId = pid;
    $.ajax({
        url: 'del.php',
        method: 'POST',
        data: {
            pid: productId,
        },
        dataType: 'json',
        success: function (res) {
             cHideUnhide();
            toggleCart();
            updateCartCount();
            alert("Item removed from cart");
        },
        error: function () {
            alert('Error fetching product data.');
        }
    });
}





// Search functionality
document.getElementById('searchInput').addEventListener('input', function (e) {
    const searchTerm = e.target.value.toLowerCase();
    filterProducts();
});

// Category filter
document.getElementById('categoryFilter').addEventListener('change', function (e) {
    filterProducts();
});

// Filter products based on search and category
function filterProducts() {
    const searchTerm = document.getElementById('searchInput').value.toLowerCase();
    const selectedCategory = document.getElementById('categoryFilter').value;

    filteredProducts = products.filter(product => {
        const matchesSearch = product.name.toLowerCase().includes(searchTerm) ||
            product.description.toLowerCase().includes(searchTerm);
        const matchesCategory = selectedCategory === '' || product.category === selectedCategory;

        return matchesSearch && matchesCategory;
    });

    displayProducts(filteredProducts);
}



document.addEventListener('DOMContentLoaded', function () {
    // Add ripple effect to buttons
    const buttons = document.querySelectorAll('.submit-btn, .newbtnstyle');
    buttons.forEach(button => {
        button.addEventListener('click', function (e) {
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;

            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');

            this.appendChild(ripple);

            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });
});


function mainpage() {
    let result = confirm("Confirm Logout?");

if (result) {
 window.location.href = "index.php";
} else {
 exit(0);
}
    
}
let j = 0;
function dispfilter() {
    if (j % 2 == 0) {
        j = 0;
        document.getElementsByClassName('filter-div')[0].style.display = "block";
    } else {
        document.getElementsByClassName('filter-div')[0].style.display = "none";
    }

    j++;
}
function change() {
    let sv = document.getElementById("sliderRange").value;
    document.getElementById("demo").innerHTML = sv;

}
function sortFilter() {
    document.getElementsByClassName('filter-div')[0].style.display = "none";
    let name = document.getElementById('pname').value;
    let category = document.getElementById('cfilter').value;
    let price = document.getElementById('pra25').value;
    let range = document.getElementById('sliderRange').value;
    document.getElementById('pname').value = "";
    document.getElementById('cfilter').value = "";
    document.getElementById('pra25').value = "";
    document.getElementById('sliderRange').value = 1;
    document.getElementById('demo').innerHTML = "1";
    $.ajax({
        url: 'filter.php',
        method: 'POST',
        data: {
            pname: name,
            price: price,
            cfilter: category,
            range: range
        },
        dataType: 'json',
        success: function (res) {
            displayProducts(res);

        }

    });
}

function validation(){
            for(let i = 1; i <= 9; i++) {
                let msgElement = document.getElementById("msg" + i);
                if(msgElement) {
                    msgElement.style.display = "none";
                }
            }
            let a=document.getElementsByName('sfname')[0].value;
            let j=document.getElementsByName('smname')[0].value;
            let b=document.getElementsByName('slname')[0].value;
            let d=document.getElementsByName('smobile')[0].value;
            let e=document.getElementsByName('saddress')[0].value;
            let fa=document.getElementsByName('suname')[0].value;
            let fb=document.getElementsByName('semail')[0].value;
            let rval = document.querySelector('input[name="sgender"]:checked'); 
            let g=document.getElementsByName('spwd')[0].value;
            let h=document.getElementsByName('spwd1')[0] ? document.getElementsByName('spwd')[0].value : g;
            let i=document.querySelector('input[name="sterms"]:checked');
            //firstname Validation logic
            if(a===""){
                document.getElementById("msg1").innerText="First name must be more than 2 character consisting only alphabets";
                document.getElementById("msg1").style.color="red";
                document.getElementById("msg1").style.display="block";
                return false;
            }
            if(!a.match(/^[a-zA-Z]{3,}$/)){
                document.getElementById('msg1').innerText="First name must be more than 2 character consisting only alphabets";
                document.getElementById('msg1').style.color="red";
                document.getElementById('msg1').style.display="block";
                return false;
            }
            //middle name validation
            if(j!=="" && !j.match(/^[a-zA-Z]{3,}$/)){
                document.getElementById('msg2').innerText="Middle name must be more than 2 character consisting only alphabets";
                document.getElementById('msg2').style.color="red";
                document.getElementById('msg2').style.display="block";
                return false;
            }
            //last name validation
            if(b===""){
                document.getElementById("msg3").innerText="Last name must be more than 2 character consisting only alphabets";
                document.getElementById("msg3").style.color="red";
                document.getElementById("msg3").style.display="block";
                return false;
            }
            if(!b.match(/^[a-zA-Z]{3,}$/)){
                document.getElementById("msg3").innerText="Last name must be more than 2 character consisting only alphabets";
                document.getElementById("msg3").style.color="red";
                document.getElementById("msg3").style.display="block";
                return false;
            }
            //gender Validation
            if(rval==null){
                alert("Please select the gender");
                return false;
            }
            //mobile no validation
            if(d===""){
                document.getElementById("msg4").innerText="This field cannot be empty please enter your valid phone number";
                document.getElementById("msg4").style.color="red";
                document.getElementById("msg4").style.display="block";
                return false;
            }
            if(isNaN(d)){
                document.getElementById("msg4").innerText="Mobile number cannot contain other characters than digits.";
                document.getElementById("msg4").style.color="red";
                document.getElementById("msg4").style.display="block";
                return false;
            }
            if(!(d.startsWith('98') || d.startsWith('97'))){
                document.getElementById("msg4").innerText="Mobile number always should start with 98 or 97";
                document.getElementById("msg4").style.color="red";
                document.getElementById("msg4").style.display="block";
                return false;
            }
            if(d.length !==10){
                document.getElementById("msg4").innerText="Mobile number must be of length of 10 digits.";
                document.getElementById("msg4").style.color="red";
                document.getElementById("msg4").style.display="block";
                return false;
            }
            //Address validation  
            if(e===""){
                document.getElementById("msg5").innerText="This field cannot be empty please enter your valid address";
                document.getElementById("msg5").style.color="red";
                document.getElementById("msg5").style.display="block";
                return false;
            }
            if(!e.match(/^[A-Za-z]{4,15}-\d{1,2} [A-Za-z]{2,15},[ ]?[nN]epal$/)){
                document.getElementById("msg5").innerText="please match the pattern [chainpur-1 chitwan,nepal]";
                document.getElementById("msg5").style.color="red";
                document.getElementById("msg5").style.display="block";
                return false;
            }
            //Username Validation      
            if(fa==""){
                document.getElementById("msg6").innerText="This field cannot be empty please enter your username";
                document.getElementById("msg6").style.color="red";
                document.getElementById("msg6").style.display="block";
                return false;
            }
            if(fa.length<=4){
                document.getElementById("msg6").innerText="Username must be of more than 4 character.";
                document.getElementById("msg6").style.color="red";
                document.getElementById("msg6").style.display="block";
                return false;
            }
            //Email Validation
            if(fb===""){
                document.getElementById("msg7").innerText="This field cannot be empty please enter your valid email";
                document.getElementById("msg7").style.color="red";
                document.getElementById("msg7").style.display="block";
                return false;
            }
            if(!fb.match(/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/)){
                document.getElementById("msg7").innerHTML="Your email couldn't validate. Please enter the valid Email.";
                document.getElementById("msg7").style.color="red";
                document.getElementById("msg7").style.display="block";
                return false;
            }
            // Password validation
            if(g===""){
                document.getElementById("msg8").innerHTML="This field cannot be empty please enter your password";
                document.getElementById("msg8").style.color="red";
                document.getElementById("msg8").style.display="block";
                return false;
            }
            if(g.length<=5){
                document.getElementById("msg8").innerHTML="Password must be minimum of 6 characters.";
                document.getElementById("msg8").style.color="red";
                document.getElementById("msg8").style.display="block";
                return false;
            }
            // Check confirm password if it exists
            if(document.getElementsByName('spwd')[0] && h===""){
                document.getElementById("msg9").innerHTML="This field cannot be empty please repeat the password you entered above";
                document.getElementById("msg9").style.color="red";
                document.getElementById("msg9").style.display="block";
                return false;
            }
            // Password match validation if confirm password exists
            if(document.getElementsByName('spwd1')[0] && g!==h){
                document.getElementById("msg8").innerHTML="Your password didn't match.";
                document.getElementById("msg9").innerHTML="Your password didn't match.";
                document.getElementById("msg8").style.color="red";
                document.getElementById("msg9").style.color="red";
                document.getElementById("msg8").style.display="block";
                document.getElementById("msg9").style.display="block";
                return false;
            }
            // Terms validation if it exists
            if(document.querySelector('input[name="sterms"]') && !i){
                alert("Please agree to our terms and conditions.");
                return false;
            }
            
            // If we reach here, all validations passed
            console.log("Validation passed - form will be submitted");
            return true;
        }
function validation1(){
    for(let i = 1; i <= 9; i++) {
        let msgElement = document.getElementById("msg1" + i);
        if(msgElement) {
            msgElement.style.display = "none";
        }
    }

    let a=document.getElementsByName('afname')[0].value;
    let j=document.getElementsByName('amname')[0].value;
    let b=document.getElementsByName('alname')[0].value;
    let d=document.getElementsByName('amobile')[0].value;
    let e=document.getElementsByName('aaddress')[0].value;
    let fa=document.getElementsByName('auname')[0].value;
    let fb=document.getElementsByName('aemail')[0].value;
    let rval = document.querySelector('input[name="agender"]:checked'); 
    let g=document.getElementsByName('apwd')[0].value;
    let h=document.getElementsByName('apwd1')[0] ? document.getElementsByName('apwd1')[0].value : g;
    let i=document.querySelector('input[name="aterms"]:checked');
    //firstname Validation logic
    if(a===""){
        document.getElementById("msg11").innerText="First name must be more than 2 character consisting only alphabets";
        document.getElementById("msg11").style.color="red";
        document.getElementById("msg11").style.display="block";
        return false;
    }
    if(!a.match(/^[a-zA-Z]{3,}$/)){
        document.getElementById('msg11').innerText="First name must be more than 2 character consisting only alphabets";
        document.getElementById('msg11').style.color="red";
        document.getElementById('msg11').style.display="block";
        return false;
    }
    //middle name validation
    if(j!=="" && !j.match(/^[a-zA-Z]{3,}$/)){
        document.getElementById('msg12').innerText="Middle name must be more than 2 character consisting only alphabets";
        document.getElementById('msg12').style.color="red";
        document.getElementById('msg12').style.display="block";
        return false;
    }
    //last name validation
    if(b===""){
        document.getElementById("msg13").innerText="Last name must be more than 2 character consisting only alphabets";
        document.getElementById("msg13").style.color="red";
        document.getElementById("msg13").style.display="block";
        return false;
    }
    if(!b.match(/^[a-zA-Z]{3,}$/)){
        document.getElementById("msg13").innerText="Last name must be more than 2 character consisting only alphabets";
        document.getElementById("msg13").style.color="red";
        document.getElementById("msg13").style.display="block";
        return false;
    }
    //gender Validation
    if(rval==null){
        alert("Please select the gender");
        return false;
    }
    //mobile no validation
    if(d===""){
        document.getElementById("msg14").innerText="This field cannot be empty please enter your valid phone number";
        document.getElementById("msg14").style.color="red";
        document.getElementById("msg14").style.display="block";
        return false;
    }
    if(isNaN(d)){
        document.getElementById("msg14").innerText="Mobile number cannot contain other characters than digits.";
        document.getElementById("msg14").style.color="red";
        document.getElementById("msg14").style.display="block";
        return false;
    }
    if(!(d.startsWith('98') || d.startsWith('97'))){
        document.getElementById("msg14").innerText="Mobile number always should start with 98 or 97";
        document.getElementById("msg14").style.color="red";
        document.getElementById("msg14").style.display="block";
        return false;
    }
    if(d.length !==10){
        document.getElementById("msg14").innerText="Mobile number must be of length of 10 digits.";
        document.getElementById("msg14").style.color="red";
        document.getElementById("msg14").style.display="block";
        return false;
    }
    //Address validation  
    if(e===""){
        document.getElementById("msg15").innerText="This field cannot be empty please enter your valid address";
        document.getElementById("msg15").style.color="red";
        document.getElementById("msg15").style.display="block";
        return false;
    }
    if(!e.match(/^[A-Za-z]{4,15}-\d{1,2} [A-Za-z]{2,15},[ ]?[nN]epal$/)){
        document.getElementById("msg15").innerText="please match the pattern [chainpur-1 chitwan,nepal]";
        document.getElementById("msg15").style.color="red";
        document.getElementById("msg15").style.display="block";
        return false;
    }
    //Username Validation      
    if(fa===""){
        document.getElementById("msg16").innerText="This field cannot be empty please enter your username";
        document.getElementById("msg16").style.color="red";
        document.getElementById("msg16").style.display="block";
        return false;
    }
    if(fa.length<=4){
        document.getElementById("msg16").innerText="Username must be of more than 4 character.";
        document.getElementById("msg16").style.color="red";
        document.getElementById("msg16").style.display="block";
        return false;
    }
    //Email Validation
    if(fb===""){
        document.getElementById("msg17").innerText="This field cannot be empty please enter your valid email";
        document.getElementById("msg17").style.color="red";
        document.getElementById("msg17").style.display="block";
        return false;
    }
    if(!fb.match(/^[\w.%+-]+@[\w.-]+\.[A-Za-z]{2,}$/)){
        document.getElementById("msg17").innerHTML="Your email couldn't validate. Please enter the valid Email.";
        document.getElementById("msg17").style.color="red";
        document.getElementById("msg17").style.display="block";
        return false;
    }
    // Password validation
    if(g===""){
        document.getElementById("msg18").innerHTML="This field cannot be empty please enter your password";
        document.getElementById("msg18").style.color="red";
        document.getElementById("msg18").style.display="block";
        return false;
    }
    if(g.length<=5){
        document.getElementById("msg18").innerHTML="Password must be minimum of 6 characters.";
        document.getElementById("msg18").style.color="red";
        document.getElementById("msg18").style.display="block";
        return false;
    }
    // Check confirm password if it exists
    if(document.getElementsByName('cpassword1')[0] && h===""){
        document.getElementById("msg19").innerHTML="This field cannot be empty please repeat the password you entered above";
        document.getElementById("msg19").style.color="red";
        document.getElementById("msg19").style.display="block";
        return false;
    }
    // Password match validation if confirm password exists
    if(document.getElementsByName('cpassword1')[0] && g!==h){
        document.getElementById("msg18").innerHTML="Your password didn't match.";
        document.getElementById("msg19").innerHTML="Your password didn't match.";
        document.getElementById("msg18").style.color="red";
        document.getElementById("msg19").style.color="red";
        document.getElementById("msg18").style.display="block";
        document.getElementById("msg19").style.display="block";
        return false;
    }
    // Terms validation if it exists
    if(document.querySelector('input[name="terms"]') && !i){
        alert("Please agree to our terms and conditions.");
        return false;
    }
    
    // If we reach here, all validations passed
    console.log("Validation passed - form will be submitted");
    return true;
}
    