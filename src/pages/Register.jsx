import React from "react";
import { Button, Input } from "../components";
import { useForm } from "react-hook-form";
import { customApirequestHandler } from "../utils";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();
  const { register, handleSubmit, reset, formState } = useForm();
  const { isSubmitting } = formState;
  const registerUser = async (data) => {
    const response = await customApirequestHandler.post(
      "/api/v1/user/signup",
      data
    );
  };
  const onSubmit = (data) => {
    registerUser(data);
    reset();
    navigate("/");
  };
  return (
    <section className="h-screen flex justify-center items-center font-mono">
      <div className="shadow-2xl rounded-lg py-10 px-16 bg-blue-400">
        <h3 className="text-2xl font-bold text-center capitalize mb-4">
          Register
        </h3>
        <div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <Input
              name="username"
              label="username"
              placeholder="Enter username"
              type="text"
              id="username"
              {...register("username")}
            />
            <Input
              name="email"
              label="email"
              placeholder="Enter a valid email"
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
                content="Register"
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
export default Register;
