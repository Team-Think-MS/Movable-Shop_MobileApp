import * as React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import ClientTabs from './ClientTabs';
import CustomDrawerContent from '../components/CustomDrawerContent';
import Message from '../screens/Message';
import CategoriesPage from '../screens/CategoriesPage';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Settings from '../screens/Settings';
import Help from '../screens/Help';
import WishList from '../screens/WishList';
import Purchases from '../screens/Purchases';


const Drawer = createDrawerNavigator();

export default function DrawerNavigator(){
  return(
    <Drawer.Navigator useLegacyImplementation={true} 
    drawerContent={props => <CustomDrawerContent {...props}/>}
     screenOptions={{
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
          headerShown:false,
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
      {/**  <Drawer.Screen
        name="Messages"
        component={Message}
        options={{
          headerShown:true,
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
   
       */}
     
         <Drawer.Screen
        name="WishList"
        component={WishList}
        options={{
          headerShown:true,
          drawerIcon:({color})=>(
            <Ionicons
            name='ios-heart'
          color={color}
            size={22}
            
            />
          ),
          title:'Wish List',
          

        }}
      />
        <Drawer.Screen
        name="Categories"
        component={CategoriesPage}
        options={{
          headerShown:true,
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
        <Drawer.Screen
        name="Purchases"
        component={Purchases}
        options={{
          headerShown:true,
          drawerIcon:({color})=>(
            <Ionicons
            name='briefcase'
          color={color}
            size={22}
            
            />
          ),
          title:'Purchases',
          

        }}
      />
    
      <Drawer.Screen
        name="Settings"
        component={Settings}
        options={{
          headerShown:true,
          drawerIcon:({color})=>(
            <Ionicons
            name='settings'
          color={color}
            size={22}
            
            />
          ),
          title:'Setting',
          

        }}
      />
      <Drawer.Screen
        name="Help"
        component={Help}
        options={{
          headerShown:true,
          drawerIcon:({color})=>(
            <Ionicons
            name='help-circle'
          color={color}
            size={22}
            
            />
          ),
          title:'Help',
          

        }}
      />
        
    </Drawer.Navigator>
  )
} 
