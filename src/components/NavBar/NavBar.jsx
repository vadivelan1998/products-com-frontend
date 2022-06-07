import "./NavBar.css"
import { Link } from "react-router-dom"
import {useSelector,useDispatch} from "react-redux"
import { useEffect } from "react"
import { getProduct } from "../../redux/product/productAction"

export const NavBar=()=>{
    const product=useSelector((store)=>store.product.product)
    console.log(product,"coutry")
    const dispatch=useDispatch()
    useEffect(()=>{
      dispatch(getProduct())
    },[])
    return (
      <div className="nav">
        
          <button className="home" >Home</button>
       
      </div>
    );
}