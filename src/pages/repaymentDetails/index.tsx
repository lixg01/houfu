import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'
const Wrap = styled.div`
  .amount {
    display: flex;
    flex-direction: column;
    align-items: center;
    font-size: 28px;
    margin-top: 50px;
  }
  .orders {
    font-size: 13px;
    margin: 50px 20px 0;
    li {
      display: flex;
      justify-content: space-between;
      margin-bottom: 8px;
      span:last-child {
        color: #666;
      }
    }
  }
`
const Spn = styled.span`
  font-size: 12px;
  color: ${props => props.theme.colors.third};
  margin-top: 10px;
`
const RepaymentDetails: React.FC = () => {
  return (
    <Wrap>
      <div className="amount">
        {`${450.67}元`}
        <ThemeProvider theme={theme}>
          <Spn>交易成功</Spn>
        </ThemeProvider>
      </div>
      <ul className="orders">
        <li>
          <span>付款方式：</span>
          <span>中国建设银行(8115)</span>
        </li>
        <li>
          <span>创建时间：</span>
          <span>2017-11-22 18:10:01</span>
        </li>
        <li>
          <span>订单号：</span>
          <span>500006987123694</span>
        </li>
      </ul>
    </Wrap>
  )
}

export default RepaymentDetails
