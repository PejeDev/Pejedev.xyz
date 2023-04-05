'use client'
import { Canvas } from '@react-three/fiber'
import { Gltf, OrbitControls, PerspectiveCamera } from '@react-three/drei'
import Style from './cat-render.module.css'

export function CatRender (): JSX.Element {
  return (
    <Canvas className={Style.catModel}>
      <PerspectiveCamera makeDefault position={[0, 0, 4.6]} />
      <OrbitControls
        autoRotate
        enablePan={false}
        enableZoom={false}
        enableRotate={false} autoRotateSpeed={10} />
      <ambientLight intensity={0.2} />
      <spotLight intensity={0.2} position={[10, 10, 10]} angle={0.15} penumbra={1} />
      <spotLight intensity={0.2} position={[0, 10, 0]} angle={0.15} penumbra={1} />
      <spotLight intensity={0.2} position={[-10, 10, -10]} angle={0.15} penumbra={1} />
      <Gltf
        scale={0.015}
        position={[0, -1.5, 0]}
        rotation={[0, 0, 0]}
        src="assets/models/cat.glb"
      />
    </Canvas>
  )
}
