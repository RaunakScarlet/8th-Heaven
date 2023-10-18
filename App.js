import React from "react";
import ReactDOM from "react-dom/client";
import Header from "./src/Header";
import Body from "./src/Body";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import About from "./src/About";
import Error from "./src/Error";
import Footer from "./src/Footer";
import Contact from "./src/Contact";





const AppLayout = () => {
    return <div className="app">
        <Header />
        <Outlet/>
        <Footer/>
    </div>;
};

const appRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Body />,
                errorElement: <Error />,
            },
            {
                path: "/about",
                element: <About />,
                errorElement: <Error />,
            },
            {
                path: "/contact",
                element: <Contact />,
                errorElement: <Error />,
            },
        ],
    }
]);


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={appRouter}/>);
