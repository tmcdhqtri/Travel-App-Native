import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import MapView, { Marker } from 'react-native-maps'

const Location = () => {
  const coordinates = {
    latitude:16.667428,
    longitude:112.729721,
    latitudeDelta:0.01,
    longitudeDelta:0.01,
    title:'Hoang Sa Belong To VietNam'
  }
  return (
    <MapView initialRegion={coordinates} style={styles.mapStyle}>
      <Marker coordinate={coordinates} title={coordinates.title}/>
    </MapView>
  )
}

export default Location

const styles = StyleSheet.create({
  mapStyle: {
    ...StyleSheet.absoluteFillObject
  }
})