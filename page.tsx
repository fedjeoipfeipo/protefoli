import type { Metadata } from 'next'
import Image from 'next/image'
import CursorAndScroll from './components/CursorAndScroll'

export const metadata: Metadata = {
  title: 'Mostafa — Creative Portfolio',
  description: 'Brand strategy and creative direction.',
}

const cases = [
  {
    num: '01 / 04', brand: 'Tommy Hilfiger',
    headline: ['Wear the', 'Standard.'],
    image: '/tommy.webp', alt: 'Tommy Hilfiger — Wear the Standard',
    strategy: "Tommy doesn't sell clothes. It sells belonging to a certain standard. The decision was never to sell the polo itself — but to confirm that wearing it was the right choice all along. \"Wear the Standard\" isn't a command. It's a validation of something the customer already believes about themselves.",
    visual: "The product floats with no body — intentional. When there's no person, the viewer places themselves inside the polo automatically. The navy background isn't just a color choice, it's Tommy's DNA: classic American confidence. The small red line next to the headline isn't decoration — it's the Tommy flag reduced to a single stroke.",
  },
  {
    num: '02 / 04', brand: 'Nike Air Jordan 1 Low Platform',
    headline: ['The ground', 'feels you.'],
    image: '/nike.webp', alt: 'Nike Air Jordan 1 — The ground feels you',
    strategy: "Jordan usually sells performance or street credibility. This ad flips both. The platform sole makes athleticism irrelevant — nobody's running in these. So the decision was to sell something quieter: presence. \"The ground feels you\" isn't about the shoe. It's about the woman wearing it. She doesn't enter a room. The room adjusts.",
    visual: "The warm beige background was a deliberate rejection of typical Jordan energy. That palette says this shoe lives in a different world. Quiet luxury, not hype culture. The platform is the hero of the shot, centered and architectural, almost sculptural. The headline sits bottom left — small, almost whispering. Because when you have that much presence, you don't need to shout.",
  },
  {
    num: '03 / 04', brand: 'Apple MacBook Pro',
    headline: ['Nothing', 'to Prove.'],
    image: '/apple.webp', alt: 'Apple MacBook Pro — Nothing to Prove',
    strategy: "Every laptop ad shows a screen. This one shows a back. That single decision is the entire strategy. No specs, no chip name, no performance claim. Because MacBook Pro buyers at this level aren't choosing between laptops — they've already decided. \"Nothing to Prove\" isn't confidence. It's the absence of the need for confidence. There's a difference.",
    visual: "Shooting from the back was a deliberate removal of information. No screen means no distraction, no context, no use case. Just the object and the logo. The cool gray background gives the aluminum nowhere to hide — and it doesn't need to. The headline sits below with generous white space, almost too much of it. That space isn't empty. It's the point.",
  },
  {
    num: '04 / 04', brand: 'Audemars Piguet Royal Oak',
    headline: ['Measured in decades.', 'Signed in two words.'],
    image: '/ap.webp', alt: 'Audemars Piguet — Measured in decades',
    strategy: "Rolex sells success. AP sells something harder to name. The decision was to find the one detail that separates AP from every other luxury watch — and that detail was \"Swiss Made\" printed at 6 o'clock. Two words. No explanation. The headline didn't describe the watch. It described the kind of person who notices those two words and understands exactly what they mean.",
    visual: "The extreme close-up forces the viewer to sit with the object — the Grande Tapisserie texture, the rose gold baton hands, the brushed case catching the side light. The black background removes every distraction. No lifestyle, no context, no occasion. Just the watch existing on its own terms. The headline lives inside the darkness, like something whispered.",
  },
]

const S = {
  gold: {color:'var(--gold)'} as React.CSSProperties,
  mid: {color:'var(--mid)'} as React.CSSProperties,
  upper: {textTransform:'uppercase' as const},
  serif: {fontFamily:"'Cormorant Garamond',serif"},
}

