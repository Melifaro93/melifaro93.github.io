var  productsCountE1 = document.getElementById('products-count');
console.log(productsCountE1);

var addToCartButtons = document.querySelectorAll(".add-to-cart")
console.log(addToCartButtons);


for (var i = 0; i < addToCartButtons.length; i++) {
	
	addToCartButtons[i].addEventListener("click", function(e) {
		e.preventDefault()
		var prevProductsCount = + productsCountE1.textContent
		productsCountE1.textContent = prevProductsCount + 1
	})
	
}