import { createBrowserRouter,  RouterProvider } from "react-router";
import {routesConfig} from './RoutesConfig';

export function AppWithRoutes(){
    const router = createBrowserRouter(routesConfig);
    return <div>
        <RouterProvider router={router} />
    </div>
}