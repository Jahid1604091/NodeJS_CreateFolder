import axios from 'axios';
import React from 'react'
import styled from "styled-components"
import { menuItems } from '../utils/menuItems';
import MenuItems from './MenuItems';
export default function Folders({folders,handleAdd,handleDelete}) {
  return (
    <Wrapper>
      <ul>
        {folders?.map((menu, index) => {
          const depthLevel = 1;
          return <MenuItems handleAdd={handleAdd} handleDelete={handleDelete} items={menu} key={index} depthLevel={depthLevel} />;
        })}
      </ul>
    </Wrapper>
  )
}

const Wrapper = styled.section`
  
`
