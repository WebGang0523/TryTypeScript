// 接口初探
interface LabelledValue {
  label: string
}

function printLabel(labelledObj: LabelledValue) {
  console.log(labelledObj.label)
}
let myObj = { size: 10, label: 'Size 10 Object' }
printLabel(myObj)

// 可选属性
interface SquareConfig {
  color?: string
  width?: number
  [propName: string]: any
}

function createSquare(config: SquareConfig): { color: string; area: number } {
  let newSquare = { color: 'white', area: 100 }
  if (config.color) {
    newSquare.color = config.color
  }
  if (config.width) {
    newSquare.area = config.width * config.width
  }
  return newSquare
}

let mySquare = createSquare({ color0: 'black' })

// 只读属性
interface Point {
  readonly x: number
  readonly y: number
}
let p1: Point = { x: 10, y: 20 }

//函数类型
interface SearchFunc {
  (source: string, subString: string): boolean
}
let mySearch: SearchFunc
mySearch = function (source: string, subString: string) {
  let result = source.search(subString)
  return result > -1
}
