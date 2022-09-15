import React from 'react'
import style from './index.module.scss'

const Bill: React.FC = () => {
  return (
    <>
      <div className={style.line}></div>
      <div className={style.amount}>
        <div className={`${style.amount_left}`}>
          <div className={style.icon_bill}>242</div>
          <span>期账单</span>
        </div>
        <div className={`${style.amount_con}`}>
          <span className={style.title}>账单金额</span>
          <div className={style.mony}>
            {'80.53'.toLocaleString()}
            <span className={style.question}></span>
          </div>
          <div className={style.time}>
            最后还款日<span>2020-02-05</span>
          </div>
        </div>
        <div className={`${style.amount_right} ${style.icon_bill}`}>05</div>
      </div>
      <div className={style.line}></div>
      <dl className={style.detail}>
        <dt>消费明细</dt>
        <dd>
          <div>
            消费
            <span>{'订单号 QW5454465457155'}</span>
          </div>
          <div>
            {`${(999.25).toLocaleString()}元`}
            <span>{'2022-01-02'}</span>
          </div>
        </dd>
      </dl>
    </>
  )
}

export default Bill
