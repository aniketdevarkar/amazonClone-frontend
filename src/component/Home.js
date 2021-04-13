import React, { useEffect, useState } from "react";

import "bootstrap/dist/css/bootstrap.min.css";
import { getAllProducts } from "../apicalls";
import "./Home.css";
import Product from "./Product";
import { Card, Col, Container, Row } from "react-bootstrap";

function Home() {
  const [allProducts, setAllProducts] = useState([]);
  useEffect(async () => {
    const data = await getAllProducts();
    setAllProducts(data);
  }, []);

  return (
    <Container fluid>
      <Row>
        <img
          src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
          alt="amazon banner"
          className="home__image"
        />
        {/* product id, title,price,rating,image */}
      </Row>
      <Row>
        {allProducts.map((product) => {
          return (
            <Col xs={12} sm={6} md={4} lg={3} mb={4} className="mb-3">
              <Product
                key={product._id}
                id={product._id}
                title={product.productName}
                price={parseFloat(product.productPrice)}
                image={product.image_url}
                description={product.description}
                seller={product.seller}
              />
            </Col>
          );
        })}
      </Row>
    </Container>
  );
}
export default Home;
