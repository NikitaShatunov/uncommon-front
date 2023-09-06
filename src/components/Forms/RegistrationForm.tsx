import { useAppDispatch } from "../../redux/redux"
import { fetchRegistration } from "../../redux/slices/authSlice"
import Button from "../Button"
import Input, { IFormValues } from "../Input"
import { useForm } from "react-hook-form"
const RegistrationForm = () => {
  const dispatch = useAppDispatch()
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm<IFormValues>({ mode: "onBlur" })
  const onSubmitForm = async (data: any) => {
   const res = await dispatch(fetchRegistration(data))
   if(res?.payload?.token) {
    window.localStorage.setItem('token', res.payload.token)
   }
   else {
    window.alert('Error when registration')
   }
  }
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
          {errors?.email && (errors?.email?.type === "required" ? (
            <p>Field is required.</p>) : <p>{errors?.email?.message}</p>
          )}
        </div>
        <Input
          error={Boolean(errors?.password)}
          label="password"
          type="password"
          register={register}
          required={true}
        /> 
        <div className="errorAlert">
        {errors?.password && errors?.password?.type === "required" ? (
            <p>Field is required.</p>
        ) : <p>{errors?.password && 'Minimum length is 6'}</p>}
        </div> 
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
        {errors?.name && errors?.name?.type === "required" && (
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
  )
}

export default RegistrationForm
