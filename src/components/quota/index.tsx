import arrow01 from 'assets/images/icon/arrow01.png'
import arrow02 from 'assets/images/icon/arrow02.png'
import line from 'assets/images/line.png'
import noRecord from 'assets/images/no_record.png'
import Btn from 'components/button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  width: 8.5067rem;
  margin: 0 auto 0;
  overflow: hidden;
  .repayment {
    width: 100%;
    background: #fff;
    border-bottom-left-radius: 0.0533rem;
    border-bottom-right-radius: 0.0533rem;
    overflow: hidden;
    .repay {
      height: 1.76rem;
      display: flex;
      margin: 0 0.4533rem 0 0.5867rem;
      justify-content: space-between;
      align-items: center;
      font-weight: 400;
      font-size: 0.32rem;
      li:first-child {
        span:first-child {
          font-size: 0.32rem;
          margin-right: 0.16rem;
        }
      }
      li:last-child {
        color: #999;
        background: url(${arrow02}) right center no-repeat;
        background-size: 0.2667rem 0.2267rem;
        padding-right: 0.4533rem;
      }
    }
  }
  .line {
    width: 8.8133rem;
    height: 0.3067rem;
    margin-left: -0.1533rem;
    background: url(${line}) no-repeat;
    background-size: 100%;
  }
  .current {
    text-align: center;
    dt {
      margin: 1.0667rem 0 0 0;
      color: #999;
      font-size: 0.32rem;
    }
    .c_mony {
      font-size: 0.7467rem;
      margin: 0.1333rem 0;
      span {
        font-size: 0.3733rem;
        vertical-align: top;
        padding: 0.3733rem 0.0533rem 0 0;
        display: inline-block;
      }
    }
    .c_data {
      color: #999;
      margin-bottom: 0.5333rem;
    }
    .bill {
      width: 4.8rem;
      margin: 0.5333rem auto 0;
      color: #999;
      font-size: 0.2667rem;
    }
  }
  .all_bill {
    width: 8.2rem;
    height: 1.0667rem;
    display: flex;
    justify-content: space-between;
    margin: 0.48rem auto 0.2667rem;
    align-items: center;
    background: #f5f5f5;
    border-radius: 0.0667rem;
    font-size: 0.32rem;
    li:first-child {
      margin-left: 0.4267rem;
    }
    li:last-child {
      margin-right: 0.3067rem;
      color: #999;
      background: url(${arrow02}) right center no-repeat;
      background-size: 0.2667rem 0.2267rem;
      padding-right: 0.4267rem;
    }
  }
  .bill_menu {
    display: flex;
    justify-content: space-between;
    color: #999;
    margin: 0.4267rem 1.0667rem 0;
    font-size: 0.32rem;
    span {
      background: url(${arrow01}) right center no-repeat;
      background-size: 0.2667rem 0.2267rem;
      padding-right: 0.3733rem;
    }
  }
  .no_record {
    width: 8.5067rem;
    height: 2.2133rem;
    border-bottom-left-radius: 0.0533rem;
    border-bottom-left-radius: 0.0533rem;
    padding-top: 4.48rem;
    background: #fff url(${noRecord}) center center no-repeat;
    background-size: 4.2667rem;
    text-align: center;
    font-size: 0.3733rem;
  }
`
const Span = styled.span`
  color: ${props => props.theme.colors.third};
`

const quota: React.FC<{ quota?: boolean }> = () => {
  const navigate = useNavigate()
  const [isRecord] = useState(true)
  const repay = () => {
    navigate('/repayment')
  }
  return (
    <Wrap>
      {isRecord ? (
        <>
          <div className="repayment">
            <ul className="repay">
              <li>
                <span>总待还</span>
                <span>{`￥${(425600).toLocaleString()}`}</span>
              </li>
              <li onClick={() => navigate('/repamentrecord', { state: { name: 'zz' } })}>还款记录</li>
            </ul>
            <div className="line"></div>
            <dl className="current">
              <dt>当前应换</dt>
              <dd className="c_mony">
                <span>¥</span>
                {`80.53`}
              </dd>
              <ThemeProvider theme={theme}>
                <dd className="c_data">
                  还款日<Span>{`2020-02-05`}</Span>
                </dd>
                <Btn title={`立即还款`} fun={repay} />
              </ThemeProvider>
              <dd className="bill">{`账单周期：2020-07-01至2020-07-15 出账日：2020-07-15`}</dd>
            </dl>
            <ul className="all_bill">
              <li>账单总金额 ￥37.25</li>
              <li onClick={() => navigate('/bill')}>明细</li>
            </ul>
          </div>
          <div className="bill_menu">
            <span onClick={() => navigate('/historicalbills')}>历史账单</span>
            <span onClick={() => navigate('/unbilled')}>未出账单</span>
          </div>
        </>
      ) : (
        <div className="no_record">暂无借款记录</div>
      )}
    </Wrap>
  )
}

export default quota
