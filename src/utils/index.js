import axios from 'axios';

export const axiosInstance = axios.create({
  baseURL: 'https://programmingcourse.herokuapp.com/api',
  // timeout: 5000
  // headers: {
  //   'X-Access-Token': 'accessToken'
  // }
});

export function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    atob(base64)
      .split('')
      .map((c) => `%${`00${c.charCodeAt(0).toString(16)}`.slice(-2)}`)
      .join('')
  );

  return JSON.parse(jsonPayload);
}
