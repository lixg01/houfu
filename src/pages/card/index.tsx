import arrow from 'assets/images/icon/arrow.png'
import Btn from 'components/button'
import Popup from 'components/popup'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  width: 10rem;
  margin: auto;
  overflow: hidden;
  .part2 {
    margin-top: 1.0667rem;
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
    margin: 2.32rem auto 0.7467rem;
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
const Card: React.FC = () => {
  const [name, updateName] = useState<string>()
  const [educationVisible, setEducationVisible] = useState<boolean>(false)
  const [marital, setMarital] = useState<string>()
  const [education, setEducation] = useState<string>()
  const educationLevel = ['建设银行', '工商银行', '招商银行', '农业银行']

  // 输入姓名
  const setName = (e: any) => {
    updateName(e.target.value)
  }

  // 选择学历
  const selectEducation = (marital: string) => {
    setEducation(marital)
    setEducationVisible(false)
  }

  // 显示学历等级选择弹窗
  const showEducationPopup = () => {
    setEducationVisible(true)
  }

  const test = () => {
    console.log('下一步')
  }
  return (
    <Wrap>
      <ThemeProvider theme={theme}>
        <Nav>
          <dt className="no">
            <span>3</span>
            <span>/3</span>
          </dt>
          <dd className="con">
            <span>绑定持卡人银行卡</span>
          </dd>
        </Nav>
      </ThemeProvider>
      <List>
        <dl>
          <dt>持卡人</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="输入身份证号码" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
        <dl>
          <dt>卡类型</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="输入真实姓名" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
        <dl onClick={showEducationPopup}>
          <dt>开户行</dt>
          <dd className={marital ? 'selected' : 'no_selected'}>{marital ? marital : '请选择'}</dd>
          <dd className="icon_arrow"></dd>
        </dl>
        <dl>
          <dt>银行卡号</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="填写亲属手机号码" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
      </List>
      <List className="part2">
        <dl>
          <dt>手机号</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="输入同事姓名" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
        <dl>
          <dt>验证码</dt>
          <dd>
            <input type="text" value={name ? name : ''} onInput={e => setName(e)} placeholder="请输入验证码" />
          </dd>
          {name && <dd className="close" onClick={() => updateName('')}></dd>}
        </dl>
      </List>
      <ThemeProvider theme={theme}>
        <Btn cls={'btn'} title={'确认绑卡'} fun={test} />
      </ThemeProvider>

      {/* 选择学历等级 */}
      <Popup
        visible={educationVisible}
        onMaskClick={() => {
          setEducationVisible(false)
        }}
      >
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

export default Card
