import './App.css'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

function App() {

  return (
    <>
      <Canvas camera={{

        position: [3, 3, 3]
      }}>
        <ambientLight />
        <OrbitControls />
        <color attach={"background"} args={["#333"]} />
        <mesh>
          <axesHelper />
          <boxGeometry args={[0.5, 0.5, 0.5]}/>
          <meshNormalMaterial />
        </mesh>

      </Canvas>
    </>
  )
}

export default App
