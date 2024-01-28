import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { customApirequestHandler } from "../utils";

function TodoForm() {
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting, isSubmitSuccessful } = formState;
  const onSubmit = (data) => {
    postNewTodo(data);
  };
  const postNewTodo = async (data) => {
    try {
      const response = await customApirequestHandler.post(
        "api/v1/user/createTodos",
        data
      );
    } catch (error) {
      if (error.response) {
        console.error("Response data:", error.response.data);
        console.error("Status code:", error.response.status);
        console.error("Headers:", error.response.headers);
      } else if (error.request) {
        console.error("No response received:", error.request);
      } else {
        console.error("Error:", error.message);
      }
      console.error("Error config:", error.config);
    }
  };
  useEffect(() => {
    if (isSubmitSuccessful) {
      reset();
    }
  }, [isSubmitSuccessful, reset]);

  return (
    <section className="align-element h-screen flex justify-center items-center font-mono">
      <div className="shadow-2xl rounded-lg py-10 px-16 bg-blue-400">
        <h3 className="text-2xl font-bold text-center capitalize mb-4 ">
          create new todo
        </h3>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="mb-4">
            <label htmlFor="title" className="block mb-3 font-semibold">
              Title :
            </label>
            <input
              type="text"
              name="title"
              id="title"
              placeholder="Todo title"
              className="p-4 border-2 rounded-lg w-full border-gray-500 focus:outline-none"
              {...register("title")}
            />
          </div>
          <div className="mb-4">
            <label htmlFor="description" className="block mb-3 font-semibold">
              Description :
            </label>
            <textarea
              type="text"
              name="description"
              id="description"
              placeholder="Todo description"
              className="p-4 border-2 border-gray-500 rounded-lg focus:outline-none"
              {...register("description")}
            />
          </div>
          <div className="flex gap-x-4 items-center mb-4">
            <label htmlFor="status" className="text-lg font-semibold">
              completion status
            </label>
            <input
              type="checkbox"
              name="status"
              id="status"
              className="p-2"
              {...register("status")}
            />
          </div>
          <div className="mt-4 text-center ">
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 py-2 rounded-3xl bg-blue-700 text-lg hover:bg-blue-600 text-white min-w-16 hover:text-black"
            >
              Create
            </button>
          </div>
        </form>
      </div>
    </section>
  );
}

export default TodoForm;
