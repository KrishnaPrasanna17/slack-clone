import React from 'react';
import "./Header.css";
import { Avatar } from "@material-ui/core";
import AccessTimeIcon from "@material-ui/icons/AccessTime";
import SearchIcon from "@material-ui/icons/Search";
import HelpOutlineIcon from "@material-ui/icons/HelpOutline";


function Header() {
    return(
        <div className = "header">
<div className = "header_left">
{/*Avatars for logged in User*/}
       <Avatar
					className="header__avatar"
					alt="Prasanna"
				/>
                
{/*Time Icon*/}
    <AccessTimeIcon />
 </div>

    {/*Search Icon*/}
<div className = "header__search">
    <SearchIcon />
    {/*input*/}
    <input type="text" placeholder="Search..." />
   </div>

   <div className = "header__right">
    {/*help Icon*/}
      <HelpOutlineIcon />
    </div>
 </div>
    )
}

export default Header;
