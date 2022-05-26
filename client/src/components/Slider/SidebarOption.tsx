import { SvgIconTypeMap } from "@mui/material";
import { OverridableComponent } from "@mui/types";
import React from "react";
import "./SidebarOption.css";

export type SidebarOptionType = {
    text: string;
    Icon: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
        muiName: string;
    }
}

export const SidebarOption: React.FC<SidebarOptionType> = ({ text, Icon }) => {
    return (
        <div className="sidebar_option">
            <Icon />
            <h2>{text}</h2>
        </div>
    )
}