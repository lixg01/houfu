import arrow from 'assets/images/icon/arrow.png'
import close from 'assets/images/icon/close.png'
import rad from 'assets/images/icon/radio.png'
import Btn from 'components/button'
import Password from 'components/password'
import Popup from 'components/popup'
import React, { useState } from 'react'
import styled, { ThemeProvider } from 'styled-components'
import { theme } from 'utils/theme'

const Wrap = styled.div`
  width: 10rem;
  margin: auto;
  padding-top: 0.9333rem;
  overflow: hidden;
  .list {
    width: 9.1467rem;
    height: 1.76rem;
    border: 0.0133rem solid #ededed;
    border-radius: 0.1333rem;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin: 0 auto 0.48rem;
    padding: 0 0.48rem 0 0.6133rem;
    color: #999;
    dt {
      font-size: 0.64rem;
      span {
        font-size: 0.48rem;
      }
    }
    dd {
      display: flex;
      align-items: center;
      span {
        height: 0.52rem;
        width: 0.52rem;
        border-radius: 100%;
        border: #bec2cb 0.0133rem solid;
        margin-left: 0.48rem;
      }
    }
  }
  .current {
    border-color: #ff672a;
    color: #333;
    dd {
      span {
        background: url(${rad}) no-repeat;
        background-size: 100%;
        border: 0;
      }
    }
  }
  .btn {
    width: 8.9333rem;
    height: 1.1733rem;
    line-height: 1.1733rem;
    border-radius: 1.1733rem;
    margin: auto;
  }
  .r_btn {
    margin: 2.6667rem auto 0.96rem;
  }
  .tips {
    font-size: 0.32rem;
    margin: 0 0 1.6rem 0.8rem;
    color: #999;
  }
  .confirm {
    .title {
      display: flex;
      font-size: 20px;
      justify-content: space-between;
      align-items: center;
      margin: 0.7467rem 0.6667rem 0.7467rem;
      span {
        width: 0.4667rem;
        height: 0.4667rem;
        background: url(${close}) no-repeat;
        background-size: 100%;
      }
    }
    .detail {
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      font-size: 0.9333rem;
      margin-bottom: 0.48rem;
      span {
        color: #999;
        font-size: 0.4rem;
      }
    }
    .order {
      display: flex;
      justify-content: space-between;
      margin: 0 0.6667rem 0.3733rem;
      color: #999;
      .bank {
        display: flex;
        align-items: center;
        color: #333;
        span {
          width: 0.2133rem;
          height: 0.36rem;
          background: url(${arrow}) no-repeat;
          background-size: 100%;
          margin-left: 0.2667rem;
        }
      }
    }
    .trade {
      display: flex;
      justify-content: center;
    }
  }
  .banklists {
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
`
const Forgot = styled.div`
  display: flex;
  justify-content: end;
  margin: 0.5333rem 0.96rem 0.6667rem 0;
  color: ${props => props.theme.colors.third};
  font-size: 0.4rem;
`
const Repayment: React.FC = () => {
  const [isRepay, updateRepay] = useState<boolean>(false)
  const [visible, updateVisible] = useState<boolean>(false)
  const [bankVisible, updateBankVisible] = useState<boolean>(false)
  const [ind, updateInd] = useState<number>(0)
  const [bankcard, setBankcard] = useState<string>('中国工商银行 (尾号5684)')
  const banks = ['中国工商银行 (尾号5684)', '工商银行', '招商银行']
  const details = [
    {
      amount: '60.00',
      isCurrent: true,
    },
    {
      amount: '60.00',
      isCurrent: false,
    },
  ]

  const showPupop = () => {
    updateVisible(true)
  }
  // 选中还款
  const selectedRepayment = (index: number) => {
    updateInd(index)
  }
  // 确认还款
  const repayment = () => {
    updateRepay(true)
  }

  // 选择还款银行卡
  const selectBank = (bank: string) => {
    setBankcard(bank)
    updateBankVisible(false)
  }
  // 输入交易密码
  const obtainPassword = (p: string) => {
    console.log(p)
  }
  return (
    <Wrap>
      {details.map((item, index) => {
        return (
          <dl
            onClick={() => {
              selectedRepayment(index)
            }}
            key={index}
            className={ind === index ? 'list current' : 'list'}
          >
            <dt>
              <span>¥</span>
              {`${item.amount.toLocaleString()}`}
            </dt>
            <dd>
              {item.isCurrent ? `当前还款` : '提前结清'}
              <span></span>
            </dd>
          </dl>
        )
      })}
      <div className="tips">当前剩余待还0.00元，总待还140.00元</div>
      <ThemeProvider theme={theme}>
        <Btn cls={'btn'} title={'确认还款'} fun={showPupop} />
      </ThemeProvider>

      {/* 确认付款 */}
      <Popup visible={visible}>
        <div className="confirm">
          <h3 className="title">
            {isRepay ? '输入支付密码' : '确认付款'}
            <span
              onClick={() => {
                updateVisible(false)
              }}
            ></span>
          </h3>
          <div className="detail">
            {isRepay ? '' : <span>付款详情</span>}
            {`¥${'46.80'.toLocaleString()}`}
          </div>
          {isRepay ? (
            <>
              <div className="trade">
                <Password getPassword={obtainPassword} isFocus={true} />
              </div>
              <ThemeProvider theme={theme}>
                <Forgot>忘记密码</Forgot>
              </ThemeProvider>
            </>
          ) : (
            <>
              <dl className="order">
                <dt>订单信息</dt>
                <dd>厚付还款</dd>
              </dl>
              <dl className="order">
                <dt>厚付还款</dt>
                <dd className="bank" onClick={() => updateBankVisible(true)}>
                  {bankcard}
                  <span></span>
                </dd>
              </dl>
              <ThemeProvider theme={theme}>
                <Btn cls={'btn r_btn'} title={'确认还款'} fun={repayment} />
              </ThemeProvider>
            </>
          )}
        </div>
      </Popup>

      {/* 选择银行卡 */}
      <Popup
        visible={bankVisible}
        onMaskClick={() => {
          updateBankVisible(false)
        }}
      >
        <ul className="banklists">
          {banks.map(item => (
            <li onClick={() => selectBank(item)} key={item}>
              {item}
            </li>
          ))}
        </ul>
      </Popup>
    </Wrap>
  )
}

export default Repayment
