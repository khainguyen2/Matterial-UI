import { createTheme,makeStyles } from "@material-ui/core/styles";

const theme = createTheme({
    breakpoints: {
      values: {
        xs: 0,
        sm: 150,
        md: 100,
        lg: 100,
        xl: 1536,
      },
    },
  });
export const useStyles = makeStyles((theme) => ({
    sidebarStyle: {
        height: "100%",
        position: "relative",
        backgroundColor: "#151534",
        [theme.breakpoints.down("sm")]: {
            flexDirection: "column",
            justifyContent: "space-between",
            height:"100vh",
        },
        [theme.breakpoints.up("md")]: {
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            height:"100vh"
        }
    },
    sidebarAvatar: {
        borderBottom: "1px solid #bdbdbd",
        padding: "30px 0 0 0"
    },
    sidebarAvatar__content: {
        margin:'0 auto',
        width:'50%'
    },
    box__img: {
        width: "90px",
        margin: "0 auto",
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-end"
    },
    sidebarLiscene: {
        color: "#bdbdbd",
        fontSize: "10px",
        textAlign: "center",
        paddingBottom: "10px",
    },
    header__menu__link: {
        textDecoration: "none",
    },
    sidebarAvatar__content__name: {
        marginTop: "10px",
        color: "white",
        fontSize: "16px",
        textAlign: "center"
    },
    sidebarAvatar__content__job: {
        color: "white",
        marginBottom: "24px",
        textAlign: "center",
        fontWeight: "fontWeightBold"
    },
    btn__signout: {
        padding: "13px 0 14px 13px ",
        display: "flex",
        color: "#fafafa",
        fontSize: "14px"
    },
    btn__signout__icon: {
        fontSize: "16px",
        marginLeft: "3px"
    },
    btn__signout__name: {
        fontSize: "14px"
    },
    listMenu: {
        fontSize: "14px",
        color: "white",
        padding: "13px 0 10px 13px"
    },
    listMenuClick:{
        backgroundColor:"white",
        color:"black"
    }
}))