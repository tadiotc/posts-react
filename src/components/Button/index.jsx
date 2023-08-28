import { Component } from "react";
import './css.css'

export class Button extends Component{
    render(){

        const { text, onClick, disabled } = this.props;

        return (
        <button 
        onClick={onClick} 
        className="btposts"
        disabled={disabled}
        >
            {text}
        </button>
        );

    }
}