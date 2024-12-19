import { createBrowserRouter } from "react-router-dom";
import Main from "../layout/Main";
import Home from '../Home';
import Contact from '../pages/Contact'; // Import the ContactUs component
import Product from '../pages/Product';
import Payment from '../pages/Payment';
import Confirmation from "../pages/Confirmation";
import ProductDetails from "../pages/ProductDetails";
import Login from "../pages/Login";
import Register from "../pages/Register";
import Wishlist from "../pages/Wishlist";
import Mycart from "../pages/Mycart";
import Notifications from "../pages/Notifications";

const mainRoutes = [
    {
        path: '/',
        element: <Home />,
    },
    {
        path: '/contact', // Define the contact page route
        element: <Contact />,
    },
    {
        path: '/product', // Define the contact page route
        element: <Product />,
    },
    {
        path: '/payment', // Define the contact page route
        element: <Payment />,
    },
    {
        path: '/confirmation', // Define the contact page route
        element: <Confirmation />,
    },
    {
        path: '/ProductDetails', // Define the contact page route
        element: <ProductDetails />,
    },
    {
        path: '/login', // Define the contact page route
        element: <Login />,
    },
    {
        path: '/register', // Define the contact page route
        element: <Register />,
    },
    {
        path: '/wishlist', // Define the contact page route
        element: <Wishlist />,
    },
    {
        path: '/mycart', // Define the contact page route
        element: <Mycart />,
    },
    {
        path: '/notification', // Define the contact page route
        element: <Notifications />,
    },

];

const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: mainRoutes, // Pass the mainRoutes as children
    },
    // {
    //     path: '/contact', 
    //     element: <Contact />,
    // },
]);

export default router;
