import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import  gsap  from "gsap";
import { performanceImages, performanceImgPositions } from "../constants";
import {useMediaQuery} from "react-responsive";


interface ImagePosition {
  id: string;
  top?: number;
  bottom?: number;
  left?: number;
  right?: number;
}

const Performance = () => {
    const isMobile = useMediaQuery({ query: "(max-width: 1024px)" });
    const sectionRef = useRef<HTMLElement | null>(null);

    useGSAP(
        () => {
            const sectionEl = sectionRef.current;
            if (!sectionEl) return;

            // Text Animation
            gsap.fromTo(
                ".content p",
                { opacity: 0, y: 10 },
                {
                    opacity: 1,
                    y: 0,
                    ease: "power1.out",
                    scrollTrigger: {
                        trigger: ".content p",
                        start: "top bottom",
                        end: "top center",
                        scrub: true,
                        invalidateOnRefresh: true,
                    },
                }
            );

            if (isMobile) return;

            // Image Positioning Timeline
            const tl = gsap.timeline({
                defaults: { duration: 2, ease: "power1.inOut", overwrite: "auto" },
                scrollTrigger: {
                    trigger: sectionEl,
                    start: "top bottom",
                    end: "center center",
                    scrub: 1,
                    invalidateOnRefresh: true,
                },
            });

            // Position Each Performance Image
            (performanceImgPositions as ImagePosition[]).forEach((pos) => {
                if (pos.id === "p5") return;

                const selector = `.${pos.id}`;
                const vars:gsap.TweenVars = {};

                if (pos.left !== undefined) vars.left = `${pos.left}%`;
                if (pos.right !== undefined) vars.right = `${pos.right}%`;
                if (pos.bottom !== undefined) vars.bottom = `${pos.bottom}%`;
                if (pos.top !== undefined) vars.top = `${pos.top}%`;

                tl.to(selector, vars, 0);
            });
        },
        { scope: sectionRef, dependencies: [isMobile] }
    );


    return (
        <section id="performance" ref={sectionRef}>
            <h2>Next-level graphics performance. Game on.</h2>

             <div className="wrapper">
                {performanceImages.map((item, index) => (
                    <img key={index} src={item.src} className={item.id} alt={`Performance Image #${index + 1}`}/>
                ))}
             </div>

            <div className="content">
                <p>
                    Run graphics-intensive workflows with a responsiveness that keeps up
                    with your imagination. The M4 family of chips features a GPU with a
                    second-generation hardware-accelerated ray tracing engine that renders
                    images faster, so{" "}
                    <span className="text-white">
            gaming feels more immersive and realistic than ever.
          </span>{" "}
                    And Dynamic Caching optimizes fast on-chip memory to dramatically
                    increase average GPU utilization — driving a huge performance boost
                    for the most demanding pro apps and games.
                </p>
            </div>
        </section>
    )
}
export default Performance