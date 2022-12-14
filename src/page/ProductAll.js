import { Container, Row, Col } from "react-bootstrap";
import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../component/ProductCard";
//redux
import { productAction } from "../redux/actions/productAction"; //객체로 반환한거 {객체명} 이렇게 들고와야함
import { useDispatch, useSelector } from "react-redux";

const ProductAll = () => {
  //disport 초기 설정
  const dispatch = useDispatch();
  //useSelect 상태 값 읽어오기
  const productList = useSelector((state) => state.product.productList);
  const [query, setQuery] = useSearchParams();
  const getProducts = () => {
    let searchQuery = query.get("q") || "";
    console.log("쿼리값은?", searchQuery);
    dispatch(productAction.getProducts(searchQuery)); //바로 store가 아닌 미들웨어에 가게 설정
  };
  useEffect(() => {
    getProducts();
  }, [query]);

  return (
    <div>
      <Container>
        <Row>
          {productList.map((menu, index) => (
            <Col key={index} lg={3}>
              <ProductCard item={menu} />
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default ProductAll;
