/// <reference types="react" />
type ToastProps = {
    data?: Error | never;
    show?: boolean;
    type: 'error' | 'warn' | 'success' | 'plain';
    position: 'bottom left' | 'bottom right' | 'top right' | 'top left' | 'bottom center' | 'top center';
};
declare const Toast: ({ position, data, type }: ToastProps) => import("react").JSX.Element;
export default Toast;
