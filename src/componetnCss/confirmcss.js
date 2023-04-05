import { makeStyles ,createTheme, MuiThemeProvider} from "@material-ui/core/styles";

export const useStyles = makeStyles((theme) => ({
    testBP:{
        display:'none',
        [theme.breakpoints.down("xs")]: {
            display:'block'
        },
    },
    confirm: {
        backgroundColor: "#eeeeee",
        height: "100vh"
    },
    fontWeight:{
        fontWeight:700
    },
    confirm__width: {
        width: "90%",
        margin: "0 auto",
        paddingTop: "35px",
        [theme.breakpoints.down("sm")]: {
            padding: "0",
            // width:"95%"
        },
    },
    confirm__header: {
        display: "flex",
        justifyContent: "space-between",
        marginBottom: "20px",
        [theme.breakpoints.down("xs")]: {
            paddingTop:"30px"
        }
    },
    confirm__header__select: {
        width: "15%",
        backgroundColor: "#d9d8da",
        [theme.breakpoints.down("xs")]: {
            width:"30%"
        }
    },
    confirm__boxData: {
        marginBottom: "15px",
        color:'white',
        [theme.breakpoints.down("xs")]: {
            display:"none"
        }
    },
    confirm__boxData__item: {
        textAlign: "center",
        padding:"16px 0px",
        borderRadius:"5px"
    },
    order__box: {
        [theme.breakpoints.down("850")]: {
            display:'none',
        },
    },
    order__box__2:{
        display:'none',
        [theme.breakpoints.down("850")]: {
            display:'block',
        },
    },
    content__padding:{
        padding: "16px 16px 30px 16px",
        backgroundColor: "#ffffff",
        borderRadius: "6px",
    },
    order__box__radioButton: {
        marginTop: "10px"
    },
    order__btn: {
        fontSize:'12px',
        [theme.breakpoints.down("850")]: {
            display:'none',
        }
    },
    order__btn__2:{
        fontSize:'12px',
        display:'none',
        [theme.breakpoints.down("850")]: {
            position: "fixed",
            bottom: "0",
            left: "0",
            backgroundColor: "white",
            display: "flex",
            justifyContent: "space-around ",
            padding: "15px 0"
        }
    },
    radioBtn:{
        [theme.breakpoints.down("sm")]: {
            width:"100%"
        }
    },
    btn:{
        width:"100%",
    },
    btn__customize1:{
        width:"100%",
        backgroundColor:"#4fad52",
        color:"white",
        borderRadius:"4px",
        padding:"4px 0",
        maxWidth:"200px",
        fontSize:'13px'
    },
    btn__customize2:{
        width:"100%",
        backgroundColor:"#f27c3b",
        color:"white",
        borderRadius:"4px",
        padding:"4px 0",
        maxWidth:"200px",
        fontSize:'13px'

    },
    btn__customize3:{
        width:"100%",
        backgroundColor:"#ee4f52",
        color:"white",
        borderRadius:"4px",
        padding:"4px 0",
        maxWidth:"200px",
        fontSize:'13px'

    },
    btn__customize4:{
        width:"100%",
        backgroundColor:"#02968a",
        color:"white",
        borderRadius:"4px",
        padding:"4px 0",
        maxWidth:"200px",
        fontSize:'13px'
    },

}))