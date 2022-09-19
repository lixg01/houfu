import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Code = styled.div`
  width: 1.6rem;
  font-size: 12px;
  color: ${props => props.theme.colors.third};
  text-align: center;
`
const Gray = styled.div`
  width: 1.6rem;
  font-size: 12px;
  color: #999;
  text-align: center;
`
const VerificationCode: React.FC<{ inintNum: number; fun: () => void }> = ({ inintNum, fun }) => {
  const [num, updateNum] = useState<number>(inintNum)
  // 获取验证码
  const getCode = () => {
    fun()
    let timer: number
    const cb = () => {
      updateNum((num: number) => {
        const newNum = num - 1
        if (num > 0) {
          timer = setTimeout(cb, 1000) as unknown as number
        } else {
          clearTimeout(timer)
          updateNum(inintNum)
        }
        return newNum
      })
    }
    cb()
  }
  return (
    <ThemeProvider theme={theme}>
      {num < inintNum && num >= 0 ? <Gray>{`${num}s`}</Gray> : <Code onClick={getCode}>获取验证码</Code>}
    </ThemeProvider>
  )
}

export default VerificationCode
