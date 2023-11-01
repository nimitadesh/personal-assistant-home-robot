import React from "react";
import { View, Text, Button, StyleSheet } from "react-native";

const App = () => {
  return (
    <View style={styles.container}>
      <View style={styles.centeredContent}>
        {/* Call Contacts */}
        <View style={styles.buttonSection}>
          <Button
            title="Call Contacts"
            onPress={() => console.log("Calling contacts...")}
          />
          <Text style={styles.description}>Call your friends and family</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Travel */}
        <View style={styles.buttonSection}>
          <Button title="Travel" onPress={() => console.log("Traveling...")} />
          <Text style={styles.description}>Travel to different places</Text>
        </View>

        {/* Divider */}
        <View style={styles.divider} />

        {/* Smart Home */}
        <View style={styles.buttonSection}>
          <Button
            title="Smart Home"
            onPress={() => console.log("Controlling smart home...")}
          />
          <Text style={styles.description}>
            Control your smart home devices
          </Text>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center", // Center vertically
    alignItems: "center", // Center horizontally
  },
  centeredContent: {
    alignItems: "center", // Center horizontally
  },
  buttonSection: {
    flexDirection: "column",
    alignItems: "center",
  },
  description: {
    marginTop: 8,
    textAlign: "center",
  },
  divider: {
    borderBottomWidth: 1,
    borderBottomColor: "gray",
    marginVertical: 16,
  },
});

export default App;
