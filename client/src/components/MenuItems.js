import { useState } from "react";
import Dropdown from "./Dropdown";

const MenuItems = ({ items, depthLevel }) => {
    const [dropdown, setDropdown] = useState(false);
    
    return (
        <li className="menu-items">
            {items.submenu ? (
                <>
                    <button type="button"
                        aria-haspopup="menu"
                        aria-expanded={dropdown ? "true" : "false"}
                        onClick={() => setDropdown((prev) => !prev)}
                    >
                        {items.title}{' '}
                        {depthLevel > 0 ? <span>&raquo;</span> : <span className="arrow" />}
                    </button>
                    <Dropdown submenus={items.submenu}
                        dropdown={dropdown}
                        depthLevel={depthLevel}

                    />
                </>
            ) : (
                <a href={items.url}>{items.title}</a>
            )}
        </li>
    );
};

export default MenuItems;