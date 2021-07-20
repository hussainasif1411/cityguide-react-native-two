import React, { useEffect, useState } from "react";
import { Text, View, StyleSheet, Image, TouchableOpacity, TextInput, FlatList } from "react-native";
import Footer from "./Footer";
//import Header from "./Header";
import Axios from 'axios';

//Browse Restaurant Page
const BrowseRestaurants = ({ navigation }) => {

  const [restaurant, setRestaurant] = useState([]);
  const category = navigation.getParam('categoryName');
  const [searchTerm, setSearchTerm] = useState("");
  const [dummyRestaurant, setDummyRestaurant] = useState([]);

  useEffect(() => {
    Axios.get(`https://damp-sea-94376.herokuapp.com/api/getFoodNearBy/lat=22.69483315&long=75.8539546170826&radius=1500&nextPage=false&types=${category}`)
      .then(function (response) {
        //alert(category);
        setRestaurant(response.data.result);
        setDummyRestaurant(response.data.result);
      })
      .catch(function (error) {
        alert(error.message);
      })
  }, []);

  function refillRestaurant() {
    setRestaurant(dummyRestaurant);
    setSearchTerm("");
  }

  function _handleSearch(text) {
    setSearchTerm(text);

    //setDummyRestaurant(restaurant);

    // console.log(typeof searchTerm)
    // setRestaurant([]);
    // {
    //   restaurant.filter((val) => {
    //     if (searchTerm === "") {
    //       return val
    //     }
    //     else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
    //       return val
    //     }
    //   })
    // }
    console.log('restaurant', restaurant);
    console.log('dummyRestaurant', dummyRestaurant);
    //console.log('dummy', dummyRestaurant);
    let filterArr = restaurant.filter((item) => item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) === true)
    // let filterArr = restaurant.filter((item) => item.name.includes(searchTerm)===true)

    //console.log('filterArr', filterArr, searchTerm)
    setRestaurant(filterArr);

    // if(filterArr.length < restaurant.length){
    //   refillRestaurant();
    // }
    //setRestaurant(restaurant);

    // let searText='KYRO'
    // let filterArr = [];
    // restaurant.filter((item,i)=>{
    //   // console.log(item.name)


    //   // console.log(item.name)
    //   // filterArr.push(item)

    //   if(item.name.indexOf(searchTerm.toLowerCase())>1){
    //     // console.log(item.name)
    //      filterArr.push(item)
    //   }else{
    //     console.log('else',item.name)
    //     // filterArr.push(item)

    //   }
    // })

    // let filterArr = restaurant.filter((item, i) => {
    //   if (searchTerm === "") {
    //     return item;
    //   }

    //   else if (item.name.toLowerCase() === searchTerm.toLowerCase()) {
    //     console.log('filterArr', filterArr, searchTerm)
    //     setRestaurant(filterArr);
    //     return filterArr;
    //   }
    // })
  }

  const renderItem = ({ item ,i}) => (

      <View key={i}>
        <TouchableOpacity>
          <View style={styles.restaurantRowStyle}>

            <View style={{ width: "20%" }}>
              <Image style={styles.restaurantImage} source={{ uri: item.image }} />
            </View>

            <View style={{ width: "50%", marginTop: 5, flex: 1 }}>
              <Text style={styles.restaurantText}>{item.name}</Text>
              <View style={{ flexDirection: "column" }}>
                <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
                  <Image style={styles.gpsIcon} source={require('../assets/location.jpg')} />
                  <Text style={styles.locationText}>{item.address}</Text>
                  <Image style={styles.starIcon} source={require('../assets/rating-star.png')} ></Image>
                  <Text style={styles.liketext}>{item.rating}</Text>
                </View>
              </View>
            </View>

            <View style={{ width: "20%", paddingLeft: 5, paddingRight: 5 }}>
              <Image style={styles.rightArrow} source={require('../assets/right-arrow.jpeg')}></Image>
            </View>

          </View>
        </TouchableOpacity>

        <View
          style={{
            borderBottomColor: '#A9A9A9',
            borderBottomWidth: 0.4,
            marginTop: 5
          }}
        />
      </View>
    
  );

  return (
    <View style={styles.container}>
      {/* <Header 
      heading={category}
      navigationProp={navigation}
      navigationRoute={'BrowseCategories'}
      restaurantList={restaurant}
      restaurantName={item.name} 
      /> */}

      <View style={styles.header}>
        <View style={{ width: "15%" }}>
          <TouchableOpacity onPress={() => navigation.navigate('BrowseCategories')}>
            <Image style={styles.leftArrowIcon} source={require('../assets/left-arrow-icon.png')} />
          </TouchableOpacity>
        </View>
        <View style={{ width: "65%" }}>
          <Text style={styles.headerText}>Restaurant</Text>
        </View>

        <View style={{ marginTop: 8, flexDirection: "row", width: "20%", height: "70%", backgroundColor: "transparent", alignItems: "center", justifyContent: "center" }}>
          <Image style={styles.searchIcon} source={require('../assets/Search_Icon.png')} />
          <TextInput style={{ color: "black" }} placeholder="Search" placeholderTextColor="#ffffff" value={searchTerm}
            onChangeText={_handleSearch}
          >
          </TextInput>

          {searchTerm.length > 0 &&
            <TouchableOpacity onPress={refillRestaurant}>
              <Image style={{ height: 20, width: 15, backgroundColor: "transparent" }} source={require('../assets/cross-icon.jpg')} />
            </TouchableOpacity>
          }

        </View>
      </View>

      <FlatList
        // style={{ flex: 1 }}
        data={restaurant}
        renderItem={renderItem}
        // extraData={restaurant}
        keyExtractor={item => item.id}
      />

      {/* <ScrollView>
        {restaurant.map((item, i) => {
          return (
            <View key={i}>
              <TouchableOpacity>
                <View style={styles.restaurantRowStyle}>

                  <View style={{ width: "20%" }}>
                    <Image style={styles.restaurantImage} source={{ uri: item.image }} />
                  </View>

                  <View style={{ width: "50%", marginTop: 5, flex: 1 }}>
                    <Text style={styles.restaurantText}>{item.name}</Text>
                    <View style={{ flexDirection: "column" }}>
                      <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
                        <Image style={styles.gpsIcon} source={require('../assets/location.jpg')} />
                        <Text style={styles.locationText}>{item.address}</Text>
                        <Image style={styles.starIcon} source={require('../assets/rating-star.png')} ></Image>
                        <Text style={styles.liketext}>{item.rating}</Text>
                      </View>
                    </View>
                  </View>

                  <View style={{ width: "20%", paddingLeft: 5, paddingRight: 5 }}>
                    <Image style={styles.rightArrow} source={require('../assets/right-arrow.jpeg')}></Image>
                  </View>

                </View>
              </TouchableOpacity>

              <View
                style={{
                  borderBottomColor: '#A9A9A9',
                  borderBottomWidth: 0.4,
                  marginTop: 5
                }}
              />
            </View>
          )
        }
        )}
      </ScrollView> */}
      <Footer props={navigation} />
    </View>
  )
}

