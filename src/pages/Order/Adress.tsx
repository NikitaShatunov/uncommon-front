import { useNavigate } from 'react-router-dom'
import { useAppSelector } from '../../redux/redux'
import * as React from 'react'
import InformationBlock from '../../components/InformationBlock'
import AddressForm from '../../components/Forms/AddressForm'

const Address = () => {
    const { items } = useAppSelector((state) => state.orderSlice)
    const navigate = useNavigate()
    React.useEffect(() => {
        if (items.length === 0) {
            navigate('/catalog')
        }
    }, [items])
    return (
        <div className="addressContainer">
            <div className="formContainer">
                <AddressForm />
            </div>
           <InformationBlock />
        </div>
    )
}

export default Address
