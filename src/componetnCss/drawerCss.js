import { makeStyles } from "@material-ui/core/styles";
export const useStyle = makeStyles((theme) => ({

    drawer: {
        backgroundColor: "#eeeeee",
        display: "none",
        [theme.breakpoints.down("sm")]: {
            display: "block",
        },
        [theme.breakpoints.down('xs')]: {
            display: 'flex',
            justifyContent: "space-between"
        }
    },
    mobile: {
        display:"none",
        [theme.breakpoints.down('xs')]: {
            display: 'block',
            textAlign: "center",
            color: "white",
            paddingBottom: "10px",
            fontSize:'13px'
        }
    },
    laptop:{
        display:"none"
    }
}))


