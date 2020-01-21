import React, { useState } from 'react';


const justMessage: string = 'this is a meaasage';
const mesasgeAbountYourLackyNumber: string = 'that is you number';
const getYourLackyMuber = ():number => Math.trunc(Math.random() * 100);
const craeteColor = (): number => 150 - (getYourLackyMuber() - 50) * 1.5;
const createOpacity = (): number => Math.random();
const getRamdomRGBA = ():string => `rgba(${craeteColor()}, ${craeteColor()}, ${craeteColor()}, ${createOpacity()})`;
    
const buttonText: string = 'Lucky button';

interface Props {
    number?: number
    message: string
}

interface LackyButtonProps {
    rgba: string
    text: string
    width?: number | undefined
    height?: number | undefined
    handleClick: any
}

const PrintMessage: React.FC<Props> = (props) => {
    const { message } = props;
    return <p className={'center'}>{message}</p>
}

const PrintYourNumber: React.FC<Props> = (props) => {
    const { number } = props;
    return <p className={'center'}>{number}</p>
}

const LackyButton: React.FC<LackyButtonProps> = (props) => {
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

const Playgraound: React.FC = () => {
    const [color, setColor] =  useState<string>(getRamdomRGBA());
    const [numer, setNumber] = useState<number>(getYourLackyMuber());

    const handleClick = ():void => {
        setColor(getRamdomRGBA());
        setNumber(getYourLackyMuber());
    }

    return (
        <>
            <PrintMessage message={justMessage} />
            <PrintYourNumber message={mesasgeAbountYourLackyNumber} number={numer} />
            <LackyButton 
                rgba={color}
                text={buttonText}
                width={400}
                height={100}
                handleClick={handleClick}
            />
        </>
    )
}

export default Playgraound;