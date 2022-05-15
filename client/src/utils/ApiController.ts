import axios from 'axios';

const API_BASEURL = process.env.REACT_APP_API_BASEURL;

const defaultOption = {
  baseURL: API_BASEURL,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  },
  withCredentials: true,
};

const instance = axios.create(defaultOption);

instance.interceptors.request.use(
  config => {
    return config;
  },
  error => {
    return Promise.reject(error);
  }
);

instance.interceptors.response.use(
  response => {
    // 인증된 유저가 아닐 경우
    if (response.data.code === '10001') {
      if (localStorage.getItem('error') === null) {
        localStorage.setItem('error', 'true');
        alert(response.data.msg);
        window.location.href = '/oauth/logout';
      }
    }

    // 로그인
    if (response.data.code === '10002' || response.data.code === '10003') {
      alert(response.data.msg);
      window.location.href = '/';
    }

    // 닉네임
    if (
      response.data.code === '11001' ||
      response.data.code === '11002' ||
      response.data.code === '11003' ||
      response.data.code === '11004'
    ) {
      alert(response.data.msg);
    }

    // 정상적인 응답값일 경우
    if (response.data.code === '0' || response.data.code === '1') {
      return response.data;
    }
  },
  error => {
    return Promise.reject(error);
  }
);

export default instance;
