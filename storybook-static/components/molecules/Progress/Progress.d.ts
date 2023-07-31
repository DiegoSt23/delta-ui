export interface ProgressProps {
    total: number;
    progress: number;
    thickness?: 'light' | 'normal' | 'bold';
    progressColor?: string;
    displayTooltip?: boolean;
    containerClassName?: string;
    progressBarClassName?: string;
}
export declare const Progress: {
    ({ total, progress, thickness, progressColor, displayTooltip, containerClassName, progressBarClassName, }: ProgressProps): import("react/jsx-runtime").JSX.Element;
    defaultProps: Partial<ProgressProps>;
};
