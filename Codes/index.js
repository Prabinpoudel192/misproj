
let cart = [];
let filteredProducts = [];
let str;
let tc=1;
 toggleCart();
        
function login() {
    setTimeout(() =>{
    document.getElementById('welcome').style.display = 'none';
            document.getElementById('pra4').style.display = 'block';
            document.getElementById('pra5').style.display = 'none';
            document.getElementById('pra10').style.display = 'none';
}, 2000);
}
function signup(){
    setTimeout(()=>{
         document.getElementById('welcome').style.display = 'none';
            document.getElementById('pra4').style.display = 'none';
            document.getElementById('pra5').style.display = 'block';
            document.getElementById('pra10').style.display = 'none';
    },2000);
}
function admin(){
    setTimeout(()=>{
        document.getElementById('welcome').style.display = 'none';
            document.getElementById('pra4').style.display = 'none';
            document.getElementById('pra5').style.display = 'none';
            document.getElementById('pra10').style.display = 'block';
    },2000);
}
function home(){
    window.location.href="prabin.php";
}
function esewa(pid){
 window.location.href="esewa.php?pid="+ pid;
 }
 function esewa1(pid){
 window.location.href="esewa1.php?pid="+ pid;
 }
 
 function display(){
document.getElementById("pra18").style.display="block";
document.getElementById("pra20").style.display="none";

 }
 
 function second(){

var current=document.getElementById("pra25").value;
if(current==="high"){
document.getElementById("pra26").value="low1";

}else{
document.getElementById("pra26").value="high1";

}}
function filter(){


document.getElementById("pra24").style.display="block";
document.getElementById("pra29").style.display="none";

}
function filter1(){

document.getElementById("pra29").style.display="flex";
document.getElementById("pra24").style.display="none";


}
function addToCart1(){

document.getElementById("pra35").style.display="block";



} 
function addToCart(productId) {
    $.ajax({
        url: 'cart.php',
        method: 'POST',
        data: { pid: productId },
        dataType: 'json',
        success: function(res) {
            
                alert(`${res[0].name} added to the cart`);
                toggleCart();
                updateCartCount();
           
        },
        error: function() {
            alert('Error fetching product data.');
        }
    });
}
  function second1(){

var current=document.getElementById("pra26").value;
if(current==="high1"){
document.getElementById("pra25").value="low";

}else{
document.getElementById("pra25").value="high";
}}

function fa(){
$(document).ready(function(){

    let pn=$("#pra19").val();
    $.ajax({
        url:'search.php',
        method:'POST',
        data:{pname:pn},
        dataType:'json',
        success:function(data){
            $('#pra18').css("z-index",6);
            $('#pra31').css("display","block");
            $('#pra23').css("display","none");
            $('#pra28').css("display","none");
            $('#pra32').css("display","block");
            $('#pra32').html("");
            for(let i=0;i<data.length;i++){
            $('#pra32').append('<a href="#" onclick="pra(\'' + data[i] + '\')">' + data[i] + '</a><br>');

            }
            $("#pra32").css("font-size","35px");
            $('#pra32').css("color","green");
            if(data.length===0){
$("#pra29").css("display","flex");
$('#pra32').css("display","none");
$('#pra23').css("display","flex");
$('#pra28').css("display","flex");
    }
        }
    })
})
}
//search anchor logic starts here

//search andchor logic ends here

function upload(){
    window.location.href="upload.php";
}


