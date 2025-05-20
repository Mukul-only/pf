// src/components/TestimonialsSection.jsx
import AnimatedElement from "./AnimatedElement";
import MessageStarIcon from "../assets/svgs/MessageStarIcon";

const testimonials = [
  {
    id: 1,
    imgSrc: "/Assets/WhatsApp Image 2024-06-22 at 14.36.37.jpeg",
    name: "Rishab Karwa, CEO, Founder",
    company: "RightChoice.Ai, GoMechanic",
    quote:
      "Shivam excels as a designer, surpassing his peers with his exceptional skills. Throughout our collaboration, he seamlessly integrated with our developers, project managers, and marketing team, ensuring a cohesive design process for our entire product. Working alongside him was a pleasure! Over our 10-month journey, Shivam began as our sole designer, and brainstorming sessions with him were consistently enriching. I highly recommend him for his invaluable contributions.",
  },
  {
    id: 2,
    imgSrc: "/Assets/WhatsApp Image 2024-06-22 at 14.46.58.jpeg",
    name: "Ankur Gupta , Founder",
    company: "KOSMC.in",
    quote:
      "Collaborating with Shivam was a fantastic experience! His swift design process ensured our web pages were polished to perfection, tirelessly refining them until they met our exacting standards. Shivam's impressive efficiency never came at the expense of quality or style. Working with him was truly rewarding!",
  },
  {
    id: 3,
    imgSrc: "/Assets/WhatsApp Image 2024-06-22 at 14.47.20.jpeg",
    name: "Priyadarshi, Founder",
    company: "Tirth.co",
    quote:
      "After discovering Shivam on Upwork, we collaborated on multiple projects before deciding to onboard him full-time for our new product. Shivam swiftly grasped our requirements and the core problem, devising a user journey that exceeded our initial expectations. His collaborative approach ensured timely delivery of all outputs. Working with Shivam has been a highly rewarding experience!",
  },
  {
    id: 4,
    imgSrc: "/Assets/WhatsApp Image 2024-06-22 at 14.47.56.jpeg",
    name: "Shorya, Founder, CEO",
    company: "Dacoid Digital",
    quote:
      "Having Shivam on board for nearly 5 months has been incredibly impressive. His expertise in UI audits and design critiques has significantly enhanced our work. Even when we pivoted our product completely, Shivam adeptly understood our business objectives and swiftly began designing our new solution. It's been a fantastic experience collaborating with him!",
  },
];

const TestimonialCard = ({ testimonial, index }) => (
  <AnimatedElement
    className="rounded-lg bg-[#0A0A0B] border border-[#141415] p-6 md:p-8"
    animationProps={{
      initial: { opacity: 0, scale: 0.8 },
      whileInView: { opacity: 1, scale: 1 },
      transition: { duration: 0.5, delay: index * 0.15 },
    }}
  >
    <div className="flex items-center space-x-4">
      <img
        src={testimonial.imgSrc}
        alt={testimonial.name}
        className="object-cover w-16 h-16 rounded-full md:w-20 md:h-20"
      />
      <div className="space-y-1 md:space-y-2">
        <h1 className="text-base font-semibold md:text-lg">
          {testimonial.name}
        </h1>
        <p className="text-[#8D8D8D] text-sm md:text-base">
          {testimonial.company}
        </p>
      </div>
    </div>
    <p className="text-[#999999] font-semibold mt-6 tracking-wide text-sm md:text-base">
      {testimonial.quote}
    </p>
  </AnimatedElement>
);

export default function TestimonialsSection() {
  return (
    <div className="mt-20 mx-auto md:mx-[2rem] lg:mx-[10rem] xl:mx-[21rem]">
      <AnimatedElement
        animationProps={{
          initial: { opacity: 0, scale: 0.8 },
          whileInView: { opacity: 1, scale: 1 },
          transition: { staggerChildren: 0.2, duration: 0.5 },
        }}
      >
        <div className="flex items-center gap-2">
          <MessageStarIcon />
          <h1 className="text-3xl font-bold tracking-wider text-white md:text-4xl">
            Words From Happy Clients
          </h1>
        </div>
        <p className="pl-12 mt-4 text-lg tracking-wider text-stone-400">
          Discover what satisfied clients have to say about their experiences
          working with me.
        </p>
      </AnimatedElement>
      <div className="grid grid-cols-1 gap-4 mt-10 text-white md:grid-cols-2 md:gap-6">
        {testimonials.map((testimonial, index) => (
          <TestimonialCard
            key={testimonial.id}
            testimonial={testimonial}
            index={index}
          />
        ))}
      </div>
    </div>
  );
}
