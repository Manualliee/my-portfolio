import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html } from "@react-three/drei";
import { FaHtml5, FaReact } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { SiNextdotjs } from "react-icons/si";
import { TbBrandFramerMotion } from "react-icons/tb";
import { FaGithub } from "react-icons/fa";
import { FaGitAlt } from "react-icons/fa";

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
  const radius = 2.2; // Sphere radius
  const positions = getSpherePositions(icons.length, radius);

  return (
    <div style={{ width: 400, height: 400 }}>
      <Canvas camera={{ position: [0, 0, 7], fov: 50 }}>
        {/* Allow user to rotate the sphere */}
        <OrbitControls enablePan={false} enableZoom={false} />
        {/* Add a little ambient light */}
        <ambientLight intensity={0.8} />
        {/* Place each icon on the sphere */}
        {icons.map((item, i) => (
          <Html
            key={i}
            position={positions[i]}
            center
            style={{ pointerEvents: "auto", userSelect: "none" }}
          >
            {item.icon}
          </Html>
        ))}
      </Canvas>
    </div>
  );
}
