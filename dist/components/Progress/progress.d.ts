import { FC } from 'react';
export interface ProgressProps {
    /**进度条颜色 */
    themeColor?: string;
    /**初始值 */
    percent?: number;
    /**到达100自动隐藏 */
    autoHidden?: boolean;
    /**隐藏文本 */
    hiddenText?: boolean;
    /**进度条长度 */
    width?: string | number;
    /**文本颜色 */
    textColor?: string;
    /**传入数组控制阈值变换 */
    statusScope?: any[];
    height?: number | string;
    showInnerText?: boolean;
    showOuterText?: boolean;
}
declare const Progress: FC<ProgressProps>;
export default Progress;
