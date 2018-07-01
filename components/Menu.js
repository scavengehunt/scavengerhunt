import React from 'react';
import { createDrawerNavigator, DrawerActions } from 'react-navigation';
import Profile from './Profile';
import HowToPlay from './HowToPlay';
import JoinHunt from './JoinHunt';
import HuntList from './HuntList';
import HuntDetails from './HuntDetails';
import Main from './Main';
import Friends from './Friends';
import MyHuntList from './MyHuntList';
import Map from './Map';
import { Image } from 'react-native';
import { Icon, Header } from 'react-native-elements';

const Menu = createDrawerNavigator(
  {
    Main: { screen: Main },
    Profile: { screen: Profile },
    MyHuntList: { screen: MyHuntList },
    JoinHunt: { screen: JoinHunt },
    Friends: { screen: Friends },
    HowToPlay: { screen: HowToPlay },
    Map: { screen: Map },
    HuntList: { screen: HuntList },
    HuntDetails: { screen: HuntDetails },
  },
  {
    drawerWidth: 300,
    drawerPosition: 'left',
    initialRouteName: 'Main',
  }
);

const MenuContainer = () => {
  let pressMenu;
  return (
    <React.Fragment>
      <Header
        backgroundColor="white"
        leftComponent={
          <Icon
            name="menu"
            onPress={() => {
              pressMenu.dispatch(DrawerActions.toggleDrawer());
            }}
          />
        }
        centerComponent={
          <Image
            source={require('../urban-pursuit-logo.jpg')}
            style={{
              flex: 1,
              width: 150,
              height: 100,
              resizeMode: Image.resizeMode.contain,
            }}
          />
        }
      />
      <Menu
        ref={navigatorRef => {
          pressMenu = navigatorRef;
        }}
      />
    </React.Fragment>
  );
};

// const MenuNavigation = createStackNavigator({
//   DrawerStack: {
//     screen: MenuCreation
//   },

// }, {
//     headerMode: 'float',
//     navigationOptions: ({ navigation }) => ({ title: "menu", headerLeft: <Icon name="menu" onPress={() => navigation.dispatch(DrawerActions.openDrawer())} /> }),
//     initialRouteName: "DrawerStack"
//   })

export default MenuContainer;
