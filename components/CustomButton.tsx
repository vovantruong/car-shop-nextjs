'use client';

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton: React.FC<CustomButtonProps> = ({
    title = "", containerStyle, handleClick, type = 'button', disabled = false
}) => {
    return (
        <button
            disabled={disabled}
            type={type}
            className={`custom-btn ${containerStyle}`}
            onClick={handleClick}
        >
            <span className={`flex-1`}>{title}</span>
        </button>
    )
}

export default CustomButton