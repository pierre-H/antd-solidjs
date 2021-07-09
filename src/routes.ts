import { lazy } from "solid-js";
import { RouteDefinition } from "solid-app-router";

import Home from "./pages/home";
import AboutData from "./pages/about.data";

export const routes: RouteDefinition[] = [
    {
        path: "/",
        component: Home,
    },
    {
        path: "/buttons",
        component: lazy(() => import("./pages/buttons")),
    },
    {
        path: "/about",
        component: lazy(() => import("./pages/about")),
        data: AboutData,
    },
    {
        path: "**",
        component: lazy(() => import("./errors/404")),
    },
];
