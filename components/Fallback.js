import React from 'react'
import {
  View,
  Text,
  StyleSheet,
} from 'react-native'

function Fallback() {
  return (
    <View style={styles.FallbackBox}>
      <Text
      style={{
        fontSize: 20,
        fontWeight: 'bold',
      }}
      >No todos found
      </Text>
    </View>
  )
}

const styles = StyleSheet.create({
  FallbackBox: {
    flex: 1,
    justifyContent: 'flex-start',
    alignItems: 'center',
  },
})

export default Fallback