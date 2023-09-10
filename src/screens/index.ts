import {ScreenRoutes} from 'shared/config'
import React from 'react'
import {Home} from './Home'
import {Settings} from './Settings'
import {Login} from './Login'
import {Lesson1} from './Lesson1'

export const Screens = new Map<AppNavigation.Screens, React.FC>()

Screens.set(ScreenRoutes.Login, Login)
Screens.set(ScreenRoutes.Settings, Settings)
Screens.set(ScreenRoutes.Home, Home)
Screens.set(ScreenRoutes.Lesson1, Lesson1)
