import styles from './toggle.module.scss'

interface IToggleProps {
  contents: {
    id: string
    name: string
    icon: JSX.Element
  }[]
  currentToggleState: string
  setToggle: React.Dispatch<React.SetStateAction<string>>
}

const Toggle = ({ toggleData }: { toggleData: IToggleProps }) => {
  const { contents, currentToggleState, setToggle } = toggleData

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setToggle(value)
  }

  return (
    <div className={styles.radioGroup}>
      {contents.map((toggleItem) => (
        <div role='button' className={styles.radioItem} key={`toggle_${toggleItem.id}`}>
          <input
            className={styles.radioBtn}
            type='radio'
            name='radio'
            value={toggleItem.id}
            id={toggleItem.id}
            checked={currentToggleState === toggleItem.id}
            onChange={handleChangeRadio}
          />
          <label className={styles.radioText} htmlFor={toggleItem.id}>
            {toggleItem.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Toggle
