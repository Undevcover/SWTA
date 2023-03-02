
import Header from "../components/Header";
    
  /*Renders the add-product page*/

const ProductAdd = ({ formItems, error, handleChange, handleSubmit, display, handleCancel}) => {
  
  /*Object used to create main form*/
  const formData = [
    {
      title: "SKU",
    },
    {
      title: "Name",
    },
    {
      title: "Price",
    },
  ];

  /*Object used to create furniture form*/

  const furnitureForm = [
    {
      value: "height",
    },
    {
      value: "width",
    },
    {
      value: "length",
    },
  ];


  /*Creating main form from form object above */

  const form = formData.map((item) => (
    <div className="form__container-box" key={item.title}>
      <label htmlFor={item.title.toLowerCase()}>
        {item.title === "Price" ? item.title + " ($)" : item.title}
      </label>
      <input
        type="text"
        id={item.title.toLowerCase()}
        autoFocus
        value={formItems[`${item.title.toLowerCase()}`]}
        name={item.title.toLowerCase()}
        onChange={handleChange}
      />
    </div>
  ));

  /*Creating furniture form from form object above */

  const furniture = furnitureForm.map((item) => (
    <div key={item.value} className="item">
      <label htmlFor={item.value}>{`${
        item.value[0].toUpperCase() + item.value.slice(1)
      } (CM)`}</label>
      <input
        type="text"
        name={item.value}
        id={item.value}
        value={formItems.furniture}
        onChange={handleChange}
      />
    </div>
  ));
  return (
    <>
  
    <Header 
      type="submit"
      form="product_form"
      value="Save"
      path="/"
      onClick={handleSubmit}
      value1="Cancel"
      path1="/"
      onClick1={handleCancel}
    />

      {/*all form parts put together*/}
    
      <div className="form_div">
        <form id="product_form" className="form__container">
          {form}

          
      {/*dropdown Type Switcher part */}

          <div className="form__container-box">
            <label htmlFor="productType"> Type Switcher </label>
            <select name="measurement" value= {formItems.measurement} id="productType" onChange={handleChange}>
              <option >--SELECT--</option>
              <option name="dvd" value="dvd">
                DVD
              </option>
              <option name="book" value="book">
                Book
              </option>
              <option name="furniture" value="furniture">
                Furniture
              </option>
            </select>
          </div>
          
        {/*Conditionally rendering switched type*/}

          {display.dvd && (
            <div className="alternate__options">
              <label htmlFor="size">Size(MB)</label>
              <input onChange={handleChange} 
                value={formItems.dvd}
                type="text" 
                name="dvd" 
                id="size" />
              {error.dvd && <p style={{"color": "red"}}>* size cannot be empty</p>}
              <p>Please, provide size</p>
            </div>
          )}
          {display.furniture && (
            <>
              <div className="alternate__options">
                {furniture}
                <p style={{"color": "red"}}> * field cannot be empty</p>
                <p>Please, provide dimensions</p>
              </div>
            </>
          )}
          {display.book && (
            <div className="alternate__options">
              <label htmlFor="weight">Weight (KG)</label>
              <input
                onChange={handleChange}
                value={formItems.book}
                type="text"
                name="book"
                id="weight"
              />
              <p style={{"color": "red"}}>* size cannot be empty</p>
              <p>Please, provide weight</p>
            </div>
          )}
        </form>
        <br />
      </div>
    </>
  );
};

export default ProductAdd;
