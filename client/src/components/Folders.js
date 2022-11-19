import React from 'react'
import styled from "styled-components"
import { menuItems } from '../utils/menuItems';
import MenuItems from './MenuItems';
export default function Folders() {

  return (
    <>

        <ul>
          {menuItems.map((menu, index) => {
            const depthLevel = 0;
             return <MenuItems items={menu} key={index} depthLevel={depthLevel} />;
          })}
        </ul>

    </>
  )
}

// const Wrapper = styled.section`
// ul {
//   padding: 0;
//   margin: 0;
// }

// li {
//   list-style: none;
//   position: relative;
// }

// a {
//   text-decoration: none;
// }

// nav {
//   display: flex;
// }

// nav a {
//   display: block;
//   padding: 8px 10px;
// }

// nav>li {
//   margin: 0 6px
// }

// .dropdown {
//   position: relative;
// }

// .dropdown-menu {
//   display: none;
//   background-color: #ddd;
//   position: absolute;
//   top: 100%;
//   min-width: 130px;
//   left: 0;
//   z-index: 100;
// }

// .dropdown-menu .dropdown-menu {
//   left: 100%;
//   top: 0;
// }

// .dropdown .dropdown-toggle:focus {
//   color: red;
// }

// /* .dropdown .dropdown-toggle:focus + .dropdown-menu,
// .dropdown-menu:hover {
//   display: block;
// } */
// input[type="checkbox"] {
//   display: none
// }

// input[type="checkbox"]:checked + .dropdown-menu{
//   display: block;
// }

// `
