import React, { useEffect, useRef } from 'react'
import * as THREE from 'three'

interface Robot3DCanvasProps {
  photoUrl?: string
}

export const Robot3DCanvas: React.FC<Robot3DCanvasProps> = ({ photoUrl }) => {
  const mountRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const mount = mountRef.current
    if (!mount) return

    const width = mount.clientWidth || 220
    const height = mount.clientHeight || 220

    // 1. Three.js Scene, Camera, Renderer (Set z = 4.6 for balanced robot framing)
    const scene = new THREE.Scene()
    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000)
    camera.position.z = 4.6

    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true })
    renderer.setSize(width, height)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    mount.appendChild(renderer.domElement)

    // 2. Lighting Setup
    const ambientLight = new THREE.AmbientLight(0xffffff, 1.2)
    scene.add(ambientLight)

    // Key Light (Bright Cool White)
    const keyLight = new THREE.PointLight(0xffffff, 3.5, 12)
    keyLight.position.set(4, 5, 6)
    scene.add(keyLight)

    // Cyan Blue Accent Light
    const fillLight = new THREE.PointLight(0x38bdf8, 2.5, 10)
    fillLight.position.set(-4, -3, 4)
    scene.add(fillLight)

    // Emerald Rim Light (Gives depth from behind)
    const rimLight = new THREE.PointLight(0x39d353, 2.0, 10)
    rimLight.position.set(0, -4, -2)
    scene.add(rimLight)

    // 3. Robot 3D Group Construction
    const robotGroup = new THREE.Group()

    // Outer Orbit Ring 1 (Navy Metallic)
    const ring1Geo = new THREE.TorusGeometry(1.65, 0.035, 16, 64)
    const ring1Mat = new THREE.MeshStandardMaterial({
      color: 0x1e2a4a,
      metalness: 0.8,
      roughness: 0.2,
    })
    const ring1 = new THREE.Mesh(ring1Geo, ring1Mat)
    ring1.rotation.x = Math.PI / 3
    robotGroup.add(ring1)

    // Outer Orbit Ring 2 (Electric Cyan Glow Wireframe)
    const ring2Geo = new THREE.TorusGeometry(1.85, 0.025, 16, 64)
    const ring2Mat = new THREE.MeshStandardMaterial({
      color: 0x0284c7,
      metalness: 0.9,
      roughness: 0.1,
      wireframe: true,
    })
    const ring2 = new THREE.Mesh(ring2Geo, ring2Mat)
    ring2.rotation.y = Math.PI / 4
    robotGroup.add(ring2)

    // Robot Head Core (Dark Navy Metallic - Super Crisp on Light Background)
    const headGeo = new THREE.IcosahedronGeometry(1.15, 1)
    const headMat = new THREE.MeshStandardMaterial({
      color: 0x1e2a4a,
      metalness: 0.75,
      roughness: 0.2,
      flatShading: true,
    })
    const head = new THREE.Mesh(headGeo, headMat)
    robotGroup.add(head)

    // Robot Visor Eye (Glowing Emerald Plate)
    const visorGeo = new THREE.BoxGeometry(1.25, 0.32, 0.85)
    const visorMat = new THREE.MeshStandardMaterial({
      color: 0x39d353,
      emissive: 0x26a641,
      emissiveIntensity: 0.9,
      metalness: 0.9,
      roughness: 0.1,
    })
    const visor = new THREE.Mesh(visorGeo, visorMat)
    visor.position.set(0, 0.1, 0.6)
    robotGroup.add(visor)

    scene.add(robotGroup)

    // 4. Bounded Screen Mouse Tracking
    let targetRotY = 0
    let targetRotX = 0

    const handleMouseMove = (e: MouseEvent) => {
      // Normalize mouse coordinates to [-1, +1] relative to viewport center
      const normX = Math.max(-1, Math.min(1, (e.clientX - window.innerWidth / 2) / (window.innerWidth / 2)))
      const normY = Math.max(-1, Math.min(1, (e.clientY - window.innerHeight / 2) / (window.innerHeight / 2)))

      // Natural rotation bounds: max tilt +-25 deg horizontal, +-20 deg vertical
      targetRotY = normX * 0.45
      targetRotX = normY * 0.35
    }

    window.addEventListener('mousemove', handleMouseMove)

    // Pause rendering loop when canvas is off-screen to save RAM and CPU/GPU
    let isVisible = true
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting
      },
      { threshold: 0.05 }
    )
    observer.observe(mount)

    // 5. Animation Loop
    let reqId: number
    const animate = () => {
      reqId = requestAnimationFrame(animate)

      // Skip GPU rendering if not visible on screen
      if (!isVisible) return

      // Orbit rings spin independently in background
      ring1.rotation.z += 0.008
      ring2.rotation.x += 0.01

      // Robot Head Smoothly Lerps toward cursor with strict angle bounds
      robotGroup.rotation.y += (targetRotY - robotGroup.rotation.y) * 0.08
      robotGroup.rotation.x += (targetRotX - robotGroup.rotation.x) * 0.08

      // Subtle floating motion
      robotGroup.position.y = Math.sin(Date.now() * 0.002) * 0.08

      renderer.render(scene, camera)
    }

    animate()

    // Clean up
    return () => {
      observer.disconnect()
      cancelAnimationFrame(reqId)
      window.removeEventListener('mousemove', handleMouseMove)

      // Dispose Geometries and Materials to prevent memory leaks
      ring1Geo.dispose()
      ring1Mat.dispose()
      ring2Geo.dispose()
      ring2Mat.dispose()
      headGeo.dispose()
      headMat.dispose()
      visorGeo.dispose()
      visorMat.dispose()

      if (mount.contains(renderer.domElement)) {
        mount.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [])

  if (photoUrl) {
    return (
      <div className="w-full h-full rounded-full overflow-hidden border-4 border-navy shadow-md bg-slate-100 flex items-center justify-center">
        <img src={photoUrl} alt="Ihsanul Hadi Alghifari" loading="lazy" decoding="async" className="w-full h-full object-cover" />
      </div>
    )
  }

  return (
    <div
      ref={mountRef}
      className="w-full h-full rounded-full border-4 border-navy bg-gradient-to-br from-slate-100 via-slate-200/70 to-blue-100/60 flex items-center justify-center shadow-lg relative cursor-default overflow-hidden"
    />
  )
}
