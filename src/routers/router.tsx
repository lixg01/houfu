import { lazy, LazyExoticComponent } from 'react'
const Index = lazy(() => import('pages/index'))

interface RouteType {
  title?: string
  icon?: string
  path: string
  component: LazyExoticComponent<any>
  children?: RouteType[]
}

const routerList: RouteType[] = [
  {
    title: '首页',
    path: '/',
    component: Index,
  },
  {
    title: '首页',
    path: '/index',
    component: Index,
  },
]

export default routerList
