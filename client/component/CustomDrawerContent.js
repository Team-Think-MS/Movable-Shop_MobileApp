import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from "@react-navigation/drawer";
import { View, Text } from 'react-native';

function CustomDrawerContent(props) {
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItem label=""
        />
      <DrawerItemList {...props} />

      <View>
          <Text>jshhjdskjjsdj</Text>
      </View>
    </DrawerContentScrollView>
  );
}

export default CustomDrawerContent;
