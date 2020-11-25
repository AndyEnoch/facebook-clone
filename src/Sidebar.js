import React from 'react';
import './Sidebar.css';
import SidebarRow from './SidebarRow';
import { Chat, EmojiFlags, ExpandMore, LocalHospital, People, Storefront, VideoLibrary } from '@material-ui/icons';
import { useStateValue } from './StateProvider';

function Sidebar() {
    const [{ user }, dispatch] = useStateValue();
    return (
        <div className="sidebar">
            <SidebarRow 
                title={user.displayName}
                src="https://pbs.twimg.com/profile_images/1160992618546946048/qWNMNg6o.jpg" title="Andy Enoch"/>
            <SidebarRow Icon={LocalHospital} 
                title="COVID-19 Information Center"/>
            <SidebarRow Icon={EmojiFlags} title="Pages" />
            <SidebarRow Icon={People} title="Friends" />
            <SidebarRow Icon={Chat} title="Messenger" />
            <SidebarRow Icon={Storefront} title="Marketplace" />
            <SidebarRow Icon={VideoLibrary} title="Videos" />
            <SidebarRow Icon={ExpandMore} title="Marketplace" />
        </div>
    )
}

export default Sidebar;
