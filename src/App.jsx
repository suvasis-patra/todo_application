import "./App.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { TodoForm, Todos } from "./components";
import { Login, Register, UserTodo, HomeLayout } from "./pages";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { RecoilRoot } from "recoil";

const queryClient = new QueryClient();

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomeLayout />,
    children: [
      {
        index: true,
        element: <Todos />,
      },
      { path: "new", element: <TodoForm /> },
      { path: "todos", element: <UserTodo /> },
    ],
  },
  {
    path: "/register",
    element: <Register />,
  },
  {
    path: "/login",
    element: <Login />,
  },
]);

function App() {
  return (
    <RecoilRoot>
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
      </QueryClientProvider>
    </RecoilRoot>
  );
}

export default App;
