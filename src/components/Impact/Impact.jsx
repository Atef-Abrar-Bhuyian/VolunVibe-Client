import React from "react";
import { Fade } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Impact = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true,
  });

  const stats = [
    {
      id: 1,
      title: "Volunteers Engaged",
      start: 70000,
      end: 75000,
    },
    {
      id: 2,
      title: "Lives Touched",
      start: 12000,
      end: 13000,
    },
    {
      id: 3,
      title: "Volunteer Posts Created",
      start: 10000,
      end: 10500,
    },
    {
      id: 4,
      title: "Successful Projects",
      start: 33000,
      end: 35000,
    },
  ];

  return (
    <section className="my-20 w-11/12 mx-auto">
      <Fade>
        <h1 className="text-3xl md:text-4l font-bold text-center my-10">
          Our Impact
        </h1>
      </Fade>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mt-10">
        {stats.map((stat) => (
          <div
            key={stat.id}
            ref={ref}
            className="p-8 border-l-4 border-purple-500 rounded-xl transition-transform duration-300 hover:scale-105 flex flex-col items-center text-center"
          >
            <div className="text-5xl font-extrabold mb-3">
              {inView && (
                <CountUp
                  start={stat.start}
                  end={stat.end}
                  duration={1}
                  separator=","
                  suffix="+"
                />
              )}
            </div>
            <div className="w-12 h-1 bg-purple-400 rounded-full mb-4"></div>
            <h2 className="text-lg font-medium">{stat.title}</h2>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Impact;
