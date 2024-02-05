/*
import { Route, Routes } from 'react-router-dom';
import Home from '../pages-views/Home.jsx';
import AboutUs from '../pages-views/AboutUs.jsx';
import Products from '../pages-views/Products.jsx';
import Product from '../pages-views/Product.jsx';
import ContactUs from '../pages-views/ContactUs.jsx';
*/
import { Outlet, useRouteError } from 'react-router-dom';

export default function MainBody() {

  let error = useRouteError();
  //console.log(error);
  const isError = (error != null);
  console.log('is Error? ', isError);
  console.log(error);
  
  return (
    <>
      {/*
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    */}
      <Outlet />
      {isError ? (
        <>
          <p>Error details:</p>
          {/*printed when I throw new Error('User not found') on loader*/}
          <p>{error.name}</p>
          <p>{error.message}</p>
          <p>{error.stack}</p>
          <p>----------</p>
        </>
      ) : (
        <p></p>
      )}
    </>
  );
}
