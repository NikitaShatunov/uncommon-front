import * as React from 'react'
import { useAppDispatch, useAppSelector } from '../redux/redux'
import { setCurrentPage } from '../redux/slices/fetchSlice'

interface PaginationCellInterface {
    id: number
    current: number 
    onClick: (id: number) => void}

const PaginationCell = ({id, current, onClick}: PaginationCellInterface) => {
    return <div onClick={() => onClick(id + 1)} className={`paginationCell ${current === id && 'selected'}`}>{id}</div>
}

const Pagination = () => {
    const currentPage = useAppSelector(state => state.fetchSlice.currentPage)
    const dispatch = useAppDispatch()
    const {pagesNumber} = useAppSelector(state => state.fetchSlice)
    React.useEffect(() => {

    }, [pagesNumber, currentPage])
    return ( <div className="paginationContainer">
        {new Array(pagesNumber).fill(0).map((_, id) => <PaginationCell key={id} onClick={() => dispatch(setCurrentPage(id + 1))} current={currentPage} id={id + 1}/>)}
    </div> )
}
 
export default Pagination