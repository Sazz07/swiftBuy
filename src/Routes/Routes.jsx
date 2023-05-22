import { createBrowserRouter } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../components/Home/Home";
import Signup from "../components/Signup/Signup";
import Login from "../components/Login/Login";
import Categories from "../components/Categories/Categories";
import Products from "../components/Products/Products";
import Carts from "../components/Carts/Carts";

export const router = createBrowserRouter([
    {
        path: '/',
        element: <Main />,
        children: [
            {
                path: '/',
                element: <Home />
            },
            {
                path: '/home',
                element: <Home />
            },
            {
                path: '/signup',
                element: <Signup />
            },
            {
                path: '/login',
                element: <Login />
            },
            {
                path: '/categories',
                element: <Categories />
            },
            {
                path: '/products/category/:category',
                loader: ({ params }) => fetch(`https://fakestoreapi.com/products/category/${params.category}`),
                element: <Products />
            },
            {
                path: '/cart',
                element: <Carts />
            },
        ]
    }
])