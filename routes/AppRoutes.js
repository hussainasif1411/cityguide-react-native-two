import { createStackNavigator } from 'react-navigation-stack';
import { createAppContainer } from 'react-navigation';

import Home from '../src/Home';
import Login from '../src/Login';
import BrowseRestaurant from '../src/BrowseRestaurant';
import BrowseCategories from '../src/BrowseCategories';

//Creating react navigation for the app
const Navigator = createStackNavigator(
    {
        Home: Home,
        Login: Login,
        BrowseRestaurant: BrowseRestaurant,
        BrowseCategories: BrowseCategories,
    },
    {
        initialRouteName: 'Home',
        headerMode:false,
    }
);

const AppRoute = createAppContainer(Navigator);

export default AppRoute;