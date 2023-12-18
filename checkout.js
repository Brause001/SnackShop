function checkout() {
    alert("Vielen Dank für Ihren Einkauf!");

    
    const orderCode = generateOrderCode();

   
    const orderDetails = {
        code: orderCode,
        items: shoppingCart
    };

   
    console.log('Bestellung abgeschlossen:', orderDetails);

    
    alert(`Ihr Bestellcode lautet: ${orderCode}`);

    
    shoppingCart = [];
    updateCartDisplay();
    hideCart();
}
