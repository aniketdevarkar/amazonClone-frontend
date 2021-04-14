import React, { useContext, useState } from "react";
import { Card } from "react-bootstrap";
import { useHistory } from "react-router";
import { WrapperContext } from "../loginAndRegister/WrapperRoute";
import "./Product.css";
import { getRandomInt } from "./Reducer";
import { useStateValue } from "./StateProvider";
function Product({ id, title, image, price, description, seller }) {
  const [{}, dispatch] = useStateValue();
  const [stars] = useState(getRandomInt(1, 6));
  const history = useHistory();
  const { user } = useContext(WrapperContext);
  const addToBasket = () => {
    //add items to basket
    if (user) {
      dispatch({
        type: "ADD_TO_BASKET",
        item: {
          id: id,
          title: title,
          image: image,
          price: price,
          description: description,
          seller: seller,
          stars: stars,
        },
      });
    } else {
      return history.push("/login");
    }
  };

  return (
    <div className="product1">
      <Card>
        <Card.Img
          title={`Description: ${description}`}
          variant="top"
          src={image}
          className="image"
        />
        <Card.Body>
          <Card.Title>{title}</Card.Title>
          <Card.Text>
            <div className="product__rating">
              {Array(stars)
                .fill()
                .map((_) => (
                  <p>⭐</p>
                ))}
            </div>
            <span className="product__price">Price: ₹{price}</span>
          </Card.Text>
        </Card.Body>
        <Card.Footer className="footer">
          <small className="text-muted">{`seller: ${seller}`}</small>
          <button className="button" onClick={addToBasket}>
            Add to Basket
          </button>
        </Card.Footer>
      </Card>
    </div>
  );
}

export default Product;
