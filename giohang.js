let btnLogin = document.querySelector('#btnLogin');
checkLogin();
function checkLogin() {
  let isLogin = localStorage.getItem("isLogin");
  console.log("trang thai login==>",isLogin);
  if (isLogin == 'true') {
    // to do
    let fullName = localStorage.getItem("fullName");
    let textHello = "Xin chào" + fullName ;
    btnLogin.textContent = textHello;
  } else {
    // to do
    return;
  }
}



// Lấy ra nút trái tim và ô giỏ hàng
let heartButton = document.querySelector('#heart-button');
let cartCounter = document.querySelector('#cart-counter');

// Lấy ra số lượng đã thêm vào giỏ hàng từ Local Storage (nếu có)
let cartQuantity = localStorage.getItem('cartQuantity');
if (!cartQuantity) {
  cartQuantity = 0;
}

//  lấy ra số lượng đã thêm vào giỏ hàng từ Local Storage và hiển thị kèm sản phẩm tương ứng
let cartQuantityOnCartPage = document.querySelector('#cart-quantity');
cartQuantityOnCartPage.textContent = cartQuantity;

let cartItems = localStorage.getItem('cartItems');
if (cartItems) {
  // Hiển thị các sản phẩm trong giỏ hàng trên trang giỏ hàng
}
