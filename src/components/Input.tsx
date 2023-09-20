import { UseFormRegister } from 'react-hook-form/dist/types'
export interface IFormValues {
    email: string
    password: string
    name: string
    gender: string
    phone: string
    'first name': string
    'last name': string
    street: string
    city: string
    zip: string
    'confirm password': string
    country: string
    'cardholder name': string
    'card number': string
    'card code': string
    month: string
    year: string
    countryName: string
}
interface InputProps {
    type: 'text' | 'number' | 'password'
    label: keyof IFormValues
    register: UseFormRegister<IFormValues>
    required: boolean
    error?: boolean
}

const Label = ({label, required}: any) => {
    return (<>{label && (
        <label htmlFor="input">
            {label} {required ? '*' : ''}{' '}
        </label>
    )}</>)
}

const Input = ({ type, label, register, required, error }: InputProps) => {
    switch (label) {
        case 'email':
            return (
                <div className={`input ${error ? 'input__error' : ''} `}>
                    <input
                        {...register(label, {
                            required,
                            pattern: {
                                value: /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/,
                                message: 'Email is formatted incorrectly',
                            },
                        })}
                        type={type}
                    />
                    <Label label={label} required={required} />
                </div>
            )
        case 'password':
            return (
                <div className={`input ${error ? 'input__error' : ''} `}>
                    <input
                        {...register(label, { required, minLength: 6 })}
                        type={type}
                    />
                    <Label label={label} required={required} />
                </div>
            )
        case 'card number':
            return (
                <div className={`input ${error ? 'input__error' : ''} `}>
                    <input
                        {...register(label, { required, minLength: 15 })}
                        type={type}
                    />
                    <Label label={label} required={required} />
                </div>
            )
        default:
            return (
                <div className={`input ${error ? 'input__error' : ''} `}>
                    <input {...register(label, { required })} type={type} />
                    <Label label={label} required={required} />
                </div>
            )
    }
}

export default Input
