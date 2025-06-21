import React, { lazy } from "react";
import ReactDOM from "react-dom/client";
import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Contact from "./Components/Contact";
import { Outlet } from "react-router-dom";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import RestaurantMenuBody from "./Components/RestaurantMenuBody";
import { lazy, Suspense } from "react";
import './index.css'

const Grocery = lazy(()=> import("./Components/Grocery"))// Sometimes we got an error of react suspension because our Grocery component has to took some time to render on to the web page, and React is very fast, React cant wait for data coming from Grocery component and what happens is React try to load Grocery component but the code isnt there so it throws an error. To tackle this error we use Suspense component, and we have to wrap our component inside it and we have to give it a placeholder, so what happens is we have to give that Suspense a fallback(what should React render when the code isnt available) we need this placeholder fallback becuase when we are on the home page our code of Grocery is not there, so React tries to load something but it cannot load until the Grocery code is there, so meanwhile React wants something to be present on that screen and we can give that inside fallback inside suspense. and we can pass JSX in fallback.
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
                path: "/grocery",
                element: <Suspense fallback={<h1>Loading...</h1>}><Grocery/></Suspense>
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
 


//!Lifting State Up Concept:

// import React from "react";
// import ReactDOM from "react-dom/client";
// import { LiftStateUp } from "./Components/LiftStateUp";
// const AppLayout =()=>{
//     return(
//         <LiftStateUp/>
//     )
// }

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<AppLayout />)


