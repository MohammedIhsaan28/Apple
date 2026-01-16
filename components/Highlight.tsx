import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import { useMediaQuery } from "react-responsive"

export default function Highlight() {

    const isMobile = useMediaQuery({ query: '(max-width: 1024px)' })

    useGSAP(() => {
        gsap.to(['.left-column', '.right-column'],{
            scrollTrigger : {
                trigger: '#highlights',
                start: isMobile ? 'bottom bottom' : 'top top',
                
            },
            y:0,
            opacity:1,
            duration:1,
            ease: 'power1.inOut',
            stagger: 0.5

        })

    },[]);

    return(
        <section id="highlights">
            <h2>
                There&apos;s never been a better time to upgrade.
            </h2>
            <h3>
                Here&apos;s what you get with the new Macboo Pro.
            </h3>

            <div className="masonry">
                <div className="left-column ml-32">
                    <div className=" p-3 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_#00ffff]">
                        <img src={'/images/laptop.png'} alt="Laptop"/>
                        <p>Fly through demanding tasks up to 9.8x faster.</p>
                    </div>

                    <div className="p-10 rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_#00ffff]">
                        <img src={'/images/sun.png'} alt="Sun"/>
                        <p>A stunning <br/>
                            Liquid Retina XDR <br/>
                            display.
                        </p>
                    </div>

                </div>

                <div className="right-column mr-32">
                    <div className="apple-gradient rounded-2xl transition-all duration-300 hover:shadow-[0_0_20px_#00ffff]">
                        <img src={'/images/ai.png'} alt="AI"/>
                        <p>Built for <br/>
                            <span>Apple Intelligence.</span>
                        </p>
                    </div>

                    <div className="rounded-xl transition-all duration-300 hover:shadow-[0_0_20px_#00ffff]">
                        <img src={'/images/battery.png'} alt="Battery"/>
                        <p>
                            Up to 
                            <span className="green-gradient">{' '}14 more hours{' '}</span>
                            battery life. 
                            <span className="text-dark-100">
                                {' '}{'('}Up to 24 hours total.{')'}
                            </span>
                        </p>
                    </div>

                </div>


            </div>



        </section>
    )
}