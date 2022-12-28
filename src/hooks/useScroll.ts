import { useEffect, useState } from 'react'
// 获取横向、纵向滚动条位置
const getPosition = () => {
  return {
    x: document.documentElement.scrollLeft,
    y: document.documentElement.scrollTop,
  }
}

const useScroll = () => {
  // 定义一个position 给state 保存滚动条位置
  const [position, setPosition] = useState(getPosition())
  useEffect(() => {
    const handler = () => {
      setPosition(getPosition())
    }
    document.addEventListener('scroll', handler)
    return () => {
      // 组件销毁时，取消事件监听
      document.removeEventListener('scroll', handler)
    }
  }, [])
  return position
}

export default useScroll
