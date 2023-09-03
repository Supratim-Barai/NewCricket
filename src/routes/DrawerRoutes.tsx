/* eslint-disable prettier/prettier */
import React, { FC } from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import BottomTabRoutes from "./BottomTabRoutes";
import SideBar from "../components/SideBar";

const Drawer = createDrawerNavigator();

const DrawerRoutes: FC = () => {
    return (
        <Drawer.Navigator screenOptions={{
            headerShown: false,
            drawerStyle: {
                backgroundColor: "rgba(0,0,0,0.8)"
            }
        }}
            drawerContent={props => <SideBar {...props} />}
        >
            <Drawer.Screen
                name="BottomTabRoutes"
                component={BottomTabRoutes}
            />
        </Drawer.Navigator>
    )
}

export default DrawerRoutes;