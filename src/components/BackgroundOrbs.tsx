'use client';
import { motion } from 'framer-motion';

export default function BackgroundOrbs() {
    return (
        <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10 bg-[#050511]">
            <motion.div
                animate={{
                    scale: [1, 1.2, 1],
                    x: [0, 100, 0],
                    y: [0, -50, 0],
                    opacity: [0.3, 0.6, 0.3]
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] rounded-full bg-cyan-500/20 blur-[100px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.1, 1],
                    x: [0, -100, 0],
                    y: [0, 50, 0],
                    opacity: [0.3, 0.5, 0.3]
                }}
                transition={{
                    duration: 18,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute bottom-[-10%] right-[-10%] w-[700px] h-[700px] rounded-full bg-purple-600/20 blur-[120px]"
            />
            <motion.div
                animate={{
                    scale: [1, 1.3, 1],
                    x: [0, 50, 0],
                    y: [0, 100, 0],
                    opacity: [0.2, 0.4, 0.2]
                }}
                transition={{
                    duration: 20,
                    repeat: Infinity,
                    ease: "linear"
                }}
                className="absolute top-[40%] left-[40%] w-[500px] h-[500px] rounded-full bg-blue-600/15 blur-[90px]"
            />
        </div>
    );
}
