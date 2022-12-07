import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { Container, Row, Col } from "react-bootstrap";
import Dropdown from "react-bootstrap/Dropdown";

const ProductDetail = () => {
  const [product, setProduct] = useState(null);
  const { id } = useParams();
  const getProductDetail = async () => {
    let url = `https://my-json-server.typicode.com/cchloe0927/HNM-clone/products/${id}`;
    let response = await fetch(url);
    let data = await response.json();
    setProduct(data);
  };
  console.log(product);

  useEffect(() => {
    getProductDetail();
  }, []);

  return (
    <Container>
      <Row>
        <Col className="product-img">
          <img src={product?.img} />
        </Col>
        <Col>
          <div>{product?.title}</div>
          <div className="product-price">₩ {product?.price}</div>
          <Dropdown className="dropdown-box">
            <Dropdown.Toggle variant="Secondary" id="dropdown-basic">
              사이즈 선택
            </Dropdown.Toggle>
            <Dropdown.Menu>
              <Dropdown.Item href="#">s</Dropdown.Item>
              <Dropdown.Item href="#">M</Dropdown.Item>
              <Dropdown.Item href="#">L</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
          <button className="product-btn">추가</button>
        </Col>
      </Row>
    </Container>
  );
};

export default ProductDetail;
