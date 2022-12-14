import arrow from 'assets/images/icon/arrow.png'
import close from 'assets/images/icon/r_close.png'
import Btn from 'components/button'
import Popup from 'components/popup'
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  width: 10rem;
  margin: auto;
  overflow: hidden;
  h3 {
    font-size: 0.4rem;
    font-weight: bold;
    padding-left: 0.5333rem;
    line-height: 1.3333rem;
    margin-top: 0.5333rem;
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
    margin: 0.64rem auto 0.7467rem;
  }
`
const Nav = styled.dl`
  display: flex;
  justify-content: space-between;
  flex-direction: row-reverse;
  align-items: center;
  color: ${props => props.theme.colors.third};
  padding: 0 0.5867rem 0;
  margin-top: 0.5333rem;
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
  }
`
const List = styled.div`
  margin-left: 0.5333rem;
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
`
const Personal: React.FC = () => {
  const navigate = useNavigate()
  const [name, updateName] = useState<string>()
  const [relationVisible, setRelationVisible] = useState<boolean>(false)
  const [relation, updateRelation] = useState<string>()
  const [education, setEducation] = useState<string>()
  const educationLevel = ['??????', '??????', '????????????', '??????']

  // ????????????
  const setName = (e: any) => {
    updateName(e.target.value)
  }

  // ????????????
  const selectEducation = (relation: string) => {
    setEducation(relation)
    setRelationVisible(false)
  }

  // ??????????????????????????????
  const showEducationPopup = () => {
    setRelationVisible(true)
  }

  const test = () => {
    navigate('/card')
  }
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <Nav>
          <dt className="no">
            <span>2</span>
            <span>/3</span>
          </dt>
          <dd className="con">
            <span>??????????????????</span>
          </dd>
        </Nav>
      </ThemeProvider>
      <h3>?????????1</h3>
      <List>
        <dl onClick={showEducationPopup}>
          <dt>??????</dt>
          <dd className={relation ? 'selected' : 'no_selected'}>{relation ? relation : '?????????'}</dd>
          <dd className="icon_arrow"></dd>
        </dl>
        <dl>
          <dt>??????</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="??????????????????" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
        <dl>
          <dt>?????????</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="????????????????????????" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
        <dl>
          <dt>????????????</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="?????????????????????" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
      </List>
      <h3>?????????2</h3>
      <List>
        <dl onClick={showEducationPopup}>
          <dt>??????</dt>
          <dd className={education ? 'selected' : 'no_selected'}>{education ? education : '?????????'}</dd>
          <dd className="icon_arrow"></dd>
        </dl>
        <dl>
          <dt>??????</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="??????????????????" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
        <dl>
          <dt>?????????</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="???????????????" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
      </List>
      <ThemeProvider theme={theme}>
        <Btn cls={'btn'} title={'?????????'} fun={test} />
      </ThemeProvider>

      {/* ?????????????????? */}
      <Popup
        visible={relationVisible}
        onMaskClick={() => {
          setRelationVisible(false)
        }}>
        <ul className="list">
          {educationLevel.map(item => (
            <li onClick={() => selectEducation(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Popup>
    </Wrap>
  )
}

export default Personal
