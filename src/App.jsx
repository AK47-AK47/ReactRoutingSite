import React from 'react';
import './App.css';
/*
import Header from './components/Header';
import Footer from './components/Footer.jsx';
import MainBody from './components/MainBody.jsx';
*/
import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from 'react-router-dom';
//components
import Home from './pages-views/Home.jsx';
import AboutUs from './pages-views/AboutUs.jsx';
import Products from './pages-views/Products.jsx';
import Product from './pages-views/Product.jsx';
import Users from './pages-views/Users.jsx';
import ContactUs from './pages-views/ContactUs.jsx';

import RootLayout from './components/RootLayout.jsx';
//loaders
import { loadUsers } from './loaders/loaders.jsx';

/*
const myRouter = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="/about-us" element={<AboutUs />} />
      <Route path="/products" element={<Products />} />
      <Route path="/product/:id" element={<Product />} />
      <Route path="/contact-us" element={<ContactUs />} />
    </Route>
  )
);
*/

const myRouter = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <Home />,
      },
      {
        path: '/about-us',
        element: <AboutUs />,
      },
      {
        path: '/products',
        element: <Products />,
      },
      {
        path: '/product/:id',
        element: <Product />,
      },
      {
        path: 'users',
        element: <Users />,
        loader: loadUsers,
      },
      {
        path: 'contact-us',
        element: <ContactUs />,
      },
    ],
  },
]);

export default function App() {
  return (
    <>
      {/*
      <Header title={name} />
      <MainBody />
      <Footer />
      */}
      <RouterProvider router={myRouter} />
    </>
  );
}
