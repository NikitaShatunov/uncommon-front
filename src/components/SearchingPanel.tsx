import Searching from "./Searching"
import * as React from 'react'

const SearchingPanel = () => {
    const [value, setValue] = React.useState('')
    const onChangeInput = (value: string) => {
        setValue(value)
    } 
    return (<div className="searcgingPanel">
        <Searching value={value} onChangeInput={onChangeInput}/>
    </div>)
}
 
export default SearchingPanel