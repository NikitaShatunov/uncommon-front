import * as React from 'react'
import { useAppSelector } from '../../redux/redux'
import { useNavigate } from 'react-router-dom'
import InformationBlock from '../../components/InformationBlock'
import Button from '../../components/Button'
import PayCard from '../../components/Forms/PayCard'

const Payment = () => {
    const { items, address } = useAppSelector((state) => state.orderSlice)
    const [isCartsModalOpen, setIsCartsModalOpen] = React.useState(false)
    const navigate = useNavigate()
    React.useEffect(() => {
        if (items.length === 0 || address.email === '') {
            navigate('/catalog')
        }
    }, [items, address])
    return (
        <div className="paymentContainer">
            <div>
                <h2>select payment method:</h2>
                <div className='payBlock'>
                    <div><p>Credit Card</p>
                    <img src="/img/pay/maestro.svg" alt="maestro" />
                    <img src="/img/pay/masterCard.svg" alt="masterCard" />
                    <img
                        src="/img/pay/americanexpress.svg"
                        alt="americanexpress"
                    />
                    <img src="/img/pay/visa.svg" alt="visa" /></div>
                    <Button primary={false} available={true} size='small' onClickButton={() => setIsCartsModalOpen(true)}>select</Button>
                </div>
                <div className='modal'>
                    {isCartsModalOpen && <PayCard />}
                </div>
                <div className='payBlock'>
                   <div><p>Pay Pal</p>
                    <img src="/img/pay/paypal.svg" alt="maestro" /></div>
                    <Button primary={false} available={true} size='small' onClickButton={() => setIsCartsModalOpen(false)}>select</Button>
                </div>
            </div>
            <InformationBlock />
        </div>
    )
}

export default Payment
