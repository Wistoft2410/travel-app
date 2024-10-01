import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Button, ScrollView, SafeAreaView, Image, ImageBackground, FlatList } from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import profile from '../travel-app/assets/images/person.png';
import discoverData from './assets/data/discoverData';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import Entypo from 'react-native-vector-icons/Entypo';
import colors from '../travel-app/assets/colors/colors';
import { TouchableOpacity } from 'react-native';

Entypo.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Home component
const Home = ({ navigation }) => {
  // Function to render each discover item
  const renderDiscoverDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity onPress={() => navigation.navigate('Details',{
        item: item,
      })}>
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            {marginLeft: item.id === 'discover-1' ? 20 : 0},
          ]}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name='location-pin' size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>{item.location}</Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  return (
    <View style={styles.container}>
      <ScrollView>
        {/* Header */}
        <SafeAreaView>
          <View style={styles.menuWrapper}>
            <Feather
              name="menu"
              size={32}
              color={colors.black}
              style={styles.menuIcon}
            />
            <Image source={profile} style={styles.profileImage} />
          </View>
        </SafeAreaView>

        {/* Discover Section */}
        <View style={styles.discoverWrapper}>
          <Text style={styles.discoverTitle}>Discover</Text>
          <View style={styles.discoverCategoriesWrapper}>
            <Text style={[styles.discoverCategoryText, { color: colors.orange }]}>
              All
            </Text>
            <Text style={styles.discoverCategoryText}>Destinations</Text>
            <Text style={styles.discoverCategoryText}>Cities</Text>
            <Text style={styles.discoverCategoryText}>Experiences</Text>
          </View>
          <View style={styles.discoverItemsWrapper}>
            <FlatList
              data={discoverData}
              renderItem={renderDiscoverDiscoverItem}
              keyExtractor={(item) => item.id.toString()} // Corrected keyExtractor
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Content */}
        <View style={styles.buttonContainer}>
          <Button
            onPress={() => navigation.navigate('Details')}
            title="Click me!"
          />
        </View>
      </ScrollView>
    </View>
  );
};

const Liked = () => (
  <View style={styles.container}>
    <Text style={styles.textColor}>Liked Screen</Text>
  </View>
);

const Profile = () => (
  <View style={styles.container}>
    <Text style={styles.textColor}>Profile Screen</Text>
  </View>
);

const Details = () => (
  <View style={styles.container}>
    <Text style={styles.textColor}>Details Screen</Text>
  </View>
);

const TabNavigator = () => {
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarStyle: styles.tabBar,
        tabBarActiveTintColor: colors.orange,
        tabBarInactiveTintColor: colors.gray,
        tabBarShowLabel: false,
      }}
    >
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="home" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Liked"
        component={Liked}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="heart" size={size} color={color} />
          ),
        }}
      />
      <Tab.Screen
        name="Profile"
        component={Profile}
        options={{
          tabBarIcon: ({ color, size }) => (
            <Entypo name="user" size={size} color={color} />
          ),
        }}
      />
    </Tab.Navigator>
  );
};

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name="TabNavigator" component={TabNavigator} options={{ headerShown: false }}/>
        <Stack.Screen name="Details" component={Details}/>
      </Stack.Navigator>
      <StatusBar style="auto" />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff', // Optional: set a background color
  },
  textColor: {
    color: colors.white, // Ensure colors.white is defined
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  tabBar: {
    // Add your tab bar styles here
    backgroundColor: colors.white,
    borderTopWidth: 0,
    elevation: 5,
    height: 60,
  },
  menuWrapper: {
    marginHorizontal: 20,
    marginTop: 20, 
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  menuIcon: {
    // Add any additional styles for the menu icon if needed
  },
  profileImage: {
    width: 52,
    height: 52,
    borderRadius: 10,
  },
  buttonContainer: { // This is for the 'Click me!' button 
    alignItems: 'center',
    marginTop: 20, // Adjusted to prevent overlapping with FlatList
    marginBottom: 20,
  },
  discoverWrapper: {
    marginTop: 20,
  },
  discoverTitle: {
    fontFamily: 'Helvetica',
    fontWeight: 'bold',
    fontSize: 32,
    marginBottom: 10,
    marginHorizontal: 20, // Moved from the selector discoverWrapper
  },
  discoverCategoriesWrapper: {
    flexDirection: 'row',
    marginTop: 20,
    marginHorizontal: 20,
  },
  discoverCategoryText: {
    marginRight: 30, 
    fontFamily: 'Helvetica',
    fontSize: 16, 
    color: colors.gray,
  },
  discoverItemsWrapper: { // Ensure this style is defined
    paddingVertical: 20,
  },
  discoverItem: {
    width: 170, // Adjust width as needed for horizontal scrolling
    height: 250,
    marginRight: 15, // Space between horizontal items
    justifyContent: 'flex-end',
    paddingHorizontal: 10,
    paddingVertical: 15,

    overflow: 'hidden',
    backgroundColor: colors.gray, // Optional: fallback color
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
});