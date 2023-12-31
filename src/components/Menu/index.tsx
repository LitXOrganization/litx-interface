import React from "react";
import { NavLink } from "react-router-dom";
import "./index.scss";
import { RefreshCw } from "react-feather";

interface MenuProps {
    items: {
        title: string;
        icon: JSX.Element;
        link: string;
        marked?: boolean;
    }[];
    classes?: string;
    refreshHandler: any;
    isLoading: any;
    size: string | number;
}

const Menu = ({ items, classes, refreshHandler, isLoading, size }: MenuProps) => {
    return (
        <div className={`menu-wrapper w-100 flex-s-between b ${classes}`}>
            <ul className={`menu-list`}>
                {items.map((el, i) => (
                    <NavLink key={i} to={el.link} className={"menu-list-item ph-1"} activeClassName={"menu-list-item--active"}>
                        {el.icon}
                        {el.title}
                        {el.marked ? <span className={"menu-list-item__circle"}></span> : null}
                    </NavLink>
                ))}
            </ul>
            {refreshHandler && isLoading !== undefined && (
                <span className={"ml-a pb-1 ph-1"}>
                    <button className={"menu-list-refresh hover-op trans-op"} disabled={isLoading} onClick={() => refreshHandler()} data-refreshing={isLoading}>
                        <RefreshCw style={{ display: "block" }} size={size} stroke={"var(--icon)"} />
                    </button>
                </span>
            )}
        </div>
    );
};

export default Menu;
