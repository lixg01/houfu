import { lazy, LazyExoticComponent } from 'react'
const Index = lazy(() => import('pages/index'))
const Identity = lazy(() => import('pages/identity'))

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
  {
    title: '身份信息',
    path: '/identity',
    component: Identity,
  },
]

export default routerList
