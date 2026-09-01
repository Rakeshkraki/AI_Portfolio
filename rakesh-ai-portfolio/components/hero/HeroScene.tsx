"use client";



import { ShaderMaterial, AdditiveBlending } from "three";
import { useEffect } from "react";
import { useLenis } from "@/hooks/useLenis";
import { EffectComposer, Bloom, Noise } from "@react-three/postprocessing";
import { Suspense, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import {
    OrbitControls,
    Float,
    Stars,
    Line,
} from "@react-three/drei";
import * as THREE from "three";

import { generateNeuralNodes } from "@/lib/utils";
import { useSystemStore } from "@/store/systemStore";

const PARTICLE_COUNT = 220;

interface NodeProps {
    position: [number, number, number];
    color: string;
    size: number;
}

function NeuralNode({ position, color, size }: NodeProps) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!meshRef.current) return;

        meshRef.current.scale.setScalar(
            1 + Math.sin(clock.elapsedTime * 2 + position[0]) * 0.08
        );
    });

    return (
        <mesh ref={meshRef} position={position}>
            <sphereGeometry args={[size, 16, 16]} />
            <meshStandardMaterial
                color={color}
                emissive={color}
                emissiveIntensity={1.5}
            />
        </mesh>
    );
}

function Connections({
                         positions,
                     }: {
    positions: [number, number, number][];
}) {
    const lines = useMemo(() => {
        const connections: {
            start: [number, number, number];
            end: [number, number, number];
        }[] = [];

        positions.forEach((a, i) => {
            positions.forEach((b, j) => {
                if (i >= j) return;

                const distance = new THREE.Vector3(...a).distanceTo(
                    new THREE.Vector3(...b)
                );

                if (distance < 2.4) {
                    connections.push({ start: a, end: b });
                }
            });
        });

        return connections;
    }, [positions]);

    return (
        <>
            {lines.map((line, index) => (
                <Line
                    key={index}
                    points={[line.start, line.end]}
                    color="#22D3EE"
                    lineWidth={0.3}
                    transparent
                    opacity={0.18}
                />
            ))}
        </>
    );
}
// ============================================================
// Energy particles flowing through the neural network
// ============================================================

// ============================================================
// GPU Instanced Energy Particles
// ============================================================

function EnergyParticles() {
    const meshRef = useRef<THREE.InstancedMesh>(null);
    const quality = useSystemStore((s) => s.particleQuality);

    const particleCount =
        quality === "high"
            ? 1500
            : quality === "medium"
                ? 900
                : 450;

    const particles = useMemo(() => {
        return Array.from({ length: particleCount }, () => ({
            x: (Math.random() - 0.5) * 16,
            y: (Math.random() - 0.5) * 12,
            z: (Math.random() - 0.5) * 16,
            speed: Math.random() * 0.025 + 0.004,
        }));
    }, [particleCount]);

    useFrame(() => {
        if (!meshRef.current) return;

        const dummy = new THREE.Object3D();

        particles.forEach((p, i) => {
            p.y += p.speed;

            if (p.y > 6) p.y = -6;

            dummy.position.set(p.x, p.y, p.z);

            const scale =
                0.04 + Math.sin((p.y + i) * 2) * 0.015;

            dummy.scale.setScalar(scale);

            dummy.updateMatrix();
            meshRef.current!.setMatrixAt(i, dummy.matrix);
        });

        meshRef.current.instanceMatrix.needsUpdate = true;
    });

    return (
        <instancedMesh
            ref={meshRef}
            args={[undefined, undefined, particleCount]}
        >
            <sphereGeometry args={[1, 6, 6]} />
            <meshBasicMaterial
                color="#22D3EE"
                transparent
                opacity={0.85}
            />
        </instancedMesh>
    );
}

// ============================================================
// Rotating Neural Rings
// ============================================================

function NeuralRings() {
    const ring1 = useRef<THREE.Mesh>(null);
    const ring2 = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (ring1.current) {
            ring1.current.rotation.z = clock.elapsedTime * 0.12;
        }

        if (ring2.current) {
            ring2.current.rotation.z = -clock.elapsedTime * 0.08;
            ring2.current.rotation.x = clock.elapsedTime * 0.05;
        }
    });

    return (
        <>
            <mesh ref={ring1}>
                <torusGeometry args={[4.5, 0.01, 16, 200]} />
                <meshBasicMaterial
                    color="#22D3EE"
                    transparent
                    opacity={0.15}
                />
            </mesh>

            <mesh ref={ring2}>
                <torusGeometry args={[5.5, 0.015, 16, 220]} />
                <meshBasicMaterial
                    color="#8B5CF6"
                    transparent
                    opacity={0.12}
                />
            </mesh>
        </>
    );
}