export default function Home() {
  return (
    <>
      <CursorAndScroll />

      {/* HERO */}
      <section style={{minHeight:'100svh',display:'flex',flexDirection:'column',justifyContent:'space-between',padding:'6vh 7vw',borderBottom:'1px solid var(--rule)'}}>
        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-start',opacity:0,animation:'fadeIn .8s .2s forwards'}}>
          <span style={{fontSize:'.65rem',letterSpacing:'.25em',...S.upper,...S.gold}}>Creative Direction · Strategy</span>
          <nav style={{display:'flex',gap:'2.5rem'}}>
            <a href="#cases" style={{fontSize:'.65rem',letterSpacing:'.2em',...S.upper,...S.mid,textDecoration:'none'}}>Work</a>
            <a href="#footer" style={{fontSize:'.65rem',letterSpacing:'.2em',...S.upper,...S.mid,textDecoration:'none'}}>Contact</a>
          </nav>
        </div>

        <div style={{paddingBottom:'2vh'}}>
          <p style={{fontSize:'.65rem',letterSpacing:'.2em',...S.mid,marginBottom:'2.5rem',opacity:0,animation:'fadeIn .8s .5s forwards'}}>04 cases — 2024/25</p>
          <h1 style={{...S.serif,fontSize:'clamp(5rem,13vw,11rem)',fontWeight:300,lineHeight:.88,letterSpacing:'-.03em',opacity:0,animation:'slideUp 1s .6s cubic-bezier(.16,1,.3,1) forwards'}}>
            Mos<em style={{fontStyle:'italic',...S.gold}}>tafa</em>
          </h1>
        </div>

        <div style={{display:'flex',justifyContent:'space-between',alignItems:'flex-end',opacity:0,animation:'fadeIn .8s 1s forwards'}}>
          <p style={{fontSize:'.75rem',letterSpacing:'.12em',...S.upper,...S.mid,maxWidth:280,lineHeight:1.8}}>Brand strategy & creative direction for products that don&apos;t need to explain themselves.</p>
          <span style={{display:'flex',alignItems:'center',gap:'1rem',fontSize:'.62rem',letterSpacing:'.22em',...S.upper,...S.mid}}>
            <span style={{display:'block',width:40,height:1,background:'var(--gold)'}}/>Scroll
          </span>
        </div>
      </section>

      {/* CASES */}
      <section id="cases">
        {cases.map((c, i) => (
          <article key={i} className="case-wrap" data-observe style={{
            display:'grid',
            gridTemplateColumns:'1fr 1fr',
            minHeight:'92vh',
            borderBottom:'1px solid var(--rule)',
            direction: i % 2 === 1 ? 'rtl' : 'ltr',
          }}>
            {/* Image */}
            <div style={{position:'relative',overflow:'hidden',background:'#111'}}>
              <Image src={c.image} alt={c.alt} fill sizes="(max-width:768px) 100vw, 50vw"
                priority={i === 0}
                style={{objectFit:'cover',objectPosition:'center',filter:'brightness(.92)'}}
              />
              <div style={{position:'absolute',inset:0,background:'linear-gradient(to right,transparent 60%,rgba(10,10,10,.3))',pointerEvents:'none'}}/>
            </div>

            {/* Text */}
            <div style={{direction:'ltr',display:'flex',flexDirection:'column',justifyContent:'center',padding:'8vh 6vw'}}>
              <p style={{fontSize:'.6rem',letterSpacing:'.3em',...S.upper,...S.gold,marginBottom:'3rem'}}>{c.num}</p>
              <p style={{fontSize:'.7rem',letterSpacing:'.25em',...S.upper,...S.mid,marginBottom:'1.2rem'}}>{c.brand}</p>
              <h2 style={{...S.serif,fontSize:'clamp(2.2rem,3.5vw,4rem)',fontWeight:300,lineHeight:1.05,letterSpacing:'-.02em',marginBottom:'3rem'}}>
                {c.headline[0]}<br/><em style={{fontStyle:'italic',...S.gold}}>{c.headline[1]}</em>
              </h2>
              <div style={{width:40,height:1,background:'var(--gold)',marginBottom:'2.5rem'}}/>
              <p style={{fontSize:'.6rem',letterSpacing:'.25em',...S.upper,...S.gold,marginBottom:'1rem'}}>The Strategic Decision</p>
              <p style={{fontSize:'.88rem',lineHeight:1.85,color:'rgba(240,237,232,.65)',maxWidth:420,marginBottom:'2.5rem'}}>{c.strategy}</p>
              <p style={{fontSize:'.6rem',letterSpacing:'.25em',...S.upper,...S.gold,marginBottom:'1rem',marginTop:'2rem'}}>Why the Visual Works</p>
              <p style={{fontSize:'.88rem',lineHeight:1.85,color:'rgba(240,237,232,.65)',maxWidth:420}}>{c.visual}</p>
            </div>
          </article>
        ))}
      </section>

      {/* FOOTER */}
      <footer id="footer" className="footer-wrap" data-observe
        style={{padding:'10vh 7vw',display:'flex',justifyContent:'space-between',alignItems:'flex-end',borderTop:'1px solid var(--rule)'}}>
        <div>
          <h2 style={{...S.serif,fontSize:'clamp(2.5rem,6vw,5.5rem)',fontWeight:300,lineHeight:.9,letterSpacing:'-.02em',marginBottom:'2.5rem'}}>
            Let&apos;s make<br/>something <em style={{fontStyle:'italic',...S.gold}}>real.</em>
          </h2>
          <a href="mailto:m49152646@gmail.com" style={{fontSize:'.72rem',letterSpacing:'.18em',...S.upper,...S.mid,textDecoration:'none',display:'block',marginBottom:'.8rem'}}>
            m49152646@gmail.com
          </a>
          <p style={{fontSize:'.6rem',letterSpacing:'.15em',color:'rgba(107,100,96,.5)'}}>© 2025 Mostafa. All rights reserved.</p>
        </div>
        <div style={{textAlign:'right'}}>
          <p style={{fontSize:'.62rem',letterSpacing:'.22em',...S.upper,...S.mid,lineHeight:2}}>
            Creative Direction<br/>Brand Strategy<br/>Visual Communication
          </p>
        </div>
      </footer>
    </>
  )
}
