import { useRef } from 'react'
import reactDom from 'react-dom'
import { useRecoilState } from 'recoil'
import cx from 'classnames'

import { modalOpenState } from 'states/modal'

import styles from './modal.module.scss'

interface IPortal {
  children?: React.ReactNode
}

const Modal = () => {
  const ModalPortal = ({ children }: IPortal) => {
    const el = document.getElementById('modal')
    return reactDom.createPortal(children, el!)
  }
  const [modalState, setModalState] = useRecoilState(modalOpenState)
  const modalMessage = modalState.text || '모달 기본 텍스트'

  const backDropRef = useRef<HTMLElement>(null)
  const closeBtnRef = useRef<HTMLButtonElement>(null)

  const closeModal = (e: React.MouseEvent<HTMLElement>) => {
    if (backDropRef.current === e.target || closeBtnRef.current === e.target) setModalState({ open: false, text: '' })
  }

  const handleKeyBoardClose = (e: React.KeyboardEvent) => {
    if (e.key === 'Escape') setModalState({ open: false, text: '' })
  }

  return (
    <ModalPortal>
      <section
        role='button'
        tabIndex={0}
        ref={backDropRef}
        className={cx(styles.modalBackDrop, { [styles.open]: modalState.open })}
        onClick={closeModal}
        onKeyDown={handleKeyBoardClose}
      >
        <div className={styles.modalWrapper}>
          <div className={styles.modalHeader}>
            <button className={styles.closeBtn} type='button'>
              <span className={styles.closeBtnText} ref={closeBtnRef}>
                X
              </span>
            </button>
          </div>
          <section className={styles.modalContent}>
            <div className={styles.contentWrapper}>
              <div className={styles.textWrapper}>{modalMessage}</div>
            </div>
          </section>
        </div>
      </section>
    </ModalPortal>
  )
}

export default Modal
