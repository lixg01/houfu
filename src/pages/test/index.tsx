import useCounter from 'hooks/useCounter'
import useScroll from 'hooks/useScroll'
import React, { useCallback } from 'react'
import styled from 'styled-components'

const Button = styled.button`
  position: fixed;
  right: 10px;
  bottom: 10px;
`
const P = styled.p`
  height: 1000px;
`

const Test: React.FC = () => {
  const { count, increment, decrement, reset } = useCounter()
  const { y } = useScroll()

  const goTop = useCallback(() => {
    document.documentElement.scrollTop = 0
  }, [])
  return (
    <div>
      <P>{count}</P>
      <button onClick={decrement}> 减 </button>
      <button onClick={increment}>加</button>
      <button onClick={reset}>重置</button>
      {y > 300 ? <Button onClick={goTop}>Back to Top</Button> : ''}
    </div>
  )
}

export default Test
