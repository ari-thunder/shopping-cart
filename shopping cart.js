//like button
var likedButton = document.getElementsByClassName('like');
for (var button of likedButton) {
  button.addEventListener('click', function() {
    var currentColor = this.style.color;
    if (currentColor === 'red') {
      this.style.color = 'black';
      this.textContent = '♡';
    } else {
      this.style.color = 'red';
      this.textContent = '❤️';
    }
  });
}

var items = document.querySelectorAll('.item');
var totalPriceElement = document.getElementById('totalPrice');

for (const item of items) {
    const plusButton = item.querySelector('.plus');
    const minusButton = item.querySelector('.minus');
    const deleteButton = item.querySelector('.delete');
    const likeButton = item.querySelector('.like');
    const quantityElement = item.querySelector('.quantity');
    let quantity = parseInt(quantityElement.textContent);
    let totalPrice = 0;

    //add or remove items buttons
    plusButton.addEventListener('click', function() {
        quantity++;
        quantityElement.textContent = quantity;
        updateTotalPrice();
    }); 
    minusButton.addEventListener('click', function() {
        if (quantity > 1) {
            quantity--;
            quantityElement.textContent = quantity;
            updateTotalPrice();
        }
    
    //delete button
    
    });   
    deleteButton.addEventListener('click', function() {
      quantityElement.textContent = 0;
      quantity = 0
      updateTotalPrice();
      item.remove
    });
    
    //Price change
    function updateTotalPrice() {
        totalPrice = 0;
        for (var i = 0; i < items.length; i++) {
            var item = items[i];
            var itemPrice = 10;
            var itemQuantity = Number(item.querySelector('.quantity').textContent);
            totalPrice += itemPrice * itemQuantity;
        }
        totalPriceElement.textContent = totalPrice;
    } 
}