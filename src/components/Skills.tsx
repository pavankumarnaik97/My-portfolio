import { motion } from 'framer-motion'
import {
  Boxes,
  Code2,
  Container,
  Braces,
  FileCode2,
  GitBranch,
  Layers,
  Palette,
  Cloud,
  Server,
  Workflow,
} from 'lucide-react'
import type { ComponentType } from 'react'
import { fadeUp, staggerContainer, viewportDefault } from '../animations/variants'
import { skillGroups } from '../data/skills'
import { GithubIcon } from './icons/BrandIcons'
import SectionKicker from './SectionKicker'

const ICONS: Record<string, ComponentType<{ size?: number; strokeWidth?: number }>> = {
  React: Boxes,
  TypeScript: FileCode2,
  JavaScript: Braces,
  HTML5: Code2,
  CSS3: Palette,
  'Material UI': Layers,
  'Tailwind CSS': Palette,
  'Node.js': Server,
  'REST APIs': Workflow,
  Python: Code2,
  Git: GitBranch,
  GitHub: GithubIcon,
  Azure: Cloud,
  Docker: Container,
}

const CATEGORY_ACCENT: Record<string, { icon: string; hoverBorder: string }> = {
  Frontend: { icon: 'text-accent-violet', hoverBorder: 'hover:border-accent-violet/50' },
  Backend: { icon: 'text-accent-amber', hoverBorder: 'hover:border-accent-amber/50' },
  'CMS & Platforms': { icon: 'text-accent-amber', hoverBorder: 'hover:border-accent-amber/50' },
  Tools: { icon: 'text-accent-moss', hoverBorder: 'hover:border-accent-moss/50' },
}

export default function Skills() {
  return (
    <section id="skills" className="relative py-28 sm:py-36">
      <div className="section-shell">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportDefault}
          variants={staggerContainer(0.08)}
          className="mb-16"
        >
          <motion.div variants={fadeUp}>
            <SectionKicker index="02" label="Skills & Tools" />
          </motion.div>
          <motion.h2 variants={fadeUp} className="text-balance font-display text-4xl font-medium italic tracking-tight sm:text-5xl">
            The stack behind the work.
          </motion.h2>
        </motion.div>

        <div className="space-y-12">
          {skillGroups.map((group) => (
            <motion.div
              key={group.category}
              initial="hidden"
              whileInView="show"
              viewport={viewportDefault}
              variants={staggerContainer(0.05)}
            >
              <motion.h3 variants={fadeUp} className="mb-5 text-sm font-semibold uppercase tracking-[0.15em] text-ink-faint">
                {group.category}
              </motion.h3>
              <div className="flex flex-wrap gap-3">
                {group.items.map((skill) => {
                  const Icon = ICONS[skill.name] ?? Code2
                  const accent = CATEGORY_ACCENT[group.category]
                  return (
                    <motion.div
                      key={skill.name}
                      variants={fadeUp}
                      whileHover="hover"
                      className={`group relative flex items-center gap-2.5 overflow-hidden rounded-full border border-white/10 bg-white/[0.02] px-5 py-3 transition-colors duration-300 hover:bg-white/[0.04] ${accent.hoverBorder}`}
                    >
                      <motion.span
                        variants={{ hover: { rotate: -8, scale: 1.15 } }}
                        transition={{ type: 'spring', stiffness: 300, damping: 15 }}
                        className={accent.icon}
                      >
                        <Icon size={17} strokeWidth={1.8} />
                      </motion.span>
                      <span className="text-sm font-medium text-ink-muted transition-colors group-hover:text-ink">
                        {skill.name}
                      </span>
                      <span className="pointer-events-none absolute inset-0 rounded-full opacity-0 shadow-glow-sm transition-opacity duration-300 group-hover:opacity-100" />
                    </motion.div>
                  )
                })}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
