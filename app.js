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




var  likeOnClick = document.getElementById('like');
console.log(likeOnClick);

var clickEvent = document.querySelectorAll(".like-img")
console.log(clickEvent);


 $("#like-img").click(function(){

        if($(this).hasClass("bg_menu_active")){

            $(this).removeClass();

        }else{

           $(this).addClass("bg_menu_active");

        }
		
    });
