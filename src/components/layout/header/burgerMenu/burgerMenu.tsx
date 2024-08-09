import { useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

import s from './burgerMenu.module.scss'

import { BurgerMenuBody } from './burgerMenuBody'

export const BurgerMenu = () => {
  const [isOpen, setIsOpen] = useState(false)

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden'
    } else {
      document.body.style.overflow = 'auto'
    }
  }, [isOpen])

  const handleSetIsOpen = () => {
    setIsOpen(prevState => !prevState)
  }

  return (
    <div>
      <button className={`${s.burgerBtn} ${isOpen && s.menuOpen}`} onClick={handleSetIsOpen}>
        <span></span>
      </button>

      {isOpen &&
        createPortal(
          <BurgerMenuBody callback={handleSetIsOpen} />,
          document.getElementById('root')!
        )}
    </div>
  )
}
