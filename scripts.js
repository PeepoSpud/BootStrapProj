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
    console.log(itemName, itemCost, itemImage)
}

