{/**import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';

const drawer = createDrawerNavigator();

export default function DrawerNavigator(){
  return(
    <drawer.Navigator>
      <drawer.Screen
        name="ClientTabs"
        component={ClientTabs}
        options={{
          title:'Home',
          drawerIcon:({focussed,size})=>{
            <Icon
            type='material-community'
            name='home'
            color={focussed?'gray':'red'}
            size={size}
            
            />
          }

        }}
      />
    </drawer.Navigator>
  )
} */}
