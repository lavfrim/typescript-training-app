import React, { useRef } from 'react';


const blockName: string = 'input-form';

interface InputProps {
    name: string
    type: string
    max?: number | undefined
    min?: number | undefined
    value?: string | number | undefined
    placeholder: string
    width?: number | undefined
    preMessage?: string
    postMessage?: string
    hadleSubmit: any
}

const InputForm: React.FC<InputProps> = (props) => {
    const inputElement = useRef<HTMLInputElement>(null);
    const {
        name,
        type,
        min,
        max,
        value,
        placeholder,
        width = 80,
        preMessage,
        postMessage,
        hadleSubmit,
        
    } = props;
    const pxWidth = `${width}px`;

    return (
        <form
            className={`${blockName}`}
            onSubmit={(event) => {hadleSubmit(event, inputElement.current)}}
        >
            <span>{preMessage}</span>
            <input
                ref={inputElement}
                name={name}
                className={`${blockName}__input`}
                style={{ width: pxWidth }}
                type={type}
                min={min}
                max={max}
                placeholder={placeholder}
                value={value}
            />
            <span>{postMessage}</span>
        </form>
    )
}

export default InputForm;