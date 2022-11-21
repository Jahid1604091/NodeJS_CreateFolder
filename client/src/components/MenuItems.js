import { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel,handleAdd,handleDelete }) => {
    const [dropdown, setDropdown] = useState(false);
    
    return (
        <li className="menu-items">
            {items.subitems ? (
                <>
                    <button type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.folderName}
                        {depthLevel > 0 && items.subitems.length>0 ? <span>&raquo;</span> : ''}
                    </button>{items.folderName !== 'root' && <span onClick={()=>handleDelete(items._id)}>x</span>} <span onClick={()=>handleAdd(items._id,depthLevel)}>New</span>
                    <Dropdown submenus={items.subitems}
                        dropdown={dropdown}
                        depthLevel={depthLevel}
                        handleAdd={handleAdd} 
                        handleDelete={handleDelete}
                    />
                </>
            ) : (
                <>
                    <button>{items.folderName}</button><span onClick={()=>handleDelete(items._id)}>x</span> <span onClick={()=>handleAdd(items._id,depthLevel)}>New</span>
                </>
            )}
        </li>
    );
};

export default MenuItems;