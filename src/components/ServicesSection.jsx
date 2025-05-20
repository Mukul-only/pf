// src/components/ServicesSection.jsx
import AnimatedElement from "./AnimatedElement";
import LightningIcon from "../assets/svgs/LightningIcon";
import LayoutIcon from "../assets/svgs/LayoutIcon"; // Reused
import InternetIcon from "../assets/svgs/InternetIcon";
import RollBrushIcon from "../assets/svgs/RollBrushIcon";
import DesignSystemIcon from "../assets/svgs/DesignSystemIcon";

const services = [
  {
    id: 1,
    icon: <LayoutIcon className="w-8 h-8 fill-white" />,
    title: "Product Design",
    description:
      "I design intuitive, engaging interfaces with a strategic UX approach, transforming your product from initial screens to a complete user journey.",
  },
  {
    id: 2,
    icon: <InternetIcon className="w-8 h-8 fill-white" />,
    title: "UI Audit",
    description:
      "I conduct UI audits to evaluate usability and effectiveness using heuristic evaluation, UX laws, and design patterns.",
  },
  {
    id: 3,
    icon: <RollBrushIcon className="w-8 h-8 fill-white stroke-white" />,
    title: "Email Design & Strategy",
    description:
      "I specialise in email design for DTC brands, focusing on conversions and elevating your branding through custom designs and UX principles to boost conversion rates.",
  },
  {
    id: 4,
    icon: <DesignSystemIcon className="w-8 h-8 fill-white" />,
    title: "Design System",
    description:
      "I create scalable design systems for your digital products, ensuring consistency across all platforms and user touch points.",
  },
];

const ServiceCard = ({ service, index }) => (
  <AnimatedElement
    className="rounded-lg bg-[#0A0A0B] border border-[#141415] p-6 md:p-8"
    animationProps={{
      initial: { opacity: 0, y: 50 },
      whileInView: { opacity: 1, y: 0 },
      transition: { duration: 0.5, delay: index * 0.15 },
    }}
  >
    <div className="flex items-center gap-4">
      <div className="p-2 rounded-lg bg-[#141415] border border-[#202021]">
        {service.icon}
      </div>
      <h1 className="text-xl md:text-2xl font-bold text-white">
        {service.title}
      </h1>
    </div>
    <p className="mt-6 text-[#999999] font-semibold tracking-wide text-sm md:text-base">
      {service.description}
    </p>
  </AnimatedElement>
);

export default function ServicesSection() {
  return (
    <div className="mt-20 mx-auto md:mx-[2rem] lg:mx-[10rem] xl:mx-[21rem]">
      <AnimatedElement
        animationProps={{
          initial: { opacity: 0, x: -200 },
          whileInView: { opacity: 1, x: 0 },
          transition: { staggerChildren: 0.2, duration: 0.5 },
        }}
      >
        <div className="flex items-center gap-2">
          <LightningIcon />
          <h1 className="text-3xl md:text-4xl font-bold tracking-wider text-white">
            My Services
          </h1>
        </div>
        <p className="pl-12 mt-4 text-lg tracking-wider text-stone-400">
          Formulating comprehensive strategies to meet your design goals and
          exceed expectations.
        </p>
      </AnimatedElement>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 mt-10 text-white">
        {services.map((service, index) => (
          <ServiceCard key={service.id} service={service} index={index} />
        ))}
      </div>
    </div>
  );
}
