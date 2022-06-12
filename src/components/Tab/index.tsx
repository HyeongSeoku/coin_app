import styles from './tab.module.scss'

interface ITabProps {
  contents: {
    id: string
    name: string
    icon: JSX.Element
  }[]
  currentTabState: string
  setTabState: React.Dispatch<React.SetStateAction<string>>
}

const Tab = ({ tabData }: { tabData: ITabProps }) => {
  const { contents, currentTabState, setTabState } = tabData

  const handleChangeRadio = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target
    setTabState(value)
  }

  return (
    <div className={styles.radioGroup}>
      {contents.map((tabItem) => (
        <div role='button' className={styles.radioItem} key={`toggle_${tabItem.id}`}>
          <input
            className={styles.radioBtn}
            type='radio'
            name='radio'
            value={tabItem.id}
            id={tabItem.id}
            checked={currentTabState === tabItem.id}
            onChange={handleChangeRadio}
          />
          <label className={styles.radioText} htmlFor={tabItem.id}>
            {tabItem.name}
          </label>
        </div>
      ))}
    </div>
  )
}

export default Tab
