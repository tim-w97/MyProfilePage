import { createBrowserRouter, RouterProvider } from "react-router-dom";
import CVPage from "./pages/CVPage";
import WelcomePage from "./pages/WelcomePage";
import PageNotFound from "./pages/PageNotFound";

function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "/lebenslauf",
      element: <CVPage />,
    },
    {
      path: "*",
      element: <PageNotFound/>
    }
  ]);

  return <RouterProvider router={router} />;
}

export default App;
