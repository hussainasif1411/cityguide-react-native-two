//************************************APP.JS*****************************************************//

import React from 'react';
import AppRoute from './routes/AppRoutes';
//import { View, Text } from "react-native";

const App = () => {
  return (
    //Routes for the pages of app
    <AppRoute />
    // <View style={{justifyContent: 'center', alignItems: 'center', flex: 1}}>
    //   <Text>Hello World</Text>
    // </View>
  )
}
export default App;

//********************************Fetching data from API**************************************//

// import React, { useState }  from 'react';
// import {StyleSheet, View, TouchableOpacity, Text} from 'react-native';
// import Axios from 'axios';

// const App = () => {

//   const [userData, setUserData] = useState([]);

//   // const getDataUsingSimpleGetCall = () => {
//     Axios
//       .get('https://jsonplaceholder.typicode.com/todos/1')
//       .then(function (response) {
//         //alert(JSON.stringify(response.data));
//         setUserData(response.data);
//       })
//       .catch(function (error) {
//         alert(error.message);
//       })
//   // };
//   return (
//     <View style={styles.container}>
//       <Text>Hello World</Text>
//       <Text>{userData.title}</Text>
//       {/* <TouchableOpacity
//         style={styles.buttonStyle}
//         onPress={getDataUsingSimpleGetCall}>
//         <Text>Get Call</Text>
//       </TouchableOpacity> */}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     justifyContent: 'center',
//     flex: 1,
//     padding: 16,
//   },
//   buttonStyle: {
//     alignItems: 'center',
//     backgroundColor: '#DDDDDD',
//     padding: 10,
//     width: '100%',
//     marginTop: 16,
//   },
// });

// export default App;

//***********************************Browse Categories*******************************************//

// import React from "react";
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// import Header from "./src/Header";
// import Footer from "./src/Footer";

// const App = ({ navigation }) => {
//   return (
//     <View style={styles.container}>
//       <Header heading="Browse Categories" />
//       <ScrollView>

//         <View style={styles.browseCategoryRowFlex}>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity onPress={() => navigation.navigate('BrowseRestaurants')}>
//               <Image style={styles.browseImageIcon} source={require('./assets/restaurant-icon.png')} />
//               <Text style={styles.categoriesText}>Restaurants</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('./assets/hotel-icon.jpg')} />
//               <Text style={styles.categoriesText}>Hotels</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.browseCategoryRowFlex}>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('./assets/nightlife-icon.jpg')} />
//               <Text style={styles.categoriesText}>Nightlife</Text>
//             </TouchableOpacity>

//           </View>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('./assets/shopping-icon.png')} />
//               <Text style={styles.categoriesText}>Shopping</Text>
//             </TouchableOpacity>
//           </View>
//         </View>

//         <View style={styles.browseCategoryRowFlex}>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('./assets/culture-icon.png')} />
//               <Text style={styles.categoriesText}>Culture</Text>
//             </TouchableOpacity>
//           </View>
//           <View style={styles.columnViewStyle}>
//             <TouchableOpacity>
//               <Image style={styles.browseImageIcon} source={require('./assets/heart-icon-blue.png')} />
//               <Text style={styles.categoriesText}>Popular</Text>
//             </TouchableOpacity>

//           </View>
//         </View>

//       </ScrollView>
//       <Footer />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     justifyContent: "center",
//     alignItems: "center"
//   },
//   browseCategoryRowFlex:
//   {
//     flexDirection: "row",
//     paddingHorizontal: 40,
//     marginTop: 20,
//     justifyContent: "center",
//   },
//   columnViewStyle: {
//     width: "50%",
//     //height: "120%",
//     backgroundColor: "#FDFEFE",
//     paddingVertical: 20,
//     marginLeft: 10,
//     textAlign: "center",
//     flexDirection: "column",
//     justifyContent: "center",
//     alignItems: "center",
//     borderWidth: 1,
//     borderColor: "#D3D3D3",
//     borderRadius: 5,
//   },
//   browseImageIcon: {
//     width: 80,
//     height: 80,
//   },
//   categoriesText: {
//     textAlign: "center",
//     marginTop: 5,
//     fontSize: 15
//   }
// });

// export default App;

//*********************************************Browse Restaurants*******************************//

// import React from "react";
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// import Footer from "./src/Footer";
// import Header from "./src/Header";

