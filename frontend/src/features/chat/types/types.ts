import { ReactNode, MouseEvent } from 'react';

export type Card = {
    heading: string;
    icon: ReactNode;
    secondaryParagraph: string;
    handleClick: (e: MouseEvent<HTMLDivElement>) => void;
    disabled?: boolean;
};
