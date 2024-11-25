export type ThemeMode = 'dark' | 'light'

type InitialState = typeof initialState

const initialState = {
  themeMode: 'light' as ThemeMode,
}

export const appReducer = (
    state: InitialState = initialState,
    action: ActionsType
): InitialState => {
  switch (action.type) {
    case 'UPDATE_THEME':
      return {...state, themeMode: action.payload.theme}
    default:
      return state
  }
}

export const updateThemeModeAC = (theme: ThemeMode) => {
  return {
    type: 'UPDATE_THEME',
    payload: {theme}
  } as const
}

type UpdateThemeModeAC = ReturnType<typeof updateThemeModeAC>

// Action types
type ActionsType = UpdateThemeModeAC