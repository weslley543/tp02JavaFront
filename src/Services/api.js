import axios from 'axios';

export const api = axios.create({
  baseURL:'https://blogfilme.herokuapp.com'
});