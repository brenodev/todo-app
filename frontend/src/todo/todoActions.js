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
