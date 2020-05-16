import React from 'react';
import './Button.css';

export default class Button extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            fade: false
        }
    }
    render() {
        const fade = this.state.fade
            return (
                <button
                    ref='button'
                    onClick={() => this.setState({ fade: true })}
                    onAnimationEnd={() => this.setState({ fade: false })}
                    className={fade ? 'fade' : ''}>
                    Button
                </button>
            )
        }
}