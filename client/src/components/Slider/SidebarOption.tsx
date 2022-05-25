import React from "react";
import { IconType } from "react-icons";

export type SidebarOptionType = {
    text: string;
    Icon: IconType
}

export const SidebarOption: React.FC<SidebarOptionType> = ({ text, Icon }) => {
    return (
        <div className="sidebar_option">
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}