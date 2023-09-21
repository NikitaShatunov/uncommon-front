import { useNavigate } from 'react-router-dom'
import { useAppDispatch } from '../../redux/redux'
import { saveAddressInormation } from '../../redux/slices/orderSlice'
import Button from '../UI/Button'
import Input, { IFormValues } from '../UI/Input'
import { useForm } from 'react-hook-form'
import * as React from 'react'

const dhlCountries = [
    'United States',
    'Canada',
    'United Kingdom',
    'Australia',
    'Germany',
    'France',
    'Spain',
    'Italy',
    'China',
    'Japan',
    'India',
    'Brazil',
    'Mexico',
    'South Africa',
    'UAE (United Arab Emirates)',
    'Saudi Arabia',
    'Singapore',
    'South Korea',
    'Malaysia',
    'Ukraine',
]
const AddressForm = () => {
    const dispatch = useAppDispatch()
    const navigate = useNavigate()
    const [country, setCountry] = React.useState(dhlCountries[0])
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormValues>({ mode: 'onBlur' })
    const onSubmitForm = (data: any) => {
      data.country = country
        dispatch(saveAddressInormation(data))
        navigate('/checkout/payment')
    }
    return (
        <div className="addressForm">
            <h1>ADDRESS</h1>
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Input
                    label="email"
                    type="text"
                    register={register}
                    required={true}
                    error={Boolean(errors?.email)}
                />
                <div className="errorAlert">
                    {errors?.email &&
                        (errors?.email?.type === 'required' ? (
                            <p>Field is required.</p>
                        ) : (
                            <p>{errors?.email?.message}</p>
                        ))}
                </div>
                <h2 style={{ marginTop: 14 }}>BILLING ADDRESS</h2>
                <Input
                    error={Boolean(errors?.['first name'])}
                    label="first name"
                    type="text"
                    register={register}
                    required={true}
                />
                <div className="errorAlert">
                    {errors?.['first name'] &&
                    errors?.['first name']?.type === 'required' ? (
                        <p>Field is required.</p>
                    ) : (
                        <p>{errors?.['first name'] && 'Minimum length is 2'}</p>
                    )}
                </div>
                <Input
                    error={Boolean(errors?.['last name'])}
                    label="last name"
                    type="text"
                    register={register}
                    required={true}
                />
                <div className="errorAlert">
                    {errors?.['last name'] &&
                    errors?.['last name']?.type === 'required' ? (
                        <p>Field is required.</p>
                    ) : (
                        <p>{errors?.['last name'] && 'Minimum length is 2'}</p>
                    )}
                </div>
                <Input
                    label="street"
                    type="text"
                    register={register}
                    required={true}
                    error={Boolean(errors?.street)}
                />
                {errors?.street && errors?.street?.type === 'required' && (
                    <div className="errorAlert">
                        <p>Field is required.</p>
                    </div>
                )}
                <select onChange={(e) => setCountry(e.target.value)}>
                    {dhlCountries.map((name, i) => (
                        <option key={i} value={name}>
                            {name}
                        </option>
                    ))}
                </select>
                <label htmlFor="select">country *</label>
                <Input
                    label="zip"
                    type="text"
                    register={register}
                    required={true}
                    error={Boolean(errors?.zip)}
                />
                {errors?.zip && errors?.zip?.type === 'required' && (
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
                {errors?.phone && errors?.phone?.type === 'required' && (
                    <div className="errorAlert">
                        <p>Field is required.</p>
                    </div>
                )}
                <div className="buttonContainerAddress">
                    <Button
                        size="medium"
                        primary={true}
                        available={true}
                        onClickButton={() => <></>}
                        type="submit"
                    >
                        save and continue
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default AddressForm
