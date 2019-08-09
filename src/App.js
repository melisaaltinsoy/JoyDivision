import React from "react"
// import logo from "./logo.svg"
import "./App.css"
import * as d3 from "d3"

const NUM_ROWS = 50
const N_SAMPLES = 50
const length = 600

function App() {
  const inputArray = Array(NUM_ROWS).fill(0)
  const xArray = Array(N_SAMPLES).fill(0)
  const curve = d3
    .line()
    .x(d => d[0])
    .y(d => d[1])
    .curve(d3.curveBundle.beta(1.5))

  const lines = inputArray.map((n, i) =>
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

  return (
    <script src="https://cdnjs.cloudflare.com/ajax/libs/d3/4.2.2/d3.min.js" />,
    (
      <svg width={900} height={900} fill="black">
        <rect x={0} y={0} width={900} height={900} fill="black" />
        {lines.map(line => {
          return (
            <path
              key={` 
              ${line}
              `}
              d={` 
            ${curve(line)}
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
