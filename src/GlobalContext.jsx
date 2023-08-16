import { createContext, useState } from 'react'

import productsData from './assets/productsData.js'
import {slideShow,bestSales,portfolio, footerData} from './assets/allData.js'

const GlobalContext = createContext()

const GlobalProvider = ({children}) => {

    // chức năng tìm kiếm sản phẩm
    const search = (product_name) => {
        console.log(product_name)
    }
    // ẩn/hiện giỏ hàng
    const [showCart, setShowCart] = useState(false)
    // chức năng thêm sản phẩm vào giỏ hàng
    const [cart, setCart] = useState([
        {
            "id":"01",
            "name":"COME OUT",
            "price":5300000,
            "img":"http://drive.google.com/uc?export=view&id=1sbV1Jyr8MDMHwCJlgY1EYYw8CZu5ISuq",
            "categoryName"  : "perfume",
            "quantity":5
        }
    ]) 
    // const addProdToCart = (product) => {
    //     console.log(product)
    //     if (cart) {
    //         let cartCopy = cart
    //         let position
    //         let quantity
    //         for (let i = 0; i < cartCopy.length; i++){
    //             if (cartCopy[i].infor.id === product.id) {
    //                 position = i
    //                 quantity = cartCopy[i].quantity +product.quantity
    //                 break
    //             }
    //         }
    //         if (!position){
    //             cartCopy = [...cartCopy, product]
    //         }
    //         return
    //     }
    //     return setCart(product)
    // }

    const value = {
        productsData,
        slideShow,
        bestSales,
        portfolio,
        footerData,
        cart,
        showCart,
        setCart,
        setShowCart,
        search
    }

    return (
        <GlobalContext.Provider value={value}>
            {children}
        </GlobalContext.Provider>
    )
}

export {GlobalProvider,GlobalContext };