import { CardProps } from '../../molecules';
export interface ModalProps extends CardProps {
    isOpen: boolean;
    onClose: () => void;
    size?: 'sm' | 'md' | 'lg' | 'xl' | 'auto';
}
export declare const Modal: {
    ({ isOpen, onClose, children, headerTitle, headerElement, footer, mainContainerClassName, headerClassName, footerClassName, size, }: ModalProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ModalProps>;
};
