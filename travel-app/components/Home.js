import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, StyleSheet, Text, View, ScrollView, Image} from 'react-native';
import Feather from 'react-native-vector-icons/Feather';
import colors from '../travel-app/assets/colors/colors';
import profile from '../travel-app/assets/images/person.png';

import activities from '../travel-app/assets/data/activitiesData'
import discoverCategoriesData from '../travel-app/assets/data/discoverCategoriesData'
import discoverData from '../travel-app/assets/data/discoverData'
import learnMoreData from '../travel-app/assets/data/learnMoreData'




export default function App() {
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
            <Image source={profile} style={styles.profileImage}/>
          </View>
        </SafeAreaView>
        {/* Discover */}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
});
