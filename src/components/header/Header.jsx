import { Link } from "react-router-dom";
import { useContext, useState, useTransition } from 'react'

import {GlobalContext} from "../../GlobalContext";
import Cart from "../cart/Cart";
import {Loading, Search} from "../search/Search"

import './header.scss'

const Header = () => {

    const {showCart, setShowCart, productsData} = useContext(GlobalContext)
    
    //xử lý tìm kiếm
    const [searchInput, setSearchInput] = useState()
    const [dataSearch, setDataSearch] = useState()
    const [isLoading, startTrasition] = useTransition()
    const handleSearch = (value) => {
        setSearchInput(value)
        startTrasition(() => {
            if (value != ""){
                const data = []
                productsData.forEach(element => {
                if (element.name.search(value) !== -1){
                    data.push(element)
                }});
                setDataSearch(data)
            } else {
                setDataSearch()
            }
        })
    } 

    //xử lý giỏ hàng
    const handleShowCart = () => {
        setShowCart(!showCart)
    }
    return(
        <>
            <div className="header_fake"></div>
            <div className="endow">MIỄN PHÍ GIAO HÀNG TOÀN QUỐC ĐƠN TỪ 500,000VND</div>
            <header className='header'>
                <Link to="/" className="header_logo link">
                    <div className="header_logo_square"></div>
                    <div className="header_logo_brand">Longterm</div>
                </Link>
                <nav className="header_nav">
                    <div className="header_nav_shop">
                        <Link to='/shop/general' className="link">CỬA HÀNG</Link>
                        <ul className="header_nav_shop_select">
                            <li className="header_nav_shop_select_option">
                                <Link to="shop/perfume" className="link">NƯỚC HOA</Link>
                            </li>
                            <li className="header_nav_shop_select_option">
                                <Link to="/shop/serum" className="link">SERUM</Link>
                            </li>
                            <li className="header_nav_shop_select_option">
                                <Link to="/shop/toner" className="link">TONER</Link>
                            </li>
                            <li className="header_nav_shop_select_option">
                                <Link to="/shop/lipstick"  className="link">SON MÔI</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="header_nav_blog">
                        <Link to='/blog' className="link">BÀI VIẾT</Link>
                    </div>
                    <div className="header_nav_contact">
                        <Link to='/contact' className="link">LIÊN HỆ</Link>
                    </div>   
                    <div className="header_nav_introduce">
                        <Link to='/introduce' className="link">VỀ CHÚNG TÔI</Link>
                    </div>
                </nav>
                <div className="header_tool">
                    <div className="header_tool_search header_tool_element">
                        <i className="fa-solid fa-magnifying-glass header_tool_search_icon"></i>
                        <input placeholder="Bạn muốn tìm sản phẩm gì?" 
                            type="text" className="header_tool_search_input"
                            onChange={(e)=>{handleSearch(e.target.value.toLocaleUpperCase())}}/>
                    </div>
                    <i className="fa-solid fa-cart-shopping header_tool_cart header_tool_element pointer"
                       onClick={()=>{handleShowCart()}}></i>
                    <i className="fa-solid fa-user header_tool_profile header_tool_element pointer"></i>
                </div>
            </header>
            {showCart&&<Cart handleShowCart={handleShowCart}/>}
            {isLoading ? <Loading/> : ( dataSearch && <Search setSearchInput={setSearchInput} setDataSearch={setDataSearch} searchInput={searchInput} value={dataSearch}/>)}
        </>
    )
}

export default Header