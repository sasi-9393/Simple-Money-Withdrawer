// Write your code here

import {Component} from 'react'
import './index.css'

import DenominationItem from '../DenominationItem'

class CashWithdrawal extends Component {
  state = {amount: 2000}
  decrement = value => {
    this.setState(prevState => ({amount: prevState.amount - value}))
  }
  render() {
    const {amount} = this.state
    const {denominationsList} = this.props

    return (
      <div className="bg">
        <div className="card">
          <div className="heading">
            <div className="card-color-con">
              <p className="card-head">S</p>
            </div>
            <h1 className="card-main-head">Sasi Kumar</h1>
          </div>
          <div className="amo-con">
            <p className="para">Your Balance</p>
            <div className="amount">
              <p className="cash">{amount}</p>
              <p className="rupees">In Rupees</p>
            </div>
          </div>
          <p className="withdraw">Withdraw</p>
          <p className="in-rupees">CHOOSE SUM (IN RUPEES)</p>
          <ul>
            {denominationsList.map(item => (
              <DenominationItem
                details={item}
                key={item.id}
                decrement={this.decrement}
              />
            ))}
          </ul>
        </div>
      </div>
    )
  }
}

export default CashWithdrawal
