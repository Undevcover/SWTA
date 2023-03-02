import "./App.css";
import { Route, Routes } from "react-router";
import { useState } from "react"

    /* imported pages/items */
import ProductAdd from "./pages/ProductAdd";
import NotFound from "./pages/NotFound";
import ProductList from "./pages/ProductList"
import data from "./data"

/*Renders the entire app*/

function App() {
  const [error, setError] = useState({
    sku: false,
    name: false,
    price: false,
    height: false,
    width: false,
    length: false,
    book: false,
    dvd: false

  })
  const[display, setDisplay] =useState({
    dvd: false,
    book: false,
    furniture: false
  })   /*State to conditionally render switched type*/

  const [formItems, setFormItems] = useState({
    isChecked: false,
    sku: "",
    name: "",
    price: "",
    measurement: "",
    height: "",
    width: "",
    length: "",
    book: "",
    dvd: ""
  }) 
    
  
  /*State to conditionally render form input*/

  const [items, setItems] = useState(data) /*State to store all data from database*/

  /*This function handles the change to each input in the form, sets switched type to display corresponding form and set form item to store the input values*/
  const handleChange = e =>{
    const {name, value } = e.target
    name === "measurement" && setDisplay( () => {
      return {
        [value]: !display[value]

      }
    })
    setFormItems(prevState => {
      return {
        ...prevState, 
        [name] : value

      }
    })
   
  }

  /*This function adds a new item to the database, takes formInput as parameter*/
  const addItem = ( value ) => {
    const newItem = {
        isCheck: false,
        id: value.sku,
        name: value.name,
        price: value.price,
        measurement: value.measurement,
        book: value.book,
        dvd: value.dvd,
        height: value.height,
        width: value.width,
        length: value.length
    }
    const listItems = [...items, newItem]
    setItems(() => listItems)
  }

  /*This function clears form input data and resets display*/
  const handleCancel = () => {
    setDisplay(()=>{
      return {
        dvd: false,
    book: false,
    furniture: false
      }      
    })
    setFormItems(()=> {
      return {
      sku: "",
    name: "",
    price: "",
    measurement: "",
    height: "",
    width: "",
    length: "",
    book: "",
    dvd: ""
      }
    })
  }
  
/*Submits data to database and resets the input fields on submission*/
  const  handleSubmit = (e) => {
    e.preventDefault()
    if (formItems.sku.length===0){
      setError(prevError =>{
        return {
          ...prevError,
          dvd: !prevError.dvd
        }
      })
      return
    }
    else{

    
    addItem(formItems)
    setFormItems(()=> {
      return {
      sku: "",
    name: "",
    price: "",
    measurement: "",
    height: "",
    width: "",
    length: "",
    book: "",
    dvd: ""
      }
    })
    setDisplay(()=>{
      return {
        dvd: false,
    book: false,
    furniture: false
      }
      
    })
  }
  }

  /*allows the checkbox to be checked*/
  const handleCheck = (id) =>{
    const listItem = items.map(item => item.id === id ? {...item, isCheck: !item.isCheck} : item )
    setItems(()=> listItem)
  }

  /*this function makes the checked checkbox(es) to be deleted*/
const handleDelete = () => {
  const listItem = items.filter(item => item.isCheck === false )
    setItems(()=> listItem)
}



  /*renders the added product"s measurements depending on the type selected */
  const renderOptions = (formItem, objectItem) => {
  if (objectItem ==="dvd"){
    return `Size: ${formItem.dvd} MB`
  }
  else  if (objectItem ==="furniture") {
    return `Dimensions: ${formItem.height}x${formItem.width}x${formItem.length}`
  }
  else  if (objectItem ==="book"){
    return `Weight: ${formItem.book} KG`
  }

}


/* Loops through data from the database and renders the items on the product page*/
const item = items.map(item => {
  console.log(item.id)

  return (<div className="item__container" key={item.id} >
    <input onChange={()=>handleCheck(item.id)} className="delete-checkbox" type="checkbox" name="del-checknox" checked={item.isCheck} />
    <div className="item_container definition">
        <h1>{item.id}</h1>
        <h1>{item.name}</h1>
        <h1> {item.price}</h1>
        <h1>{renderOptions(item, item.measurement)}</h1>
    </div>
  
</div>)}
)

  return (
  <div className="App">
    <Routes>
      <Route path="/" element={ <ProductList item ={item} handleDelete={handleDelete} />}/>
      <Route path="/add-product" element={ <ProductAdd 
      items={items}
      display={display}
      formItems={formItems} 
      handleChange={handleChange}
      handleSubmit={handleSubmit}
      handleCancel={handleCancel}
      error={error}
      />}/>
      <Route path="/*" element={ <NotFound />}/>
    </Routes>
    
    </div>
  );
}

export default App;

