"use client";

import React, { useRef, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Float, MeshWobbleMaterial, Sparkles, PerspectiveCamera } from "@react-three/drei";
import * as THREE from "three";

export const Candle = ({ position }: { position: [number, number, number] }) => {
    const lightRef = useRef<THREE.PointLight>(null);

    useFrame((state) => {
        if (lightRef.current) {
            // Flickering logic
            const time = state.clock.getElapsedTime();
            lightRef.current.intensity = 15 + Math.sin(time * 10) * 5 + Math.random() * 2;
        }
    });

    return (
        <group position={position}>
            {/* Casing */}
            <mesh position={[0, 0.4, 0]}>
                <cylinderGeometry args={[0.05, 0.05, 0.8, 8]} />
                <meshStandardMaterial color="#fcfcfc" roughness={0.5} />
            </mesh>
            {/* Flame */}
            <pointLight
                ref={lightRef}
                color="#ffaa44"
                distance={10}
                decay={2}
                castShadow
            />
            <mesh position={[0, 0.85, 0]}>
                <sphereGeometry args={[0.08, 16, 16]} />
                <MeshWobbleMaterial factor={0.5} speed={2} color="#ffbb00" emissive="#ffbb00" emissiveIntensity={2} />
            </mesh>
        </group>
    );
};

export const Pillar = ({ position }: { position: [number, number, number] }) => (
    <group position={position}>
        <mesh position={[0, 4, 0]}>
            <cylinderGeometry args={[0.8, 1, 12, 16]} />
            <meshStandardMaterial color="#222" roughness={0.8} />
        </mesh>
        <mesh position={[0, -1.8, 0]}>
            <boxGeometry args={[2.5, 0.4, 2.5]} />
            <meshStandardMaterial color="#1a1a1b" />
        </mesh>
        <mesh position={[0, 9.8, 0]}>
            <boxGeometry args={[2.8, 0.6, 2.8]} />
            <meshStandardMaterial color="#1a1a1b" />
        </mesh>
    </group>
);

export const AtelierScene = ({ type }: { type: 'window' | 'book' }) => {
    return (
        <>
            <ambientLight intensity={0.02} />
            <pointLight position={[10, 10, 10]} intensity={40} color="#d4af37" />

            {/* MARBLE FLOOR */}
            <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, -2, 0]} receiveShadow>
                <planeGeometry args={[100, 100]} />
                <meshStandardMaterial color="#050505" roughness={0.1} metalness={0.2} />
            </mesh>

            {/* ANCIENT PILLARS */}
            <Pillar position={[-8, 0, -10]} />
            <Pillar position={[8, 0, -10]} />
            <Pillar position={[-8, 0, 0]} />
            <Pillar position={[8, 0, 0]} />

            {/* GOD RAY / WINDOW */}
            <group position={[0, 6, -15]}>
                <mesh>
                    <ringGeometry args={[4, 4.5, 32, 1, 0, Math.PI]} />
                    <meshStandardMaterial color="#d4af37" emissive="#d4af37" emissiveIntensity={2} />
                </mesh>
                <rectAreaLight
                    position={[0, 0, 2]}
                    args={["#d4af37", 10, 10, 20]}
                    intensity={type === 'window' ? 50 : 5}
                />
                <Sparkles count={100} scale={20} size={2} speed={0.2} color="#d4af37" opacity={0.5} />
            </group>

            {/* THE SACRED TEXT */}
            <group position={[0, -0.8, -4.5]} rotation={[-0.2, 0, 0]}>
                <mesh position={[0, -0.1, 0]}>
                    <boxGeometry args={[3, 0.2, 2]} />
                    <meshStandardMaterial color="#111" metalness={0.8} roughness={0.2} />
                </mesh>
                <Float speed={2} rotationIntensity={0.5} floatIntensity={0.5}>
                    <mesh position={[0, 0.2, 0]}>
                        <boxGeometry args={[2.5, 0.05, 1.8]} />
                        <meshStandardMaterial color="#f2f0e4" emissive="#f2f0e4" emissiveIntensity={0.1} />
                    </mesh>
                </Float>
            </group>

            {/* ETHER-CANDLES */}
            <Candle position={[-3, -0.8, -3]} />
            <Candle position={[3, -0.8, -3]} />

            {/* CAMERA VIEWS */}
            {type === 'window' ? (
                <PerspectiveCamera makeDefault position={[0, 2, 10]} fov={35} />
            ) : (
                <PerspectiveCamera makeDefault position={[0, 1.5, 0]} fov={45} />
            )}
        </>
    );
};
