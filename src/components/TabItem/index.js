import './index.css'

const TabItem = props => {
  const {tabItems, setActiveTabId, isActive} = props

  const {tabId, displayText} = tabItems

  const onClickPara = () => {
    setActiveTabId(tabId)
  }

  const tabBtnClassName = isActive ? 'tab-button active' : 'tab-button'

  return (
    <li className="tabs-container">
      <button className={tabBtnClassName} type="button" onClick={onClickPara}>
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
