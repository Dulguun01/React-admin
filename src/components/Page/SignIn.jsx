import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function SingIn() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const TOAST_CONFIG = {
    position: "bottom-right",
    autoCLose: 5000,
    hideProgressBar: false,
    theme: "colored",
  };

  const submitSignIn = () => {
    let status = 200;
    fetch("https://demo-api-one.vercel.app/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password }),
    })
      .then((res) => {
        status = res.status;
        return res.json();
      })
      .then((data) => {
        if (status !== 200) {
          toast.error(data.message, TOAST_CONFIG);
        } else {
          toast.success(data.message, TOAST_CONFIG);
          localStorage.setItem('token',data.body)
          navigate("/signin/success");
         
        }
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <>
      <div className="w-100 min-vh-100 d-flex align-items-center justify-content-center">
        <div className="col-sm-4">
          <div className="card">
            <div className="card-body">
              <Form 
              onSubmit={((e)=>{
                e.preventDefault();
                submitSignIn()
              })}>
                <Form.Group 
                 className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                  value={email}
                  onChange={((e)=>{
                    setEmail(e.target.value)
                  })}
                   type="email" placeholder="Enter email" />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group 
               
                className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                  value={password}
                   onChange={((e)=>{
                    setPassword(e.target.value)
                  })}
                  type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group className="mb-3" controlId="formBasicCheckbox">
                  <Form.Check type="checkbox" label="Check me out" />
                </Form.Group>
                <div className="d-flex">
                  <Button variant="primary" type="submit">
                  sign in
                  </Button>
                  <Link to={"/SignUp"}>
                    <Button variant="primary" type="button">
                      Burtguuleh
                    </Button>
                  </Link>
                </div>
              </Form>
            </div>
          </div>
        </div>
      </div>
      <ToastContainer />
    </>
  );
}
