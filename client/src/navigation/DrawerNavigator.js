import * as React from "react";
import { createDrawerNavigator } from "@react-navigation/drawer";
import ClientTabs from "./ClientTabs";
import { Icon } from "react-native-elements";

const Drawer = createDrawerNavigator();

export default function DrawerNavigator() {
  return (
    <Drawer.Navigator>
      <Drawer.Screen
        name="ClientTabs"
        component={ClientTabs}
        options={{
          title: "Client",
          // headerShown: false,
          drawerIcon: ({ focussed, size }) => (
            <Icon
              type="material"
              name="home"
              color={focussed ? "#7cc" : "gray"}
              size={size}
            />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
