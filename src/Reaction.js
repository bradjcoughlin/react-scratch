import React from 'react';
import './Reaction.css';

export default class Reaction extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            reacted: false,
            reactedClass: '',
            reactionCount: 9,
            nextReactionCount: 10,
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
                    reactionCount: 10,
                }
            }
        })
    }
    handleAnimationEnded() {
        console.log('animation ended');
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
                        <span className='static'>
                            {this.state.reactionCount}
                            <span className='to-animate'>{this.state.nextReactionCount}</span>
                        </span>
                </button>
            </div>
        )
    }
}