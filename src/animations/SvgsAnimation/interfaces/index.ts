import { ReactElement } from "react";

export interface Props {
    chrildren: ReactElement;
}
export interface AnimatedElementProps {
    chrildren: ReactElement;
    animation: any;
    isHovered: boolean;
}

export interface AnimatedElementsProps {
    chrildren: ReactElement;
    animation: any;
}