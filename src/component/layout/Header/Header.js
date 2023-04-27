import React from 'react'
import { ReactNavbar } from "overlay-navbar"
import logo from '../../../image/logo.png'
import { MdAccountCircle } from "react-icons/md";
import { MdSearch } from "react-icons/md";
import { MdAddShoppingCart } from "react-icons/md";
function Header() {
    const options = {
        burgerColor: 'green',

        logo,
        logoHoverColor: "white",
        logoWidth: "10vmax",
        navColor1: "white",
        logoHoverSize: "10px",

        link1Text: "Home",
        link2Text: "Products",
        link3Text: "Contact",
        link4Text: "About",
        link1Url: "/",
        link2Url: "/productpage",
        link3Url: "/contact",
        link4Url: "/about",
        link1Size: "1.3vmax",
        link1Color: "green",
        nav1justifyContent: "flex-end",
        nav2justifyContent: "flex-end",
        nav3justifyContent: "flex-start",
        nav4justifyContent: "flex-start",
        link1ColorHover: "#eb4034",
        link1Margin: "1vmax",
        profileIcon: true,

        profileIconColor: "rgba(35, 35, 35,0.8)",
        ProfileIconElement: MdAccountCircle,
        searchIcon: true,
        searchIconColor: "rgba(35, 35, 35,0.8)",
        SearchIconElement: MdSearch,
        cartIcon: true,
        cartIconColor: "rgba(35, 35, 35,0.8)",
        CartIconElement: MdAddShoppingCart,
        cartIconUrl: '/cart',
        profileIconUrl: '/login',
        searchIconUrl: "/search"

    };
    return (
        <div><ReactNavbar  {...options}


        />
        </div>
    )
}

export default Header
