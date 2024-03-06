import { FaGlobeAsia, FaGlobeAfrica, FaGlobeAmericas, FaGlobeEurope, FaSearch } from "react-icons/fa";
import { FaEarthOceania } from "react-icons/fa6";
import { SiMonogame } from "react-icons/si";
import { FcHome } from "react-icons/fc";
import { TbFlagQuestion } from "react-icons/tb";
import { MdOutlineFlagCircle } from "react-icons/md";
import { GiCapitol } from "react-icons/gi";
import { TbBuildingEstate } from "react-icons/tb";
import { TbBorderSides } from "react-icons/tb";
import { FaFontAwesomeFlag } from "react-icons/fa";
export const sidebarMenu = [
  { id: 1, pages: 'Home', path: '/', icon: FcHome},
  { id: 1, pages: 'Search', path: '/search', icon: FaSearch},
  { id: 3, pages: 'Asia', path: '/asia', icon: FaGlobeAsia},
  { id: 4, pages: 'Africa', path: '/africa', icon: FaGlobeAfrica},
  { id: 5, pages: 'America', path: '/america', icon: FaGlobeAmericas},
  { id: 6, pages: 'Europe', path: '/europe', icon: FaGlobeEurope},
  { id: 7, pages: 'Oceania', path: '/oceania', icon: FaEarthOceania},
  { id: 8, pages: 'Games', path: '/games', icon: SiMonogame},
]

export const gamesCard = [
  { id: 1, title: "Which country's flag?", path: '/flags.svg', icon: TbFlagQuestion},
  { id: 2, title: "Which country's coat of arms?", path: '/coatofarms.svg', icon: MdOutlineFlagCircle},
  { id: 3, title: "Where is the capital of the state?", path: '/capital', icon: GiCapitol},
  { id: 4, title: "Where is this city the capital of?", path: '/name.common', icon: TbBuildingEstate},
  { id: 5, title: "Which country borders these?", path: '/border', icon: TbBorderSides},
  { id: 6, title: "Show the flag of this country?", path: '/flags', icon: FaFontAwesomeFlag},
]