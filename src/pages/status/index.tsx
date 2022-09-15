import fail from 'assets/images/fail.png'
import succ from 'assets/images/succ.png'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  .status {
    display: flex;
    flex-direction: column;
    align-items: center;
    margin-top: 45px;
    .img {
      width: 68px;
      height: 82px;
    }
    .tex {
      font-size: 18px;
      font-weight: 600;
      margin: 20px 0 12px;
    }
    .tips {
      font-size: 12px;
      color: #999;
    }
  }
`
const Btn = styled.span`
  margin-top: 120px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 113.5px;
  height: 31px;
  font-size: 12px;
  border-radius: 31px;
  border: ${props => props.theme.colors.third} 1px solid;
  color: ${props => props.theme.colors.third};
`
const Status: React.FC = () => {
  const [status, updateStauts] = useState<number>(1)
  return (
    <Wrap>
      <div className="status">
        <img className="img" src={status ? succ : fail} alt="" />
        <span className="tex">还款处理中</span>
        <span className="tips">您可在还款明细中查看还款详情</span>
        <ThemeProvider theme={theme}>
          <Btn>返回</Btn>
        </ThemeProvider>
      </div>
    </Wrap>
  )
}

export default Status
