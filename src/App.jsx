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
  //createRoutesFromElements,
  //Route,
} from 'react-router-dom';
//components
import Home from './pages-views/Home.jsx';
import AboutUs from './pages-views/AboutUs.jsx';
import Products from './pages-views/Products.jsx';
import Product from './pages-views/Product.jsx';
import Users from './pages-views/Users.jsx';
import UsersError from './pages-views/UsersError.jsx';
import User from './pages-views/User.jsx';
import UserError from './pages-views/UserError.jsx';
import NewUser from './pages-views/NewUser.jsx';
import ContactUs from './pages-views/ContactUs.jsx';
//layouts
import RootLayout from './components/RootLayout.jsx';
import ErrorLayout from './components/ErrorLayout.jsx';
//loaders
import { loadUsers, loadUser } from './loaders/loaders.jsx';
//actions
import { validateAndSubmitNewUser } from './actions/validateAndSubmitNewUser.jsx';

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
    //catches every error on every child Route that NOT HAVE a errorElement property
    errorElement: <ErrorLayout />,
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
        path: '/users',
        element: <Users />,
        loader: loadUsers,
        errorElement: <UsersError />,
      },
      {
        path: '/user/:id',
        element: <User />,
        loader: loadUser,
        //errorElement: <UserError />,
      },
      {
        action: validateAndSubmitNewUser,
        path: '/new-user',
        element: <NewUser />,
      },
      {
        path: '/contact-us',
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