// ============================================================
// Traveling Pulses Across Connections
// ============================================================

function NeuralPulse() {
    const pulseRef = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!pulseRef.current) return;

        const t = clock.elapsedTime;

        pulseRef.current.position.x =
            Math.sin(t * 0.8) * 3.8;

        pulseRef.current.position.y =
            Math.cos(t * 1.2) * 2.8;

        pulseRef.current.position.z =
            Math.sin(t * 0.5) * 2.5;

        pulseRef.current.scale.setScalar(
            1 + Math.sin(t * 5) * 0.3
        );
    });

    return (
        <mesh ref={pulseRef}>
            <sphereGeometry args={[0.12, 16, 16]} />

            <meshStandardMaterial
                color="#7DD3FC"
                emissive="#22D3EE"
                emissiveIntensity={4}
            />
        </mesh>
    );
}

// ============================================================
// Orbiting AI Satellites
// ============================================================

function OrbitingSatellites() {
    const satellites = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (!satellites.current) return;

        satellites.current.rotation.y =
            clock.elapsedTime * 0.25;

        satellites.current.rotation.x =
            Math.sin(clock.elapsedTime * 0.2) * 0.3;
    });

    return (
        <group ref={satellites}>
            {[0, 90, 180, 270].map((deg, index) => {
                const angle = THREE.MathUtils.degToRad(deg);

                return (
                    <mesh
                        key={index}
                        position={[
                            Math.cos(angle) * 4.2,
                            Math.sin(angle) * 2,
                            Math.sin(angle) * 4.2,
                        ]}
                    >
                        <icosahedronGeometry args={[0.12, 0]} />

                        <meshStandardMaterial
                            color="#8B5CF6"
                            emissive="#8B5CF6"
                            emissiveIntensity={2}
                        />
                    </mesh>
                );
            })}
        </group>
    );
}

{"// ============================================================"}
// Background GPU Galaxy Particles
// ============================================================

function BackgroundGalaxy() {
    const points = useRef<THREE.Points>(null)

    const particleCount = 10000

    const geometry = useMemo(() => {
        const positions = new Float32Array(particleCount * 3)

        for (let i = 0; i < particleCount; i++) {
            positions[i * 3 + 0] = (Math.random() - 0.5) * 80
            positions[i * 3 + 1] = (Math.random() - 0.5) * 80
            positions[i * 3 + 2] = (Math.random() - 0.5) * 80
        }

        const geo = new THREE.BufferGeometry()
        geo.setAttribute(
            "position",
            new THREE.BufferAttribute(positions, 3)
        )

        return geo
    }, [])

    const material = useMemo(() => {
        return new THREE.PointsMaterial({
            color: "#22D3EE",
            size: 0.035,
            transparent: true,
            opacity: 0.45,
            depthWrite: false,
            blending: AdditiveBlending,
        })
    }, [])

    useFrame(({ clock }) => {
        if (!points.current) return

        points.current.rotation.y = clock.elapsedTime * 0.01
        points.current.rotation.x =
            Math.sin(clock.elapsedTime * 0.04) * 0.1
    })

    return <points ref={points} geometry={geometry} material={material} />
}

{"// ============================================================"}
// Electric Data Streams
// ============================================================

function ElectricStreams() {
    const streams = useMemo(() => {
        return Array.from({ length: 40 }, () => ({
            start: new THREE.Vector3(
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 12
            ),
            end: new THREE.Vector3(
                (Math.random() - 0.5) * 12,
                (Math.random() - 0.5) * 10,
                (Math.random() - 0.5) * 12
            ),
            speed: Math.random() * 2 + 1,
        }))
    }, [])

    return (
        <>
            {streams.map((stream, index) => (
                <AnimatedBeam key={index} stream={stream} />
            ))}
        </>
    )
}

{"// ============================================================"}
// Mouse Ripple Field
// ============================================================

