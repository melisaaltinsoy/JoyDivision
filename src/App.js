import React from "react"
// import logo from "./logo.svg"
import "./App.css"

const NUM_ROWS = 50
const N_SAMPLES = 50
const length = 600

function App() {
  const inputArray = Array(NUM_ROWS).fill(0)
  const xArray = Array(N_SAMPLES).fill(0)

  const rows = inputArray.map((n, i) =>
    xArray.map((n, j) => {
      const x = 150 + j * (length / N_SAMPLES)
      const distanceToCenter = Math.abs(j * (length / N_SAMPLES) - length / 2)
      const random =
        (Math.random() *
          (distanceToCenter + 90 - length / 2) *
          Math.max(250 - distanceToCenter, 0)) /
        length
      const y = 150 + i * (length / N_SAMPLES) + random
      return [x, y]
    })
  )
  // console.log(
  //   rows[0][0].join(","),
  //   rows[0][1],
  //   rows[0][0].join(","),
  //   rows[0][1]
  // )

  console.log(rows)

  return (
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js" />,
    (
      <svg width={900} height={900} fill="black">
        <rect x={0} y={0} width={900} height={900} fill="black" />
        {rows.map((points, i) => {
          return (
            <polyline
              key={`${i}`}
              points={` 
            ${points.join(" ")}
            `}
              fill="black"
              stroke="white"
              strokeWidth="2"
              shapeRendering="geometricPrecision"
            />
          )
        })}
      </svg>
    )
  )
}

export default App
