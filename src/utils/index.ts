// 获取数组深度
export const getArrayDepth = (arr: any[], depth: number): number => {
  let flag = false
  const temp = []
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i].children)) {
      for (let j = 0; j < arr[i].children.length; j++) {
        temp.push(arr[i].children[j])
      }
      flag = true
    }
  }
  if (flag) {
    depth++
    return getArrayDepth(temp, depth)
  } else {
    return depth
  }
}
