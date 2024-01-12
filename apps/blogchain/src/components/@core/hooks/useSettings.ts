import { useContext } from 'react'
import { SettingsContext, SettingsContextValue } from 'src/components/@core/context/settingsContext'

export const useSettings = (): SettingsContextValue => useContext(SettingsContext)
