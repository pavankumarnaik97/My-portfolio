import { motion } from 'framer-motion'
import { fadeUp, slideIn, slideInRight, staggerContainer, viewportDefault } from '../animations/variants'
import SectionKicker from './SectionKicker'
import StatCounter from './StatCounter'
import type { StatItem } from '../data/types'

const STATS: StatItem[] = [
  { label: 'Years Experience', value: 5, suffix: '+' },
  { label: 'Projects Delivered', value: 20, suffix: '+' },
  { label: 'Technologies', value: 10, suffix: '+' },
  { label: 'Focus', value: 100, suffix: '%' },
]

const STAT_ACCENTS = ['text-accent-violet', 'text-accent-amber', 'text-ink', 'text-accent-moss']

export default function About() {
  return (
    <section id="about" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.08)}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionKicker index="01" label="About Me" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-4xl font-medium tracking-tight sm:text-5xl">
            Frontend engineer with a product mindset.
          </motion.h2>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportDefault}
            variants={slideIn}
            className="space-y-5 text-lg leading-relaxed text-ink-muted"
          >
            <p>
              I&apos;m a frontend developer with 5+ years of experience building responsive web applications,
              CMS-driven experiences, and enterprise-grade user interfaces. My work spans React.js,
              JavaScript, TypeScript, Next.js, Redux, and Adobe Experience Manager (AEM).
            </p>
            <p>
              I enjoy translating business requirements into polished, accessible interfaces that perform well
              across devices and content-heavy workflows. I&apos;ve worked with both product teams and client stakeholders,
              helping shape UI architecture, data flow, and implementation strategy from concept to deployment.
            </p>
            <p>
              My strengths include building scalable frontends, integrating APIs, optimizing performance,
              and collaborating closely with design and backend teams to deliver high-quality digital experiences.
            </p>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportDefault}
            variants={staggerContainer(0.1)}
            className="grid grid-cols-2 gap-4"
          >
            {STATS.map((stat, i) => (
              <motion.div
                key={stat.label}
                variants={slideInRight}
                whileHover={{ y: -4, borderColor: 'rgba(167,139,250,0.4)' }}
                transition={{ type: 'spring', stiffness: 300, damping: 20 }}
                className={`card-border group flex flex-col justify-between gap-6 bg-white/[0.02] p-6 ${
                  i === 1 ? 'sm:mt-4' : ''
                }`}
              >
                <span
                  className={`font-display text-4xl font-medium sm:text-5xl ${STAT_ACCENTS[i % STAT_ACCENTS.length]}`}
                >
                  <StatCounter value={stat.value} suffix={stat.suffix} />
                </span>
                <span className="text-sm text-ink-muted">{stat.label}</span>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  )
}
