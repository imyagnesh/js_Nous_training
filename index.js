import React, { Component } from "react"
import ReactDOM from "react-dom"
import './index.css'

class App extends Component {

    constructor() {
        super();
        this.state = { counter: 0 };
        this.clickCounter = this.clickCounter.bind(this);

    }

    clickCounter(e) {
        const id = e.target.id;
        if (id === 'plus') {
            this.setState((state) => (
                {

                    counter: state.counter + 1

                }
            ), () => {
                console.log(this.state.counter);

            });
        } else {
            this.setState((state) => (
                {
                    counter: state.counter - 1
                }
            ), () => {
                console.log(this.state.counter);

            });

        }

    }


    render() {
        const { name, title } = this.props;
        return <><h1>{name}</h1>
            <h2>{title}</h2>
            <h3>{this.state.counter}</h3>
            <button id='plus' onClick={this.clickCounter}   >+1</button>
            <button id='minus' onClick={this.clickCounter}  >-1</button>

        </>
    }

}


ReactDOM.render(<App name="Sameer" title="Mr." />, document.getElementById('root'));