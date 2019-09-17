import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomePage from './src/pages/HomePage';
import SearchPage from './src/pages/SearchPage';
import ListPage from './src/pages/ListPage';
import TripPage from "./src/pages/TripPage";
import BuyPage from "./src/pages/BuyPage";
import LoginPage from "./src/pages/user/LoginPage";
import SignUpPage from "./src/pages/user/SignUpPage";
import NewTripPage from './src/pages/NewTripPage';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: HomePage
  },
  'SearchPage': {
    screen: SearchPage
  },
  'ListPage': {
    screen: ListPage
  },
  'TripPage': {
    screen: TripPage
  },
  'BuyPage': {
    screen: BuyPage
  },
  'LoginPage': {
    screen: LoginPage
  },
  'SignUpPage': {
    screen: SignUpPage
  },
  'NewTripPage': {
    screen: NewTripPage
  }
}, {
  defaultNavigationOptions: {
    title: 'Caravane',
    headerTitleStyle: {
      color: 'black',
      fontSize: 42,
      flexGrow: 1,
    },
    headerStyle: {
      backgroundColor: '#e6e6ea',
      borderBottomWidth: 1,
      borderBottomColor: '#C5C5C5'
    }
  }
});

const AppContainer = createAppContainer(StackNavigator);

export default AppContainer;
