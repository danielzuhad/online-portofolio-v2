import { BiLogoTypescript } from "react-icons/bi";
import { FaJs, FaReact } from "react-icons/fa";
import { RiSupabaseFill, RiTailwindCssFill } from "react-icons/ri";
import { SiNextdotjs, SiPrisma, SiTrpc } from "react-icons/si";

const iconSize = 42;

export const STACKS = [
  {
    label: "Javascript",
    icon: <FaJs size={iconSize} />,
  },
  {
    label: "TypeScript",
    icon: <BiLogoTypescript size={iconSize} />,
  },
  {
    label: "Tailwind",
    icon: <RiTailwindCssFill size={iconSize} />,
  },
  {
    label: "React",
    icon: <FaReact size={iconSize} />,
  },
  {
    label: "Next",
    icon: <SiNextdotjs size={iconSize} />,
  },
  {
    label: "Prisma",
    icon: <SiPrisma size={iconSize} />,
  },
  {
    label: "Supabase",
    icon: <RiSupabaseFill size={iconSize} />,
  },
  {
    label: "TRPC",
    icon: <SiTrpc size={iconSize} />,
  },
];
