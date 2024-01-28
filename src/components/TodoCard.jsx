import { useMutation, useQueryClient } from "@tanstack/react-query";
import { customApirequestHandler } from "../utils";
import Button from "./Button";
import { useState, useEffect } from "react";
import { useRecoilValueLoadable } from "recoil";
import { authState } from "../storage/atom/auth";
function TodoCard({ title, description, id }) {
  const queryClient = useQueryClient();
  const userAuthState = useRecoilValueLoadable(authState);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const deleteTodo = async (id) => {
    try {
      console.log(id);
      const response = await customApirequestHandler.delete(
        "api/v1/todo/deleteTodo",
        {
          data: { id },
        }
      );
      return response.data;
    } catch (error) {
      console.log("something went wrong", error.message);
    }
  };
  const deleteTodoMutation = useMutation({
    mutationFn: deleteTodo,
    onSuccess: () => queryClient.invalidateQueries(["todos"]),
  });
  const handleDeleteTodo = () => deleteTodoMutation.mutate(id);

  useEffect(() => {
    setIsAuthenticated(userAuthState.contents.status === 200);
  }, [userAuthState]);
  return (
    <div className="flex flex-col bg-blue-500 gap-2 p-4 relative rounded-lg justify-between hover:shadow-xl">
      <h3 className="text-3xl font-semibold">{title}</h3>
      <p className="text-lg">{description}</p>
      {!isAuthenticated ? null : (
        <div className="flex justify-end gap-5 items-end ">
          <Button content="Edit" className="px-4 py-2" type="submit" />
          <button
            className="px-4 py-2 rounded-3xl bg-blue-700 text-lg hover:bg-blue-600 text-white min-w-16 hover:text-black"
            onClick={() => handleDeleteTodo()}
          >
            Delete
          </button>
        </div>
      )}
    </div>
  );
}

export default TodoCard;
