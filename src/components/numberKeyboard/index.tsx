import React from 'react'
import styled from 'styled-components'

const Wrap = styled.div``

const Keyboard: React.FC<{ title: string; fun?: () => void; cls?: string }> = ({ title, fun, cls }) => {
  const inputNum = (num: string) => {
    console.log(num)
  }
  const delNum = () => {
    console.log(1)
  }
  return (
    <Wrap>
      <div className="inputs">
        <div
          onClick={() => {
            inputNum('1')
          }}>
          1
        </div>
        <div
          onClick={() => {
            inputNum('2')
          }}>
          2
        </div>
        <div
          onClick={() => {
            inputNum('3')
          }}>
          3
        </div>
        <div
          onClick={() => {
            inputNum('4')
          }}>
          4
        </div>
        <div
          onClick={() => {
            inputNum('5')
          }}>
          5
        </div>
        <div
          onClick={() => {
            inputNum('6')
          }}>
          6
        </div>
        <div
          onClick={() => {
            inputNum('7')
          }}>
          7
        </div>
        <div
          onClick={() => {
            inputNum('8')
          }}>
          8
        </div>
        <div
          onClick={() => {
            inputNum('9')
          }}>
          9
        </div>
        <div className="bg_gray"></div>
        <div onClick={delNum} className="bg_gray"></div>
      </div>
    </Wrap>
  )
}

export default Keyboard
