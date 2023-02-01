import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import MapView, { Marker } from "react-native-maps";

const TOKYO = {
  latitude: 35.6762,
  longitude: 139.6503,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const CHIBA = {
  latitude: 35.6074,
  longitude: 140.1065,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const App = () => {
  const [region, setRegion] = useState(TOKYO);

  return (
    <View style={styles.container}>
      <MapView
        style={styles.map}
        initialRegion={TOKYO}
        onRegionChangeComplete={(region) => setRegion(region)}
        showsCompass
        followsUserLocation
      >
        <Marker coordinate={TOKYO} />
        <Marker coordinate={CHIBA} />
      </MapView>
      <View style={styles.containerText}>
        <Text style={styles.text}>Current latitude: {region.latitude}</Text>
        <Text style={styles.text}>Current longitude: {region.longitude}</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    flex: 1,
    justifyContent: "flex-end",
    alignItems: "center",
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  text: {
    marginBottom: 6,
  },
  containerText: {
    backgroundColor: "white",
    borderRadius: 12,
    paddingTop: 12,
    padding: 6,
    marginBottom: 40,
  },
});

export default App;
