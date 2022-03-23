import React, { useState } from "react";
import HomeIcon from '@material-ui/icons/Home';
import PersonIcon from '@material-ui/icons/Person';
import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';
import CameraAltIcon from '@material-ui/icons/CameraAlt';
import BottomNavigation from "./components/BottomNavigation"
import BottomNavigationItem from "./components/BottomNavigationItem"

import { makeStyles } from '@material-ui/styles';
const useStyles = makeStyles(() => ({
  div: {
    position: "fixed",
    zIndex: 1100,
    right: 0,
    bottom: 0,
    top: "auto",
    left: "auto",
    width: "100%",
  },
}));
const tabs = [
  {
    text: "Home",
    path: "/Home",
    icon: <HomeIcon />,
  },
  {
    text: "Profile",
    path: "/Profile",
    icon: <PersonIcon />,
  },
  {
    text: "Chat",
    path: "/Chat",
    icon: <QuestionAnswerIcon />,
  },
  {
    text: "Photos",
    path: "/Photos",
    icon: <CameraAltIcon />,
  },
]
const App = () => {
  const [currnValue, setcurrnValue] = useState(tabs[0].path);
  const classes = useStyles();

  return (

    <div className={classes.div}>
      <BottomNavigation currnValue={currnValue} onChange={(res) => {setcurrnValue(res) }}>
        {
          tabs.map((item) => {
            return <BottomNavigationItem key={item.text} text={item.text} icon={item.icon} value={item.path} />
          })
        }
      </BottomNavigation>
    </div>
  );
}

export default App