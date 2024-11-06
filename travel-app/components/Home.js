import React from 'react';
import { StyleSheet, Text, View, ScrollView, SafeAreaView, ImageBackground, FlatList, TouchableOpacity } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';

import profile from '../assets/images/person.png';
import discoverData from './assets/data/discoverData';
import activitiesData from './assets/data/activitiesData';
import learnMoreData from './assets/data/learnMoreData';

import colors from '../assets/data/colors';

const Home = ({ navigation }) => {
  const renderDiscoverItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate('Details', { item })}>
      <ImageBackground
        source={item.image}
        style={[styles.discoverItem, { marginLeft: item.id === 'discover-1' ? 20 : 0 }]}
        imageStyle={styles.discoverItemImage}
      >
        <Text style={styles.discoverItemTitle}>{item.title}</Text>
        <View style={styles.discoverItemLocationWrapper}>
          <Entypo name="location-pin" size={18} color={colors.white} />
          <Text style={styles.discoverItemLocationText}>{item.location}</Text>
        </View>
      </ImageBackground>
    </TouchableOpacity>
  );

  const renderActivityItem = ({ item }) => (
    <View style={[styles.activityItemWrapper, { marginLeft: item.id === 'activities-1' ? 20 : 0 }]}>
      <Image source={item.image} style={styles.activityItemImage} />
      <Text style={styles.activityItemText}>{item.title}</Text>
    </View>
  );

  const renderLearnMoreItem = ({ item }) => (
    <ImageBackground
      source={item.image}
      style={[styles.learnMoreItem, { marginLeft: item.id === 'learnMore-1' ? 20 : 0 }]}
      imageStyle={styles.learnMoreItemImage}
    >
      <Text style={styles.learnMoreItemText}>{item.title}</Text>
    </ImageBackground>
  );

  return (
    <View style={styles.container}>
      <ScrollView>
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather name="menu" size={32} color={colors.black} style={styles.menuIcon} />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* Discover Section */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <FlatList
            data={discoverData}
            renderItem={renderDiscoverItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Activities Section */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <FlatList
            data={activitiesData}
            renderItem={renderActivityItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>

        {/* Learn More Section */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <FlatList
            data={learnMoreData}
            renderItem={renderLearnMoreItem}
            keyExtractor={(item) => item.id.toString()}
            horizontal
            showsHorizontalScrollIndicator={false}
          />
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  discoverWrapper: {
    marginTop: 20,
  },
  discoverTitle: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 10,
    marginHorizontal: 20,
  },
  discoverItem: {
    width: 170,
    height: 250,
    marginRight: 15,
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,
    overflow: 'hidden',
    backgroundColor: colors.gray,
    borderRadius: 20,
  },
  discoverItemImage: {
    borderRadius: 20,
  },
  discoverItemTitle: {
    color: colors.white,
    fontSize: 18,
    fontWeight: 'bold',
  },
  discoverItemLocationWrapper: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 5,
  },
  discoverItemLocationText: {
    color: colors.white,
    fontSize: 14,
    marginLeft: 5,
  },
  activitiesWrapper: {
    marginTop: 10,
  },
  activitiesTitle: {
    marginHorizontal: 20,
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 24,
    marginBottom: 10,
  },
  activityItemWrapper: {
    justifyContent: 'flex-end',
    alignItems: 'center',
    marginRight: 20,
  },
  activityItemImage: {
    width: 36,
  },
  activityItemText: {
    marginTop: 5,
    fontFamily: 'Helvetica',
    fontSize: 14,
    color: colors.gray,
  },
  learnMoreWrapper: {
    marginTop: 10,
  },
  learnMoreTitle: {
    marginHorizontal: 20,
    fontFamily: 'Helvetica',
    fontSize: 24,
    fontWeight: 'bold',
  },
  learnMoreItem: {
    width: 170,
    height: 180,
    justifyContent: 'flex-end',
    marginRight: 20,
  },
  learnMoreItemImage: {
    borderRadius: 20,
  },
  learnMoreItemText: {
    fontWeight: 'bold',
    fontSize: 18,
    color: colors.white,
    marginHorizontal: 10,
    marginVertical: 20,
  },
});

export default Home;