//Styling Browse Restaurant Data
const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  restaurantRowStyle: {
    flex: 1,
    flexDirection: "row",
    padding: 20, height: "10%"
  },
  restaurantHeading: {
    flexDirection: "row"
  },
  restaurantImage: {
    height: "130%",
    width: "100%",
    borderRadius: 5
  },
  restaurantText: {
    marginLeft: 10,
    fontSize: 14
  },
  rightArrow: {
    height: 12,
    width: 12,
    marginTop: 15,
    marginLeft: 50
  },
  gpsIcon: {
    height: 15,
    width: 15,
  },
  locationText: {
    color: '#A9A9A9',
    fontSize: 10
  },
  starIcon: {
    height: 18,
    width: 18,
    marginLeft: 5
  },
  liketext: {
    color: '#A9A9A9'
  },

  //header styling
  header: {
    height: 90,
    width: "100%",
    backgroundColor: '#1E90FF',
    flexDirection: "row",
    alignItems: "center",
    padding: 20
  },
  headerText: {
    color: '#FFFFFF',
    fontSize: 18,
    textAlign: "center",
    textTransform: "capitalize"
  },
  leftArrowIcon: {
    height: 18,
    width: 25,
  },
  searchIcon: {
    // height: "40%",
    // width: "6%",
    height: 15,
    width: 20,
    padding: 3
  },

});

