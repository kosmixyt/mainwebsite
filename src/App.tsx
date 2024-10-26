import React, { useState } from "react";
import { motion } from "framer-motion";

function App() {
  return (
    <div className="flex min-h-screen w-full items-center justify-center bg-slate-800">
      <div className="text-center text-white">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="text-4xl font-bold "
        >
          KOSMIX.FR
        </motion.div>
        <motion.div
          initial={{ paddingTop: 0 }}
          animate={{ paddingTop: 20 }}
          className="text-xl font-semibold"
        >
          My Projects
        </motion.div>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, ease: "easeIn" }}
        >
          <div className="font-semibold">
            <a href="https://xxxxvideos.kosmix.fr">1. Streaming Website</a>
            <div>2. Linux Management Dashboard</div>
            <div>And Many other not finished </div>
          </div>
          <div>
            <div className="text-3xl font-bold">Contact</div>
            <div>Je te dis que j'ai un discord : "KOSMIX.FR"</div>
          </div>
          <div>
            <div className="text-2xl font-semibold">Mes Stacks:</div>
            <div>
              Nodejs, gorm, ffmpeg stack, prisma, react, typescript, go, rust,
              <br />
              python, docker, gin-gonic, express, nextjs, framer-motion, golang,
              <br />
              tailwindcss, linux, nginx, apache2, hp ilo, proxmoxve, <br />
              html/css/js natif websocket, socket.io, letsencrypt, <br />
              <a
                className="underline"
                href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&pp=ygUIcmlja3JvbGw%3D"
              >
                and more
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

function theo() {
  window.addEventListener("keydown", (e) => {
    if (e.key === "t") {
      e.preventDefault();
      alert("Theo is the best");
    }
  });
}

theo();

export default App;
