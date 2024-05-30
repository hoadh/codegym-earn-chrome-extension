import { API_BASE_URL } from './common.js';

window.onload = async function () {
  const token = localStorage.getItem('access_token');
  if (token) {
    loginSuccess();
  } else {
    loginFail();
  }
}

function loginSuccess() {
  loginForm.style.display = 'none';
  info.style.display = 'block';
  logout.style.display = 'block';
  info.innerHTML = 'Bạn đã đăng nhập. Hãy thực hiện các thao tác trên Facebook. Hãy bắt đầu <a href="lead-form.html">tạo lead<a/>';
}

function loginFail() {
  loginForm.style.display = 'block';
  info.style.display = 'none';
  logout.style.display = 'none';
}

document.getElementById('logout').addEventListener('click', function (e) {
  localStorage.removeItem('access_token');
  loginForm.style.display = 'block';
  info.style.display = 'none';
  logout.style.display = 'none';
  loginForm.reset();
});

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault();
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  const url = `${API_BASE_URL}/login`;
  const data = { email, password };
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    let fetchRes = await fetch(url, options)
    const res = await fetchRes.json();

    if (res.status) {
      localStorage.setItem('access_token', res.data?.access_token);
      localStorage.setItem('user_id', res.data?.id);
      alert('Đăng nhập thành công!');
      loginSuccess();
    } else {
      alert('Đăng nhập thất bại. Vui lòng thử lại.');
    }

  } catch (error) {
    alert('Có lỗi xảy ra. ' + error.message);
  }
});