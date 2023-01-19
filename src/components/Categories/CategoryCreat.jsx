import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

export default function CategoryCreat() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const navigate = useNavigate();
  const submit = () => {
    let statusCode;
    fetch("https://demo-api-one.vercel.app/api/categories", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: localStorage.getItem("token"),
      },
      body: JSON.stringify({ name, description }),
    })
      .then((res) => {
        statusCode = res.status;
        return res.json();
      })
      .then((data) => {
        if (statusCode === 200) {
          toast.success("amjilttai nemegdlee");
        } else {
          if (statusCode === 403 || statusCode === 401) {
            navigate("/signin");
          }
          toast.error(data.message);
        }
      })
      .catch((err) => {
        console.log(err);
        toast.error("Aldaa garlaa");
      });
  };

  return (
    <>
      <Form
        onSubmit={(e) => {
          e.preventDefault();
          submit();
        }}
      >
        <Form.Group className="mb-3" controlId="Form.name">
          <Form.Label>Name</Form.Label>
          <Form.Control
            value={name}
            onChange={(e) => {
              setName(e.target.value);
            }}
            type="text"
            placeholder="name of the aricle"
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="form.Descripition">
          <Form.Label>Descripition</Form.Label>
          <Form.Control
            value={description}
            onChange={(e) => {
              setDescription(e.target.value);
            }}
            as="textarea"
            rows={3}
          />
        </Form.Group>
      </Form>
      <Button variant="secondary">Close</Button>

      <Button variant="primary">Save Changes</Button>
    </>
  );
}
