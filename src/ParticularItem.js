//Adding all required dependencies
import React from 'react';
import { Text, View, StyleSheet, Image, TouchableOpacity, Linking } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import WebView from 'react-native-webview';
import Footer from './Footer';

//Particular Element Page
const ParticularItem = ({ navigation }) => {

    //Recieving the params
    const itemImage = navigation.getParam('itemImage');
    const itemName = navigation.getParam('itemName');
    const itemAddress = navigation.getParam('itemAddress');
    const itemRating = navigation.getParam('itemRating');
    const itemMap = navigation.getParam('itemMap');

    //Destructuring the map's URL from API
    const map = itemMap.split('"');
    const [x, mapImageUrl, z] = map;

    console.log(itemName);
    console.log(itemImage);
    console.log(itemAddress);
    console.log(itemRating);
    //console.log(itemMap);
    //console.log(map);
    console.log(mapImageUrl);

    return (
        <View style={styles.container}>
            <ScrollView>
                <View style={styles.header}>
                    <View style={{ width: "20%" }}>
                        <TouchableOpacity >
                            <Image style={styles.leftArrowIcon} source={require('../assets/left-arrow-icon.png')} />
                        </TouchableOpacity>
                    </View>
                    <View style={{ width: "60%" }}>
                        <Text numberOfLines={2}
                            adjustsFontSizeToFit
                            style={styles.headerText}>{itemName}</Text>
                    </View>

                    <View style={{ width: "30%", alignItems: "center", justifyContent: "center" }}>
                        <Image style={styles.blackHeartIcon} source={require('../assets/white-heart.png')} />
                    </View>

                </View>

                <View>
                    <Image style={styles.itemImage} source={{ uri: itemImage }} />
                    <View style={{ marginTop: 70, padding: 10 }}>
                        <Text numberOfLines={2}
                            adjustsFontSizeToFit
                            style={styles.itemName}>{itemName}</Text>

                        <View style={{ flexDirection: "row", alignContent: "center" }}>
                            <View style={{ width: "60%", flexDirection: "row" }}>
                                <Image style={styles.gpsIcon} source={require('../assets/gps-red.png')} />
                                <Text
                                    numberOfLines={2}
                                    adjustsFontSizeToFit
                                    style={styles.smallText}>{itemAddress}</Text>
                            </View>
                            <View style={{ width: "40%", flexDirection: "row", marginLeft: 20 }}>
                                <Image style={styles.gpsIcon} source={require('../assets/star.png')} />
                                <Text style={styles.smallText}>{itemRating}</Text>
                            </View>

                        </View>

                    </View>

                </View>

                <View style={{ padding: 20 }}>
                    <Text style={styles.itemDescription}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</Text>
                </View>

                <View style={{ flexDirection: "row", height: 55, backgroundColor: "#1E90FF", padding: 10 }}>
                    <View style={{ flexDirection: "row", width: "50%", justifyContent: "center" }}>

                        <Image style={styles.contactIcon} source={require('../assets/smartphone.png')} />

                        <Text
                        onPress={()=> Linking.openURL(`tel:${9584801219}`)}
                            numberOfLines={2}
                            adjustsFontSizeToFit
                            style={styles.contactText}>+91 9584801219</Text>

                    </View>
                    <View style={{ flexDirection: "row", width: "50%", justifyContent: "center" }}>
                        <Image style={styles.contactIcon} source={require('../assets/mail.png')} />
                        <Text
                        onPress={() => Linking.openURL('mailto:asif.hussain@techinfini.in')} 
                        numberOfLines={2}
                            adjustsFontSizeToFit style={styles.contactText}>asif.hussain@techinfini.in</Text>
                    </View>
                </View>

                <View>
                    {/* <WebView source={{ uri: itemMap.slice(9, 70) }} style={styles.mapImage} /> */}
                    <WebView geolocationEnabled={false} source={{ uri: mapImageUrl }} style={styles.mapImage} />
                </View>

            </ScrollView>
            <Footer props={navigation} />
        </View>

    )
}

//Styling Particular Item Page
const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    header: {
        height: 70,
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
        textTransform: "capitalize",
    },
    leftArrowIcon: {
        height: 18,
        width: 25,
    },
    blackHeartIcon: {
        // height: "40%",
        // width: "6%",
        height: 20,
        width: 20,
        padding: 3,
        // backgroundColor: "transparent"
    },
    itemImage: {
        height: "100%",
        width: "100%",
        position: "absolute"
    },
    itemName: {
        fontSize: 20,
        color: "#FFFFFF"
    },
    smallText: {
        fontSize: 14,
        color: "#FFFFFF",
        marginLeft: 5
    },
    gpsIcon: {
        height: 15,
        width: 15,
        //marginTop: 7,
        marginLeft: 4
    },
    itemDescription: {
        lineHeight: 18,
        color: '#A9A9A9',
    },
    contactIcon: {
        height: 15,
        width: 15,
        marginTop: 7,
        marginLeft: 4
    },
    contactText: {
        padding: 5
    },
    mapImage: {
        height: 600,
        width: 400
    },
});

export default ParticularItem;