function MouseRipple() {
    const ripple = useRef<THREE.Mesh>(null)

    const mouse = useSystemStore((s) => s.mouse)

    useFrame(() => {
        if (!ripple.current) return

        ripple.current.position.x = mouse.x * 3
        ripple.current.position.y = mouse.y * 2

        ripple.current.scale.x +=
            (1 + Math.abs(mouse.x) * 2 - ripple.current.scale.x) * 0.08

        ripple.current.scale.y +=
            (1 + Math.abs(mouse.y) * 2 - ripple.current.scale.y) * 0.08
    })

    return (
        <mesh ref={ripple} position={[0, 0, -1]}>
            <ringGeometry args={[0.3, 0.34, 64]} />

            <meshBasicMaterial
                color="#22D3EE"
                transparent
                opacity={0.25}
            />
        </mesh>
    )
}
{"// ============================================================"}
// AI Core
// ============================================================

function AICore() {
    const ref = useRef<THREE.Mesh>(null)

    useFrame(({ clock }) => {
        if (!ref.current) return

        ref.current.rotation.y = clock.elapsedTime * 0.35

        const pulse = 1 + Math.sin(clock.elapsedTime * 2.5) * 0.08

        ref.current.scale.setScalar(pulse)
    })

    return (
        <mesh ref={ref}>
            <icosahedronGeometry args={[0.45, 2]} />

            <meshStandardMaterial
                color="#22D3EE"
                emissive="#22D3EE"
                emissiveIntensity={3}
                metalness={0.2}
                roughness={0.1}
            />
        </mesh>
    )
}


function AnimatedBeam({ stream }: any) {
    const beam = useRef<THREE.Mesh>(null)

    useFrame(({ clock }) => {
        if (!beam.current) return

        const t = clock.elapsedTime * stream.speed

        beam.current.position.lerpVectors(
            stream.start,
            stream.end,
            (Math.sin(t) + 1) / 2
        )

        beam.current.scale.setScalar(
            0.5 + Math.sin(t * 5) * 0.25
        )
    })

    return (
        <mesh ref={beam}>
            <sphereGeometry args={[0.035, 8, 8]} />

            <meshBasicMaterial
                color="#8B5CF6"
                transparent
                opacity={0.9}
            />
        </mesh>
    )
}
// ============================================================
// Floating Data Streams
// ============================================================

function DataStreams() {
    const streams = useMemo(() => {
        return Array.from({ length: 18 }, (_, i) => ({
            x: (Math.random() - 0.5) * 10,
            delay: i * 0.25,
        }));
    }, []);

    return (
        <>
            {streams.map((stream, index) => (
                <FloatingBeam
                    key={index}
                    x={stream.x}
                    delay={stream.delay}
                />
            ))}
        </>
    );
}

function FloatingBeam({
                          x,
                          delay,
                      }: {
    x: number;
    delay: number;
}) {
    const ref = useRef<THREE.Mesh>(null);

    useFrame(({ clock }) => {
        if (!ref.current) return;

        const t = clock.elapsedTime + delay;

        ref.current.position.y = ((t * 0.7) % 12) - 6;
        // ref.current.material.opacity =
         //   0.2 + Math.sin(t * 3) * 0.1;
    });

    return (
        <mesh ref={ref} position={[x, -6, -2]}>
            <planeGeometry args={[0.03, 1.5]} />
            <meshBasicMaterial
                color="#22D3EE"
                transparent
                opacity={0.3}
            />
        </mesh>
    );
}

function NeuralNetwork() {
    const quality = useSystemStore((s) => s.particleQuality);
    const mouse = useSystemStore((s) => s.mouse);

    const groupRef = useRef<THREE.Group>(null);

    const nodes = useMemo(() => {
        const multiplier =
            quality === "high"
                ? PARTICLE_COUNT
                : quality === "medium"
                    ? 160
                    : 120;

        return generateNeuralNodes(multiplier);
    }, [quality]);

    const positions = useMemo(
        () =>
            nodes.map((n) => [n.x, n.y, n.z] as [number, number, number]),
        [nodes]
    );

    useFrame(({ clock }) => {
        if (!groupRef.current) return;

        groupRef.current.rotation.y =
            clock.elapsedTime * 0.04;

        groupRef.current.rotation.x =
            mouse.y * 0.05;

        groupRef.current.rotation.z =
            mouse.x * 0.04;
    });

    return (
        <group ref={groupRef}>
            <Connections positions={positions} />

            <EnergyParticles />

            <NeuralRings />

            <DataStreams />

            {nodes.map((node) => (
                <Float
                    key={node.id}
                    speed={1.5}
                    rotationIntensity={0.5}
                    floatIntensity={0.5}
                >
                    <NeuralNode
                        position={[node.x, node.y, node.z]}
                        color={node.color}
                        size={node.size}
                    />
                </Float>
            ))}
        </group>
    );
}
function SceneLighting() {
    return (
        <>
            <ambientLight intensity={0.5} />

            <pointLight
                position={[0, 0, 0]}
                intensity={5}
                color="#22D3EE"
            />

            <pointLight
                position={[5, 3, 5]}
                intensity={2}
                color="#8B5CF6"
            />

            <pointLight
                position={[-5, -3, -5]}
                intensity={1.5}
                color="#2563EB"
            />
        </>
    );
}

