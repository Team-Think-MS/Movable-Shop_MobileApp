import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ClientTabs from './ClientTabs';
import { Icon } from 'react-native-elements';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Message from '../screens/Message';
import CategoriesPage from '../screens/CategoriesPage';
import Ionicons from 'react-native-vector-icons/Ionicons';



const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
  return(
    <Drawer.Navigator useLegacyImplementation={true} 
    drawerContent={props => <CustomDrawerContent {...props}/>}
     screenOptions={{
      headerShown:false,
      drawerActiveBackgroundColor:'#f3f2f2',
      drawerActiveTintColor:'black',
      drawerInactiveTintColor:'gray',
      drawerLabelStyle: {
        marginLeft: -5,
        fontFamily: 'sans-serif-medium',
        fontSize: 15,
      },
    
    
    }}
     
     
     >
      <Drawer.Screen
        name="ClientTabs"
        component={ClientTabs}
        options={{
          drawerIcon:({color})=>(
            <Ionicons
            name='home'
            size={22}
            color={color}
            
            />
          ),
          title:'Home',

        }}
      />
      <Drawer.Screen
        name="Messages"
        component={Message}
        options={{
          drawerIcon:({color})=>(
            <Ionicons
            name='mail'
          color={color}
            size={22}
            
            />
          ),
          title:'Message',

        }}
      />
      <Drawer.Screen
        name="Categories"
        component={CategoriesPage}
        options={{
          drawerIcon:({color})=>(
            <Ionicons
            name='ios-grid'
          color={color}
            size={22}
            
            />
          ),
          title:'Categories',
          

        }}
      />
    </Drawer.Navigator>
  )
} 
