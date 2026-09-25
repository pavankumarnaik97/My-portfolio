import type { ProcessStep } from './types'

export const processSteps: ProcessStep[] = [
  {
    index: '01',
    title: 'Understand the requirement',
    description:
      'I begin by understanding the business goals, user needs, and technical constraints before translating them into practical frontend decisions.',
  },
  {
    index: '02',
    title: 'Design to implementation',
    description:
      'I convert design and content requirements into responsive, reusable UI patterns while keeping consistency and usability in focus.',
  },
  {
    index: '03',
    title: 'Build with quality',
    description:
      'I implement clean, maintainable frontend code with attention to architecture, performance, and integration with APIs or CMS systems.',
  },
  {
    index: '04',
    title: 'Validate and refine',
    description:
      'I test functionality, review UI behavior across flows, and refine the experience to ensure the final result is reliable in production.',
  },
]
