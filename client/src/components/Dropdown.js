import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel,handleAdd,handleDelete }) => {
    depthLevel = depthLevel + 1;
    const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
    return (
        <ul className={`dropdown ${dropdownClass} ${dropdown ? "show" : ""}`}>
            {submenus.map((submenu, index) => (
                <MenuItems items={submenu} key={index} depthLevel={depthLevel}handleAdd={handleAdd} handleDelete={handleDelete} />
            ))}
        </ul>
    );
};

export default Dropdown;