import { createStackNavigator } from "react-navigation-stack";

import HomePage from './pages/HomePage';
import SearchPage from './pages/SearchPage';
import ListPage from './pages/ListPage';
import TripPage from "./pages/TripPage";
import BuyPage from "./pages/BuyPage";
import LoginPage from "./pages/user/LoginPage";
import SignUpPage from "./pages/user/SignUpPage";
import NewTripPage from './pages/NewTripPage';

export default createStackNavigator({
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
    navigationOptions: {
        headerStyle: {
            backgroundColor: '#DA552F'
        },
        headerTintColor: "#FFF",
    },
});
