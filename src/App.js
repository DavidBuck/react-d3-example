import React from "react"
import { ResponsiveBar } from "@nivo/bar"
import sensorData from "./data"

const chart = data => (
  <ResponsiveBar
    data={data}
    indexBy="name"
    margin={{
      top: 0,
      right: 50,
      bottom: 50,
      left: 50,
    }}
    colors={{ scheme: "dark2" }}
    padding={0.5}
    enableLabel={false}
  />
)

const App = () => (
  <div className="container mx-auto p-4 m-4 border-solid border-2 border-gray-600 bg-gray-200">
    <h1 className="text-4xl text-gray-800 py-2 text-center">
      React D3 Nivo Example
    </h1>
    <div className="my-4 h-64">{chart(sensorData)}</div>
  </div>
)

export default App
