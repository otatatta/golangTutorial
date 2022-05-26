import React from "react"
import "./Sidebar.css";
import { SidebarOption } from "./SidebarOption"; 
import { Button } from "@mui/material";
import TwitterIcon from '@mui/icons-material/Twitter';
import HomeIcon from '@mui/icons-material/Home';
import TagIcon from '@mui/icons-material/Tag';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MailIcon from '@mui/icons-material/Mail';
import BookmarkIcon from '@mui/icons-material/Bookmark';
import ListAltIcon from '@mui/icons-material/ListAlt';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

type Props = {}

const sidebarItems = [
    { text: "", Icon: TwitterIcon },
    { text: "Home", Icon: HomeIcon },
    { text: "Explore", Icon: TagIcon },
    { text: "Notifications", Icon: NotificationsIcon },
    { text: "Messages", Icon: MailIcon },
    { text: "Bookmarks", Icon: BookmarkIcon },
    { text: "Lists", Icon: ListAltIcon },
    { text: "Profile", Icon: PermIdentityIcon },
    { text: "More", Icon: MoreHorizIcon }
]

export const Sidebar: React.FC<Props> = () => {
    return (
        <div className="sidebar">
            {sidebarItems.map((item) => <SidebarOption text={item.text} Icon={item.Icon} />)}

            <Button variant="contained" className="sidebar__tweet" fullWidth>
                Tweet
            </Button>

        </div>
    )
}