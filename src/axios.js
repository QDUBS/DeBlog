import axios from "axios";
import store from "./store";
import authSlice from "./store/slices/auth";
import createAuthRefreshInterceptor from "axios-auth-refresh";

const instance = axios.create({
  baseURL: process.env.API_URL, // "http://127.0.0.1:8000/api"
  headers: {
    "Content-Type": "application/json",
  },
});

instance.interceptors.request.use(async (config) => {
  const { token } = store.getState().auth;

  if (token !== null) {
    config.headers.Authorization = "Bearer " + token;
    
    console.debug(
      "[Request]",
      config.baseURL + config.url,
      JSON.stringify(token)
    );
  }
  return config;
});

instance.interceptors.response.use(
  (res) => {
    
    console.debug(
      "[Response]",
      res.config.baseURL + res.config.url,
      res.status,
      res.data
    );
    return Promise.resolve(res);
  },
  (err) => {
    console.debug(
      "[Response]",
      err.config.baseURL + err.config.url,
      err.response.status,
      err.response.data
    );
    return Promise.reject(err);
  }
);

const refreshAuthLogic = async (failedRequest) => {
  const { refreshToken } = store.getState().auth;
  if (refreshToken !== null) {
    return axios
      .post(
        "/auth/refresh/",
        {
          refresh: refreshToken,
        },
        {
          baseURL: process.env.REACT_APP_API_URL,
        }
      )
      .then((resp) => {
        const { access, refresh } = resp.data;
        failedRequest.response.config.headers.Authorization =
          "Bearer " + access;
        store.dispatch(
          authSlice.actions.setAuthTokens({
            token: access,
            refreshToken: refresh,
          })
        );
      })
      .catch((err) => {
        if (err.response && err.response.status === 401) {
          store.dispatch(authSlice.actions.setLogout());
        }
      });
  }
};

createAuthRefreshInterceptor(instance, refreshAuthLogic);

export default instance;