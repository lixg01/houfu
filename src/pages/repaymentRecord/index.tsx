import arrow from 'assets/images/icon/arrow02.png'
import entrust from 'assets/images/icon/entrust.png'
import initiative from 'assets/images/icon/initiative.png'
import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  .line {
    height: 5px;
    background: #f5f5f5;
  }
  .record {
    display: flex;
    align-items: center;
    padding: 26px 25px 23px;
    border-bottom: 0.5px solid #efefef;
    .icon {
      width: 22px;
      height: 22px;
      background-size: 100%;
      margin-right: 10px;
    }
    .initiative {
      background-image: url(${initiative});
    }
    .entrust {
      background-image: url(${entrust});
    }
    .repment_type {
      flex: 1;
      font-size: 12px;
      div {
        color: #999;
      }
    }
    .money {
      background: url(${arrow}) center right no-repeat;
      background-size: 10px 8.5px;
      padding-right: 21.5px;
      font-size: 15px;
    }
  }
`
const RepamentRecord: React.FC = () => {
  return (
    <Wrap>
      <div className="line"></div>
      <div className="record">
        <div className="icon initiative"></div>
        <div className="repment_type">
          主动还款
          <div>{'2020-07-08 10:48:48'}</div>
        </div>
        <div className="money">{`${(999.25).toLocaleString()}元`}</div>
      </div>
      <div className="record">
        <div className="icon entrust"></div>
        <div className="repment_type">
          委托划扣
          <div>{'2020-07-08 10:48:48'}</div>
        </div>
        <div className="money">{`${(999.25).toLocaleString()}元`}</div>
      </div>
    </Wrap>
  )
}

export default RepamentRecord
