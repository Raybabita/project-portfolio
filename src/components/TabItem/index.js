import './index.css'

const TabItem = props => {
  const {tabDetails, updateActiveTabId, isActiveTab} = props
  const {displayText, tabId} = tabDetails

  const onActiveTab = () => {
    updateActiveTabId(tabId)
  }

  const activeClassName = isActiveTab ? 'active-tab-btn' : ''

  return (
    <li className="tab-item-container ">
      <button
        type="button"
        onClick={onActiveTab}
        className={`tab-btn ${activeClassName}`}
      >
        {displayText}
      </button>
    </li>
  )
}

export default TabItem
