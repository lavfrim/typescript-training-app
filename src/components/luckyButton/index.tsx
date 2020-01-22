import React from 'react';

interface LuckyButtonProps {
    rgba: string
    text: string
    width?: number | undefined
    height?: number | undefined
    handleClick: any
}

const LuckyButton: React.FC<LuckyButtonProps> = (props) => {
    const { rgba, text, width, height, handleClick } = props;
    const pxWidth: string = `${width}px`;
    const pxHeight: string = `${height}px`;

    return (
        <button
            className={'center'}
            style={{ backgroundColor: rgba, width: pxWidth, height: pxHeight }}
            onClick={handleClick}
        >
            {text}
        </button>
    )
}

export default LuckyButton;