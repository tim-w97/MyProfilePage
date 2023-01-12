import { createHashRouter, RouterProvider } from "react-router-dom";
import CVPage from "./pages/CVPage";
import WelcomePage from "./pages/WelcomePage";

function App() {
  const router = createHashRouter([
    {
      path: "/",
      element: <WelcomePage />,
    },
    {
      path: "/lebenslauf",
      element: <CVPage />,
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;
