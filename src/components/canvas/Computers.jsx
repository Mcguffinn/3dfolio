import { Suspense, useEffect, useState } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Preload, useGLTF } from '@react-three/drei'

import CanvasLoader from '../Loader'

const Computers = ({ isMobile }) => {
// const computer = useGLTF('./desktop_pc/scene.gltf')
const computer = useGLTF('./a_personal_computer/scene.gltf')

return (
  // Handles how the 3d models mesh is rendered 
  <mesh>
    <hemisphereLight intensity={3} groundColor='white'  skyColor='0xB1E1FF'/>
    {/* <ambientLight color={'blue'} intensity={1}/>   */}
    {/* <pointLight intensity={1} /> */}
    <spotLight
        position={[-20, 50, 10]}
        angle={0.12}
        penumbra={1}
        intensity={1}
        castShadow
        shadow-mapSize={1024}
      />
    <primitive
      object={computer.scene}
      scale={isMobile ? 0.5 : 1}
      position={isMobile ? [-1, -1, -2.2] : [-2.5, -2.0, 0]}
      rotation={[0.1, -0.1, 0]}
    />
  </mesh>
)
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false)

  // An eventListner the detects changes to screen size
  useEffect(()=> {
    const mediaQuery = window.matchMedia(' (max-width: 500px)')

    // sets initial value of the 'isMobile' state 
    setIsMobile(mediaQuery.matches)

    const handleMediaQueryChange = (event) => {
      setIsMobile(event.matches)
    }

    mediaQuery.addEventListener('change' , handleMediaQueryChange)

    //remove the listener when the component is unmounted
    return () => {
      mediaQuery.removeEventListener('change', handleMediaQueryChange)
    }
  }, [])

  return(
    <Canvas
      frameloop='demand'
      shadows
      dpr={[1, 2]}
      camera={{position: [20, 3, 5], fov: 25}}
      gl={{ preserveDrawingBuffer: true}}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls 
          enableZoom={false}
          maxPolarAngle={Math.PI /2}
          minPolarAngle={Math.PI /2}
        />
        <Computers isMobile={isMobile}/>
      </Suspense>

      <Preload all />
    </Canvas>
  )
  
}

export default ComputersCanvas