import { UseFormRegister } from "react-hook-form/dist/types";
export interface IFormValues {
  email: string;
  password: string;
  name: string;
  gender: string;
  phone: string;
  "confirm password": string;
}
interface InputProps {
  type: "text" | "number" | "password";
  label: keyof IFormValues;
  register: UseFormRegister<IFormValues>;
  required: boolean;
  error?: boolean;
}
const Input = ({ type, label, register, required, error }: InputProps) => {
  return (
    <div className={`input ${error ? "input__error" : ""} `}>
      {label === "email" ? (
        <input
          {...register(label, {
            required,
            pattern: {
              value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
              message: "Email is formatted incorrectly",
            },
          })}
          type={type}
        />
      ) : (
        <input {...register(label, { required })} type={type} />
      )}

      {label && <label htmlFor="input">{label}</label>}
    </div>
  );
};

export default Input;
