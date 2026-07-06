import { Canvas, useFrame } from '@react-three/fiber'
import { MeshDistortMaterial, OrbitControls, Stars } from '@react-three/drei'
import { useMemo, useRef } from 'react'
import * as THREE from 'three'

function FishModel() {
  const fishRef = useRef()
  const tailRef = useRef()
  const bodyRef = useRef()
  const finsRef = useRef()

  const bodyGeometry = useMemo(() => new THREE.SphereGeometry(0.6, 32, 32), [])
  const tailGeometry = useMemo(() => new THREE.ConeGeometry(0.3, 0.8, 24), [])
  const finGeometry = useMemo(() => new THREE.BoxGeometry(0.05, 0.4, 0.25), [])

  useFrame((state) => {
    const t = state.clock.elapsedTime
    fishRef.current.position.x = Math.sin(t * 0.3) * 5
    fishRef.current.position.y = Math.sin(t * 0.6) * 1.2
    fishRef.current.rotation.y = Math.sin(t * 0.25) * 0.15
    tailRef.current.rotation.y = Math.sin(t * 10) * 0.55
    finsRef.current.rotation.z = Math.sin(t * 8) * 0.3
    bodyRef.current.scale.setScalar(1 + Math.sin(t * 2) * 0.04)
  })

  return (
    <group ref={fishRef} position={[0, 0, -6]}>
      <mesh ref={bodyRef} geometry={bodyGeometry} castShadow receiveShadow>
        <MeshDistortMaterial color="#38bdf8" distort={0.25} speed={2} roughness={0.3} metalness={0.2} />
      </mesh>

      <mesh
        ref={tailRef}
        geometry={tailGeometry}
        position={[-0.9, 0, 0]}
        rotation={[Math.PI / 2, 0, Math.PI / 2]}
        castShadow
        receiveShadow
      >
        <meshStandardMaterial color="#7c3aed" roughness={0.4} metalness={0.2} />
      </mesh>

      <mesh
        ref={finsRef}
        geometry={finGeometry}
        position={[0.2, 0.35, 0]}
        rotation={[0, 0, Math.PI / 4]}
      >
        <meshStandardMaterial color="#a855f7" roughness={0.35} metalness={0.15} transparent opacity={0.95} />
      </mesh>
      <mesh
        geometry={finGeometry}
        position={[0.2, -0.35, 0]}
        rotation={[0, 0, -Math.PI / 4]}
      >
        <meshStandardMaterial color="#a855f7" roughness={0.35} metalness={0.15} transparent opacity={0.95} />
      </mesh>
    </group>
  )
}

export default function FishBackground() {
  return (
    <div className="pointer-events-none absolute inset-0 -z-10 opacity-80">
      <Canvas camera={{ position: [0, 0, 12], fov: 45 }}>
        <ambientLight intensity={0.65} />
        <pointLight position={[5, 5, 5]} intensity={1} color="#a5f3fc" />
        <pointLight position={[-5, -4, 3]} intensity={0.8} color="#c084fc" />
        <Stars radius={50} depth={30} count={200} factor={4} saturation={0.6} fade speed={0.2} />
        <FishModel />
        <OrbitControls enableZoom={false} enableRotate={false} enablePan={false} />
      </Canvas>
    </div>
  )
}
