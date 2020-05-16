import React from 'react';
import './Button.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fade: false,
            poop: false,
        }
    }
    render() {
        const fade = this.state.fade
        const poop = this.state.poop
            return (
                <div>
                    <button
                        ref='button'
                        onClick={() => this.setState({ fade: true })}
                        onAnimationEnd={() => this.setState({ fade: false })}
                        className={fade ? 'fade' : ''}>
                        Button
                    </button>
                    <button
                        ref='poopButton'
                        onClick={() => this.setState({ poop: true })}
                        onAnimationEnd={() => this.setState({ poop: true })}
                        className={poop ? 'poop' : ''}>
                        Button
                    </button>
                </div>
            )
        }
}