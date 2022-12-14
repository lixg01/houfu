import arrow from 'assets/images/icon/arrow.png'
import edit from 'assets/images/icon/edit.png'
import close from 'assets/images/icon/r_close.png'
import back from 'assets/images/identity_back.png'
import front from 'assets/images/identity_front.png'
import Btn from 'components/button'
import Cascader from 'components/cascader'
import Popup from 'components/popup'
import User from 'components/user'
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
    background: #fff;
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
  const [userVisible, setUserVisible] = useState<boolean>(true)
  const [marital, setMarital] = useState<string>()
  const [education, setEducation] = useState<string>()
  const [address, setAddress] = useState<string>()
  const maritalStatus = ['??????', '??????', '??????']
  const educationLevel = ['??????', '??????', '?????????', '??????', '??????']

  // ????????????
  const setName = (e: any) => {
    updateName(e.target.value)
  }

  // ??????????????????
  const setIdentity = (e: any) => {
    updateIdentity(e.target.value)
  }

  // ??????????????????
  const selectMarital = (marital: string) => {
    setMarital(marital)
    setMaritalVisible(false)
  }

  // ????????????
  const selectEducation = (marital: string) => {
    setEducation(marital)
    setEducationVisible(false)
  }

  // ??????????????????????????????
  const showMaritalPopup = () => {
    setMaritalVisible(true)
  }

  // ??????????????????????????????
  const showEducationPopup = () => {
    setEducationVisible(true)
  }
  // ????????????????????????
  const showAddressPopup = () => {
    setAddressVisible(true)
  }
  const test = () => {
    navigate('/personal')
  }
  const getCode = () => {
    setUserVisible(false)
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
            <span>??????????????????</span>
            <span>?????????????????????????????????????????????????????????</span>
          </dd>
        </Nav>
      </ThemeProvider>
      <List>
        <dl>
          <dt>??????</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="??????????????????" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
        <dl>
          <dt>????????????</dt>
          <dd>
            <input
              type="tel"
              value={identity ? identity : ''}
              onInput={e => setIdentity(e)}
              placeholder="??????????????????"
            />
          </dd>
          {identity && <dd className="close" onClick={() => updateIdentity('')}></dd>}
        </dl>
        <dl className="photo">
          <dd className="front">????????????-?????????</dd>
          <dd className="back">????????????-?????????</dd>
        </dl>
        <dl onClick={showMaritalPopup}>
          <dt>????????????</dt>
          <dd className={marital ? 'selected' : 'no_selected'}>{marital ? marital : '?????????'}</dd>
          <dd className="icon_arrow"></dd>
        </dl>
        <dl onClick={showEducationPopup}>
          <dt>????????????</dt>
          <dd className={education ? 'selected' : 'no_selected'}>{education ? education : '?????????'}</dd>
          <dd className="icon_arrow"></dd>
        </dl>
        <dl onClick={showAddressPopup}>
          <dt>????????????</dt>
          <dd className={address ? 'selected' : 'no_selected'}>{address ? address : '?????????'}</dd>
          <dd className="icon_arrow"></dd>
        </dl>
        <dl>
          <dt></dt>
          <dd className="tex">
            <textarea placeholder="?????????????????????" />
          </dd>
          <dd className="edit"></dd>
        </dl>
      </List>
      <ThemeProvider theme={theme}>
        <Btn cls={'btn'} title={'?????????'} fun={test} />
      </ThemeProvider>
      {/* ???????????????????????? */}
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

      {/* ?????????????????? */}
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

      {/* ?????????????????? */}
      <Popup
        visible={addressVisible}
        onMaskClick={() => {
          setAddressVisible(false)
        }}>
        <Cascader data={options} />
      </Popup>

      {/* ???????????????????????? */}
      <Popup visible={userVisible} position={'center'}>
        <User fun={getCode} />
      </Popup>
    </Wrap>
  )
}

export default Identity
