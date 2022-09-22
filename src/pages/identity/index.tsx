import arrow from 'assets/images/icon/arrow.png'
import edit from 'assets/images/icon/edit.png'
import close from 'assets/images/icon/r_close.png'
import back from 'assets/images/identity_back.png'
import front from 'assets/images/identity_front.png'
import Btn from 'components/button'
import Cascader from 'components/cascader'
import Popup from 'components/popup'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { options } from 'utils/data'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  width: 10rem;
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
  .list {
    li {
      display: flex;
      justify-content: center;
      box-sizing: border-box;
      line-height: 1.3333rem;
      border-bottom: 1px solid #ededed;
      font-size: 0.4rem;
      &:last-child {
        border-bottom: 0;
      }
    }
  }
  .btn {
    width: 8.9333rem;
    height: 1.1733rem;
    line-height: 1.1733rem;
    border-radius: 1.1733rem;
    margin: 0.4rem auto 0.7467rem;
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
  padding-left: 0.5333rem;
  border-bottom: 0.0133rem solid #ededed;
  dl {
    display: flex;
    align-items: center;
    border-bottom: 0.0133rem solid #ededed;
    line-height: 1.4667rem;
    &:last-child {
      border-bottom: 0;
    }
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
      background: url(${close}) no-repeat;
      background-size: 100%;
      margin-right: 0.4rem;
    }
    .icon_arrow {
      width: 0.2133rem;
      height: 0.36rem;
      background: url(${arrow}) no-repeat;
      background-size: 100%;
      margin: 0 0.4rem 0 0.6667rem;
    }
    .edit {
      width: 0.3867rem;
      height: 0.3867rem;
      background: url(${edit}) no-repeat;
      background-size: 100%;
      margin: 0 0.4rem 0 0.6667rem;
    }
    .selected {
      text-align: right;
    }
    .no_selected {
      text-align: right;
      color: #999;
    }
    .tex {
      display: flex;
      textarea {
        width: 100%;
        margin: 0.5333rem 0;
        font-size: 0.4rem;
      }
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
  const navigate = useNavigate()
  const [name, updateName] = useState<string>()
  const [identity, updateIdentity] = useState<string>()
  const [maritalVisible, setMaritalVisible] = useState<boolean>(false)
  const [educationVisible, setEducationVisible] = useState<boolean>(false)
  const [addressVisible, setAddressVisible] = useState<boolean>(false)
  const [marital, setMarital] = useState<string>()
  const [education, setEducation] = useState<string>()
  const [address, setAddress] = useState<string>()
  const maritalStatus = ['已婚', '未婚', '离异']
  const educationLevel = ['大专', '本科', '研究生', '博士', '其他']

  // 输入姓名
  const setName = (e: any) => {
    updateName(e.target.value)
  }

  // 输入身份证号
  const setIdentity = (e: any) => {
    updateIdentity(e.target.value)
  }

  // 选择婚姻状态
  const selectMarital = (marital: string) => {
    setMarital(marital)
    setMaritalVisible(false)
  }

  // 选择学历
  const selectEducation = (marital: string) => {
    setEducation(marital)
    setEducationVisible(false)
  }

  // 选择地址
  const selectAddress = (marital: string) => {
    setAddress(marital)
    setAddressVisible(false)
  }

  // 显示婚姻状态选择弹窗
  const showMaritalPopup = () => {
    setMaritalVisible(true)
  }

  // 显示学历等级选择弹窗
  const showEducationPopup = () => {
    setEducationVisible(true)
  }
  // 显示地址选择弹窗
  const showAddressPopup = () => {
    setAddressVisible(true)
  }
  const test = () => {
    navigate('/personal')
  }
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
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="输入真实姓名" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
        <dl>
          <dt>身份证号</dt>
          <dd>
            <input
              type="tel"
              value={identity ? identity : ''}
              onInput={e => setIdentity(e)}
              placeholder="输入身份证号"
            />
          </dd>
          {identity && <dd className="close" onClick={() => updateIdentity('')}></dd>}
        </dl>
        <dl className="photo">
          <dd className="front">证件正面-人像面</dd>
          <dd className="back">证件背面-国徽面</dd>
        </dl>
        <dl onClick={showMaritalPopup}>
          <dt>婚姻状况</dt>
          <dd className={marital ? 'selected' : 'no_selected'}>{marital ? marital : '请选择'}</dd>
          <dd className="icon_arrow"></dd>
        </dl>
        <dl onClick={showEducationPopup}>
          <dt>最高学历</dt>
          <dd className={education ? 'selected' : 'no_selected'}>{education ? education : '请选择'}</dd>
          <dd className="icon_arrow"></dd>
        </dl>
        <dl onClick={showAddressPopup}>
          <dt>现住地址</dt>
          <dd className={address ? 'selected' : 'no_selected'}>{address ? address : '请选择'}</dd>
          <dd className="icon_arrow"></dd>
        </dl>
        <dl>
          <dt></dt>
          <dd className="tex">
            <textarea placeholder="请输入详细地址" />
          </dd>
          <dd className="edit"></dd>
        </dl>
      </List>
      <ThemeProvider theme={theme}>
        <Btn cls={'btn'} title={'下一步'} fun={test} />
      </ThemeProvider>
      {/* 选择婚姻状态弹窗 */}
      <Popup
        visible={maritalVisible}
        onMaskClick={() => {
          setMaritalVisible(false)
        }}>
        <ul className="list">
          {maritalStatus.map(item => (
            <li onClick={() => selectMarital(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Popup>

      {/* 选择学历等级 */}
      <Popup
        visible={educationVisible}
        onMaskClick={() => {
          setEducationVisible(false)
        }}>
        <ul className="list">
          {educationLevel.map(item => (
            <li onClick={() => selectEducation(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Popup>

      {/* 选择地址弹窗 */}
      <Popup
        visible={addressVisible}
        onMaskClick={() => {
          setAddressVisible(false)
        }}>
        <Cascader data={options} />
      </Popup>
    </Wrap>
  )
}

export default Identity
