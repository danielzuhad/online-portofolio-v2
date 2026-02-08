export type Experience = {
  id: string;
  company: string;
  location: string;
  role: string;
  employmentType: "Full-time" | "Internship";
  period: {
    start: string; // YYYY-MM
    end: string; // YYYY-MM
    display: string;
  };
  highlights: string[];
  stack?: string[];
};

export const EXP: ReadonlyArray<Experience> = [
  {
    id: "solusi-infotech-semesta-indonesia",
    company: "Solusi Infotech Semesta Indonesia",
    location: "Bandung",
    role: "Frontend Developer",
    employmentType: "Full-time",
    period: {
      start: "2024-10",
      end: "2026-01",
      display: "October 2024 - January 2026",
    },
    highlights: [
      "Contributed to SIM DPP BAZNAS, an internal system for recording zakat distribution and mustahik data.",
      "Assisted in developing business-oriented web applications for Universitas Malang to support operational and administrative needs.",
      "Contributed to SatuWakaf, a digital platform to facilitate and manage charitable endowment (wakaf) activities.",
      "Contributed to Travelguu, a halal travel booking platform for managing umrah, hajj, and religious trip reservations.",
      "Conducted product demos and collaborated directly with clients to gather feedback and refine user experience.",
    ],
  },
  {
    id: "data-integrasi-inovasi",
    company: "Data Integrasi Inovasi",
    location: "Jakarta",
    role: "Frontend Developer",
    employmentType: "Full-time",
    period: {
      start: "2024-01",
      end: "2024-04",
      display: "January 2024 - April 2024",
    },
    highlights: [
      "Developed a fully functional HRIS to manage and track employee performance reviews, improving policy compliance and on-time completion.",
      "Collaborated closely with the team to convert UI/UX designs into responsive, pixel-perfect implementations and resolved bugs across applications.",
      "Used modern frontend tools to improve scalability and maintainability, including Next.js, React Query, React Hook Form, and TypeScript.",
    ],
    stack: ["Next.js", "React Query", "React Hook Form", "TypeScript"],
  },
  {
    id: "fly-tech-indonesia",
    company: "Fly Tech Indonesia",
    location: "Malang",
    role: "Frontend Developer",
    employmentType: "Internship",
    period: {
      start: "2023-11",
      end: "2023-12",
      display: "November 2023 - December 2023",
    },
    highlights: [
      "Built interactive and visually appealing websites with Next.js, focused on responsive design and strong user experience.",
      "Developed scalable interfaces using Next.js with Tailwind CSS and DaisyUI for consistent and customizable UI components.",
    ],
    stack: ["Next.js", "Tailwind CSS", "DaisyUI"],
  },
];
