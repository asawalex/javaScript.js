import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import Rout from "./router/Rout";

function App() {
  const router = createBrowserRouter([
    ...Rout
  ])
  return (
    <div>
      <RouterProvider router={router} />
    </div>
  );
}

export default App;
