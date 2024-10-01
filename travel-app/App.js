import React from 'react';
import { StatusBar } from 'expo-status-bar';
import {
  StyleSheet,
  Text,
  View,
  Button,
  ScrollView,
  SafeAreaView,
  Image,
  ImageBackground,
  FlatList,
} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import Entypo from 'react-native-vector-icons/Entypo';
import { TouchableOpacity } from 'react-native';

import profile from '../travel-app/assets/images/person.png';
import discoverData from './assets/data/discoverData';
import activitiesData from './assets/data/activitiesData'; // Ensure this is correctly imported
import learnMoreData from './assets/data/learnMoreData';

import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

import colors from '../travel-app/assets/colors/colors';

Entypo.loadFont();

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

// Define the Home component
const Home = ({ navigation }) => {
  // Function to render each discover item
  const renderDiscoverDiscoverItem = ({ item }) => {
    return (
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('Details', {
            item: item,
          })
        }
      >
        <ImageBackground
          source={item.image}
          style={[
            styles.discoverItem,
            { marginLeft: item.id === 'discover-1' ? 20 : 0 },
          ]}
          imageStyle={styles.discoverItemImage}
        >
          <Text style={styles.discoverItemTitle}>{item.title}</Text>
          <View style={styles.discoverItemLocationWrapper}>
            <Entypo name="location-pin" size={18} color={colors.white} />
            <Text style={styles.discoverItemLocationText}>
              {item.location}
            </Text>
          </View>
        </ImageBackground>
      </TouchableOpacity>
    );
  };

  // Function to render each activity item
  const renderActivityItem = ({ item }) => {
    return (
      <View style={[styles.activityItemWrapper, {
        marginLeft: item.id === 'activities-1' ? 20 : 0
      }]}>
        <Image source={item.image} style={styles.activityItemImage} />
        <Text style={styles.activityItemText}>{item.title}</Text>
      </View>
    );
  };
  
  // Function to render each learn more item 
  const renderLearnMoreItem = ({item}) => {
    return(
      <ImageBackground
        source={item.image}
        style={[
          styles.learnMoreItem,
          {
            marginLeft: item.id === 'learnMore-1' ? 20 : 0,
          }
        ]}
        imageStyle={styles.learnMoreItemImage}
      >
        <Text style={styles.learnMoreItemText}>{item.title}</Text>
      </ImageBackground>
    )
  }

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
            <Text
              style={[styles.discoverCategoryText, { color: colors.orange }]}
            >
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
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Activities Section */}
        <View style={styles.activitiesWrapper}>
          <Text style={styles.activitiesTitle}>Activities</Text>
          <View style={styles.activitiesItemsWrapper}>
            <FlatList
              data={activitiesData}
              renderItem={renderActivityItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
        </View>

        {/* Learn More Section */}
        <View style={styles.learnMoreWrapper}>
          <Text style={styles.learnMoreTitle}>Learn More</Text>
          <View style={styles.learnMoreItemsWrapper}>
            <FlatList
              data={learnMoreData}
              renderItem={renderLearnMoreItem}
              keyExtractor={(item) => item.id.toString()}
              horizontal
              showsHorizontalScrollIndicator={false}
            />
          </View>
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
        <Stack.Screen
          name="TabNavigator"
          component={TabNavigator}
          options={{ headerShown: false }}
        />
        <Stack.Screen name="Details" component={Details} />
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
  buttonContainer: {
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
  discoverItemsWrapper: {
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
  activitiesItemsWrapper: {
    paddingVertical: 20,
  },
  activityItem: {
    width: 150, // Adjust as needed
    height: 150,
    backgroundColor: colors.lightGray, // Define in colors
    borderRadius: 15,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 15,
  },
  activityTitle: {
    fontSize: 16,
    fontFamily: 'Helvetica',
    color: colors.black, // Define in colors
    textAlign: 'center',
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
  learnMoreItemsWrapper: {
    paddingVertical: 20,
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