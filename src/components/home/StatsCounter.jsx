import React from "react";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";
import AnimatedSection from "../common/AnimatedSection";

const stats = [
  { value: 500, suffix: "+", label: "Markets Analyzed" },
  { value: 95, suffix: "%", label: "Accuracy Rate" },
  { value: 1000, suffix: "+", label: "Happy Clients" },
  { value: 50, suffix: "M+", label: "Data Points" },
];

const StatsCounter = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <AnimatedSection className="py-20">
      <div className="container mx-auto px-4">
        <div ref={ref} className="grid grid-cols-2 md:grid-cols-4 gap-8">
          {stats.map((stat) => (
            <div key={stat.label} className="text-center">
              <div className="text-4xl md:text-5xl font-bold text-primary">
                {inView && <CountUp end={stat.value} duration={2.5} suffix={stat.suffix} />}
              </div>
              <p className="text-gray-400 mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </AnimatedSection>
  );
};

export default StatsCounter;
