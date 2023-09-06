import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../../redux/redux'
import { removeItemCart } from '../../redux/slices/cartSlice'
import Button from '../../components/Button'
import { useNavigate } from 'react-router-dom'
import { addItemsIntoOrder } from '../../redux/slices/orderSlice'

const Bag = () => {
    const { items, sum } = useAppSelector((state) => state.cartSlice)
    const dispatch = useAppDispatch()
    const navigate = useNavigate() 
    React.useEffect(() => {
        if(items.length === 0) {
            navigate('/catalog')
        }
    }, [items, sum])
    const onClickBuy = () => {
        navigate('/checkout/address')
        dispatch(addItemsIntoOrder({items, sum}))
    }
    return (
        <div className="bag">
            <div className="table">
                <ul className="table__header">
                    <li className="li1">item</li>
                    <li className="li2">description</li>
                    <li className="li3">size</li>
                    <li className="li4">price</li>
                </ul>
                {items.map((obj, i) => (
                    <ul className="table__footer" key={i}>
                        <li className="li1">
                            <img src={obj.photo} alt={'item' + obj.id} />
                        </li>
                        <li className="li2">
                            {obj.brand} <br /> {obj.category}
                        </li>
                        <li className="li3">{obj.size}</li>
                        <li className="li4">€ {obj.price}</li>
                        <li>
                            <img
                                style={{ cursor: 'pointer' }}
                                onClick={() => dispatch(removeItemCart(obj))}
                                src="/img/cross.svg"
                                alt="cross"
                            />
                        </li>
                    </ul>
                ))}
            </div>
            <div>
            <div className='sidePanel'><div className='total'><h2>total:</h2>€ {sum}</div>
            <div className='buttonContainer'><Button size='medium' primary={true} available={true} onClickButton={() => onClickBuy()}>buy</Button></div></div>
            </div>
        </div>
    )
}

export default Bag
