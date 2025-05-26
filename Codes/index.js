
let cart = [];
        let filteredProducts = [];
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
function addToCart(str){

document.getElementById("pra35").style.display="block";
    $.ajax({
        url:'cart.php',
        method:'POST',
        data:{pname:str},
        dataType:'json',
        success:function(data){
           alert(data);
            
    
        }
    })



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
function carthide(){

document.getElementById("pra35").style.display="none";

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
                        <span class="product-price">$${product.price}</span>
                        <button class="add-to-cart" onclick="addToCart(${product.id})" ${product.stock === 0 ? 'disabled' : ''}>
                            ${product.stock === 0 ? 'Out of Stock' : 'Add to Cart'}
                        </button>
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

        // Add product to cart
        function addToCart(productId) {
    $.ajax({
        url: 'display1.php',
        method: 'POST',
        data: { pid: productId },
        dataType: 'json',
        success: function(res) {
            if (res.length > 0) {
                const product = res[0]; // Take the single product object returned
                
                if (product.stock > 0) {
                    cart.push(product);
                    updateCartCount();
                    alert(`${product.name} added to cart!`);
                } else {
                    alert('Product is out of stock.');
                }
            } else {
                alert('Product not found.');
            }
        },
        error: function() {
            alert('Error fetching product data.');
        }
    });
}

        // Update cart count
        function updateCartCount() {
            document.getElementById('cartCount').textContent = cart.length;
        }

        // Toggle cart (placeholder function)
        function toggleCart() {
            if (cart.length === 0) {
                alert('Your cart is empty!');
            } else {
                const cartItems = cart.map(item => item.name).join('\n');
                alert(`Cart Items:\n${cartItems}\n\nTotal Items: ${cart.length}`);
            }
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