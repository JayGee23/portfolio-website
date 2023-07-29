import './index.scss';
import LogoS from '../../../assets/images/capital-J-solid.png'
import { useEffect, useRef } from 'react';
import { gsap } from 'gsap-trial';
import { DrawSVGPlugin } from 'gsap-trial/all';


const Logo = () => {

    const bgRef = useRef();
    const outlineLogoRef = useRef()
    const solidLogoRef = useRef()

    const didAnimate = useRef(false)

    useEffect(() => {
        if (didAnimate.current) return;

        gsap.registerPlugin(DrawSVGPlugin)

        gsap
            .timeline()
            .to(bgRef.current, {
                duration: 1,
                opacity: 1,
            })
            .from(outlineLogoRef.current, {
                drawSVG: 0,
                duration: 15,
            })

        gsap.fromTo(
            solidLogoRef.current,
            {
                opacity: 0,
            },
            {
                opacity: 1,
                delay: 6,
                duration: 5,
            }
        )

        didAnimate.current = true;
    }, [])

    return (
        <div className='logo-container' ref={bgRef}>
            <img ref={solidLogoRef} className='solid-logo' src={LogoS} alt='J' />
            <svg
                width="506.33301"
                height="880"
                viewBox="0 0 133.96807 232.83452"
                version="1.1"
            >
                <g
                    className="svg-container"
                    fill="none"
                >
                    <path
                        ref={outlineLogoRef}
                        d="M 0.94681266,156.57577 26.855148,153.01866 c 0.69089,16.59987 3.799892,27.96286 9.327003,34.08899 5.527113,6.12613 13.17624,9.18921 22.947383,9.18921 7.204993,0 13.422993,-1.63033 18.65399,-4.89104 5.23102,-3.35949 8.833525,-7.85527 10.807503,-13.48737 1.973957,-5.7309 2.96095,-14.8213 2.96095,-27.27119 V 0.95225297 H 120.27319 V 149.01691 c 0,18.18079 -2.22073,32.26103 -6.66217,42.24072 -4.34272,9.97961 -11.30094,17.58788 -20.874695,22.82474 -9.47504,5.23686 -20.627953,7.85528 -33.458742,7.85528 -19.048796,0 -33.656163,-5.48386 -43.822103,-16.45163 C 5.3882435,194.51831 0.5520187,178.21487 0.94681266,156.57577 Z m 25.90833534,-3.55711 13.012189,10.09228 m 2e-6,0 c 0.69089,16.59986 4.337896,25.80842 9.865007,31.93458 M 120.34449,1.0219317 133.28538,11.04454 v 148.06465 c 0,18.1808 -2.22071,32.26102 -6.66216,42.24066 -4.34273,9.97969 -11.30096,17.58795 -20.8747,22.8248 -9.475042,5.23686 -20.627949,7.8553 -33.458751,7.8553 -19.048794,0 -33.656158,-5.48389 -43.822096,-16.45164"
                    />
                </g>
            </svg>

        </div>
    )
}

export default Logo;