// ============================================================
// Scroll Reactive Camera Rig
// ============================================================

function CameraRig() {
    const mouse = useSystemStore((s) => s.mouse);

    const { progress } = useLenis(false);

    useFrame(({ camera }) => {
        const scrollOffset = progress * 2;

        camera.position.x +=
            (mouse.x * 0.7 - camera.position.x) * 0.04;

        camera.position.y +=
            (mouse.y * 0.45 - camera.position.y) * 0.04;

        camera.position.z =
            8 - scrollOffset * 1.5;

        camera.lookAt(0, 0, 0);
    });

    return null;
}

// ============================================================
// Adaptive Performance Monitor
// ============================================================

function PerformanceWatcher() {
    const setQuality = useSystemStore(
        (s) => s.setParticleQuality
    );

    useEffect(() => {
        const cores =
            navigator.hardwareConcurrency ?? 4;

        const memory = (navigator as any).deviceMemory ?? 4;

        if (cores >= 8 && memory >= 8) {
            setQuality("high");
        } else if (cores >= 4) {
            setQuality("medium");
        } else {
            setQuality("low");
        }
    }, [setQuality]);

    return null;
}

{"// ============================================================"}
// Reduced Motion Support
// ============================================================

function ReducedMotionController() {
    const { gl } = useThree()

    useEffect(() => {
        const reduced = window.matchMedia(
            "(prefers-reduced-motion: reduce)"
        ).matches

        if (reduced) {
            gl.setPixelRatio(1)
        }
    }, [gl])

    return null
}

export default function HeroScene() {
    const updateMouse = useSystemStore((s) => s.updateMouse);

    return (
        <div
            className="absolute inset-0"
            onMouseMove={(e) => {
                const x =
                    (e.clientX / window.innerWidth) * 2 - 1;

                const y =
                    -(e.clientY / window.innerHeight) * 2 + 1;

                updateMouse(x, y);
            }}
        >
            <Canvas
                camera={{
                    position: [0, 0, 8],
                    fov: 55,
                }}
                dpr={[1, 2]}
            >
                <Suspense fallback={null}>
                    <PerformanceWatcher />
                    <ReducedMotionController />
                    <SceneLighting />

                    <Stars
                        radius={120}
                        depth={60}
                        count={3500}
                        factor={4}
                        fade
                        speed={1}
                    />

                    <EffectComposer>
                        <Bloom
                            intensity={1.35}
                            luminanceThreshold={0.15}
                            luminanceSmoothing={0.85}
                        />

                        <Noise opacity={0.02} />
                    </EffectComposer>

                    <BackgroundGalaxy />
                    <NeuralRings />
                    <NeuralNetwork />
                    <EnergyParticles />
                    <ElectricStreams />
                    <OrbitingSatellites />
                    <NeuralPulse />
                    <MouseRipple />
                    <AICore />

                    <CameraRig />
                    <SceneCleanup />

                    <OrbitControls
                        enableZoom={false}
                        enableRotate={false}
                        enablePan={false}
                    />
                </Suspense>

            </Canvas>
        </div>
    );
}
{"// ============================================================"}
// Dispose Materials & Geometry
// ============================================================

function SceneCleanup() {
    const { scene } = useThree()

    useEffect(() => {
        return () => {
            scene.traverse((child: any) => {
                if (child.geometry) child.geometry.dispose()

                if (child.material) {
                    if (Array.isArray(child.material)) {
                        child.material.forEach((m: any) => m.dispose())
                    } else {
                        child.material.dispose()
                    }
                }
            })
        }
    }, [scene])

    return null
}