import ProductItem from "../components/ProductItem"
import Header from "../components/Header"

/*Renders the product page*/
const ProductList = ({item, handleDelete }) => {
  return (
    <>
    <Header 
      type="submit"
      form="product_form"
      value="ADD"
      className1="delete-checkbox"
      id1="delete-product-btn"
      value1="MASS DELETE"
      onClick1={handleDelete}
      path="/add-product"
    />

    <div className="add__product">
      <ProductItem item={item}/>
      
    </div>
    </>
  )
}

export default ProductList
