import React from "react"
// import logo from "./logo.svg"
import "./App.css"

const NUM_ROWS = 2
const N_SAMPLES = 50
const length = 600

function App() {
  const inputArray = Array(NUM_ROWS).fill(0)
  const xArray = Array(N_SAMPLES).fill(0)
  const yArray = Array(N_SAMPLES).fill(0)

  const rows = inputArray.map((n, i) =>
    xArray.map((n, j) => {
      const x = 100 + j * (length / N_SAMPLES)
      console.log({ j, x: j * (length / N_SAMPLES) })
      const y = 100 + i * (length / N_SAMPLES) * (Math.random() - 0.5)
      return [x, y]
    })
  )

  console.log(inputArray, rows)

  return (
    <svg width={1200} height={1200}>
      <rect x={0} y={0} width={1200} height={1200} fill="none" />
      {rows.map((row, i) => (
        <polyline
          key={`${i}`}
          points={`${row[0][0]},${row[0][1]} ${row[1][0]},${row[1][1]}`}
          fill="none"
          stroke="black"
          strokeWidth="3"
        />
      ))}
    </svg>
  )
}

export default App
