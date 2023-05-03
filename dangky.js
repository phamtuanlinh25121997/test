let registerForm = document.querySelector('.register');
let fullNameInput = registerForm.querySelector('input[type="text"][placeholder="Họ và Tên"]');
let contactInput = registerForm.querySelector('input[type="text"][placeholder="Nhập Email hoặc số điện thoại"]');
let passwordInput = registerForm.querySelector('input[type="text"][placeholder="Nhập Mật khẩu"]');
let registerButton = registerForm.querySelector('.login');

registerButton.addEventListener('click', function() {
  let fullName = fullNameInput.value.trim();
  let contact = contactInput.value.trim();
  let password = passwordInput.value.trim();

  if (fullName === '' || contact === '' || password === '') {
    alert('Hãy điền đầy đủ thông tin');
  } else {
    // Lưu thông tin đăng ký của khách hàng vào Local Storage
    localStorage.setItem('fullName', fullName);
    localStorage.setItem('contact', contact);
    localStorage.setItem('password', password);

    window.location.replace('trangchu.html');
    alert('Đăng ký thành công');
  }
});
