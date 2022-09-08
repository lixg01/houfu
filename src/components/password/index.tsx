import React, { useEffect, useRef, useState } from 'react'
import styled from 'styled-components'

const PassW = styled.div`
  position: relative;
  width: 5.4933rem;
  height: 0.84rem;
  margin-left: 0.4267rem;
  .outPas {
    position: absolute;
    top: 0;
    left: 0;
    z-index: 1;
    width: 5.4933rem;
    height: 0.84rem;
    opacity: 0;
  }
  .innerPas {
    display: flex;
    justify-content: space-around;
    position: absolute;
    top: 0;
    left: 0;
    input {
      box-sizing: border-box;
      width: 0.8267rem;
      height: 0.84rem;
      border: 1px solid #999;
      border-radius: 0.0533rem;
      margin-left: 0.1067rem;
      text-align: center;
      font-size: 0.48rem;
      &:first-child {
        margin-left: 0;
      }
    }
  }
`

const Password: React.FC<{ getPassword: (p: string) => void; isFocus?: boolean }> = ({ getPassword, isFocus }) => {
  const inputRef = useRef<HTMLInputElement | null>(null)
  const [password, setPassword] = useState<string>()
  const [pass1, setPass1] = useState<string>()
  const [pass2, setPass2] = useState<string>()
  const [pass3, setPass3] = useState<string>()
  const [pass4, setPass4] = useState<string>()
  const [pass5, setPass5] = useState<string>()
  const [pass6, setPass6] = useState<string>()

  // 设置首次输入密码
  const setFirstPassword = () => {
    const len = password?.length
    switch (len) {
      case 0:
        setPass1('')
        break
      case 1:
        setPass1(password)
        setPass2('')
        break
      case 2:
        setPass2(password?.substring(len - 1))
        setPass3('')
        break
      case 3:
        setPass3(password?.substring(len - 1))
        setPass4('')
        break
      case 4:
        setPass4(password?.substring(len - 1))
        setPass5('')
        break
      case 5:
        setPass5(password?.substring(len - 1))
        setPass6('')
        break
      case 6:
        setPass6(password?.substring(len - 1))
        break
    }
  }
  const updatePassword = (p: string) => {
    setPassword(p)
    getPassword(p)
  }
  // 处理键盘挡住输入框问题
  const keyboradbug = () => {
    if (isFocus && inputRef.current) {
      const input = inputRef.current
      input.focus()
      const ua = navigator.userAgent
      const iOS = /iPad|iPhone|iPod/.test(ua)
      input.addEventListener('focus', () => {
        setTimeout(() => {
          if (iOS) {
            if (!/OS 11_[0-3]\D/.test(ua)) {
              document.body.scrollTop = document.body.scrollHeight
            }
          } else {
            input.scrollIntoView(false)
          }
        }, 300)
      })
      input.addEventListener('blur', () => {
        document.body.scrollIntoView()
      })
    }
  }
  useEffect(() => {
    setFirstPassword()
    keyboradbug()
  }, [password])
  return (
    <PassW>
      <dd>
        <input
          ref={inputRef}
          className="outPas"
          onInput={(e: any) => updatePassword(e.target.value)}
          value={password ? password : ''}
          type="tel"
          maxLength={6}
        />
        <div className="innerPas">
          <input type="password" readOnly value={pass1 ? pass1 : ''} maxLength={1} />
          <input type="password" readOnly value={pass2 ? pass2 : ''} maxLength={1} />
          <input type="password" readOnly value={pass3 ? pass3 : ''} maxLength={1} />
          <input type="password" readOnly value={pass4 ? pass4 : ''} maxLength={1} />
          <input type="password" readOnly value={pass5 ? pass5 : ''} maxLength={1} />
          <input type="password" readOnly value={pass6 ? pass6 : ''} maxLength={1} />
        </div>
      </dd>
    </PassW>
  )
}

export default Password
