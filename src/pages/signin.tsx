import React from "react";
import { useForm } from "react-hook-form";
import { login } from "../api/auth";
type Props = {};

const SignIn = (props) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onHandleSubmit = async (data) => {
    const user = await login(data);
    console.log("user", user.data.accessToken);
    localStorage.setItem("user", JSON.stringify(user));
  };
  return (
    <div>
      <form action="" onSubmit={handleSubmit(onHandleSubmit)}>
        <input type="email" {...register("email")} />
        <input type="password" {...register("password")} />
        <button>Login</button>
      </form>
    </div>
  );
};

export default SignIn;
