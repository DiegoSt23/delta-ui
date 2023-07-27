import { ReactNode } from 'react';

export interface ToastProps {
  message: string;
  onClose?: () => void;
  type?: 'default' | 'info' | 'success' | 'warning' | 'error';
}

export const Toast = ({ message, onClose, type }: ToastProps) => {
  const t = '';  

  return (
    <div>toast</div>
  )
};
