"use client";

import { Suspense, useEffect, useMemo, useRef } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Stars, Float } from "@react-three/drei";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { generateNeuralNodes, NeuralNodeData } from "@/lib/utils";
import { useSystemStore } from "@/store/systemStore";

const COLORS = ["#22D3EE","#38BDF8","#8B5CF6"];

function NeuralNodes(){
    const quality = useSystemStore(s=>s.particleQuality);
    const group = useRef<THREE.Group>(null);

    const nodes = useMemo(()=>{
        const count = quality==="high"?180:quality==="medium"?120:80;
        return generateNeuralNodes(count);
    },[quality]);

    useFrame(({clock})=>{
        if(group.current){
            group.current.rotation.y = clock.elapsedTime*0.05;
        }
    });

    return (
        <group ref={group}>
            {nodes.map((n:NeuralNodeData,i)=>(
                <Float key={n.id} speed={1.5} floatIntensity={0.4}>
                    <mesh position={[n.x,n.y,n.z]}>
                        <sphereGeometry args={[n.size,10,10]} />
                        <meshStandardMaterial
                            color={COLORS[i%COLORS.length]}
                            emissive={COLORS[i%COLORS.length]}
                            emissiveIntensity={1.6}
                        />
                    </mesh>
                </Float>
            ))}
        </group>
    );
}

function CameraRig(){
    const mouse = useSystemStore(s=>s.mouse);

    useFrame(({camera})=>{
        camera.position.x += (mouse.x*0.8-camera.position.x)*0.05;
        camera.position.y += (mouse.y*0.45-camera.position.y)*0.05;
        camera.lookAt(0,0,0);
    });

    return null;
}

function Lighting(){
    return (
        <>
            <ambientLight intensity={0.45}/>
            <pointLight position={[0,0,0]} intensity={3.5} color="#22D3EE"/>
            <pointLight position={[4,3,4]} intensity={1.5} color="#8B5CF6"/>
        </>
    );
}

function ReducedMotion(){
    const {gl}=useThree();
    useEffect(()=>{
        if(window.matchMedia("(prefers-reduced-motion: reduce)").matches){
            gl.setPixelRatio(1);
        }
    },[gl]);
    return null;
}

export default function HeroScene(){
    const updateMouse = useSystemStore(s=>s.updateMouse);

    return (
        <div
            className="absolute inset-0 -z-10"
            onMouseMove={(e)=>{
                updateMouse(
                    (e.clientX/window.innerWidth)*2-1,
                    -(e.clientY/window.innerHeight)*2+1
                );
            }}
        >
            <Canvas camera={{position:[0,0,7],fov:55}} dpr={[1,2]}>
                <Suspense fallback={null}>
                    <ReducedMotion/>
                    <Lighting/>

                    <Stars radius={80} depth={40} count={2500} factor={4} fade speed={0.8}/>

                    <NeuralNodes/>
                    <CameraRig/>

                    <EffectComposer>
                        <Bloom intensity={1.15} luminanceThreshold={0.2}/>
                    </EffectComposer>
                </Suspense>
            </Canvas>

            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(34,211,238,0.08),transparent_65%)]"/>
        </div>
    );
}
