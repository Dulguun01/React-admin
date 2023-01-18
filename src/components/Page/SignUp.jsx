import { useState } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

export default function SignUp() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [repassword, setRepassword] = useState("");
  const navigate = useNavigate();

  const TOAST_CONFIG = {
    position: "bottom-right",
    autoCLose: 5000,
    hideProgressBar: false,
    theme: "colored",
  };

  const submitSignup = () => {
    let status = 200;
    fetch("https://demo-api-one.vercel.app/api/signup", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ email, password, repassword }),
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
          setTimeout(() => {
            navigate("/signin");
          }, 2000);
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
                onSubmit={(e) => {
                  e.preventDefault();
                  submitSignup();
                }}
              >
                <Form.Group className="mb-3" controlId="formBasicEmail">
                  <Form.Label>Email address</Form.Label>
                  <Form.Control
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                    }}
                    type="email"
                    placeholder="Enter email"
                  />
                  <Form.Text className="text-muted">
                    We'll never share your email with anyone else.
                  </Form.Text>
                </Form.Group>

                <Form.Group
                  value={password}
                  onChange={(e) => {
                    setPassword(e.target.value);
                  }}
                  className="mb-3"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Password</Form.Label>
                  <Form.Control type="password" placeholder="Password" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <Form.Group
                  value={repassword}
                  onChange={(e) => {
                    setRepassword(e.target.value);
                  }}
                  className="mb-3"
                  controlId="formBasicPassword"
                >
                  <Form.Label>Repassword</Form.Label>
                  <Form.Control type="password" placeholder="Repassword" />
                </Form.Group>
                <Form.Group
                  className="mb-3"
                  controlId="formBasicCheckbox"
                ></Form.Group>
                <div className="d-flex">
                  <Button variant="primary" type="submit">
                    Submit
                  </Button>
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
