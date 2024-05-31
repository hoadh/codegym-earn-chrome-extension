import { API_BASE_URL, getAPI } from './common.js';

window.onload = async function () {
  const token = localStorage.getItem('access_token');
  if (!token) {
    loginFail();
    return;
  }

  const data = await chrome.storage.sync.get("action");
  if (data.action === 'openLeadForm') {
    loading.style.display = 'block';
    const lead = await chrome.storage.sync.get("lead");
    const profileLink = lead.lead?.profileLink;
    if (profileLink && profileLink !== '') {
      const leadRes = await getAPI('leads?search=' + profileLink);
      if (leadRes) {
        const total = leadRes.total;
        if (total > 0) {
          window.location.href = 'leads-list.html';
        } else {
          window.location.href = 'lead-form.html';
        }
      } else {
        alert('Có lỗi xảy ra. ' + leadRes.message);
      }
    }
  } else {
    loginSuccess();
  }
}

function loginSuccess() {
  loginForm.style.display = 'none';
  info.style.display = 'block';
  logout.style.display = 'block';
  info.innerHTML = 'Bạn đã đăng nhập! Hãy thực hiện các thao tác trên Facebook Business.';
  loading.style.display = 'none';
}

function loginFail() {
  loginForm.style.display = 'block';
  info.style.display = 'none';
  logout.style.display = 'none';
  loading.style.display = 'none';
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
      chrome.runtime.sendMessage({ type: 'clear-data' });
      loginSuccess();
    } else {
      alert('Đăng nhập thất bại. Vui lòng thử lại.');
    }

  } catch (error) {
    alert('Có lỗi xảy ra. ' + error.message);
  }
});