import * as React from "react";
import Input, { IFormValues } from "./Input";
import Button from "./Button";
import { useForm } from "react-hook-form";
import { useAppDispatch } from "../redux/redux";
import { fetchLogin } from "../redux/slices/authSlice";

const LoginForm = () => {
  const dispatch = useAppDispatch()

  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ mode: "onBlur" });
  const onSubmitForm = (data: any) => {
    console.log(data);
    dispatch(fetchLogin(data))
  };
  return (
    <div className="loginForm">
      <h1>LOGIN</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Input register={register} label="email" type="text" required={true} error={Boolean(errors?.email)}/>
        <div className="errorAlert">
          {errors?.email && (errors?.email?.type === "required" && (
            <p>Field is required.</p>) || <p>{errors?.email?.message}</p>
          )}
        </div>
        <Input
          label="password"
          type="password"
          register={register}
          required={true}
          error={Boolean(errors?.password)}
        />
        <div className="errorAlert">
          {errors?.password && errors?.password?.type === "required" && (
            <p>Field is required.</p>
          )}
        </div>
        <div className="buttonContainerLogin">
          <Button
            size="medium"
            primary={true}
            available={true}
            onClickButton={() => <></>}
            type="submit"
          >
            login
          </Button>
        </div>
      </form>
    </div>
  );
};

export default LoginForm;