export default BrowseRestaurants;


//***************************************************Browse Restaurant With Filter and Without Flatlist************************************************/

// import React, { useEffect, useState } from "react";
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity, TextInput } from "react-native";
// import Footer from "./Footer";
// //import Header from "./Header";
// import Axios from 'axios';

// //Browse Restaurant Page
// const BrowseRestaurants = ({ navigation }) => {

//   const [restaurant, setRestaurant] = useState([]);
//   const category = navigation.getParam('categoryName');
//   const [searchTerm, setSearchTerm] = useState("");
//   const [dummyRestaurant, setDummyRestaurant] = useState([]);

//   useEffect(() => {
//     Axios.get(`https://damp-sea-94376.herokuapp.com/api/getFoodNearBy/lat=22.69483315&long=75.8539546170826&radius=1500&nextPage=false&types=${category}`)
//       .then(function (response) {
//         //alert(category);
//         setRestaurant(response.data.result);
//         setDummyRestaurant(response.data.result);
//       })
//       .catch(function (error) {
//         alert(error.message);
//       })
//   }, []);


//   function refillRestaurant(){
//     setRestaurant(dummyRestaurant);
//     setSearchTerm("");
//   }

//   function _handleSearch(text) {
//     setSearchTerm(text);


//     //setDummyRestaurant(restaurant);

//     // console.log(typeof searchTerm)
//     // setRestaurant([]);
//     // {
//     //   restaurant.filter((val) => {
//     //     if (searchTerm === "") {
//     //       return val
//     //     }
//     //     else if (val.name.toLowerCase().includes(searchTerm.toLowerCase())) {
//     //       return val
//     //     }
//     //   })
//     // }
//     console.log('restaurant', restaurant);
//     console.log('dummyRestaurant', dummyRestaurant);
//     //console.log('dummy', dummyRestaurant);
//     let filterArr = restaurant.filter((item) => item.name.toLowerCase().includes(searchTerm.toLocaleLowerCase()) === true)
//     // let filterArr = restaurant.filter((item) => item.name.includes(searchTerm)===true)

//     //console.log('filterArr', filterArr, searchTerm)
//     setRestaurant(filterArr);


//     // if(filterArr.length < restaurant.length){
//     //   refillRestaurant();
//     // }
//     //setRestaurant(restaurant);

//     // let searText='KYRO'
//     // let filterArr = [];
//     // restaurant.filter((item,i)=>{
//     //   // console.log(item.name)


//     //   // console.log(item.name)
//     //   // filterArr.push(item)

//     //   if(item.name.indexOf(searchTerm.toLowerCase())>1){
//     //     // console.log(item.name)
//     //      filterArr.push(item)
//     //   }else{
//     //     console.log('else',item.name)
//     //     // filterArr.push(item)

//     //   }
//     // })


//     // let filterArr = restaurant.filter((item, i) => {
//     //   if (searchTerm === "") {
//     //     return item;
//     //   }

//     //   else if (item.name.toLowerCase() === searchTerm.toLowerCase()) {
//     //     console.log('filterArr', filterArr, searchTerm)
//     //     setRestaurant(filterArr);
//     //     return filterArr;
//     //   }
//     // })
//   }

