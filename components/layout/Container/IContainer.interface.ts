import { HTMLAttributes, ReactNode } from 'react';

export interface IContainerComponentProps extends HTMLAttributes<HTMLDivElement> {
    children: ReactNode;
}
