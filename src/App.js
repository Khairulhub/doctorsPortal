import "./App.css";
import Navbar from "./Pages/Shared/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./Pages/Home/Home";
import About from "./Pages/About/About";

import LogIn from "./Pages/LogIn/LogIn";
import SignUp from "./Pages/LogIn/SignUp";
import RequireAuth from "./Pages/LogIn/RequireAuth";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Deshbord from "./Pages/Deshbord/Deshbord";

// import MyReview from "./Pages/Deshbord/MyReview";

import History from "./Pages/Deshbord/History";


import Task from "./Pages/Task/Task";
import Profile from "./Pages/Deshbord/Profile";
import AllUser from "./Pages/Deshbord/AllUser";
import AdminUsers from "./Pages/Deshbord/Admin";

function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route
          path="task"
          element={
            <RequireAuth>
              <Task />
            </RequireAuth>
          }
        />
        <Route
          path="deshbord"
          element={
            <RequireAuth> <Deshbord /> </RequireAuth>
          }
        >
          <Route index element={<Profile></Profile>}></Route>

          {/* <Route path="review" element={<MyReview></MyReview>}></Route> */}
          <Route path="history" element={<History></History>}></Route>
          <Route path="alluser" element={<AllUser></AllUser>}></Route>

          <Route path="users" element={<AdminUsers></AdminUsers>}></Route>
         
        </Route>
        <Route path="login" element={<LogIn></LogIn>} />
        <Route path="signup" element={<SignUp></SignUp>} />
      </Routes>

      <ToastContainer />
    </div>
  );
}

export default App;
