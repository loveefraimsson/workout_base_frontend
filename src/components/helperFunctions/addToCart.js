export function addToCart(product) {

    console.log(product);
    
    let productsInCart = JSON.parse(localStorage.getItem("cart"));
    
    let newId = Math.floor(Math.random() * (1000000 - 0) + 1);
    //let newId = 481148;
    //console.log(newId);

    product.id = newId;
    //console.log("product med id", product);

    let findProduct = productsInCart.find((productsInCart) => productsInCart.id == newId);
    //console.log("findProduct", findProduct);

    if (findProduct == undefined) {
        console.log("Pusha till cart");
        productsInCart.push(product);
        localStorage.setItem("cart",  JSON.stringify(productsInCart))
    }
    else {
        console.log("Produkt hittad, sätter nytt id");
        let newId2 = Math.floor(Math.random() * (10000 - 0) + 1);
        product.id = newId2;
        productsInCart.push(product);
        localStorage.setItem("cart",  JSON.stringify(productsInCart))
    }
}