import { normalize } from "normalizr";

const apiMiddleware = store => next => action => {

  const { api } = action;

  if (!api) return next(action);

  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };

  const state = store.getState();
  if (state.authToken) {
  }
  defaultHeaders.authorization = `Bearer eyJhbGciOiJIUzI1NiJ9.ZnJhbXpAd2F2ZXMuY29t.F9HjmgBqW_sRQtVtedsWEitrVlgM9anhsSQ1cXSfMNU`;

  // THE FETCH
  next({
    type: `${action.type}_PENDING`
  })

  const baseURL = "http://localhost:3000"
  fetch(`${baseURL}/${api.route}`, {
    method: api.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...api.headers,
    },
    body: api.body,
  })
    .then(response => response.json())
    .then(data => {
      let finalData;
      if (api.schema) finalData = normalize(data, api.schema);
      else finalData = data;
      store.dispatch({
        type: `${action.type}_SUCCESS`,
        data: finalData
      })
    })
    .catch(error =>
      store.dispatch({
        type: `${action.type}_FAILURE`,
        error: error.message
      })
    );
  return api;
};

export default apiMiddleware;
