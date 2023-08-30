import Button from "./Button";
import Input, { IFormValues } from "./Input";
import * as React from "react";
import { useForm } from "react-hook-form";
const RegistrationForm = () => {
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ mode: "onBlur" });
  const onSubmitForm = (data: any) => {
    console.log(data);
  };
  return (
    <div className="registrationForm">
      <h1>REGISTRATION</h1>
      <form onSubmit={handleSubmit(onSubmitForm)}>
        <Input
          label="email"
          type="text"
          register={register}
          required={true}
          error={Boolean(errors?.email)}
        />
    <div className="errorAlert">
          {errors?.email && (errors?.email?.type === "required" && (
            <p>Field is required.</p>) || <p>{errors?.email?.message}</p>
          )}
        </div>
        <Input
          error={Boolean(errors?.password)}
          label="password"
          type="password"
          register={register}
          required={true}
        />
        {errors?.password && errors?.password?.type === "required" && (
          <div className="errorAlert">
            <p>Field is required.</p>
          </div>
        )}
        <Input
          error={Boolean(errors?.["confirm password"])}
          label="confirm password"
          type="password"
          register={register}
          required={true}
        />
        {errors?.["confirm password"] &&
          errors?.["confirm password"]?.type === "required" && (
            <div className="errorAlert">
              <p>Field is required.</p>
            </div>
          )}
        <div className="radioContainer">
          <div>
            <input
              {...register("gender", { required: true })}
              value="man"
              className="radioBtn"
              id="man"
              type="radio"
            />
            <label htmlFor="man">man</label>
          </div>
          <div>
            <input
              {...register("gender", { required: true })}
              value="woman"
              className="radioBtn"
              id="woman"
              name="gender"
              type="radio"
            />
            <label htmlFor="woman">woman</label>
          </div>
        </div>
        {errors?.gender && errors?.gender?.type === "required" && (
          <div className="errorAlert">
            <p>Choose gender.</p>
          </div>
        )}
        <Input
          label="name"
          type="text"
          register={register}
          required={true}
          error={Boolean(errors?.name)}
        />
        {errors?.name && errors?.email?.type === "required" && (
          <div className="errorAlert">
            <p>Field is required.</p>
          </div>
        )}
        <Input
          label="phone"
          type="text"
          register={register}
          required={true}
          error={Boolean(errors?.phone)}
        />
        {errors?.phone && errors?.phone?.type === "required" && (
          <div className="errorAlert">
            <p>Field is required.</p>
          </div>
        )}
        <div className="buttonContainerRegistration">
          <Button
            size="medium"
            primary={true}
            available={true}
            onClickButton={() => <></>}
            type="submit"
          >
            create
          </Button>
        </div>
      </form>
    </div>
  );
};

export default RegistrationForm;
