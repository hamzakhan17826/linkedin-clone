import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Registration from "./pages/Registration";
import Login from "./pages/Login";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <>
        <Route path="/signup" element={<Registration />} />
        <Route path="/login" element={<Login />} />
      </>
    )
  );
  return <RouterProvider router={router} />;
}

export default App;
