import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

// -------------- SAVE TOKEN IN LOCAL STORAGE + SET HEADER --------------
export const setAuthToken = (token) => {
  if (token) {
    localStorage.setItem("token", token);
    API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    localStorage.removeItem("token");
    delete API.defaults.headers.common["Authorization"];
  }
};

// If token already exists in localStorage, load it on refresh
const savedToken = localStorage.getItem("token");
if (savedToken) {
  API.defaults.headers.common["Authorization"] = `Bearer ${savedToken}`;
}

// -------------- API FUNCTIONS (nothing changed) --------------
export const registerUser = async (userData) => {
  return await API.post("/register", userData);
};

export const loginUser = async (userData) => {
  return await API.post("/login", userData);
};

export const getTours = async () => {
  return await API.get("/tours");
};

export const getTourById = async (id) => {
  return await API.get(`/tours/${id}`);
};

export default API;














// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api"
// });

// export const registerUser = async (userData) => {
//   return await API.post("/register", userData);
// };
// export const loginUser = async (userData) => {
//   return await API.post("/login", userData);
// };
// export const getTours = async () => {
//   return await API.get("/tours");
// };
// export const getTourById = async (id) => {
//   return await API.get(`/tours/${id}`);
// };