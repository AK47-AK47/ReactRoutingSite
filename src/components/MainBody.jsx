import { Route, Routes } from 'react-router-dom';
import Home from '../pages-views/Home.jsx';
import AboutUs from '../pages-views/AboutUs.jsx';
import Products from '../pages-views/Products.jsx';
import ContactUs from '../pages-views/ContactUs.jsx';

export default function MainBody() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/products" element={<Products />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
    </>
  );
}