//   return (
//     <View style={styles.container}>
//       {/* <Header 
//       heading={category}
//       navigationProp={navigation}
//       navigationRoute={'BrowseCategories'}
//       restaurantList={restaurant}
//       restaurantName={item.name} 
//       /> */}


//       <View style={styles.header}>
//         <View style={{ width: "15%" }}>
//           <TouchableOpacity onPress={() => navigation.navigate('')}>
//             <Image style={styles.leftArrowIcon} source={require('../assets/left-arrow-icon.png')} />
//           </TouchableOpacity>
//         </View>
//         <View style={{ width: "65%" }}>
//           <Text style={styles.headerText}>Restaurant</Text>
//         </View>

//         <View style={{ marginTop: 8, flexDirection: "row", width: "20%", height: "70%", backgroundColor: "transparent", alignItems: "center", justifyContent: "center" }}>
//           <Image style={styles.searchIcon} source={require('../assets/Search_Icon.png')} />
//           <TextInput style={{ color: "black" }} placeholder="Search" placeholderTextColor="#ffffff" value={searchTerm}
//             onChangeText={_handleSearch}
//           >
//           </TextInput>
//           <TouchableOpacity onPress={refillRestaurant}>
//           <Image style={{height: 20, width: 15, backgroundColor: "transparent"}} source={require('../assets/cross-icon.jpg')} />
//           </TouchableOpacity>

//         </View>
//       </View>

//       <ScrollView>
//         {restaurant.map((item, i) => {
//           return (
//             <View key={i}>
//               <TouchableOpacity>
//                 <View style={styles.restaurantRowStyle}>

//                   <View style={{ width: "20%" }}>
//                     <Image style={styles.restaurantImage} source={{ uri: item.image }} />
//                   </View>

//                   <View style={{ width: "50%", marginTop: 5, flex: 1 }}>
//                     <Text style={styles.restaurantText}>{item.name}</Text>
//                     <View style={{ flexDirection: "column" }}>
//                       <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//                         <Image style={styles.gpsIcon} source={require('../assets/location.jpg')} />
//                         <Text style={styles.locationText}>{item.address}</Text>
//                         <Image style={styles.starIcon} source={require('../assets/rating-star.png')} ></Image>
//                         <Text style={styles.liketext}>{item.rating}</Text>
//                       </View>
//                     </View>
//                   </View>

//                   <View style={{ width: "20%", paddingLeft: 5, paddingRight: 5 }}>
//                     <Image style={styles.rightArrow} source={require('../assets/right-arrow.jpeg')}></Image>
//                   </View>

//                 </View>
//               </TouchableOpacity>

//               <View
//                 style={{
//                   borderBottomColor: '#A9A9A9',
//                   borderBottomWidth: 0.4,
//                   marginTop: 5
//                 }}
//               />
//             </View>
//           )
//         }
//         )}
//       </ScrollView>
//       <Footer props={navigation} />
//     </View>
//   )
// }

// //Styling Browse Restaurant Data
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
//     fontSize: 14
//   },
//   rightArrow: {
//     height: 12,
//     width: 12,
//     marginTop: 15,
//     marginLeft: 50
//   },
//   gpsIcon: {
//     height: 15,
//     width: 15,
//   },
//   locationText: {
//     color: '#A9A9A9',
//     fontSize: 10
//   },
//   starIcon: {
//     height: 18,
//     width: 18,
//     marginLeft: 5
//   },
//   liketext: {
//     color: '#A9A9A9'
//   },

//   //header styling
//   header: {
//     height: 90,
//     width: "100%",
//     backgroundColor: '#1E90FF',
//     flexDirection: "row",
//     alignItems: "center",
//     padding: 20
//   },
//   headerText: {
//     color: '#FFFFFF',
//     fontSize: 18,
//     textAlign: "center",
//     textTransform: "capitalize"
//   },
//   leftArrowIcon: {
//     height: 18,
//     width: 25,
//   },
//   searchIcon: {
//     // height: "40%",
//     // width: "6%",
//     height: 15,
//     width: 20,
//     padding: 3
//   },

