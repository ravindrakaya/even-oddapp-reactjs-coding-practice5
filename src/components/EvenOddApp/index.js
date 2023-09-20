// Write your code here
import './index.css'
import {Component} from 'react'

class EvenOddApp extends Component {
  state = {count: 0, isEven: true}

  onIncrement = () => {
    this.setState(prevState => {
      const {count} = prevState

      const randomNumberCount = Math.ceil(Math.random() * 100) + count

      let result

      if (randomNumberCount % 2 === 0) {
        result = true
      } else {
        result = false
      }
      return {isEven: result, count: randomNumberCount}
    })
  }

  render() {
    const {count, isEven} = this.state

    const content = isEven ? 'Even' : 'Odd'
    return (
      <div className="bg-container">
        <div className="card-container">
          <h1 className="heading">Count {count}</h1>
          <p className="paragraph">Count is {content}</p>
          <button className="button" type="button" onClick={this.onIncrement}>
            Increment
          </button>
          <p className="caption">*Increase By Random Number Between 0 to 100</p>
        </div>
      </div>
    )
  }
}
export default EvenOddApp
