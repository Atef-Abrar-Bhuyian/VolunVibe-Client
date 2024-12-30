import React from "react";
import { Fade, Slide } from "react-awesome-reveal";
import CountUp from "react-countup";
import { useInView } from "react-intersection-observer";

const Impact = () => {
  const { ref, inView } = useInView({
    /* Optional options */
    threshold: 0,
  });
  return (
    <div className="my-20 md:w-11/12 md:mx-auto">
      <Fade>
        <h1 className="text-center text-3xl font-bold mb-10">Our Impact</h1>
      </Fade>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="text-2xl border-2 border-purple-400 shadow-purple-400 rounded-xl cursor-pointer flex flex-col items-center justify-center p-10 shadow-md">
          <div ref={ref} className="font-bold text-5xl">
            <Slide direction="up">
              {inView && (
                <CountUp
                  scrollSpyOnce={true}
                  start={70000}
                  end={75000}
                  duration={1}
                  decimal=","
                  suffix="+"
                ></CountUp>
              )}
            </Slide>
          </div>
          <hr className="w-full my-1 border border-purple-400" />
          <div>
            <h1 className="text-center">Volunteers Engaged</h1>
          </div>
        </div>

        <div className="text-2xl border-2 border-purple-400 shadow-purple-400 rounded-xl cursor-pointer flex flex-col items-center justify-center p-10 shadow-md">
          <div ref={ref} className="font-bold text-5xl">
            <Slide direction="up">
              {inView && (
                <CountUp
                  start={12000}
                  end={13000}
                  duration={1}
                  decimal=","
                  suffix="+"
                ></CountUp>
              )}
            </Slide>
          </div>
          <hr className="w-full my-1 border border-purple-400" />
          <div>
            <h1 className="text-center">
              Lives <br /> Touched
            </h1>
          </div>
        </div>

        <div className="text-2xl border-2 border-purple-400 shadow-purple-400 rounded-xl cursor-pointer flex flex-col items-center justify-center p-10 shadow-md">
          <div ref={ref} className="font-bold text-5xl">
            <Slide direction="up">
              {inView && (
                <CountUp
                  start={10000}
                  end={10500}
                  duration={1}
                  decimal=","
                  suffix="+"
                ></CountUp>
              )}
            </Slide>
          </div>
          <hr className="w-full my-1 border border-purple-400" />
          <div>
            <h1 className="text-center">Volunteer Posts Created</h1>
          </div>
        </div>

        <div className="text-2xl border-2 border-purple-400 shadow-purple-400 rounded-xl cursor-pointer flex flex-col items-center justify-center p-10 shadow-md">
          <div ref={ref} className="font-bold text-5xl">
            <Slide direction="up">
              {inView && (
                <CountUp
                  start={33000}
                  end={3500}
                  duration={1}
                  decimal=","
                  suffix="+"
                ></CountUp>
              )}
            </Slide>
          </div>
          <hr className="w-full my-1 border border-purple-400" />
          <div>
            <h1 className="text-center">Successful Projects</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Impact;
