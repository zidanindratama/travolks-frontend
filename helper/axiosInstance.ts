import axios from "axios";
import Cookies from "js-cookie";

const DEV_URL = "http://localhost:3100";
const PROD_URL = "https://nestjs-03-travolks.vercel.app";

const axiosInstance = axios.create({
  baseURL: DEV_URL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/x-www-form-urlencoded",
  },
});

// Refresh token from client's cookie
async function refreshAccessToken() {
  const refreshToken = Cookies.get("refreshToken");
  const token = refreshToken?.replace(/"/g, ""); // Removing all occurrences of double quotes

  if (!token) {
    throw new Error("No refreshToken found");
  }

  const newAccessToken = await axios.post(
    `${DEV_URL}/auth/refresh-token`,
    null,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
      withCredentials: true,
    }
  );

  Cookies.set("accessToken", newAccessToken.data.access_token);
  return newAccessToken.data.access_token;
}

// Refreshtoken from server's cookie
const refreshAuthToken = async () => {
  try {
    const response = await axios.post(`${PROD_URL}/auth/refresh-token`, null, {
      withCredentials: true,
    });
    const newAccessToken = response.data.access_token;

    Cookies.set("accessToken", newAccessToken);
    return newAccessToken;
  } catch (error) {
    throw error;
  }
};

// Intercept request dan set Authorization header dengan bearer token
axiosInstance.interceptors.request.use(
  async (config) => {
    const accessToken = Cookies.get("accessToken");

    if (accessToken) {
      config.headers.Authorization = `Bearer ${accessToken}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Intercept response dan coba refresh token jika diperlukan
axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    const originalRequest = error.config;
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const newAccessToken = await refreshAuthToken();

        originalRequest.headers.Authorization = `Bearer ${newAccessToken}`;
        return axiosInstance(originalRequest);
      } catch (error) {
        return Promise.reject(error);
      }
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
