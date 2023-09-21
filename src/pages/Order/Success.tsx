import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/redux'
import { useNavigate } from 'react-router-dom'
import { clearOrderSlice } from '../../redux/slices/orderSlice'
import { clearCart } from '../../redux/slices/cartSlice'

const Success = () => {
    const dispatch = useAppDispatch()
    const {items, address} = useAppSelector(state => state.orderSlice)
    const navigate = useNavigate()
    React.useEffect(() => {
        if(items.length !==0 && address.firstName !== '') {
           setTimeout(() => {
            dispatch(clearOrderSlice())
            dispatch(clearCart())
           }, 5000)
        }
        else {
            navigate('/catalog')
        }
    }, [items, address])
    return <div className="successContainer">
        <div>
        <h1>THANKS FOR YOUR ORDER</h1>
        <h2>WE WILL CONTACT YOU</h2>
        <img src="/img/uncommonBlack.svg" alt="logo" />
        </div>
    </div>
}
 
export default Success