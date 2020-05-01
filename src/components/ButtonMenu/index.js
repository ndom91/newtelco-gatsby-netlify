import React from 'react'
import * as S from './styled'

export const ButtonMenu = props => {
  return (
    <S.ButtonHamburger
      onClick={props.handleClick}
      className={props.isActive ? 'active' : ''}
      aria-label="Menu Button"
    >
      <span></span>
    </S.ButtonHamburger>
  )
}

export default ButtonMenu
