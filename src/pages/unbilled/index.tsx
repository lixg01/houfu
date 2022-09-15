import arrow from 'assets/images/icon/arrow02.png'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  .line {
    height: 0.1333rem;
    background: #f5f5f5;
  }
  dl {
    dd {
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.5px solid #efefef;
      height: 60px;
      padding: 0 26px;
      div {
        font-size: 15px;
        span {
          display: block;
          color: #999;
          font-size: 10px;
        }
        &:last-child {
          text-align: right;
        }
        .money {
          background: url(${arrow}) center right no-repeat;
          background-size: 10px 8.5px;
          padding-right: 21.5px;
        }
      }
    }
  }
`
const Spn = styled.dt`
  display: flex;
  align-items: center;
  height: 46.5px;
  padding-left: 26px;
  border-bottom: 0.5px solid #efefef;
  height: 1.28rem;
  font-size: 0.2667rem;
  color: ${props => props.theme.colors.third};
`
const Unbilled: React.FC = () => {
  return (
    <Wrap>
      <div className="line"></div>
      <dl>
        <ThemeProvider theme={theme}>
          <Spn>请最终款还以已出帐款为准！</Spn>
        </ThemeProvider>
        <dd>
          <div>
            第１期
            <span>{'2020-07-01至2020-07-15'}</span>
          </div>
          <div>
            <div className="money">{`${(999.25).toLocaleString()}元`}</div>
            <span>{'还款日：2020-07-15 '}</span>
          </div>
        </dd>
      </dl>
    </Wrap>
  )
}

export default Unbilled
