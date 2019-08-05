import React from "react"
// import logo from "./logo.svg"
import "./App.css"

const NUM_ROWS = 30

function App() {
  const inputArray = Array(NUM_ROWS).fill(0)

  const rows = inputArray.map((n, i) => {
    const x1 = 100
    const y1 = 100 + i * 20
    const x2 = 700
    const y2 = 100 + i * 20

    return { x1, y1, x2, y2 }
  })

  console.log(inputArray, rows)

  return (
    <svg width={1200} height={1200}>
      <rect x={0} y={0} width={1200} height={1200} fill="none" />
      {rows.map(({ x1, y1, x2, y2 }, i) => (
        <line
          key={`${i}`}
          x1={x1}
          y1={y1}
          x2={x2}
          y2={y2}
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
      ))}
    </svg>
  )
}

export default App
