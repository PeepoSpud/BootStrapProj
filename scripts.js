// window.addEventListener('load', () => {
// var addCartBtn = document.getElementById("btn-add")

// console.log(addCartBtn)
// });
if (document.readyState == 'loading'){
    document.addEventListener('DOMContentLoaded', settingup)
} else{
    settingup()
}

function settingup(){
    // sets up the specific add cart buttons we can interact with upon page load
    var addCartBtn = document.getElementsByClassName('btn-add')

    for(var i = 0; i < addCartBtn.length; i++){
        var addbutton = addCartBtn[i]
        addbutton.addEventListener('click', addToCartClick)
    }
}

// use this to get the parent parent element of the child (the card itself) and get the image price and name of the item
function addToCartClick(event) {
    var clickButton = event.target
    var itemClicked = clickButton.parentElement.parentElement
    var itemName = itemClicked.querySelector('.card-title').innerText
    var itemCost = itemClicked.querySelector('.card-price').innerText
    var itemImage = itemClicked.querySelector('.card-img-top').src
    createIteminCart(itemName, itemCost, itemImage)
}

function createIteminCart(title, price, imgSrc){
    var cartRow = document.createElement('div')
    cartRow.classList.add('cart-row')
    var cartItems = document.getElementsByClassName('itemsInCart')[0]

    var cartItemsNames = cartItems.getElementsByClassName('cart-iten-name')
    for(var i = 0; i < cartItemsNames.length; i++){
        if(cartItemsNames[i].innerText == title) {
            alert('This item is already in the cart.')
            return
        }
    }

    var cartRowContents = `                                        
    <div class="row py-1">
        <div class="col">
            <img class="rounded w-100" src="${imgSrc}" alt="">
        </div>
        <div class="col cart-item-name">${title}</div>
        <div class="col cart-item-price"> ${price} </div>
        <div class="col">
            <input type="number" class="cart-item-amount" value="1" min="1" max="50" size="1">
        </div>
    </div>
    `
    cartRow.innerHTML = cartRowContents
    cartItems.append(cartRow)
    updateCartTotal()
}

function updateCartTotal(){
    var cartItemContainer = document.getElementsByClassName('itemsInCart')[0]
    cartRows = cartItemContainer.getElementsByClassName('cart-row')
    total = 0
    for(var i = 0; i< cartRows.length; i++) {
        var cartRow = cartRows[i]
        var priceElement = cartRow.getElementsByClassName('cart-item-price')[0]
        var quantityElement = cartRow.getElementsByClassName('cart-item-amount')[0]
        var price = parseFloat(priceElement.innerText.replace('$',''))
        var quantity = quantityElement.value
        console.log(price * quantity)
        total = total + (price * quantity)
    }
    document.querySelector('.cart-total').innerText = "$" + total
}