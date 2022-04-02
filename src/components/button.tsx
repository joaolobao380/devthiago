import React from 'react';

interface IButtonProps {
    children: string;
    click:() => void;
    y?: number;
}


export function Button (x:IButtonProps) {

    return (
        <button onClick={x.click} type="submit">{x.children}</button>
    )
}