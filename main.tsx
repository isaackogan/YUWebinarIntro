import React from 'react'
import * as ReactDOM from "react-dom/client";
import {createBrowserRouter, RouteObject, RouterProvider} from "react-router-dom";
import './index.css'
import pages from "./assets/pages.json";
import Page from "./components/Page/Page";
import Error404 from "./components/404";


const routeList: RouteObject[] = [
    {
        path: "*",
        element: <Error404 pages={pages} />
    }
];

export type PageConfig = {
    title: string,
    subtitle: string
}


for (const [path, page] of Object.entries((pages as Record<string, PageConfig>))) {
    routeList.push({
        path: path,
        element: <Page {...page} />
    })
}

const router = createBrowserRouter(routeList);


ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
      <RouterProvider router={router} />
  </React.StrictMode>,
)
