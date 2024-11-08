import React from 'react';
import colors from '../assets/colors/colors';
import {StyleSheet, View, Text, ImageBackground, Dimensions, TouchableOpacity} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';

const height = Dimensions.get("window").height;

const Details = ({route, navigation}) => {
    const {item} = route.params
    return (
        <View style={styles.container}>
            <ImageBackground 
                source={item.imageBig} 
                style={styles.backgroundImage}>
                <TouchableOpacity style={styles.backButton} onPress={() => navigation.goBack()}>
                    <Entypo name="chevron-left" size={32} color={colors.white} />
                </TouchableOpacity>
                <View style={styles.titlesWrapper}>
                    <Text style={styles.itemTitle}>{item.title}</Text>
                    <View style={styles.locationWrapper}>
                    <Entypo name="location-pin" size={24} color={colors.white} />
                    <Text style={styles.locationText}>{item.location}</Text>
                    </View>
                </View>
            </ImageBackground>
            <View style={styles.descriptionWrapper}>
            <View style={styles.heartWrapper}>
                <Entypo name="heart" size={32} color={colors.orange}/>
            </View>
            <View style={styles.descriptionTextWrapper}>
                <Text style={styles.descriptionTitle}>Description</Text>
                <Text style={styles.descriptionText}>{item.description}</Text>
            </View>
            <View style={styles.infoWrapper}>
                <View styles={styles.infoItem}>
                    <Text style={styles.infoTitle}>PRICE</Text>
                    <View style={styles.infoTextWrapper}>
                        <Text style={styles.infoText}>${item.price}</Text>
                        <Text style={styles.infoSubText}>/person</Text>
                    </View>
                </View>
                <View styles={styles.infoItem}>
                    <Text style={styles.infoTitle}>RATING</Text>
                    <View style={styles.infoTextWrapper}>
                        <Text style={styles.infoText}>${item.price}</Text>
                        <Text style={styles.infoSubText}>/5</Text>
                    </View>
                </View>
                <View styles={styles.infoItem}> 
                    <Text style={styles.infoTitle}>DURATION</Text>
                    <View style={styles.infoTextWrapper}>
                        <Text style={styles.infoText}>${item.price}</Text>
                        <Text style={styles.infoSubText}>hours</Text>
                    </View>
                </View>
            </View>
            <TouchableOpacity style={styles.buttonWrapper} onPress={() => alert('You booked a trip!')}>
                <Text style={styles.buttonText}>Book Now</Text>

            </TouchableOpacity>
            </View>
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: colors.white,
    },
    container: {

    },
    backgroundImage: {
        height: height * 0.6, 
        justifyContent: 'space-between',
    },
    descriptionWrapper: {
        backgroundColor: colors.white,
        height: 500,
        borderRadius: 25,
        top: -25,
    },
    backButton: {
        position: 'absolute',
        top: 50,
        left: 20,
        zIndex: 100,
    },
    titlesWrapper: {
        marginHorizontal: 20,
        marginBottom: 40, 
        top: 420,
    },
    itemTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 32,
        color: colors.white,
    },
    locationWrapper: {
        flexDirection: 'row',
        alignItems: 'center',
        marginTop: 5,
    },
    locationText: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.white,
    },
    heartWrapper: {
        position: 'absolute',
        right: 40,
        top: -30,
        width: 64,
        height: 64,
        backgroundColor: colors.white,
        borderRadius: 64,
        justifyContent: 'center',
        alignItems: 'center',
        shadowColor: '#000000',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    descriptionTextWrapper: {
        marginTop: 30, 
        marginHorizontal: 20,
    },
    descriptionTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.black,
    },
    descriptionText: {
        marginTop: 20,
        fontFamily: 'Lato-Regular',
        fontSize: 16,
        color: colors.darkGray,
        height: 85,
    },
    infoWrapper: {
        flexDirection: 'row',
        marginHorizontal: 20,
        marginTop: 20,
        justifyContent: 'space-between',
    },
    infoItem: {

    },
    infoTitle: {
        fontFamily: 'Lato-Bold',
        fontSize: 16,
        color: colors.gray,
    },
    infoTextWrapper: {
        flexDirection: 'row',
        alignItems: 'flex-end',
        marginTop: 5,
    },
    infoText: {
        fontFamily: 'Lato-Bold',
        fontSize: 24,
        color: colors.orange,
    },
    infoSubText: {
        fontFamily: 'Lato-Bold',
        fontSize: 14,
        color: colors.gray,
    },
    buttonWrapper: {
        marginHorizontal: 20, 
        marginTop: 30, 
        backgroundColor: colors.orange, 
        alignItems: 'center',
        paddingVertical: 15,
        borderRadius: 10,
    },
    buttonText: {
        fontFamily: 'Lato-Bold',
        fontSize: 18,
        color: colors.white,
    },
});

export default Details;