import React, { useState } from "react";
import { loginUser, registerUser } from "./services/api";
import { setAuthToken } from "./services/api"; // <-- ADDED THIS IMPORT

function Login() {
  const [isLogin, setIsLogin] = useState(true);

  const [form, setForm] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // ---------------- LOGIN HANDLER (UPDATED) ----------------
  const handleLogin = async () => {
    try {
      const res = await loginUser({
        email: form.email,
        password: form.password,
      });

      setAuthToken(res.data.token); // <-- SAVE TOKEN HERE

      alert(res.data.message);
    } catch (err) {
      alert(err.response?.data?.message || "Login error");
    }
  };

  // ---------------- SIGNUP HANDLER (UNCHANGED) --------------
  const handleSignup = async () => {
    try {
      const res = await registerUser({
        name: form.name,
        email: form.email,
        password: form.password,
      });
      alert(res.data.message);
      setIsLogin(true);
    } catch (err) {
      alert(err.response?.data?.message || "Signup error");
    }
  };

  return (
    <div
      style={{
        height: "100vh",
        backgroundColor: "aquamarine",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          backgroundColor: "white",
          borderRadius: "12px",
          padding: "30px",
          width: "600px",
        }}
      >
        <div style={{ display: "flex", marginBottom: "20px" }}>
          <button
            onClick={() => setIsLogin(true)}
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: isLogin ? "#003b5b" : "#eee",
              color: isLogin ? "#fff" : "#333",
              border: "2px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Login
          </button>

          <button
            onClick={() => setIsLogin(false)}
            style={{
              flex: 1,
              padding: "10px",
              backgroundColor: !isLogin ? "#003b5b" : "#eee",
              color: !isLogin ? "#fff" : "#333",
              border: "2px",
              borderTopLeftRadius: "10px",
              borderTopRightRadius: "10px",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            Signup
          </button>
        </div>

        {/* ------------ LOGIN FORM ------------ */}
        {isLogin ? (
          <>
            <h2 className="mb-4 fs-3">Login Form</h2>

            <div className="row mb">
              <div className="col p-2">Email</div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name="email"
                  placeholder="email here"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col p-2">password</div>
            </div>
            <div className="row mb-3">
              <div className="col">
                <input
                  type="password"
                  name="password"
                  placeholder="password"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="d-grid gap-2 col-6 mx-auto">
              <button className="btn btn-primary" onClick={handleLogin}>
                Login
              </button>
            </div>

            <div className="mt-3 text-center fs-6">
              Not a member?{" "}
              <a
                href="#"
                onClick={() => setIsLogin(false)}
                className="text-primary text-decoration-none"
              >
                Signup now
              </a>
            </div>
          </>
        ) : (
          <>
            {/* ------------ SIGNUP FORM ------------ */}
            <h2 className="mb-5 fs-4">Signup Form</h2>

            <div className="row">
              <div className="col">Name</div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name="name"
                  placeholder="Full name"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mt-3">
              <div className="col">Email</div>
            </div>
            <div className="row">
              <div className="col">
                <input
                  type="text"
                  name="email"
                  placeholder="email here"
                  onChange={handleChange}
                  className="form-control"
                />
              </div>
            </div>

            <div className="row mt-4">
              <div className="col p-2">Password</div>
            </div>
            <div className="col">
              <input
                type="password"
                name="password"
                placeholder="password"
                onChange={handleChange}
                className="form-control"
              />
            </div>

            <div className="d-grid gap-2 col-8 mx-auto mt-4">
              <button className="btn btn-primary" onClick={handleSignup}>
                Signup
              </button>
            </div>

            <div className="mt-3 text-center fs-6">
              Already have an account?{" "}
              <a
                href="#"
                onClick={() => setIsLogin(true)}
                className="text-primary text-decoration-none"
              >
                Login
              </a>
            </div>
          </>
        )}
      </div>
    </div>
  );
}

export default Login;













// import React, { useState } from "react";
// import { loginUser, registerUser } from "./services/api";

// function Login() {
//   const [isLogin, setIsLogin] = useState(true);

//   // FORM STATES
//   const [form, setForm] = useState({
//     name: "",
//     email: "",
//     password: "",
//     confirmPassword: "",
//   });

//   const handleChange = (e) => {
//     setForm({ ...form, [e.target.name]: e.target.value });
//   };

//   // HANDLE LOGIN
//   const handleLogin = async () => {
//     try {
//       const res = await loginUser({
//         email: form.email,
//         password: form.password,
//       });
//       alert(res.data.message);
//     } catch (err) {
//       alert(err.response.data.message);
//     }
//   };

//   // HANDLE REGISTER
//   const handleSignup = async () => {
//     try {
//       const res = await registerUser({
//         name: form.name,
//         email: form.email,
//         password: form.password,
//       });
//       alert(res.data.message);
//       setIsLogin(true);
//     } catch (err) {
//       alert(err.response.data.message);
//     }
//   };

//   return (
//     <div
//       style={{
//         height: "100vh",
//         backgroundColor: "aquamarine",
//         display: "flex",
//         justifyContent: "center",
//         alignItems: "center",
//       }}
//     >
//       <div
//         style={{
//           backgroundColor: "white",
//           borderRadius: "12px",
//           padding: "30px",
//           width: "600px",
//         }}
//       >
//         {/* ------------ TOGGLE BUTTONS ------------ */}
//         <div style={{ display: "flex", marginBottom: "20px" }}>
//           <button
//             onClick={() => setIsLogin(true)}
//             style={{
//               flex: 1,
//               padding: "10px",
//               backgroundColor: isLogin ? "#003b5b" : "#eee",
//               color: isLogin ? "#fff" : "#333",
//               border: "2px",
//               borderTopLeftRadius: "10px",
//               borderTopRightRadius: "10px",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             Login
//           </button>

//           <button
//             onClick={() => setIsLogin(false)}
//             style={{
//               flex: 1,
//               padding: "10px",
//               backgroundColor: !isLogin ? "#003b5b" : "#eee",
//               color: !isLogin ? "#fff" : "#333",
//               border: "2px",
//               borderTopLeftRadius: "10px",
//               borderTopRightRadius: "10px",
//               cursor: "pointer",
//               fontWeight: "bold",
//             }}
//           >
//             Signup
//           </button>
//         </div>

//         {/* ------------ LOGIN FORM ------------ */}
//         {isLogin ? (
//           <>
//             <h2 className="mb-4 fs-3">Login Form</h2>

//             <div className="row mb">
//               <div className="col p-2">Email</div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="email here"
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mt-3">
//               <div className="col p-2">password</div>
//             </div>
//             <div className="row mb-3">
//               <div className="col">
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="d-grid gap-2 col-6 mx-auto">
//               <button className="btn btn-primary" onClick={handleLogin}>
//                 Login
//               </button>
//             </div>

//             <div className="mt-3 text-center fs-6">
//               Not a member?{" "}
//               <a
//                 href="#"
//                 onClick={() => setIsLogin(false)}
//                 className="text-primary text-decoration-none"
//               >
//                 Signup now
//               </a>
//             </div>
//           </>
//         ) : (
//           <>
//             {/* ------------ SIGNUP FORM ------------ */}
//             <h2 className="mb-5 fs-4">Signup Form</h2>

//             <div className="row">
//               <div className="col">Name</div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <input
//                   type="text"
//                   name="name"
//                   placeholder="Full name"
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mt-3">
//               <div className="col">Email</div>
//             </div>
//             <div className="row">
//               <div className="col">
//                 <input
//                   type="text"
//                   name="email"
//                   placeholder="email here"
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             </div>

//             <div className="row mt-4">
//               <div className="col p-2">Password</div>
//               </div>
//               <div className="col">
//                 <input
//                   type="password"
//                   name="password"
//                   placeholder="password"
//                   onChange={handleChange}
//                   className="form-control"
//                 />
//               </div>
//             {/* </div> */}

//             <div className="d-grid gap-2 col-8 mx-auto mt-4">
//               <button className="btn btn-primary" onClick={handleSignup}>
//                 Signup
//               </button>
//             </div>

//             <div className="mt-3 text-center fs-6">
//               Already have an account?{" "}
//               <a
//                 href="#"
//                 onClick={() => setIsLogin(true)}
//                 className="text-primary text-decoration-none"
//               >
//                 Login
//               </a>
//             </div>
//           </>
//         )}
//       </div>
//     </div>
//   );
// }

// export default Login;
