import { createAppContainer } from "react-navigation";
import { createStackNavigator } from "react-navigation-stack";

import HomePage from './src/pages/HomePage';

const StackNavigator = createStackNavigator({
  'Main': {
    screen: HomePage
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
