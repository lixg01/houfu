import back from 'assets/images/identity_back.png'
import front from 'assets/images/identity_front.png'
import Popup from 'components/popup'
import React from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  width: 10rem;
  min-height: 100%;
  height: 100%;
  margin: auto;
  overflow: hidden;
  .nav {
    display: flex;
    justify-content: space-between;
    flex-direction: row-reverse;
    align-items: center;
    .no {
    }
  }
`
const Nav = styled.dl`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  color: ${props => props.theme.colors.third};
  padding: 0 0.5867rem 0.48rem;
  margin-top: 0.5333rem;
  border-bottom: 0.0133rem solid #ededed;
  .no {
    span:first-child {
      font-size: 35px;
    }
    span:last-child {
      font-size: 0.48rem;
    }
  }
  .con {
    display: flex;
    flex-direction: column;
    font-size: 0.5333rem;
    span:last-child {
      color: #999;
      font-size: 0.32rem;
      margin-top: 0.2133rem;
    }
  }
`
const List = styled.div`
  margin-left: 0.5333rem;
  dl {
    display: flex;
    align-items: center;
    border-bottom: 0.0133rem solid #ededed;
    line-height: 1.4667rem;
    dt {
      width: 1.9467rem;
      font-size: 0.4267rem;
    }
    dd {
      font-size: 0.4rem;
      input {
        height: 0.7467rem;
        width: 100%;
        font-size: 0.4rem;
      }
    }
    dd:nth-child(2) {
      flex: 1;
    }
    .close {
      width: 0.3067rem;
      height: 0.3067rem;
      background: #f00;
      margin-right: 0.4rem;
    }
  }
  .photo {
    justify-content: space-around;
    dd {
      width: 3.5733rem;
      font-size: 0.3733rem;
      padding-top: 3.4933rem;
      text-align: center;
      flex: 1;
    }
    .front {
      background: url(${front}) center 1.04rem no-repeat;
      background-size: 3.5733rem 2.48rem;
    }
    .back {
      background: url(${back}) center 1.04rem no-repeat;
      background-size: 3.5733rem 2.48rem;
    }
  }
`
const Identity: React.FC = () => {
  const maritalStatus = ['已婚', '未婚', '离异']
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <Nav>
          <dt className="no">
            <span>1</span>
            <span>/3</span>
          </dt>
          <dd className="con">
            <span>提供基本信息</span>
            <span>请填写本人真实有效信息，提交后不可修改</span>
          </dd>
        </Nav>
      </ThemeProvider>
      <List>
        <dl>
          <dt>姓名</dt>
          <dd>
            <input type="text" placeholder="输入真实姓名" />
          </dd>
          <dd className="close"></dd>
        </dl>
        <dl>
          <dt>身份证号</dt>
          <dd>
            <input type="text" placeholder="输入身份证号" />
          </dd>
          <dd className="close"></dd>
        </dl>
        <dl className="photo">
          <dd className="front">证件正面-人像面</dd>
          <dd className="back">证件背面-国徽面</dd>
        </dl>
        <dl>
          <dt>婚姻状况</dt>
          <dd></dd>
        </dl>
        <dl>
          <dt>最高学历</dt>
          <dd></dd>
        </dl>
        <dl>
          <dt>现住地址</dt>
          <dd></dd>
        </dl>
      </List>
      <Popup visible={true} />
    </Wrap>
  )
}

export default Identity
