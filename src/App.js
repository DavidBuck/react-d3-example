import { VictoryChart, VictoryBar } from "victory"
import sensorData from "./data"

const App = () => (
  <div className="container mx-auto p-4 m-4 border-solid border-2 border-gray-600 bg-gray-200">
    <h1 className="text-4xl text-gray-800 py-2 text-center">
      React D3 Victory Example
    </h1>
    <div className="my-1">
      <VictoryChart domainPadding={25}>
        <VictoryBar
          style={{
            data: { fill: "#35a150" },
            labels: { fontSize: 12, fill: "#2D3748", padding: 10 },
          }}
          data={sensorData}
          x="name"
          y="value"
          alignment="middle"
          padding={{ top: 20, bottom: 60 }}
          labels={({ datum }) => `${datum.value}`}
        />
      </VictoryChart>
    </div>
  </div>
)

export default App
