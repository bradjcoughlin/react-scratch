import React from 'react';
import './Reaction.css';

export default class Reaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reacted: false,
            reactedClass: '',
        }
    }
    handleClick() {
        console.log(this);
        this.setState((state) => {
            if (state.reacted) {
                return {
                    reacted: false,
                    reactedClass: 'unreacting',
                }
            } else {
                return {
                    reacted: true,
                    reactedClass: 'reacting',
                }
            }
        })
    }
    handleAnimationEnded() {
        console.log('animation ended');
        this.setState((state) => {
            if (state.reacted) {
                return {reactedClass: 'reacted'}
            } else {
                return {reactedClass: 'unreacted'}
            }
        });
    }
    render() {
        return (
            <div style={{margin: '20px'}}>
                <button
                    id='reactionButton'
                    ref='button'
                    onClick={() => this.handleClick()}
                    onAnimationEnd={() => this.handleAnimationEnded()}
                    className={this.state.reactedClass}>
                        <span>😆</span>
                        <span className='static'>
                            88
                            <span className='to-animate'>88</span>
                        </span>
                </button>
            </div>
        )
    }
}