export const getYourLackyMuber = ():number => Math.trunc(Math.random() * 100);

export const craeteColor = (): number => 150 - (getYourLackyMuber() - 50) * 1.5;

export const createOpacity = (): number => Math.random();

export const getRamdomRGBA = ():string => 
    `rgba(${craeteColor()}, ${craeteColor()}, ${craeteColor()}, ${createOpacity()})`;