import Btn from 'components/button'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'
const Wrap = styled.div`
  width: 8.9333rem;
  height: 6.9067rem;
  border-radius: 0.16rem;
  background: #fff;
  margin: -2.48rem auto 0;
  overflow: hidden;
  p {
    text-align: center;
    font-size: 0.3733rem;
    color: #0a0724;
    margin: 2.4rem 0 2.2133rem 0;
  }
`

const NoQuota: React.FC<{ quota?: boolean }> = () => {
  const navigate = useNavigate()
  const [audit] = useState<boolean>(false)
  const test = () => {
    if (audit) {
      console.log('audit')
    } else {
      navigate('identity')
    }
  }
  return (
    <Wrap>
      <p>{audit ? '额度审核中' : '暂无额度信息，请立即获取'}</p>
      <ThemeProvider theme={theme}>
        <Btn title={audit ? '刷新' : '获取额度'} fun={test} />
      </ThemeProvider>
    </Wrap>
  )
}

export default NoQuota