function hideUnhide(){
document.getElementById("pra24").style.display="none"
document.getElementById("pra32").style.display="none"
document.getElementById("pra29").style.display="flex"
document.getElementById("pra23").style.display="flex"
document.getElementById("pra28").style.display="flex"


}
function pra(data){
document.getElementById("pra32").style.display="none";
document.getElementById("pra20").style.display="flex";
document.getElementById("pra29").style.display="flex";
document.getElementById("pra23").style.display="flex";
document.getElementById("pra28").style.display="flex";
document.getElementById("pra19").value="";

let pn=data;
   $(document).ready(function(){
    $.ajax({
        url:'display.php',
        method:'POST',
        data:{pname:pn},
        dataType:'text',
        success:function(data){
            console.log(data);
            $('#pra18').css("z-index",6);
            $('#pra31').css("display","block");
            $('#pra23').css("display","flex");
            $('#pra28').css("display","flex");
            $('#pra29').css("display","flex");
            $('#pra32').css("display","none");
            $('#pra34').html("");
            $('#pra34').html(data);        
            $("#pra32").css("font-size","35px");
            $('#pra32').css("color","green");
        }
    })
})
    
}
const products=[];
datafetch();
function datafetch(){
$(document).ready(function(){
    $.ajax({
        url:'display1.php',
        method:'POST',
        dataType:'json',
        success:function(res){
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

        // Toggle cart (placeholder function)
        function toggleCart() {
    product = [];
    cart = []; // Make sure cart is reset before fetching

    $.ajax({
        url: 'cart1.php',
        method: 'POST',
        dataType: 'json',
        success: function(res) {
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
                alert('Product not found.');
            }
        },
        error: function() {
            alert('Error fetching product data.');
        }
    });
}
function cHideUnhide(){
     if (tc % 2 == 0) {
                    document.getElementsByClassName('cart-div')[0].style.display = "none";
                    tc = 0;
                } else {
                    document.getElementsByClassName('cart-div')[0].style.display = "block";
                    document.getElementsByClassName('cart-div')[0].innerHTML = str;
                    str="";
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
            success: function(res) {
                if(res=="exit"){
                alert(`Exceeds the stock limit`);
                }else{
                document.getElementById(`qtyspan-${pid}`).innerText = res;
            }},
            error: function() {
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
            success: function(res) {
               if(res=="exit"){
                alert("Low on stock");
               }else{
                document.getElementById(`qtyspan-${pid}`).innerText = res;
            }},
            error: function() {
                alert('Error fetching product data.');
            }
        });
   
}
function del(pid){
   let productId=pid;
    $.ajax({
            url: 'del.php',
            method: 'POST',
            data: {
                pid: productId,
            },
            dataType: 'json',
            success: function(res) {
                alert("Item removed from cart");
                    toggleCart();
                    cHideUnhide();
                    updateCartCount();
            },
            error: function() {
                alert('Error fetching product data.');
            }
        });
}


            
        

        // Search functionality
        document.getElementById('searchInput').addEventListener('input', function(e) {
            const searchTerm = e.target.value.toLowerCase();
            filterProducts();
        });

        // Category filter
        document.getElementById('categoryFilter').addEventListener('change', function(e) {
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



         document.addEventListener('DOMContentLoaded', function() {
            // Add ripple effect to buttons
            const buttons = document.querySelectorAll('.submit-btn, .newbtnstyle');
            buttons.forEach(button => {
                button.addEventListener('click', function(e) {
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


        function mainpage(){
            window.location.href="index.php";
        }
        let j=0;
        function dispfilter(){
            if(j%2==0){
                j=0;
            document.getElementsByClassName('filter-div')[0].style.display="block";
            }else{
                document.getElementsByClassName('filter-div')[0].style.display="none";
            }
        
        j++;
        }
        function change(){
       let sv=document.getElementById("sliderRange").value;
        document.getElementById("demo").innerHTML=sv;
      
      }
      function sortFilter(){
        document.getElementsByClassName('filter-div')[0].style.display="none";
      let name=document.getElementById('pname').value;
   let category=document.getElementById('cfilter').value;
   let price=document.getElementById('pra25').value;
   let range=document.getElementById('sliderRange').value;
   document.getElementById('pname').value="";
   document.getElementById('cfilter').value="";
   document.getElementById('pra25').value="";
   document.getElementById('sliderRange').value=1;
   document.getElementById('demo').innerHTML="1";
    $.ajax({
        url:'filter.php',
        method:'POST',
        data:{
            pname:name,
            price:price,
            cfilter:category,
            range:range
},
        dataType:'json',
       success:function(res){  
        displayProducts(res);
     
        }
        
    }); 
}

