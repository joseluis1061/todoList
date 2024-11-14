
import '../styles/Layout.css';

export const Layout = ({children}) => {
  return (
    <div className="layout">
      <div className="layout_container">
        {children}
      </div>
    </div>
  )
}
