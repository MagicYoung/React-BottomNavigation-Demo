import React from "react";
import { makeStyles} from '@material-ui/styles';
import clsx from "clsx";

const useStyles = makeStyles((theme) => ({
    bottomBarItemBox: {
        height: "100%",
        position: "relative",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        width: "100%",
        textAlign: "center",
        fontWeight: 500,
        zIndex: 1101,
    },
    selected: {
        "&$icon": {
            transform: "translateY(-32px)"
        },
        "&$text": {
            opacity: 1,
            transform: "translateY(10px)"
        }
    },
    icon: {
        color:"#fff",
        position: 'relative',
        display: "block",
        lineHeight: "75px",
        fontSize: "1.5em",
        transition: "0.3s",
        transform: ({ isSelect }) => isSelect ? "translateY(-32px)" : "translateY(0px)"
    },
    text: {
        color:"#fff",
        position: "absolute",
        fontSize: "0.75em",
        letterSpacing: "0.05em",
        fontWeight:"bold",
        transition: "0.3s",
        opacity: ({ isSelect }) => isSelect ? 1 : 0,
        transform: ({ isSelect }) => isSelect ? "translateY(10px)" : "translateY(20px)"
    },
}));


const BottomNavigationItem = ({ isSelect,text,icon,onClick,value }) => {
    const classes = useStyles({ isSelect });
    
    return (
        <div onClick={()=>{onClick(value)}} className={clsx(classes.bottomBarItemBox)}>
            <span className={classes.icon}>{icon}</span>
            <span className={classes.text}>{text}</span>
        </div>
    )
}
export default BottomNavigationItem;