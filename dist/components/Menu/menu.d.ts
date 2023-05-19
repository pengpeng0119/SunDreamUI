import React from 'react';
export type MenuMode = 'horizontal' | 'vertical';
type SelectCallback = (selectedIndex: string) => void;
export interface MenuProps {
    defaultIndex?: string;
    className?: string;
    mode?: MenuMode;
    style?: React.CSSProperties;
    onSelect?: (selectedIndex: string) => void;
    children: React.ReactNode;
    defaultOpenSubMenus?: string[];
}
export interface IMenuContext {
    index: string;
    onSelect?: SelectCallback;
    mode?: MenuMode;
    defaultOpenSubMenus?: string[];
}
export declare const MenuContext: React.Context<IMenuContext>;
declare const Menu: React.FC<MenuProps>;
export declare const ShowMenuH: (props: any) => import("react/jsx-runtime").JSX.Element;
export default Menu;
