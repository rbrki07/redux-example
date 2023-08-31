// @ts-check
import React from "react"
import { StyleSheet, Text, View } from "react-native"
import { useSelector } from "react-redux"
import { currentThemeSelector } from "./../store/settings"

const DisplaySettingsView = () => {
  const currentTheme = useSelector(currentThemeSelector)?.value
  return (
    <View style={style.container}>
      <Text>{`Current theme: ${currentTheme}`}</Text>
    </View>
  )
}
  
const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})
  
export { DisplaySettingsView }