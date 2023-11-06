import React from "react";
import {
  View,
  Text,
  StyleSheet,
  Dimensions,
  FlatList,
  Image,
} from "react-native";

const imageUrls = [
  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
  "https://c2.staticflickr.com/9/8817/28973449265_07e3aa5d2e_b.jpg",
  "https://c2.staticflickr.com/9/8356/28897120681_3b2c0f43e0_b.jpg",
  "https://c4.staticflickr.com/9/8887/28897124891_98c4fdd82b_b.jpg",
];

const TravelScreen = () => {
  return (
    <View>
      <Text>Travel Screen</Text>
      <FlatList
        numColumns={3}
        data={imageUrls}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <Image source={{ uri: item }} style={styles.image} />
        )}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  image: {
    width: Dimensions.get("window").width / 3, // Divide screen width by 3 to show 3 images per row
    height: Dimensions.get("window").width / 3, // Make the height equal to the width for square images
  },
});

export default TravelScreen;
