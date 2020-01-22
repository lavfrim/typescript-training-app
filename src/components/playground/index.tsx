import React, { useState } from 'react';
import LuckyButton from '../luckyButton';
import { getRamdomRGBA, getYourLackyMuber } from '../../utils';
import InputForm from '../inputForm';


const justMessage: string = 'Playground';
const mesasgeAbountYourLackyNumber: string = 'This is your lucky number';
const buttonWidthInputName: string = 'buttonWidth';
const buttonHeightInputName: string = 'buttonHeight';
const buttonTextInputName: string = 'buttonText';

type InputNames = 
    | typeof buttonWidthInputName
    | typeof buttonHeightInputName
    | typeof buttonTextInputName

interface PrintProps {
    number?: number
    message: string
}

const PrintMessage: React.FC<PrintProps> = (props) => {
    const { message } = props;
    return <p className={'center'}>{message}</p>
}

const PrintYourNumber: React.FC<PrintProps> = (props) => {
    const { number } = props;
    return <p className={'center'}>{`${mesasgeAbountYourLackyNumber}: ${number}`}</p>
}


const Playgraound: React.FC = () => {
    const [color, setColor] =  useState<string>(getRamdomRGBA());
    const [numer, setNumber] = useState<number>(getYourLackyMuber());
    const [buttonWidth, setbuttonWidth] = useState<number>(400);
    const [buttonHeight, setButtonHeight] = useState<number>(100)
    const [buttonText, setButtonText] = useState<string>('Lucky button')

    const handleClick = ():void => {
        setColor(getRamdomRGBA());
        setNumber(getYourLackyMuber());
    }

    const hadleSubmit = (event: React.SyntheticEvent, inputElement: HTMLInputElement) => {
        event.preventDefault();
        const value: string = inputElement.value;
        const name: InputNames = inputElement.name;
    
        switch (name) {
            case buttonWidthInputName: setbuttonWidth(+value);
                break;
            case buttonHeightInputName: setButtonHeight(+value);
                break;
            case buttonTextInputName: setButtonText(value);
                break;
            default: throw Error('wrong input name');
        }
    }

    return (
        <>
            <PrintMessage message={justMessage} />
            <PrintYourNumber message={mesasgeAbountYourLackyNumber} number={numer} />
            <LuckyButton
                text={buttonText}
                rgba={color}
                width={buttonWidth}
                height={buttonHeight}
                handleClick={handleClick}
            />
            <div className={'botton-size-inputs'}>
                <InputForm
                    name={buttonWidthInputName}
                    type={'number'}
                    min={50}
                    max={400}
                    preMessage={'Width:'}
                    postMessage={'px'}
                    placeholder={'width'}
                    hadleSubmit={hadleSubmit}
                />
                <InputForm
                    name={buttonHeightInputName}
                    type={'number'}
                    min={50}
                    max={400}
                    preMessage={'Height:'}
                    postMessage={'px'}
                    placeholder={'heght'}
                    hadleSubmit={hadleSubmit}
                />
            </div>
            <div className={'botton-size-inputs'}>
                <InputForm
                    name={buttonTextInputName}
                    type={'text'}
                    width={150}
                    preMessage={'Button name:'}
                    placeholder={'type name here'}
                    hadleSubmit={hadleSubmit}
                />
            </div>
            
        </>
    )
}

export default Playgraound;