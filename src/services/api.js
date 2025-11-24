// import axios from "axios";

// const API = axios.create({
//   baseURL: "/api"  // Changed: relies on React proxy or relative path
// });

// // helper to set/unset Authorization header and localStorage
// export const setAuthToken = (token) => {
//   if (token) {
//     API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     localStorage.setItem("token", token);
//   } else {
//     delete API.defaults.headers.common["Authorization"];
//     localStorage.removeItem("token");
//   }
// };

// // initialize token from localStorage (if present)
// const existingToken = localStorage.getItem("token");
// if (existingToken) setAuthToken(existingToken);

// // register user -> will set token if server returns one
// export const registerUser = async (data) => {
//   const res = await API.post("/register", data);
//   if (res.data && res.data.token) {
//     setAuthToken(res.data.token);
//   }
//   return res;
// };

// // login user -> will set token if server returns one
// export const loginUser = async (data) => {
//   const res = await API.post("/login", data);
//   if (res.data && res.data.token) {
//     setAuthToken(res.data.token);
//   }
//   return res;
// };

// export const logoutUser = () => {
//   setAuthToken(null);
// };

// export const getTours = async () => {
//   return API.get("/tours");
// };

// export default API;



// import axios from "axios";

// const API = axios.create({
//   baseURL: "http://localhost:5000/api" // adjust host/port if needed
// });

// // helper to set/unset Authorization header and localStorage
// export const setAuthToken = (token) => {
//   if (token) {
//     API.defaults.headers.common["Authorization"] = `Bearer ${token}`;
//     localStorage.setItem("token", token);
//   } else {
//     delete API.defaults.headers.common["Authorization"];
//     localStorage.removeItem("token");
//   }
// };

//  //initialize token from localStorage (if present)
// const existingToken = localStorage.getItem("token");
// if (existingToken) setAuthToken(existingToken);

// // register user -> will set token if server returns one
// export const registerUser = async (data) => {
//   const res = await API.post("/register", data);
//   if (res.data && res.data.token) {
//     setAuthToken(res.data.token);
//   }
//   return res;
// };

// // login user -> will set token if server returns one
// export const loginUser = async (data) => {
//   const res = await API.post("/login", data);
//   if (res.data && res.data.token) {
//     setAuthToken(res.data.token);
//   }
//   return res;
// };

// export const logoutUser = () => {
//   setAuthToken(null);
// };
// //from chatgpt
// export const getTours = async () => {
//   return API.get("/tours");
// };
// //till here

// export default API;





import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/api"
});

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