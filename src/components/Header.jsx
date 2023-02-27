import { Link } from "react-router-dom"

import Button from "./Button"

/*Header Component used for the two pages*/
const Header = ({value, type, className1, onClick, form, id1, value1, type1, onClick1, form1, id, className, path, path1}) => {
  return (
    <header className="header">
      <div className="header__title">
        <h2><Link to="/">Product Add</Link></h2>
      </div>
      <div className="header__actions">
        <Button
           id={id} 
           form={form} 
           type={type} 
           value={value}
           className={className}
           onClick={onClick}
           path={path}>
        </Button>
        <Button
          id={id1} 
          form={form1} 
          type={type1} 
          value={value1}
          className={className1}
          onClick={onClick1}
          path={path1}
         >
        </Button>
      </div>
    </header>
  )
}

export default Header
