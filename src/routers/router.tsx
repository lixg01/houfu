import { lazy, LazyExoticComponent } from 'react'
const Index = lazy(() => import('pages/index'))
const Identity = lazy(() => import('pages/identity'))
const Personal = lazy(() => import('pages/personal'))
const Card = lazy(() => import('pages/card'))
const SetPassword = lazy(() => import('pages/setPassword'))
const Repayment = lazy(() => import('pages/repayment'))
const Bill = lazy(() => import('pages/bill'))
const HistoricalBills = lazy(() => import('pages/historicalBills'))
const Unbilled = lazy(() => import('pages/unbilled'))
const RepaymentRecord = lazy(() => import('pages/repaymentRecord'))
const RepaymentDetails = lazy(() => import('pages/repaymentDetails'))
const Status = lazy(() => import('pages/status'))
const Test = lazy(() => import('pages/test'))

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
  {
    title: '联系人信息',
    path: '/personal',
    component: Personal,
  },
  {
    title: '绑定银行卡',
    path: '/card',
    component: Card,
  },
  {
    title: '设置支付密码',
    path: '/setpassword',
    component: SetPassword,
  },
  {
    title: '还款详情',
    path: '/repayment',
    component: Repayment,
  },
  {
    title: '账单详情',
    path: '/bill',
    component: Bill,
  },
  {
    title: '历史账单',
    path: '/historicalbills',
    component: HistoricalBills,
  },
  {
    title: '未出账单',
    path: '/unbilled',
    component: Unbilled,
  },
  {
    title: '还款记录',
    path: 'repamentrecord',
    component: RepaymentRecord,
  },
  {
    title: '还款详情',
    path: 'repaymentdetails',
    component: RepaymentDetails,
  },
  {
    title: '还款处理中',
    path: 'status',
    component: Status,
  },
  {
    title: 'test',
    path: 'test',
    component: Test,
  },
]

export default routerList
