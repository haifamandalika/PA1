import { lazy } from 'react'
import Tabels3 from '../pages/Data Status Lingkungan'
import Tabels4 from '../pages/Data Kabupaten'
import Tabels5 from '../pages/Data Tahun'

// use lazy for better code splitting, a.k.a. load faster
const Dashboard = lazy(() => import('../pages/Dashboard'))
const Forms = lazy(() => import('../pages/Forms'))
const Cards = lazy(() => import('../pages/Cards'))
const Charts = lazy(() => import('../pages/Charts'))
const Buttons = lazy(() => import('../pages/Buttons'))
const Modals = lazy(() => import('../pages/Modals'))
const DataPneumonia = lazy(() => import('../pages/Data Pneumonia'))
const DataStatusGizi = lazy(() => import('../pages/Data Status Gizi'))
const DataStatusLingkungan = lazy(() => import('../pages/Data Status Lingkungan'))
const DataKabupaten = lazy(() => import('../pages/Data Kabupaten'))
const DataTahun = lazy(() => import('../pages/Data Tahun'))
const DataKlaster = lazy(() => import('../pages/Data Klaster'))
const Page404 = lazy(() => import('../pages/404'))
const Blank = lazy(() => import('../pages/Blank'))

/**
 * ⚠ These are internal routes!
 * They will be rendered inside the app, using the default `containers/Layout`.
 * If you want to add a route to, let's say, a landing page, you should add
 * it to the `App`'s router, exactly like `Login`, `CreateAccount` and other pages
 * are routed.
 *
 * If you're looking for the links rendered in the SidebarContent, go to
 * `routes/sidebar.js`
 */
const routes = [
  {
    path: '/dashboard', // the url
    component: Dashboard, // view rendered
  },
  {
    path: '/forms',
    component: Forms,
  },
  {
    path: '/cards',
    component: Cards,
  },
  {
    path: '/charts',
    component: Charts,
  },
  {
    path: '/buttons',
    component: Buttons,
  },
  {
    path: '/modals',
    component: Modals,
  },
  // {
  //   path: '/tables',
  //   component: Tables,
  // },
  {
    path: '/tables',
    component: DataPneumonia,
  },
  {
    path: '/tabels2',
    component: DataStatusGizi,
  },
  {
    path: '/tabels3',
    component: DataStatusLingkungan,
  },
  {
    path: '/tabels4',
    component: DataKabupaten,
  },
  {
    path: '/tabels5',
    component: DataTahun,
  },
  {
    path: '/tabels6',
    component: DataKlaster,
  },
  {
    path: '/404',
    component: Page404,
  },
  {
    path: '/blank',
    component: Blank,
  },
]

export default routes
