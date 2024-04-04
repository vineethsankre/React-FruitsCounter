import {Component} from 'react'
import './index.css'

class FruitsCounter extends Component {
  state = {mango: 0, banana: 0}

  mangoCounter = () => {
    const {mango} = this.state
    this.setState(prevState => ({mango: prevState.mango + 1}))
  }

  bananaCounter = () => {
    const {banana} = this.state
    this.setState(prevState => ({banana: prevState.banana + 1}))
  }

  render() {
    const {mango, banana} = this.state
    return (
      <div className="bg-container">
        <div className="fruits-counter-container">
          <div className="content-container">
            <h1 className="heading">
              Bob ate <span className="count">{mango}</span> mangoes{' '}
              <span className="count">{banana}</span> bananas
            </h1>
            <div className="fruits-container">
              <div className="fruit">
                <img
                  className="fruit-image"
                  src="https://assets.ccbp.in/frontend/react-js/mango-img.png"
                  alt="mango"
                />
                <button
                  className="button"
                  type="button"
                  onClick={this.mangoCounter}
                >
                  Eat Mango
                </button>
              </div>
              <div className="fruit">
                <img
                  className="fruit-image"
                  src="https://assets.ccbp.in/frontend/react-js/banana-img.png"
                  alt="banana"
                />
                <button
                  className="button"
                  type="button"
                  onClick={this.bananaCounter}
                >
                  Eat Banana
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default FruitsCounter
