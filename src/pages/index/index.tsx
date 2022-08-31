import amount from 'assets/images/amount.png'
import smile from 'assets/images/icon/smile.png'
import NoQuota from 'components/noQuota'
import Quota from 'components/quota'
import React, { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  width: 10rem;
  min-height: 100%;
  height: 100%;
  margin: auto;
  background: #3a3e4f;
  overflow: hidden;
  .title {
    font-size: 0.5867rem;
    color: #fff;
    font-weight: 400;
    margin: 0.56rem 0 0.48rem 0.8267rem;
    &::after {
      display: block;
      content: '';
      background: url(${smile}) no-repeat;
      background-size: 100%;
      height: 0.16rem;
      width: 0.56rem;
      margin: 0.08rem 0 0 0.2933rem;
    }
  }
  .amount {
    background: url(${amount}) no-repeat;
    background-size: 100%;
    height: 2.8rem;
    width: 8.9333rem;
    margin: auto;
    dl {
      margin-left: 0.7467rem;
      font-weight: 400;
      color: #fff;
      overflow: hidden;
      dt {
        margin-top: 0.4267rem;
        font-size: 0.3733rem;
        opacity: 0.6;
      }
      .mony {
        font-size: 0.7467rem;
        display: flex;
        span {
          font-size: 0.48rem;
          margin: 0.08rem 0.1067rem 0 0;
        }
      }
      .total_amount {
        font-size: 0.32rem;
      }
    }
  }
`
const Index: React.FC = () => {
  const [isQuota] = useState(true)
  return (
    <Wrap>
      <h3 className="title">厚付</h3>
      <div className="amount">
        {isQuota && (
          <dl>
            <dt>可用额度</dt>
            <dd className="mony">
              <span>¥</span>
              {`${(55480.53).toLocaleString()}`}
            </dd>
            <dd className="total_amount">{`总额度: ¥${'60,000'}`}</dd>
          </dl>
        )}
      </div>
      {isQuota ? <Quota /> : <NoQuota />}
    </Wrap>
  )
}

export default Index
