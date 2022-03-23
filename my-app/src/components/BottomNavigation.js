import React from "react";
import { makeStyles } from '@material-ui/styles';
import clsx from "clsx";
const initStyles = (lenght) => {
    let styles = {
        bottomBar: {
            width: "100%",
            height: 70,
            background: "#ee2448",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            boxSizing: "border-box",
            "& *":{
                padding:0,
                margin:0,
                boxSizing:"border-box"
            }
        },
        bottomBarList: {
            display: "flex",
            width: "100%",
            padding: 0,
            height: "100%",
        },
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
        selected: {},
        indicator: {
            "--clr": "#fff",
            "--indicatorSize": "70px",
            position: "absolute",
            listStyle:"none",
            top: "-50%",
            width: "var(--indicatorSize)",
            height: "var(--indicatorSize)",
            backgroundColor: "#ee2448",
            borderRadius: "50%",
            border: "6px solid var(--clr)",
            transition: "0.3s",
            "&::before": {
                content: "''",
                position: "absolute",
                top: "50%",
                left: -22,
                width: 20,
                height: 20,
                background: "transparent",
                borderTopRightRadius: 20,
                boxShadow: "1px -10px 0 0 var(--clr)"
            },
            "&::after": {
                content: "''",
                position: "absolute",
                top: "50%",
                right: -22,
                width: 20,
                height: 20,
                background: "transparent",
                borderTopLeftRadius: 20,
                boxShadow: "-1px -10px 0 0 var(--clr)"
            }
        },

    }
    let bottomBarItem = {
        position: "relative",
        listStyle: "none",
        flex: 1,
        display: "flex",
        justifyContent: "center"
    }
    for (let i = 1; i <= lenght; i++) {
        bottomBarItem = {
            ...bottomBarItem,
            ...{
                [`&:nth-child(${i})$selected ~ $indicator`]: {
                    transform: `translatex(calc((100vw / ${lenght}) * ${i - 1} + ((100vw / ${lenght}) - 70px) / 2))`
                }
            }
        }
    }
    styles.bottomBarItem = bottomBarItem;
    return makeStyles(styles)();
}


const BottomNavigation = ({children,currnValue,onChange}) => {
    const classes = initStyles(children.length);
    
    const childrenArray = children.map((child)=>{
        if(['boolean',"undefined","string","number"].includes(typeof child)||child===null){return child}
        return React.cloneElement(child,{
            onClick:onChange,
            isSelect:currnValue===child.props.value,
            text:child.props.text,
            icon:child.props.icon,
        })
    });

    return (
        <div className={classes.bottomBar}>
                <ul className={classes.bottomBarList}>
                    {
                        childrenArray.map((child) => (
                            <li key={child.props.text} className={clsx(classes.bottomBarItem,{[classes.selected]:child.props.isSelect})}>
                                {child}
                            </li>
                        ))
                    }
                    <li className={classes.indicator}></li>
                </ul>
            </div>
    )
}
export default BottomNavigation;