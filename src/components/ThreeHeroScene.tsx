import React, { useEffect, useRef } from 'react';
import * as THREE from 'three';

export const ThreeHeroScene: React.FC = () => {
  const mountRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const container = mountRef.current;
    if (!container) return;

    // Detect prefers-reduced-motion
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // Scene setup
    const scene = new THREE.Scene();
    const width = container.clientWidth || window.innerWidth;
    const height = container.clientHeight || window.innerHeight;

    const camera = new THREE.PerspectiveCamera(45, width / height, 0.1, 1000);
    camera.position.z = 7;

    const renderer = new THREE.WebGLRenderer({
      alpha: true,
      antialias: true,
      powerPreference: 'high-performance',
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    container.appendChild(renderer.domElement);

    // Group to hold all 3D objects for unified tilt & rotation
    const group = new THREE.Group();
    scene.add(group);

    // 1. Core 3D Wireframe Polyhedron (Geometric Cyber Core)
    const coreGeometry = new THREE.IcosahedronGeometry(2.2, 1);
    const coreWireframe = new THREE.WireframeGeometry(coreGeometry);
    const coreMaterial = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.45,
      linewidth: 1.5,
    });
    const coreLine = new THREE.LineSegments(coreWireframe, coreMaterial);
    group.add(coreLine);

    // 2. Inner Glowing Solid Core with subtle pulse
    const innerGeometry = new THREE.IcosahedronGeometry(1.4, 0);
    const innerMaterial = new THREE.MeshBasicMaterial({
      color: 0x818cf8,
      wireframe: true,
      transparent: true,
      opacity: 0.25,
    });
    const innerMesh = new THREE.Mesh(innerGeometry, innerMaterial);
    group.add(innerMesh);

    // 3. Orbital Torus Ring
    const torusGeometry = new THREE.TorusGeometry(3.1, 0.02, 16, 100);
    const torusMaterial = new THREE.MeshBasicMaterial({
      color: 0xc084fc,
      transparent: true,
      opacity: 0.35,
    });
    const torus = new THREE.Mesh(torusGeometry, torusMaterial);
    torus.rotation.x = Math.PI / 3;
    torus.rotation.y = Math.PI / 6;
    group.add(torus);

    // 4. Second inclined orbital ring
    const torus2Geometry = new THREE.TorusGeometry(3.4, 0.015, 16, 100);
    const torus2Material = new THREE.MeshBasicMaterial({
      color: 0x22d3ee,
      transparent: true,
      opacity: 0.25,
    });
    const torus2 = new THREE.Mesh(torus2Geometry, torus2Material);
    torus2.rotation.x = -Math.PI / 4;
    torus2.rotation.y = Math.PI / 4;
    group.add(torus2);

    // 5. Surrounding 3D Floating Particle Cloud
    const particleCount = 450;
    const particleGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array(particleCount * 3);
    const colors = new Float32Array(particleCount * 3);

    const c1 = new THREE.Color(0x38bdf8);
    const c2 = new THREE.Color(0x818cf8);
    const c3 = new THREE.Color(0x22d3ee);

    for (let i = 0; i < particleCount; i++) {
      const radius = 3.2 + Math.random() * 4.5;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(Math.random() * 2 - 1);

      positions[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = radius * Math.cos(phi);

      const colorChoice = Math.random() > 0.5 ? c1 : Math.random() > 0.5 ? c2 : c3;
      colors[i * 3] = colorChoice.r;
      colors[i * 3 + 1] = colorChoice.g;
      colors[i * 3 + 2] = colorChoice.b;
    }

    particleGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    particleGeometry.setAttribute('color', new THREE.BufferAttribute(colors, 3));

    const particleMaterial = new THREE.PointsMaterial({
      size: 0.05,
      vertexColors: true,
      transparent: true,
      opacity: 0.7,
      blending: THREE.AdditiveBlending,
    });

    const particles = new THREE.Points(particleGeometry, particleMaterial);
    group.add(particles);

    // Lighting
    const pointLight = new THREE.PointLight(0x38bdf8, 2, 50);
    pointLight.position.set(5, 5, 5);
    scene.add(pointLight);

    const violetLight = new THREE.PointLight(0x818cf8, 2, 50);
    violetLight.position.set(-5, -5, -2);
    scene.add(violetLight);

    // Interactive mouse tracking with lerp
    let mouseX = 0;
    let mouseY = 0;
    let targetX = 0;
    let targetY = 0;

    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      mouseX = (e.clientX / innerWidth) * 2 - 1;
      mouseY = -(e.clientY / innerHeight) * 2 + 1;
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });

    const handleResize = () => {
      if (!container) return;
      const newWidth = container.clientWidth || window.innerWidth;
      const newHeight = container.clientHeight || window.innerHeight;
      camera.aspect = newWidth / newHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(newWidth, newHeight);
    };

    window.addEventListener('resize', handleResize);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);

      const elapsedTime = clock.getElapsedTime();

      if (!prefersReducedMotion) {
        // Smooth target lerp
        targetX += (mouseX - targetX) * 0.05;
        targetY += (mouseY - targetY) * 0.05;

        // Continuous subtle 3D rotation
        coreLine.rotation.x = elapsedTime * 0.15;
        coreLine.rotation.y = elapsedTime * 0.2;

        innerMesh.rotation.x = -elapsedTime * 0.25;
        innerMesh.rotation.y = -elapsedTime * 0.18;

        torus.rotation.z = elapsedTime * 0.1;
        torus2.rotation.z = -elapsedTime * 0.12;

        particles.rotation.y = elapsedTime * 0.04;
        particles.rotation.x = elapsedTime * 0.02;

        // Interactive perspective tilt based on mouse
        group.rotation.y = targetX * 0.6;
        group.rotation.x = -targetY * 0.6;
        group.position.x = targetX * 0.3;
        group.position.y = targetY * 0.3;

        // Gentle breathing pulse
        const pulse = 1 + Math.sin(elapsedTime * 1.5) * 0.03;
        coreLine.scale.set(pulse, pulse, pulse);
      }

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', handleResize);

      // Clean disposal
      coreGeometry.dispose();
      coreWireframe.dispose();
      coreMaterial.dispose();
      innerGeometry.dispose();
      innerMaterial.dispose();
      torusGeometry.dispose();
      torusMaterial.dispose();
      torus2Geometry.dispose();
      torus2Material.dispose();
      particleGeometry.dispose();
      particleMaterial.dispose();
      renderer.dispose();

      if (container && renderer.domElement) {
        container.removeChild(renderer.domElement);
      }
    };
  }, []);

  return (
    <div
      ref={mountRef}
      className="absolute inset-0 pointer-events-none z-0 overflow-hidden flex items-center justify-center opacity-70"
      style={{
        maskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
        WebkitMaskImage: 'radial-gradient(circle at center, black 40%, transparent 80%)',
      }}
    />
  );
};

