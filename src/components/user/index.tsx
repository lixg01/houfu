import { qrcodeListByMerchant } from 'api/index'
import VerificationCode from 'components/verificationCode'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  width: 305px;
  background: #fffeff;
  border: 1px solid #f2f1f2;
  border-radius: 2.5px;
  margin: auto;
  .phone {
    color: #999;
    text-align: center;
    margin: 0.6667rem 0 0.3467rem;
    font-size: 0.4rem;
  }
  .code {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 5.9733rem;
    height: 1.1733rem;
    background: #ededed;
    border-radius: 0.1333rem;
    margin: 0 auto 0.7467rem;
    padding: 0 0.5333rem;
    input {
      background: #ededed;
      width: 2.6667rem;
    }
  }
  .button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: border-box;
    height: 1.3333rem;
    border-top: 0.0133rem #e5e4ea solid;
    font-size: 0.48rem;
    font-weight: 400;
    color: #2693f9;
  }
`
const P = styled.p`
  color: ${props => props.theme.colors.third};
  font-size: 14px;
  text-align: center;
  margin-top: 0.96rem;
`

const User: React.FC<{ fun?: () => void }> = ({ fun }) => {
  // 获取验证码
  const getCode = () => {
    return qrcodeListByMerchant({ merchantNo: '1111' })
  }
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <P>为了确保账号安全请您进行验证</P>
        <div className="phone">手机号 158404577454</div>
        <div className="code">
          <input type="text" placeholder="输入短信验证码" />
          <VerificationCode inintNum={60} fun={getCode}></VerificationCode>
        </div>
        <div className="button" onClick={fun}>
          确认
        </div>
      </ThemeProvider>
    </Wrap>
  )
}

export default User
