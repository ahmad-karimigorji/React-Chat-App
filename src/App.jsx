import PrivateRoute from "./routes/PrivateRoute";
import { AuthProvider } from "./context/AuthContext";
import ChatRoom from "./pages/ChatRoom";
import Layout from "./pages/Layout";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    // errorElement: <Layout outlet={<ErrorPage />} />,
    children: [
      { index: true, element: <Login /> },
      {
        path: "chat",
        element: (
          <PrivateRoute>
            <ChatRoom />
          </PrivateRoute>
        ),
      },
      { path: "signup", element: <Signup /> },
    ],
  },
]);

function App() {
  return (
    <>
      <AuthProvider>
        <RouterProvider router={router} />
      </AuthProvider>
    </>
  );
}

export default App;
