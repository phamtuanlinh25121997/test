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
    return true;
  } else {
    // to do
    return false;
  }
}

getDataByID();



function getDataByID () {
  const checkIsLogin = checkLogin();
  const queryString = window.location.search;
  const urlParams = new URLSearchParams(queryString);
  const catID = urlParams.get('catID')
  console.log("catID==>", catID);
  
  if(checkIsLogin) {
    // get data cat by id
    let listCatOfLocalstorage = localStorage.getItem("catMenus")
    console.log("listCatOfLocalstorage==>", listCatOfLocalstorage);
    let listCatConvert = JSON.parse(listCatOfLocalstorage);
    console.log("listCatConvert==>", listCatConvert);
    const itemFilter = listCatConvert.filter(obj => obj.id == catID)
    console.log("itemFilter==>", itemFilter);
    const itemById = itemFilter[0]
    console.log("itemById==>", itemById);
    let chitietmeo= document.getElementById("chitietmeo")
    chitietmeo.innerHTML=`
    <div class="col">
      <img src="${itemById.img}" class="card-img-top" alt="...">
    </div>
    <div class=" col col-detail">
      <div class="name-detail">
          <h5 class="card-title">${itemById.name}</h5>
      </div>
      <div class="card" style="width: 18rem;">
          <div class="card-body">
              <div>
                  <span><strong>Chi tiết về bé</strong></span>
                  <ul>
                      <li>Giống:${itemById.name}</li>
                      <li>${itemById.age}</li>
                      <li>${itemById.weight}</li>
                      <li>${itemById.sex}</li>
                      <li>${itemById.price}</li>
                  </ul>
                  <a href="./giohang.html"><button class="button-buy">Mua Hàng</button></a>
              </div>
          </div>
      </div>
    </div>`;
  } else {
    // alert user not login
    alert('Bạn chưa đăng nhập, vui lòng đăng nhập để tiếp tục')
  }
}