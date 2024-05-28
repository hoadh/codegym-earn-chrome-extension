window.onload = function () {
  const token = localStorage.getItem('earn_token');
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
  info.innerHTML = 'Bạn đã đăng nhập. Hãy thực hiện các thao tác trên Facebook.';
}

function loginFail() {
  loginForm.style.display = 'block';
  info.style.display = 'none';
  logout.style.display = 'none';
}

document.getElementById('logout').addEventListener('click', function (e) {
  localStorage.removeItem('earn_token');
  loginForm.style.display = 'block';
  info.style.display = 'none';
  logout.style.display = 'none';
  loginForm.reset();
});

document.getElementById('loginForm').addEventListener('submit', async function (e) {
  e.preventDefault(); // Prevent the form from being submitted in the traditional way
  var email = document.getElementById('email').value;
  var password = document.getElementById('password').value;
  const url = 'https://earn.dev.codegym.vn/api/login';
  const data = { email, password };
  const options = {
    method: 'POST',
    mode: "cors",
    credentials: "same-origin",
    referrerPolicy: "no-referrer",
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(data)
  };

  try {
    let fetchRes = await fetch(url, options)
    const res = await fetchRes.json();

    if (res.status) {
      localStorage.setItem('earn_token', res.data?.access_token);
      alert('Đăng nhập thành công!');
      loginSuccess();
    } else {
      alert('Đăng nhập thất bại. Vui lòng thử lại.');
    }

  } catch (error) {
    alert('Có lỗi xảy ra. ' + error.message);
  }
});