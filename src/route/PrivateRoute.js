import React from 'react';
import ProductDetail from '../page/ProductDetail';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({ authenticate }) => {
  //조건에 따라 페이지 보여주고 false면 경로를 /login으로 튕겨줘라!! -> Navigate를 사용함
  return authenticate === true ? <ProductDetail /> : <Navigate to='/login' />;
};

export default PrivateRoute;
