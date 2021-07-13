import { lazy } from "solid-js";
import { RouteDefinition } from "solid-app-router";

import Home from "./pages/home";

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
        path: "/icons",
        component: lazy(() => import("./pages/icons")),
    },
    {
        path: "**",
        component: lazy(() => import("./errors/404")),
    },
];
