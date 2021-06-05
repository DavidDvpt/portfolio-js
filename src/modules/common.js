import _ from 'lodash';

export const REQUEST = 'REQUEST';
export const SUCCESS = 'SUCCESS';
export const FAILURE = 'FAILURE';
export const OPEN = 'OPEN';
export const CLOSE = 'CLOSE';
export const VISIBLE = 'VISIBLE';
export const HIDDEN = 'HIDDEN';
export const SET_ERROR = 'SET_ERROR';
export const SET_LOADING = 'SET_LOADING';
export const SET_MESSAGE = 'SET_MESSAGE';

export const createRequestTypes = (base) => {
  const CONST = _.reduce(
    [REQUEST, SUCCESS, FAILURE, OPEN, CLOSE, VISIBLE, HIDDEN],
    (acc, type) => {
      acc[type] = `${base}_${type}`;
      return acc;
    },
    {}
  );
  CONST.toString = () => base;
  return CONST;
};

export function action(type, payload = {}) {
  return { type, ...payload };
}

const actions = {
  setMessage: (reducer, code, message) =>
    action(SET_MESSAGE, { payload: { reducer, code, message } }),
  setError: (reducer, code, error) =>
    action(SET_ERROR, { payload: { reducer, code, error } }),
  setLoading: (reducer, code, status) =>
    action(SET_LOADING, { payload: { reducer, code, status } }),
};

export default actions;
