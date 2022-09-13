import Btn from 'components/button'
import Password from 'components/password'
import React, { useEffect, useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  width: 10rem;
  margin: auto;
  overflow: hidden;
  .desc {
    font-size: 0.32rem;
    color: #999;
    margin-left: 0.7467rem;
    line-height: 0.5333rem;
    margin-bottom: 1.8667rem;
  }
  .btn {
    position: absolute;
    bottom: 0.6133rem;
    left: 0.5333rem;
    width: 8.9333rem;
    height: 1.1733rem;
    line-height: 1.1733rem;
    border-radius: 1.1733rem;
  }
  .second {
    margin-top: 0.8rem;
  }
  .set {
    display: flex;
    margin-left: 0.56rem;
    height: 0.84rem;
    align-items: center;
    dt {
      margin-right: 0.4267rem;
      font-size: 0.4rem;
    }
  }
  .tips {
    font-size: 0.3467rem;
    margin: 0.4rem 0 0 3.4667rem;
    color: #999;
  }
`
const H1 = styled.h1`
  font-size: 0.5867rem;
  color: ${props => props.theme.colors.third};
  margin: 0.5333rem 0 0.4rem 0.6933rem;
`

const SetPassword: React.FC = () => {
  const [pass1, setPass1] = useState<string>()
  const [pass2, setPass2] = useState<string>()

  const test = () => {
    console.log(1)
  }
  // 设置支付密码
  const setP1 = (p: string) => {
    setPass1(p)
  }
  // 确认支付密码
  const setP2 = (p: string) => {
    setPass2(p)
  }

  useEffect(() => {
    console.log(pass1, pass2)
  }, [pass1, pass2])
  return (
    <Wrap>
      <H1 theme={theme}>{'设置支付密码'}</H1>
      <div className="desc">
        为保护您支付安全，请设置支付密码，
        <br /> 该密码仅限于支付和修改重要信息时使用
      </div>
      <dl className="set">
        <dt>设置支付密码</dt>
        <Password getPassword={setP1} />
      </dl>
      <dl className="set second">
        <dt>确认支付密码</dt>
        <Password getPassword={setP2} />
      </dl>
      <div className="tips">6位不连续、不重复的数字</div>
      <ThemeProvider theme={theme}>
        <Btn cls={'btn'} title={'确认'} fun={test} />
      </ThemeProvider>
    </Wrap>
  )
}

export default SetPassword
