import './index.css'

const AppItem = props => {
  const {appListItems} = props
  const {appName, imageUrl} = appListItems

  return (
    <li className="list-container">
      <img src={imageUrl} className="images" alt={appName} />
      <p className="app-name">{appName}</p>
    </li>
  )
}

export default AppItem
