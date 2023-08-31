// @ts-check
import React from "react"
import { Button, StyleSheet, View } from "react-native"
import { useDispatch } from "react-redux"
import { updateSetting } from "./../store/settings"

const UpdateSettingsView = () => {
  const dispatch = useDispatch()
  return (
    <View style={style.container}>
      <Button 
        onPress={() => dispatch(updateSetting({ key: 'currentTheme', value: 'DARK' }))} 
        title={'Set current theme to DARK'} />
      <Button 
        onPress={() => dispatch(updateSetting({ key: 'currentTheme', value: 'LIGHT' }))} 
        title={'Set current theme to LIGHT'} />
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

export { UpdateSettingsView }