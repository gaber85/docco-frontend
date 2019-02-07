import { normalize } from "normalizr";
// import { fetch } from 'react';

const apiMiddleware = store => next => action => {

  const { api } = action;

  if (!api) return next(action);

  const defaultHeaders = {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  };
// eslint-disable-next-line
  const token = store.getState().authentication.token;
  if (token) {
    defaultHeaders.authorization = `Bearer ${token}`
  }


  // THE FETCH
  next({
    type: `${action.type}_PENDING`
  })


  const baseURL = "http://192.168.1.145:3000/"
  // eslint-disable-next-line
  fetch(`${baseURL}${api.route}`, {

    method: api.method || 'GET',
    headers: {
      ...defaultHeaders,
      ...api.headers
    },
    body: api.body
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
