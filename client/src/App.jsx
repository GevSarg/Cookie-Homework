import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";
import ROUTES from "./routes";
import Layouts from "./pages/Layouts";
import { Home, Error, Login, Register, User } from "./pages";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path={ROUTES.Home} element={<Layouts />}>
        <Route index element={<Home />} />
        <Route path={ROUTES.Login} element={<Login />} />
        <Route path={ROUTES.Register} element={<Register />} />
        <Route path={ROUTES.User} element={<User />} />
        <Route path={ROUTES.Error} element={<Error />} />
      </Route>
    )
  );

  return <RouterProvider router={router} />;
}

export default App;
