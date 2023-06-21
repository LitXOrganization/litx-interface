import { Particles, ParticlesInner, Particle } from "./styled";

export default function ParticlesBackground() {
    return (
        <Particles>
            <ParticlesInner>
                <Particle width={400} height={40} color={"var(--particle1)"} top={0} left={0} delay={0} />
                <Particle width={250} height={25} color={"var(--particle2)"} top={30} left={250} delay={3} />
                <Particle width={150} height={25} color={"var(--particle3)"} top={50} left={150} delay={6} />

                <Particle width={400} height={40} color={"var(--particle1)"} top={20} left={30} delay={3} />
                <Particle width={250} height={25} color={"var(--particle2)"} top={60} left={-20} delay={6} />
                <Particle width={150} height={25} color={"var(--particle3)"} top={100} left={150} delay={12} />

                <Particle width={400} height={40} color={"var(--particle1)"} top={0} left={0} delay={0} reversed={true} />
                <Particle width={250} height={25} color={"var(--particle2)"} top={30} left={250} delay={3} reversed={true} />
                <Particle width={150} height={25} color={"var(--particle3)"} top={50} left={150} delay={6} reversed={true} />

                <Particle width={400} height={40} color={"var(--particle1)"} top={20} left={30} delay={3} reversed={true} />
                <Particle width={250} height={25} color={"var(--particle2)"} top={60} left={-20} delay={6} reversed={true} />
                <Particle width={150} height={25} color={"var(--particle3)"} top={100} left={150} delay={12} reversed={true} />
            </ParticlesInner>
        </Particles>
    );
}
