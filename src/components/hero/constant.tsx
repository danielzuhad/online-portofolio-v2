import { GitHubLogoIcon, InstagramLogoIcon } from "@radix-ui/react-icons";
import { FileText, Linkedin, Mail } from "lucide-react";

const iconSize = 18;

export const SOCIAL_LINKS = [
  {
    label: "CV",
    href: "/files/CV ATS.pdf",
    icon: <FileText size={iconSize} />,
  },
  {
    label: "Linkedln",
    href: "https://www.linkedin.com/in/muhammad-daniel-zuhad-45935b25b/",
    icon: <Linkedin size={iconSize} />,
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/daniel_zuhad/",
    icon: <InstagramLogoIcon fontSize={iconSize} />,
  },
  {
    label: "Github",
    href: "https://github.com/danielzuhad",
    icon: <GitHubLogoIcon fontSize={iconSize} />,
  },
  {
    label: "Email",
    href: "mailto:danielzuhad@gmail.com",
    icon: <Mail size={iconSize} />,
  },
];
