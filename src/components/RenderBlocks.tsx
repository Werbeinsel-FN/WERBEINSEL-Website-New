import { StepSlider } from './StepSlider'
import { Hero } from './blocks/Hero'
import { Textblock } from './blocks/Textblock'
import { Zahlen } from './blocks/Zahlen'
import { Kategorien } from './blocks/Kategorien'
import { USP } from './blocks/USP'
import { FullService } from './blocks/FullService'
import { ReferenzSlider } from './blocks/ReferenzSlider'
import { Reichweite } from './blocks/Reichweite'
import { FormateMaterial } from './blocks/FormateMaterial'
import { FAQ } from './blocks/FAQ'
import { CTA } from './blocks/CTA'
import { ServicesSlider } from './blocks/ServicesSlider'
import { Marquee } from './blocks/Marquee'
import { Testimonials } from './blocks/Testimonials'

/** Ein Block, wie ihn Payload im Feld „layout" liefert. */
export type PageBlock = { blockType: string; [key: string]: any }

/**
 * Mappt Payload-Blöcke (blockType) auf React-Komponenten.
 * Collection-basierte Blöcke akzeptieren optional aufgelöste
 * `items` / `names` / `testimonials` von der Page.
 */
const BLOCK_MAP: Record<string, React.ComponentType<any>> = {
  hero: Hero,
  textblock: Textblock,
  zahlen: Zahlen,
  kategorien: Kategorien,
  usp: USP,
  fullService: FullService,
  schrittSlider: (props) => <StepSlider eyebrow={props.eyebrow} schritte={props.schritte} />,
  referenzSlider: ReferenzSlider,
  reichweite: Reichweite,
  formateMaterial: FormateMaterial,
  faq: FAQ,
  cta: CTA,
  servicesSlider: ServicesSlider,
  marquee: Marquee,
  testimonialsBlock: Testimonials,
}

export function RenderBlocks({ blocks }: { blocks?: PageBlock[] }) {
  if (!blocks?.length) return null
  return (
    <>
      {blocks.map((block, i) => {
        const Comp = BLOCK_MAP[block.blockType]
        if (!Comp) {
          if (process.env.NODE_ENV !== 'production') {
            console.warn(`Kein Renderer für Block "${block.blockType}"`)
          }
          return null
        }
        return <Comp key={`${block.blockType}-${i}`} {...block} />
      })}
    </>
  )
}
