import React from 'react'
import './Header.css'
import IconButton from "@material-ui/core/IconButton";
import PersonIcon from '@material-ui/icons/Person';
import GroupWorkIcon from '@material-ui/icons/GroupWork';
import ForumIcon from '@material-ui/icons/Forum';

export default function Header() {
    var styles = {fontSize: "2.5rem"}
    return (
        <div className="header">
            <IconButton>
                <PersonIcon style={styles} className="header-icon"/>
            </IconButton>
            <IconButton>
                <GroupWorkIcon className="header-icon" style={{color: "#E63E6D", fontSize: "2.5rem"}}/>
            </IconButton>
            <IconButton>
                <ForumIcon style={styles} className="header-icon"/>
            </IconButton>
        </div>
    )
}
