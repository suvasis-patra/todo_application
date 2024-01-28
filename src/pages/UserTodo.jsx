import { useQuery } from "@tanstack/react-query";
import { customApirequestHandler } from "../utils";
import { TodoCard } from "../components";
const fetchUserTodos = async () => {
  try {
    const response = await customApirequestHandler.get("/api/v1/todo/getTodo");
    return response.data;
  } catch (error) {
    console.log("something went wrong while fetching the data", error.message);
  }
};

function EmptyUserTodo() {
  return (
    <div className="">
      <h1 className="text-2xl font-bold">There is no todo created by you...</h1>
    </div>
  );
}

function UserTodo() {
  const { data, isLoading, error } = useQuery({
    queryKey: ["todos"],
    queryFn: fetchUserTodos,
  });
  return (
    <>
      <div className="font-mono flex  justify-center max-w-4xl mx-auto items-center mt-20">
        {data?.todos.length === 0 ? (
          <EmptyUserTodo />
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 ">
            {data?.todos.map((todo) => (
              <TodoCard
                key={todo._id}
                title={todo.title}
                description={todo.description}
              />
            ))}
          </div>
        )}
      </div>
    </>
  );
}

export default UserTodo;
