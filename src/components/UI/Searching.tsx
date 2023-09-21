interface SearchingProps {
  onChangeInput: (value: string) => void
  value: string
}

const Searching = ({ onChangeInput, value }: SearchingProps) => {
  return (
    <div className="searching">
      <input value={value} onChange={(e) => onChangeInput(e.target.value)} />
      <span className="buttonSearch">search</span>
    </div>
  )
}

export default Searching
