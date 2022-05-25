import React from "react"
import { SidebarOption } from "./SidebarOption";
import { RiBookmarkLine, RiFileList2Line, RiHashtag, RiMailLine, RiMoreFill, RiNotification2Fill, RiTwitterFill, RiUserLine } from "react-icons/ri";

type Props = {}

const sidebarItems = [
    { text: "Home", Icon: RiTwitterFill },
    { text: "Explore", Icon: RiHashtag },
    { text: "Notifications", Icon: RiNotification2Fill },
    { text: "Messages", Icon: RiMailLine },
    { text: "Bookmarks", Icon: RiBookmarkLine },
    { text: "Lists", Icon: RiFileList2Line },
    { text: "Profile", Icon: RiUserLine },
    { text: "More", Icon: RiMoreFill }
]

export const Sidebar: React.FC<Props> = () => {
    return (
        <div className="sidebar">
            <RiTwitterFill />
            {sidebarItems.map((item) => <SidebarOption text={item.text} Icon={item.Icon} />)}

            <button>
                Tweet
            </button>
        </div>
    )
}