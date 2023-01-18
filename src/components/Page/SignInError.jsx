import { Link } from "react-router-dom";


export default function SignInError() {
  return (
    <>
      <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
        <h1 className="fw-bold text-uppercase">Page Not found</h1>
        <Link
          className="btn btn-xs btn-primary me-3"
          rel="stylesheet"
          to={"/SignIn"}
        >
          sign in
        </Link>
        <Link
          className="btn btn-xs btn-primary me-3"
          rel="stylesheet"
          to={"/SignUp"}
        >
          sign up
        </Link>
      </div>
    </>
  );
}
