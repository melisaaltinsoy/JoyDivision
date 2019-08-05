import React from "react"
// import logo from "./logo.svg"
import "./App.css"

const NUM_ROWS = 40
const N_SAMPLES = 50
const length = 600

function App() {
  const inputArray = Array(NUM_ROWS).fill(0)
  const xArray = Array(N_SAMPLES).fill(0)

  const rows = inputArray.map((n, i) =>
    xArray.map((n, j) => {
      const x = 100 + j * (length / N_SAMPLES)
      const y = 100 + i * (length / N_SAMPLES) + Math.random() * 10
      return [x, y]
    })
  )

  // console.log(
  //   rows[0][0].join(","),
  //   rows[0][1],
  //   rows[0][0].join(","),
  //   rows[0][1]
  // )

  return (
    <svg width={900} height={900}>
      <rect x={0} y={0} width={900} height={900} fill="none" />
      {rows.map((points, i) => {
        return (
          <polyline
            key={`${i}`}
            points={` 
            ${points}
            
            `}
            fill="none"
            stroke="black"
            strokeWidth="3"
          />
        )
      })}
    </svg>
  )
}

export default App
