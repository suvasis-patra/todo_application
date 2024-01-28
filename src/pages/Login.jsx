import { useForm } from "react-hook-form";
import { Button, Input } from "../components";
import { customApirequestHandler } from "../utils";
import { useNavigate } from "react-router-dom";

function Login() {
  const navigation = useNavigate();
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting } = formState;
  const loginUser = async (data) => {
    try {
      const response = await customApirequestHandler.post(
        "/api/v1/user/login",
        data
      );
      if (response.status === 200) navigation("/todos");
      return response?.data;
    } catch (error) {
      console.log("something went wrong", error.message);
    }
  };
  const onSubmit = (data) => {
    loginUser(data);
    reset();
  };
  return (
    <section className="h-screen flex justify-center items-center font-mono">
      <div className="shadow-2xl rounded-lg py-10 px-16 bg-blue-400">
        <h3 className="text-2xl font-bold text-center capitalize mb-4">
          Login
        </h3>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="email"
              label="email"
              placeholder="Enter a vaild email"
              type="email"
              id="email"
              {...register("email")}
            />
            <Input
              name="password"
              label="password"
              placeholder="Enter password"
              type="password"
              id="password"
              {...register("password")}
            />
            <div className="flex justify-center">
              <Button
                content="Login"
                type="submit"
                className="px-4 py-2"
                disabled={isSubmitting}
              />
            </div>
          </form>
        </div>
      </div>
    </section>
  );
}
export default Login;
