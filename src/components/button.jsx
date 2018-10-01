import React from  'react';
import './button.css';

const isOperator = val => {
    return !isNaN(val) || val === "." || val === "=";
}

export const button = props => (
    <div className ={`button-wrapper ${isOperator(props.children) ? null : "operator"}`}>
        {props.children}
    </div>
);
