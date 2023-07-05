'use client';

import React from 'react'
import Image from 'next/image'
import { CustomButtonProps } from '@/types';

const CustomButton: React.FC<CustomButtonProps> = ({
    title = "", containerStyles, handleClick, type = 'button', isDisabled = false,
    textStyles, rightIcon
}) => {
    return (
        <button
            disabled={isDisabled}
            type={type}
            className={`custom-btn ${containerStyles}`}
            onClick={handleClick}
        >
            <span className={`flex-1 ${textStyles}`}>
                {title}
            </span>
            {rightIcon && (
                <div className='relative w-6 h-6'>
                    <Image
                        src={rightIcon}
                        alt='right icon'
                        fill
                        className='object-contain'
                    />
                </div>
            )}
        </button>
    )
}

export default CustomButton