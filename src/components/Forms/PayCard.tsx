import Input, { IFormValues } from '../UI/Input'
import Button from '../UI/Button'
import { useForm } from 'react-hook-form'
import { useAppDispatch, useAppSelector } from '../../redux/redux'

import * as React from 'react'
import { fetchOrderPost } from '../../redux/slices/orderSlice'
import { useNavigate } from 'react-router-dom'

const PayCard = () => {
    const { items, address } = useAppSelector((state) => state.orderSlice)
    const navigate = useNavigate()
    const dispatch = useAppDispatch()
    const {
        register,
        formState: { errors },
        handleSubmit,
    } = useForm<IFormValues>({ mode: 'onBlur' })
    const onSubmitForm = async (data: any) => {
        const body = {
            data,
            items,
            address,
        }
        const res = await dispatch(fetchOrderPost(body))
        if (!res.error) {
            navigate('/success')
        } else {
            window.alert('Error')
        }
    }
    React.useEffect(() => {}, [items, address])
    return (
        <div className="payCardForm">
            <form onSubmit={handleSubmit(onSubmitForm)}>
                <Input
                    register={register}
                    label="cardholder name"
                    type="text"
                    required={true}
                    error={Boolean(errors?.['cardholder name'])}
                />
                <div className="errorAlert">
                    {errors?.['cardholder name'] &&
                        errors?.['cardholder name']?.type === 'required' && (
                            <p>Field is required.</p>
                        )}
                </div>
                <Input
                    label="card number"
                    type="text"
                    register={register}
                    required={true}
                    error={Boolean(errors?.['card number'])}
                />
                <div className="errorAlert">
                    {errors?.['card number'] &&
                    errors?.['card number']?.type === 'required' ? (
                        <p>Field is required.</p>
                    ) : (
                        <p>{errors?.['card number'] && 'Wrong length.'}</p>
                    )}
                </div>
                <Input
                    label="month"
                    type="text"
                    register={register}
                    required={true}
                    error={Boolean(errors?.['month'])}
                />
                <div className="errorAlert">
                    {errors?.['month'] &&
                        errors?.['month']?.type === 'required' && (
                            <p>Field is required.</p>
                        )}
                </div>
                <Input
                    label="year"
                    type="text"
                    register={register}
                    required={true}
                    error={Boolean(errors?.['year'])}
                />
                <div className="errorAlert">
                    {errors?.['year'] &&
                        errors?.['year']?.type === 'required' && (
                            <p>Field is required.</p>
                        )}
                </div>
                <Input
                    label="card code"
                    type="text"
                    register={register}
                    required={true}
                    error={Boolean(errors?.['card code'])}
                />
                <div className="errorAlert">
                    {errors?.['card code'] &&
                        errors?.['card code']?.type === 'required' && (
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
                        buy
                    </Button>
                </div>
            </form>
        </div>
    )
}

export default PayCard
