export function addToCart(product) {

    console.log(product);
    
    let productsInCart = JSON.parse(localStorage.getItem("cart"));

    //console.log("productsInCart", productsInCart);

    productsInCart.push(product);

    console.log(productsInCart);

    localStorage.setItem("cart",  JSON.stringify(productsInCart))
}