import axios from "axios";

const URL = "http://localhost:3003/api/todos";

export const changeDescription = evt => ({
  type: "DESCRIPTION_CHANGE",
  payload: evt.target.value
});

// Action creator que irá buscar o serviço no BACKEND
export const search = () => {
  const request = axios.get(`${URL}?sort=-createdAt`);
  return {
    type: "TODO_SEARCH",
    payload: request
  };
};

export const add = description => {
  return dispatch => {
    axios
      .post(URL, { description })
      .then(res => dispatch(clear()))
      .then(res => dispatch(search()));
  };
};

export const markAsDone = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: true })
      .then(res =>
        dispatch({
          type: "TODO_MARKED_AS_DONE",
          payload: res.data
        })
      )
      .then(res => dispatch(search()));
  };
};

export const markAsPending = todo => {
  return dispatch => {
    axios
      .put(`${URL}/${todo._id}`, { ...todo, done: false })
      .then(res => dispatch(search()));
  };
};

export const remove = todo => {
  return dispatch => {
    axios.delete(`${URL}/${todo._id}`).then(res => dispatch(search()));
  };
};

export const clear = () => {
  return {
    type: "TODO_CLEAR"
  };
};
