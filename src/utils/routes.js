import CountryDetails from '../pages/CountryDetails'
import Games from '../pages/Games'
import GamesPanel from '../pages/GamesPanel'
import GamesPanelBorder from '../pages/GamesPanelBorder'
import GamesPanelCapital from '../pages/GamesPanelCapital'
import GamesPanelCoatOfArms from '../pages/GamesPanelCoatOfArms'
import GamesPanelCountry from '../pages/GamesPanelCountry'
import GamesPanelFlagsName from '../pages/GamesPanelFlagsName'
import Home from '../pages/Home'
import RegionCategory from '../pages/RegionCategory'
import Search from '../pages/Search'

export const routes = [
  {
    path: '/',
    component: Home,
  },
  {
    path: '/search',
    component: Search,
  },
  {
    path: '/asia',
    component: RegionCategory,
  },
  {
    path: '/africa',
    component: RegionCategory,
  },
  {
    path: '/america',
    component: RegionCategory,
  },
  {
    path: '/europe',
    component: RegionCategory,
  },
  {
    path: '/oceania',
    component: RegionCategory,
  },
  {
    path: '/:slug',
    component: CountryDetails,
  },
  {
    path: '/games',
    component: Games,
  },
  {
    path: '/flags.svg',
    component: GamesPanel,
  },
  {
    path: '/coatofarms.svg',
    component: GamesPanelCoatOfArms,
  },
  {
    path: '/capital',
    component: GamesPanelCapital,
  },
  {
    path: '/name.common',
    component: GamesPanelCountry,
  },
  {
    path: '/border',
    component: GamesPanelBorder,
  },
  {
    path: '/flags',
    component: GamesPanelFlagsName,
  },
]