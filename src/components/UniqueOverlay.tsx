// I had a problem styling the header because pr is decreasing the size of the menu SVG and the logo SVG does not appear.

import { useTransform, motion } from 'framer-motion'

import { BurgerSVG /** LogoSVG */ } from './Icons'

import { useWrapperScroll } from '../hooks/useWrapperScroll'

export function UniqueOverlay() {
  const { scrollYProgress } = useWrapperScroll()

  const opacity = useTransform(scrollYProgress, [0.9, 1], [0, 1])

  return (
    <div className="sticky inset-0">
      <header className="fixed top-0 left-0 right-0 flex items-center justify-between px-5 min-h-[52px]">
        {/** <div>
          <LogoSVG />
        </div> */}

        <div className="h-[24px] w-[24px] cursor-pointer">
          <BurgerSVG />
        </div>
      </header>

      <motion.footer
        className="fixed bottom-0 left-0 right-0 mb-7 sm:mb-10"
        style={{ opacity }}
      >
        <ul className="flex flex-col items-center justify-center text-sm gap-y-3 mt-10 mx-0 sm:flex-row sm:gap-x-10">
          <li>
            <a href="#" className="text-[#3938c1] hover:text-black">
              UI Clone
            </a>
          </li>
          <li>
            <a href="#" className="text-[#3938c1] hover:text-black">
              made with ♥
            </a>
          </li>
          <li>
            <a href="#" className="text-[#3938c1] hover:text-black">
              by Andres
            </a>
          </li>
        </ul>
      </motion.footer>
    </div>
  )
}
