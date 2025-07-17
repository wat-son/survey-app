'use client';
import React from 'react'
import styles from './Button.module.css';

type ButtonProps = {
    label: string;
    onClick?: () => void;
    type?: 'button' | 'submit' | 'reset';
};

const Button: React.FC<ButtonProps> = ({ label, onClick, type = 'button'}) => {
  return (
    <button className={StyleSheet.button} onClick={onClick} type={type}>
        {label}
    </button>
  );
};

export default Button;