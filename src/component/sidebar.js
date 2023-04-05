import { Box } from "@material-ui/core"
import { listMenu } from "../mockup";
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import { Link } from "react-router-dom";
import { useStyles } from "../componetnCss/sidebarcss";
import { useLocation } from "react-router-dom";

export default function SideBarComponent(props) {
    const location = useLocation()
    const classes = useStyles();
    return (
        <Box display={props.list === true ? "flex" : "none"} className={classes.sidebarStyle}>
            <Box >
                {/* <Box width="100%" component="img" src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg"></Box> */}
                <Box className={classes.sidebarAvatar}>
                    <Box className={classes.sidebarAvatar__content}>
                        <Box className={classes.box__img}><Box mt="30px" component="img" borderRadius="6px" width="100%" src="https://kenh14cdn.com/thumb_w/660/2020/7/17/brvn-15950048783381206275371.jpg" /></Box>
                        <Box className={classes.sidebarAvatar__content__name}>KHAI</Box>
                        <Box className={classes.sidebarAvatar__content__job}>Professor</Box>
                    </Box>
                </Box>
                <Box className="header__menu">
                    <Box>
                        {listMenu.map((item) => {
                            return (
                                <Link key={item.id} className={classes.header__menu__link} to={item.path}>
                                    <Box className={`${classes.listMenu} ${location.pathname === item.path ? classes.listMenuClick : 'none'}`}>{item.menuName}</Box>
                                </Link>
                            )
                        })}
                        <Box className={classes.btn__signout}>
                            <Box className={classes.btn__signout__name}>
                                <ExitToAppIcon className={classes.btn__signout__icon}></ExitToAppIcon>
                                Đăng xuất
                            </Box>
                        </Box>
                    </Box>

                </Box>
            </Box>
            <Box className={classes.sidebarLiscene}>Copyright 2022 Eledevo Software</Box>
        </Box>
    )
}
