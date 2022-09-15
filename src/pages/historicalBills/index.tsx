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
    dt {
      display: flex;
      box-sizing: border-box;
      align-items: center;
      font-size: 14px;
      font-weight: 600;
      height: 46.5px;
      padding-left: 22px;
      border-bottom: 0.5px solid #efefef;
    }
    dd {
      display: flex;
      box-sizing: border-box;
      justify-content: space-between;
      align-items: center;
      border-bottom: 0.5px solid #efefef;
      height: 60px;
      padding: 0 25px;
      div {
        font-size: 15px;
        &:last-child {
          background: url(${arrow}) center right no-repeat;
          background-size: 10px 8.5px;
          padding-right: 21.5px;
        }
      }
    }
  }
`
const Spn = styled.span`
  font-size: 0.5333rem;
  margin: 0 2px;
  color: ${props => props.theme.colors.third};
`
const HistoricalBills: React.FC = () => {
  return (
    <Wrap>
      <div className="line"></div>
      <dl>
        <dt>
          第
          <ThemeProvider theme={theme}>
            <Spn>{'55'}</Spn>
          </ThemeProvider>
          期账单
        </dt>
        <dd>
          <div>第１期</div>
          <div>{`${(999.25).toLocaleString()}元`}</div>
        </dd>
      </dl>
    </Wrap>
  )
}

export default HistoricalBills
