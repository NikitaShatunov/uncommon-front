import { useAppSelector } from "../redux/redux"
import * as React from 'react'

const InformationBlock = () => {
    const sum = useAppSelector(state => state.orderSlice.sum)
    React.useEffect(() => {

    }, [sum])
    return ( <>
     <div className="informContainer">
                <div className="price">
                    <span className="summary">order summary:</span> € {sum}
                </div>
                <div className="order">
                    <h2>UNCOMMON ships worldwide</h2>
                    <h2>Shipments Within Europe</h2>
                    <p>
                        Delivery in 1-2 working days after your order has been
                        accepted
                    </p>

                    <h2>Shipments Outside of Europe</h2>
                    <p>
                        Delivery in 3-4 working days after your order has been
                        accepted
                    </p>

                    <p>Shipments are Shipped Using DHL Express Go Green</p>
                </div>
                <div className='payment'>
                    <h2>UNCOMMON accpets</h2>
                    <img src="/img/pay/maestro.svg" alt="maestro" />
                    <img src="/img/pay/masterCard.svg" alt="masterCard" />
                    <img src="/img/pay/paypal.svg" alt="paypal" />
                    <img src="/img/pay/americanexpress.svg" alt="americanexpress" />
                    <img src="/img/pay/visa.svg" alt="visa" />
                    <p>All transactions and customer information related to credit card payments use SSL/TLS and coded communication is guaranteed.</p>
                </div>
            </div></> )
}
 
export default InformationBlock