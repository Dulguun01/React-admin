import "./assets/bootstrap.min.css";
import "./assets/style.css";
import MainContent from "./components/Maincontent";
import Navbar from "./components/Navbar";
import { useState, useEffect } from "react";
// import State from "./State";
import { Routes, Route } from "react-router-dom";
import Home from "./components/Page/Home";
import SingIn from "./components/Page/SignIn";
import SignInError from "./components/Page/SignInError";
import SignUp from "./components/Page/SignUp";
import SigninSuccess from "./components/Page/SigninSuccess";
import Categories from "./components/Page/Categories";

const Articles = ({ handleShow  }) => {
  return (
    <>
      <MainContent handleShow={handleShow} />
    </>
  );
};

export function App() {
  const [signedIn, setSignedIn] = useState(false);
  const [show, setShow] = useState(false);
  const [menuSHow, setMenuShow] = useState(false);
  const [me, setMe] = useState(undefined);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    return () => {
      const myData = localStorage.getItem("me");
      if (myData === undefined) {
        setMe(JSON.parse(myData));
      }
    };
  }, []);

  return (
    <>
      <Navbar />
      {/* <State /> */}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route
          path="/Articles"
          element={<Articles handleShow={handleShow} />}
        />
        <Route path="/categories" element={<Categories />} />
      </Routes>
    </>
  );
  if (!me) {
    return (
      <Routes>
        <Route path="/signin" element={<SingIn />} />
        <Route
          path="/signin/success"
          element={<SigninSuccess setMe={setMe} />}
        />
        <Route path="/SignUp" element={<SignUp />} />
        <Route path="*" element={<SignInError />} />
      </Routes>
    );
  }
}

export default App;