// });

// export default BrowseRestaurants;

//**********************************************Browse Restaurant 2 With Header Component**************************************************************/

// import React, { useEffect, useState } from "react";
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// import Footer from "./Footer";
// import Header from "./Header";
// import Axios from 'axios';

// //Browse Restaurant Page
// const BrowseRestaurants = ({ navigation }) => {

//   const [restaurant, setRestaurant] = useState([]);
//   const category = navigation.getParam('categoryName');

//   useEffect(() => {
//     Axios.get(`https://damp-sea-94376.herokuapp.com/api/getFoodNearBy/lat=22.69483315&long=75.8539546170826&radius=1500&nextPage=false&types=${category}`)
//       .then(function (response) {
//         //alert(category);
//         setRestaurant(response.data.result);
//       })
//       .catch(function (error) {
//         alert(error.message);
//       })
//   }, []);

//   return (
//     <View style={styles.container}>
//       <Header 
//       heading={category}
//       navigationProp={navigation}
//       navigationRoute={'BrowseCategories'}
//       restaurantList={restaurant}
//       restaurantName={item.name} />
//       <ScrollView>
//         {restaurant.map((item) => {
//           return (
//             <View>
//               <TouchableOpacity>
//                 <View style={styles.restaurantRowStyle}>

//                   <View style={{ width: "20%" }}>
//                     <Image style={styles.restaurantImage} source={{uri:item.image}} />
//                   </View>

//                   <View style={{ width: "50%", marginTop: 5, flex: 1 }}>
//                     <Text style={styles.restaurantText}>{item.name}</Text>
//                     <View style={{ flexDirection: "column" }}>
//                       <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//                         <Image style={styles.gpsIcon} source={require('../assets/location.jpg')} />
//                         <Text style={styles.locationText}>{item.address}</Text>
//                         <Image style={styles.starIcon} source={require('../assets/rating-star.png')} ></Image>
//                         <Text style={styles.liketext}>{item.rating}</Text>
//                       </View>
//                     </View>
//                   </View>

//                   <View style={{ width: "20%", paddingLeft: 5, paddingRight: 5 }}>
//                     <Image style={styles.rightArrow} source={require('../assets/right-arrow.jpeg')}></Image>
//                   </View>

//                 </View>
//               </TouchableOpacity>

//               <View
//                 style={{
//                   borderBottomColor: '#A9A9A9',
//                   borderBottomWidth: 0.4,
//                   marginTop: 5
//                 }}
//               />
//             </View>
//           )
//         }
//         )}
//       </ScrollView>
//       <Footer props={navigation} />
//     </View>
//   )
// }

// //Styling Browse Restaurant Data
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
//     fontSize: 14
//   },
//   rightArrow: {
//     height: 12,
//     width: 12,
//     marginTop: 15,
//     marginLeft: 50
//   },
//   gpsIcon: {
//     height: 15,
//     width: 15,
//   },
//   locationText: {
//     color: '#A9A9A9',
//     fontSize: 10
//   },
//   starIcon: {
//     height: 18,
//     width: 18,
//     marginLeft: 5
//   },
//   liketext: {
//     color: '#A9A9A9'
//   }
// });

// export default BrowseRestaurants;


//**********************************************Browse Restaurant 1**************************************************************/

// import React from "react";
// import { Text, View, StyleSheet, Image, ScrollView, TouchableOpacity } from "react-native";
// import Footer from "./Footer";
// import Header from "./Header";

