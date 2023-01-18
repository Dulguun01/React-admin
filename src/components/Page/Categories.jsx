import { useEffect, useState } from "react";
import { toast } from "react-toastify";
import CategoryList from "../Categories/CategoryList";
import DynamicModal from "../utits/DynamicModal";
import CategoryCreat from "./components/Categories/CategoryCreat";

export default function Categories() {
  const [show, setShow] = useState(false);
  const handleClose = () => {
    setShow(false);
  };

  const [categories, setCategoreis] = useState([]);
  useEffect(() => {
    fetch("https://demo-api-one.vercel.app/api/categories")
      .then((res) => res.json())
      .then((data) => {
        setCategoreis(data.body);
      })
      .catch((err) => {
        console.log(err);
        toast.error("Aldaa garlaa");
      });
  }, []);

  return (
    <>
      <div className="container-sm body-container">
        <h1>Heading</h1>
        <CategoryList items={categories} />
        <DynamicModal
          show={show}
          handleClose={handleClose}
          title="Create category"
          content={<CategoryCreat />}
        />
      </div>
    </>
  );
}
