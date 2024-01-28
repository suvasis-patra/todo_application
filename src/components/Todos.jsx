import { customApirequestHandler } from "../utils";
import TodoCard from "./TodoCard";
import { useQuery } from "@tanstack/react-query";

const fetchTodos = async () => {
  try {
    const response = await customApirequestHandler.get(
      "/api/v1/todo/getAllTodos"
    );
    return response.data;
  } catch (error) {
    console.log("something went wrong", error.message);
  }
};
// BFCFE7
// F8EDFF
// 3D3B40
function Todos() {
  const { data, error, isLoading } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchTodos,
  });

  return isLoading ? (
    <div className="h-screen flex justify-center items-center font-mono">
      <h3 className="text-2xl font-semibold">Loading...</h3>
    </div>
  ) : (
    <div className="font-mono flex justify-center max-w-4xl mx-auto items-center mt-20">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
        {data.todos.map((todo) => (
          <TodoCard
            key={todo._id}
            title={todo.title}
            description={todo.description}
            id={todo._id}
          />
        ))}
      </div>
    </div>
  );
}

export default Todos;
