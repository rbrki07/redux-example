// @ts-check

// Initialer Zustand des Bereichs `settings` im Store
const initialState = [
  {
    key: 'currentTheme',
    value: undefined,
  }
]

// Actions
const UPDATE_SETTING = 'settings/update'

// Action Creators erzeugt Action Object
export const updateSetting = (setting) => {
  return {
    type: UPDATE_SETTING,
    payload: setting,
  }
}

// Reducer zur Action `UPDATE_SETTING`
const updateSettingReducer = (state, action) => {
  return state.map((setting) =>
    setting?.key === action.payload?.key ? action.payload : setting
  )
}

// Kombination aller Reducer für Settings
export const settingsReducer = (state = initialState, action) => {
  switch (action.type) {
    case UPDATE_SETTING:
      return updateSettingReducer(state, action)
    default:
      return state
  }
}

// Selector für den Bereich `settings` im Store
export const settingsSelector = (state) => state.settings

// Wiederverwendbarer Selektor für Zugriff auf `currentTheme`
export const currentThemeSelector = (state) => state.settings.find((setting) => setting.key === 'currentTheme')