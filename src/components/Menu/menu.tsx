import React, { useState, createContext } from 'react'
import classNames from 'classnames'
import MenuItem, { MenuItemProps } from './menuitem'
import SubMenu from './subMenu'

export type MenuMode = 'horizontal' | 'vertical'
type SelectCallback = (selectedIndex: string) => void
export interface MenuProps {
  defaultIndex?: string
  className?: string
  mode?: MenuMode
  style?: React.CSSProperties
  onSelect?: (selectedIndex: string) => void
  children: React.ReactNode
  defaultOpenSubMenus?: string[]
}

export interface IMenuContext {
  index: string
  onSelect?: SelectCallback
  mode?: MenuMode
  defaultOpenSubMenus?: string[]
}

export const MenuContext = createContext<IMenuContext>({ index: '0' })
const Menu: React.FC<MenuProps> = props => {
  const {
    className,
    mode,
    style,
    onSelect,
    children,
    defaultIndex,
    defaultOpenSubMenus
  } = props
  const classes = classNames('viking-menu', className, {
    'menu-vertical': mode === 'vertical',
    'menu-horizontal': mode !== 'vertical'
  })
  const [currentActive, setActive] = useState(defaultIndex)
  const handleClick = (index: string) => {
    setActive(index)
    if (onSelect) {
      onSelect(index)
    }
  }
  const passedContext: IMenuContext = {
    index: currentActive ? currentActive : '0',
    onSelect: handleClick,
    mode,
    defaultOpenSubMenus
  }
  const renderChildren = () => {
    return React.Children.map(children, (child, index) => {
      const childElement = child as React.FunctionComponentElement<
        MenuItemProps
      >
      const { displayName } = childElement.type
      if (displayName === 'MenuItem' || displayName === 'SubMenu') {
        return React.cloneElement(childElement, { index: index.toString() })
      } else {
        console.error(
          'Warning:Menu has a child which is not a MenuItem component'
        )
      }
    })
  }
  return (
    <ul className={classes} style={style}>
      <MenuContext.Provider value={passedContext}>
        {renderChildren()}
      </MenuContext.Provider>
    </ul>
  )
}

// sb
export const ShowMenuH = (props: any) => {
  const { mode, onSelect } = props
  return (
    <>
      <Menu
        defaultIndex={'1'}
        defaultOpenSubMenus={['4']}
        mode={mode}
        onSelect={onSelect}
      >
        <MenuItem disabled>cool link 1</MenuItem>
        <MenuItem>cool link 2</MenuItem>
        <MenuItem>cool link 3</MenuItem>
        <MenuItem>cool link 4</MenuItem>
        <SubMenu title="dropdown">
          <MenuItem>1MenuItem</MenuItem>
          <MenuItem>2MenuItem</MenuItem>
          <MenuItem>3MenuItem</MenuItem>
        </SubMenu>
      </Menu>
      <div style={{ height: '100px' }}></div>
    </>
  )
}
Menu.defaultProps = {
  defaultIndex: '0',
  mode: 'horizontal',
  defaultOpenSubMenus: []
}
export default Menu