// //Restaurant Data Array
// const datas = [
//   {
//     id: 1,
//     restaurantImageSource: require('../assets/pizza.jpg'),
//     restaurantName: "Gramercy Tavern",
//     gpsSource: require('../assets/location.jpg'),
//     locationName: "42 E 20th St",
//     heartIconSource: require('../assets/heart.jpeg'),
//     likesText: "228",
//     rightArrowSource: require('../assets/right-arrow.jpeg')
//   },
//   {
//     id: 2,
//     restaurantImageSource: require('../assets/burger.jpg'),
//     restaurantName: "Blue Hill",
//     gpsSource: require('../assets/location.jpg'),
//     locationName: "75 Washington PI",
//     heartIconSource: require('../assets/heart.jpeg'),
//     likesText: "215",
//     rightArrowSource: require('../assets/right-arrow.jpeg')
//   },
//   {
//     id: 3,
//     restaurantImageSource: require('../assets/pasta.png'),
//     restaurantName: "Le Bernardin",
//     gpsSource: require('../assets/location.jpg'),
//     locationName: "155 W 51st St",
//     heartIconSource: require('../assets/heart.jpeg'),
//     likesText: "199",
//     rightArrowSource: require('../assets/right-arrow.jpeg')
//   },
//   {
//     id: 4,
//     restaurantImageSource: require('../assets/french-fries.jpg'),
//     restaurantName: "Jean-Georges",
//     gpsSource: require('../assets/location.jpg'),
//     locationName: "1 Central Park West",
//     heartIconSource: require('../assets/heart.jpeg'),
//     likesText: "183",
//     rightArrowSource: require('../assets/right-arrow.jpeg')
//   },
//   {
//     id: 5,
//     restaurantImageSource: require('../assets/brownie.jpg'),
//     restaurantName: "The Four Seasons",
//     gpsSource: require('../assets/location.jpg'),
//     locationName: "99 E 52md St",
//     heartIconSource: require('../assets/heart.jpeg'),
//     likesText: "178",
//     rightArrowSource: require('../assets/right-arrow.jpeg')
//   },
//   {
//     id: 6,
//     restaurantImageSource: require('../assets/sandwich.jpeg'),
//     restaurantName: "Ninja New York",
//     gpsSource: require('../assets/location.jpg'),
//     locationName: "25 Hudson St",
//     heartIconSource: require('../assets/heart.jpeg'),
//     likesText: "78",
//     rightArrowSource: require('../assets/right-arrow.jpeg')
//   },
// ];

// //Mapping Function for Restaurant Data
// function createData(data) {
//   return (
//     <View>
//       <TouchableOpacity>
//         <View style={styles.restaurantRowStyle}>

//           <View style={{ width: "20%" }}>
//             <Image style={styles.restaurantImage} source={data.restaurantImageSource} />
//           </View>

//           <View style={{ width: "70%", marginTop: 5 }}>
//             <Text style={styles.restaurantText}>{data.restaurantName}</Text>
//             <View style={{ flexDirection: "column" }}>
//               <View style={{ flexDirection: "row", marginLeft: 5, marginTop: 5 }}>
//                 <Image style={styles.gpsIcon} source={data.gpsSource} />
//                 <Text style={styles.locationText}>{data.locationName}</Text>
//                 <Image style={styles.heartIcon} source={data.heartIconSource} ></Image>
//                 <Text style={styles.liketext}>{data.likesText}</Text>
//               </View>
//             </View>
//           </View>

//           <View style={{ width: "10%" }}>
//             <Image style={styles.rightArrow} source={data.rightArrowSource}></Image>
//           </View>

//         </View>
//       </TouchableOpacity>

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

// //Browse Restaurant Page
// const BrowseRestaurants = ({ navigation }) => {

//   return (
//     <View style={styles.container}>
//       <Header heading="Browse Restaurants" />
//       <ScrollView>
//         {datas.map(createData)}
//       </ScrollView>
//       <Footer props={navigation} />
//     </View>
//   )
// }

// //Styling Browse Restaurant Data
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

// export default BrowseRestaurants;