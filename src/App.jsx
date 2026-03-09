import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { useEffect, useRef, useState } from "react";
import "remixicon/fonts/remixicon.css";

export default function App() {
  const [showContent, setShowContent] = useState(false);
  const [fullPageNav, setFullPageNav] = useState(false);
  const fullNavRef = useRef(null);
  const fullNavTl = useRef(null);

  // * VI ANIMATION
  useGSAP(() => {
    const tl = gsap.timeline();
    tl.to(".vi-mask-group", {
      duration: 2,
      ease: "Power4.easeInOut",
      transformOrigin: "50% 50%",
    });

    tl.to(".vi-mask-group", {
      scale: 10,
      duration: 2,
      delay: -1.8,
      ease: "Expo.easeInOut",
      opacity: 0,
      transformOrigin: "50% 50%",
      // ! REMOVE SVG ELEMENT ON COMPLETION
      onComplete: () => {
        document.querySelector(".svg")?.remove();
        setShowContent(true);
      },
    });
  });

  // * SECONDARY PAGE ANIMATIONS
  useGSAP(() => {
    if (!showContent) return;

    const main = document.querySelector(".main");

    gsap.to(".main", {
      rotate: 0,
      scale: 1,
      duration: 2,
      delay: "-1",
      ease: "Expo.easeInOut",
    });

    gsap.to(".text", {
      scale: 1,
      rotate: 0,
    });

    main?.addEventListener("mousemove", function (e) {
      let xMove = (e.clientX / window.innerWidth - 0.5) * 40;
      xMove *= 0.5;
      // console.log(-50 + xMove);
      gsap.to(".imagesdiv .text", {
        x: `${-50 + xMove}%`,
      });
      gsap.to(".sky", {
        x: `${xMove * 0.3}%`,
      });
      gsap.to(".bg", {
        x: `${xMove * 0.1}%`,
      });
    });
  }, [showContent]);

  // ! FULLPAGE ANIMATION
  useGSAP(() => {
    if (fullNavRef.current) {
      fullNavTl.current = gsap.timeline({ paused: true });
      fullNavTl.current.to(fullNavRef.current, {
        left: 0,
        opacity: 1,
      });
      fullNavTl.current.to(".nbox li", {
        opacity: 1,
        duration: 0.3,
        stagger: 0.1,
      });
    }
  }, [fullNavRef.current]);

  useEffect(() => {
    if (!fullNavTl) return;

    if (fullPageNav) {
      fullNavTl.current.play();
    } else {
      fullNavTl?.current?.reverse();
    }
  }, [fullPageNav]);

  const NavElStyles = `text-stone-950 opacity-0 text-5xl transition-all duration-300 cursor-pointer hover:text-yellow-400 hover:scale-110`;

  return (
    <>
      <div className="svg flex items-center justify-center fixed top-0 left-0 z-[100] w-full h-screen overflow-hidden bg-[#000]">
        <svg viewBox="0 0 800 600" preserveAspectRatio="xMidYMid slice">
          <defs>
            <mask id="viMask">
              <rect width="100%" height="100%" fill="black"></rect>
              <g className="vi-mask-group">
                <text
                  x="50%"
                  y="50%"
                  fontSize="250"
                  textAnchor="middle"
                  fill="white"
                  dominantBaseline="middle"
                  fontFamily="Arial Black"
                >
                  VI
                </text>
              </g>
            </mask>
          </defs>
          <image
            href="/bg.png"
            width="100%"
            height="100%"
            preserveAspectRatio="xMidYMid slice"
            mask="url(#viMask)"
          ></image>
        </svg>
      </div>

      {/* CONTENT */}
      {showContent && (
        <>
          <div
            ref={fullNavRef}
            className="fullNav w-full fixed top-0 left-[-100%] h-[100vh] z-50 backdrop-blur bg-white/30 flex items-center justify-center"
          >
            <div
              className="absolute right-5 top-5 transition-all duration-300 hover:scale-[1.3] cursor-pointer"
              onClick={() => setFullPageNav(false)}
            >
              <i className="ri-close-line text-4xl text-stone-800 font-bold"></i>
            </div>
            <div className="w-full flex flex-col items-center justify-center">
              <ul className="nbox flex flex-col gap-4">
                <li className={NavElStyles}>Home</li>
                <li className={NavElStyles}>Games</li>
                <li className={NavElStyles}>News</li>
                <li className={NavElStyles}>About</li>
                <li className={NavElStyles}>Careers</li>
                <li className={NavElStyles}>Contact</li>
              </ul>
            </div>
          </div>
          <div className="main w-full overflow-hidden rotate-[-10deg] scale-[1.3]">
            <div className="landing relative w-full h-screen bg-black">
              <div className="imagesdiv overflow-hidden relative w-full h-screen">
                <div className="navbar absolute top-0 left-0 w-full z-[10] px-10 py-10">
                  <div className="logo flex gap-7 items-center">
                    <div
                      className="lines flex flex-col gap-1 cursor-pointer"
                      onClick={() => setFullPageNav(true)}
                    >
                      <div className="line w-10 h-1 bg-white"></div>
                      <div className="line w-8 h-1 bg-white"></div>
                      <div className="line w-5 h-1 bg-white"></div>
                    </div>
                    <h3 className="text-4xl text-white -mt-[8px]">Rockstar</h3>
                  </div>
                </div>
                <img
                  src="/sky.png"
                  className="absolute sky scale-[1.1] top-0 left-0 w-full h-full object-cover"
                  alt="sky-bg"
                ></img>
                <img
                  src="/bg.png"
                  className="absolute bg scale-x-105 top-0 left-0 w-full h-full object-cover"
                  alt="background"
                ></img>
                <div className="text absolute left-1/2 -translate-x-[55%] top-10 text-white text-9xl flex flex-col gap-4 rotate-[-10deg] scale-[1.1]">
                  <h1 className="-ml-20 leading-none">grand</h1>
                  <h1 className="ml-[40%] leading-none">theft</h1>
                  <h1 className="-ml-20 leading-none">auto</h1>
                </div>
                <img
                  className="absolute character left-1/2 -translate-x-1/2 -bottom-[67%] scale-[0.9]"
                  src="/girlbg.png"
                  alt="girl"
                ></img>
              </div>
              <div className="btmbar absolute bottom-0 left-0 w-full py-5 px-10 bg-gradient-to-t from-black to-transparent">
                <div className="flex gap-4 text-white items-center">
                  <div className="flex items-center">
                    <i className="text-4xl ri-arrow-down-line"></i>
                    <h3 className="text-xl">Scroll Down</h3>
                  </div>
                  <img
                    className="absolute h-[3rem] left-1/2 -translate-x-1/2 "
                    src="/ps5.png"
                    alt="ps5bottom"
                  ></img>
                </div>
              </div>
            </div>

            {/* PAGE 2 */}
            <div
              id="info"
              className="w-full h-screen px-10 flex items-center justify-center bg-black"
            >
              <div className="cont w-full h-[80%] flex items-center">
                <div className="leftimg w-1/2">
                  <img
                    className="scale-[0.7]"
                    src="/imag.png"
                    alt="foot-img"
                  ></img>
                </div>
                <div className="rg text-white w-[40%]">
                  <h1 className="text-6xl">Still Running,</h1>
                  <h1 className="text-6xl">not Hunting</h1>
                  <p className="font-[monospace] mt-8 text-xl">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Quidem neque est tenetur omnis, dignissimos unde in eveniet
                    veritatis nisi? Neque repudiandae dolorem inventore?
                  </p>
                  <p className="font-[monospace] mt-4 text-lg">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Eaque dolorem sunt rem iusto.
                  </p>
                  <button className="bg-yellow-500 mt-8 px-6 py-4 text-black text-2xl transition-all duration-300 hover:bg-yellow-400">
                    Download Now
                  </button>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
}
