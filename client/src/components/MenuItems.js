import { useState } from "react";
import styled from "styled-components";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel, handleAdd, handleDelete }) => {
    const [dropdown, setDropdown] = useState(false);

    return (
        <Wrapper>

            <li className="menu-items">
                {items.subitems ? (
                    <>
                        <button type="button"
                            aria-haspopup="menu"
                            aria-expanded={dropdown ? "true" : "false"}
                            onClick={() => setDropdown((prev) => !prev)}
                            className='btn'
                        >
                            {items.folderName}
                            {depthLevel > 0 && items.subitems.length > 0 ? <span className="expand">&raquo;</span> : ''}
                        </button>{items.folderName !== 'root' && <span className="delete" onClick={() => handleDelete(items._id)}>x</span>} <span className="add-new" onClick={() => handleAdd(items._id, depthLevel)}>+New</span>
                        <Dropdown submenus={items.subitems}
                            dropdown={dropdown}
                            depthLevel={depthLevel}
                            handleAdd={handleAdd}
                            handleDelete={handleDelete}
                        />
                    </>
                ) : (
                    <>
                        <button className="delete" >{items.folderName}</button><span onClick={() => handleDelete(items._id)}>x</span> <span className="add-new" onClick={() => handleAdd(items._id, depthLevel)}>+New</span>
                    </>
                )}
            </li>

        </Wrapper>
    );
};

const Wrapper = styled.section`
    .menu-items{
        
       .expand{
        font-size:18px ;
        padding-left:5px ;
       }
       .delete{
        background-color:var(--clr-red-dark) ;
        color:var(--clr-primary-10) ;
        padding:5px ;
        cursor: pointer;
       }
       .add-new{
        margin-left:20px ;
        text-transform:uppercase ;
        cursor: pointer;
       }
    }
`

export default MenuItems;