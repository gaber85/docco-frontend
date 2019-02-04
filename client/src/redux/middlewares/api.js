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
    defaultHeaders.Authorization = `Bearer ${state.authToken}`;
  }

  // THE FETCH
  next({
    type: `${action.type}_PENDING`
  });
  // http:// private-81546b-docco.apiary-mock.com/${api.route}

  fetch(`http://private-81546b-docco.apiary-mock.com/${api.route}`, {
    method: api.method || 'GET',
    body: api.body,
    headers: {
      ...defaultHeaders,
      ...api.headers
    }
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