// const datas = [
//   {
//     id: 1,
//     restaurantImageSource: require('./assets/pizza.jpg'),
//     restaurantName: "Gramercy Tavern",
//     gpsSource: require('./assets/location.jpg'),
//     locationName: "42 E 20th St",
//     heartIconSource: require('./assets/heart.jpeg'),
//     likesText: "228",
//     rightArrowSource: require('./assets/right-arrow.jpeg')
//   },
//   {
//     id: 2,
//     restaurantImageSource: require('./assets/burger.jpg'),
//     restaurantName: "Blue Hill",
//     gpsSource: require('./assets/location.jpg'),
//     locationName: "75 Washington PI",
//     heartIconSource: require('./assets/heart.jpeg'),
//     likesText: "215",
//     rightArrowSource: require('./assets/right-arrow.jpeg')
//   },
//   {
//     id: 3,
//     restaurantImageSource: require('./assets/pasta.png'),
//     restaurantName: "Le Bernardin",
//     gpsSource: require('./assets/location.jpg'),
//     locationName: "155 W 51st St",
//     heartIconSource: require('./assets/heart.jpeg'),
//     likesText: "199",
//     rightArrowSource: require('./assets/right-arrow.jpeg')
//   },
//   {
//     id: 4,
//     restaurantImageSource: require('./assets/french-fries.jpg'),
//     restaurantName: "Jean-Georges",
//     gpsSource: require('./assets/location.jpg'),
//     locationName: "1 Central Park West",
//     heartIconSource: require('./assets/heart.jpeg'),
//     likesText: "183",
//     rightArrowSource: require('./assets/right-arrow.jpeg')
//   },
//   {
//     id: 5,
//     restaurantImageSource: require('./assets/brownie.jpg'),
//     restaurantName: "The Four Seasons",
//     gpsSource: require('./assets/location.jpg'),
//     locationName: "99 E 52md St",
//     heartIconSource: require('./assets/heart.jpeg'),
//     likesText: "178",
//     rightArrowSource: require('./assets/right-arrow.jpeg')
//   },
//   {
//     id: 6,
//     restaurantImageSource: require('./assets/sandwich.jpeg'),
//     restaurantName: "Ninja New York",
//     gpsSource: require('./assets/location.jpg'),
//     locationName: "25 Hudson St",
//     heartIconSource: require('./assets/heart.jpeg'),
//     likesText: "78",
//     rightArrowSource: require('./assets/right-arrow.jpeg')
//   },
// ];

// function createData(data) {
//   return (
//     <View>
//       <View style={styles.restaurantRowStyle}>

//         <View style={{ width: "20%" }}>
//           <Image style={styles.restaurantImage} source={data.restaurantImageSource} />
//         </View>

//         <View style={{ width: "70%", marginTop: 5 }}>
//           <Text style={styles.restaurantText}>{data.restaurantName}</Text>
//           <View style={{ flexDirection: "column" }}>
//             <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//               <Image style={styles.gpsIcon} source={data.gpsSource} />
//               <Text style={styles.locationText}>{data.locationName}</Text>
//               <Image style={styles.heartIcon} source={data.heartIconSource} ></Image>
//               <Text style={styles.liketext}>{data.likesText}</Text>
//             </View>
//           </View>
//         </View>

//         <View style={{ width: "10%" }}>
//           <Image style={styles.rightArrow} source={data.rightArrowSource}></Image>
//         </View>

//       </View>

//       <View
//         style={{
//           borderBottomColor: '#A9A9A9',
//           borderBottomWidth: 0.4,
//           marginTop: 5
//         }}
//       />
//     </View>
//   )
// }

// const App = () => {
//   return (

//     <View style={styles.container}>
//       <Header heading="Browse Restaurants"/>
//       <ScrollView>
//         {datas.map(createData)}
//       </ScrollView>
//       <Footer />
//     </View>
//   )
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1
//   },
//   restaurantRowStyle: {
//     flex: 1,
//     flexDirection: "row",
//     padding: 20, height: "10%"
//   },
//   restaurantHeading: {
//     flexDirection: "row"
//   },
//   restaurantImage: {
//     height: "130%",
//     width: "100%",
//     borderRadius: 5
//   },
//   restaurantText: {
//     marginLeft: 10,
//     fontSize: 16
//   },
//   rightArrow: {
//     height: 12,
//     width: 12,
//     marginTop: 20,
//   },
//   gpsIcon: {
//     height: 20,
//     width: 20,
//   },
//   locationText: {
//     color: '#A9A9A9'
//   },
//   heartIcon: {
//     height: 18,
//     width: 18,
//     marginLeft: 10
//   },
//   liketext: {
//     color: '#A9A9A9'
//   }
// });

// export default App;