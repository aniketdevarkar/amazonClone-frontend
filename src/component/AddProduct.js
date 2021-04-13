import React, { useContext, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { addProduct } from "../apicalls";
import { WrapperContext } from "../loginAndRegister/WrapperRoute";

function AddProduct() {
  const [file, setFile] = useState();
  const description = useRef("");
  const productName = useRef("");
  const productPrice = useRef("");
  const { token } = useContext(WrapperContext);
  const submit = async (event) => {
    event.preventDefault();

    const result = await addProduct({
      image: file,
      description: description.current.value,
      productName: productName.current.value,
      productPrice: productPrice.current.value,
      token: token,
    });
    alert(result.message);
  };

  const fileSelected = (event) => {
    const file = event.target.files[0];
    setFile(file);
  };
  return (
    <div className="login">
      <Link to="/admin/products">
        <img
          className="login__logo"
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png"
          alt="amazon Icon"
        />
      </Link>

      <div className="login__container">
        <form>
          <h1>Add product</h1>
          <h5>Name of Product</h5>
          <input type="text" ref={productName} required />
          <h5>Price in Rupees</h5>
          <input type="text" ref={productPrice} required />
          <h5>Image of Product</h5>
          <input
            onChange={fileSelected}
            type="file"
            accept="image/*"
            required
          />
          <h5>Product description</h5>

          <textarea
            type="textarea"
            rows="4"
            cols="33"
            ref={description}
            required
          />

          <button
            className="login__signInButton"
            type="submit"
            onClick={submit}
          >
            Add Product
          </button>
        </form>
      </div>
    </div>
  );
}

export default AddProduct;
