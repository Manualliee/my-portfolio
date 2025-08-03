import { useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";
import { GrGraphQl } from "react-icons/gr";
import { PiFigmaLogoFill } from "react-icons/pi";
import { TbBrandThreejs } from "react-icons/tb";

// List of icons and their colors
const icons = [
  { icon: <FaHtml5 color="#e34c26" size={45} />, label: "HTML5" },
  { icon: <IoLogoCss3 color="#1572b6" size={45} />, label: "CSS3" },
  { icon: <IoLogoJavascript color="#f7df1e" size={45} />, label: "JavaScript" },
  { icon: <FaReact color="#61dafb" size={45} />, label: "React" },
  { icon: <SiNextdotjs color="#fff" size={45} />, label: "Next.js" },
  {
    icon: <TbBrandFramerMotion color="#0081fb" size={45} />,
    label: "Framer Motion",
  },
  { icon: <FaGithub color="#fff" size={45} />, label: "GitHub" },
  { icon: <FaGitAlt color="#f05032" size={45} />, label: "Git" },
  { icon: <GrGraphQl color="#e10098" size={45} />, label: "GraphQL" },
  { icon: <PiFigmaLogoFill color="#f24e1e" size={45} />, label: "Figma" },
  { icon: <TbBrandThreejs color="#ffffff" size={45} />, label: "Three.js" },
];

// Distribute icons evenly on the sphere using spherical coordinates
function getSpherePositions(count, radius) {
  const positions = [];
  const increment = Math.PI * (3 - Math.sqrt(5)); // golden angle in radians
  for (let i = 0; i < count; i++) {
    const y = 1 - (i / (count - 1)) * 2; // y goes from 1 to -1
    const radiusAtY = Math.sqrt(1 - y * y); // radius at y
    const theta = increment * i;
    const x = Math.cos(theta) * radiusAtY;
    const z = Math.sin(theta) * radiusAtY;
    positions.push([x * radius, y * radius, z * radius]);
  }
  return positions;
}

export default function SkillsCloud() {
  const radius = 2.2;
  const positions = getSpherePositions(icons.length, radius);
  const [hovered, setHovered] = useState(null);

  return (
    <div style={{ width: 400, height: 400, position: "relative" }}>
      {/* Animated Glow/Aura */}
      <div
        className="skills-glow"
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: 320,
          height: 320,
          transform: "translate(-50%, -50%)",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, #F3EFF5 0%, #058c42 60%, transparent 100%)", // white to green
          filter: "blur(72px)",
          opacity: 0.7,
          zIndex: 0,
          pointerEvents: "none",
          animation: "skillsGlowPulse 3s ease-in-out infinite",
        }}
      />
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        <OrbitControls enablePan={false} enableZoom={false} />
        {positions.map((pos, i) => (
          <Html
            key={i}
            position={pos}
            center
            style={{ pointerEvents: "auto", userSelect: "none", zIndex: 2 }}
          >
            <div
              onMouseEnter={() => setHovered(i)}
              onMouseLeave={() => setHovered(null)}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                cursor: "pointer",
              }}
            >
              {icons[i].icon}
              <span
                className="skill-label"
                style={{
                  marginTop: 8,
                  padding: "2px 8px",
                  borderRadius: 6,
                  background: "rgba(30,30,30,0.85)",
                  color: "#fff",
                  fontSize: 14,
                  fontWeight: 500,
                  whiteSpace: "nowrap",
                  boxShadow: "0 2px 8px rgba(0,0,0,0.15)",
                  display: hovered === i ? "block" : "none",
                  transition: "opacity 0.2s",
                }}
              >
                {icons[i].label}
              </span>
            </div>
          </Html>
        ))}
      </Canvas>
    </div>
  );
}
