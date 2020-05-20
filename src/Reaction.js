import React from 'react';
import './Reaction.css';

export default class Reaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reacted: false,
            reactedClass: '',
            reactionCount: 9,
            lastReactionCount: 9,
            nextReactionCount: 10,
        }
    }
    handleClick() {
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
                    reactionCount: 10,
                }
            }
        })
    }
    handleAnimationEnded() {
        this.setState((state) => {
            if (state.reacted) {
                return {
                    reactedClass: 'reacted',
                }
            } else {
                return {
                    reactedClass: 'unreacted',
                    reactionCount: 9,
                }
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
                        <span className='count'>
                            <span className='static'>{this.state.reactionCount}</span>
                            <span className='last-to-animate'>{this.state.lastReactionCount}</span>
                            <span className='next-to-animate'>{this.state.nextReactionCount}</span>
                        </span>
                </button>
            </div>
        )
    }
}