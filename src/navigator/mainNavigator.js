import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen017359Navigator from '../features/BlankScreen017359/navigator';
import SocialLogin from '../features/SocialLogin/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {
  SocialLogin: { screen: SocialLogin },
    //@BlueprintNavigationInsertion
BlankScreen017359: { screen: BlankScreen017359Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
