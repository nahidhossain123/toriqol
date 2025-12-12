import { ReactNode } from "react";

export interface ThemeButtonType{
    children:ReactNode,
     icon?:string, 
     style?:string, 
     onButtonClick:()=>void
}