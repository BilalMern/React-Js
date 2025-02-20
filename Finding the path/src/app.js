import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RestaurantMenuBody from "./Components/RestaurantMenuBody";
const AppLayout = ()=>{
    return(
        <>
        <Header/>
        <Outlet/>
        </>
    )
}

const appRouter= createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children:[
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path: "/contact",
                element: <Contact/>
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantMenuBody/>
            }
        ]
    }
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter} />)