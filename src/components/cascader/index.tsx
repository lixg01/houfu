import React, { useState } from 'react'
import styled from 'styled-components'

const Wrap = styled.div`
  background: #fff;
  .header {
    display: flex;
    border-bottom: 1px solid #ededed;
    li {
      display: flex;
      height: 40px;
      width: 40px;
      justify-content: center;
      align-items: center;
    }
    .current {
      color: blue;
    }
  }
  .con {
    li {
      height: 40px;
      line-height: 40px;
      padding-left: 10px;
    }
    .current {
      color: blue;
    }
  }
`

type items = {
  label: string
  value: string
  disabled?: boolean
  children?: items[]
}
const Cascader: React.FC<{ data: items[] }> = ({ data }) => {
  const [level, setLeve] = useState<any[]>([
    {
      label: '请选择',
      options: data,
    },
  ])
  const [opt, setOpt] = useState<items[]>(data)
  const [ind, setInd] = useState<number>(0)

  // 设置级联选择项
  const setSelectValue = (item: items) => {
    if (Array.isArray(item.children)) {
      setOpt(item.children)
      if (level.length >= ind) {
        level[ind].label = item.value
        level.length = ind + 1
        level[ind + 1] = {
          label: '请选择',
          options: item.children,
        }
      } else {
        level[level.length - 1].label = item.value
        setLeve(
          level.concat([
            {
              label: '请选择',
              options: item.children,
            },
          ]),
        )
      }
      setInd(ind + 1)
    } else {
      if (level[ind].label === item.value) {
        level[level.length - 1].label = '请选择'
      } else {
        level[level.length - 1].label = item.value
      }
      setLeve(level.concat([]))
    }
  }
  // 级联选择菜单项
  const cancelItem = (index: number) => {
    setInd(index)
    setOpt(level[index].options)
  }
  return (
    <Wrap>
      <div className="casader">
        <ul className="header">
          {level.map((item, index) => {
            return (
              <li key={index} onClick={() => cancelItem(index)}>
                {item.label}
              </li>
            )
          })}
        </ul>
        <ul className="con">
          {opt.map((item: items) => {
            return (
              <li
                className={level[ind].label === item.value ? 'current' : ''}
                onClick={() => setSelectValue(item)}
                key={item.value}>
                {item.label}
              </li>
            )
          })}
        </ul>
      </div>
    </Wrap>
  )
}

export default Cascader
