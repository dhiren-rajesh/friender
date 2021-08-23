import React from 'react'
import "./SwipeButtons.css"
import IconButton from "@material-ui/core/IconButton";
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';

export default function SwipeButtons() {
    var styles = {fontSize: "2rem"}
    return (
        <div className="swipeButtons">
            <IconButton className="swipe-repeat">
                <ReplayIcon style={styles}/>
            </IconButton>
            <IconButton className="swipe-left">
                <CloseIcon style={styles}/>
            </IconButton>
            <IconButton className="swipe-star">
                <StarRateIcon style={styles}/>
            </IconButton>
            <IconButton className="swipe-right">
                <FavoriteIcon style={styles}/>
            </IconButton>
            <IconButton className="swipe-lightning">
                <FlashOnIcon style={styles}/>
            </IconButton>
        </div>
    )
}
