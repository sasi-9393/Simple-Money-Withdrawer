// Write your code here
import './index.css'
const DenominationItem = props => {
  const {details, decrement} = props
  const {value, id} = details
  const sum = () => {
    decrement(value)
  }
  return (
    <li>
      <button className="btn" onClick={sum}>
        {value}
      </button>
    </li>
  )
}

export default DenominationItem
