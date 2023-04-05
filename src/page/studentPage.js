import { Grid } from "@material-ui/core";
import { Outlet } from "react-router-dom";
import Sidebar from "../component/sidebar";
import MuiDrawer from "../component/drawer";

export default function StudentPage() {
    return (
        <Grid container spacing={0}>
            <Grid item md={2} xs={12}>
                <MuiDrawer></MuiDrawer>
                <Sidebar ></Sidebar>
            </Grid>
            <Grid item md={10} xs={12}>
                <Outlet></Outlet>
            </Grid>
        </Grid>
    )
}