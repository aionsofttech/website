import { useState } from 'react';

const Arrow = ({ diagonal = false }: { diagonal?: boolean }) => (
  <svg
    aria-hidden="true"
    width="16"
    height="16"
    viewBox="0 0 16 16"
    fill="none"
    className={diagonal ? 'arrow-icon arrow-icon--diagonal' : 'arrow-icon'}
  >
    <path
      d="M3 8h10M8 3l5 5-5 5"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const closeMenu = () => setMenuOpen(false);

  return (
    <>
      <a className="skip-link" href="#main-content">Skip to content</a>
      <header className="site-header">
        <a className="wordmark" href="#home" aria-label="AION Soft Tech home" onClick={closeMenu}>
          <img src="./aion-mark.svg" alt="" width="37" height="37" />
          <span>AION<span className="wordmark__light">SOFT TECH</span></span>
        </a>
        <button
          className="menu-toggle"
          type="button"
          aria-label={menuOpen ? 'Close navigation' : 'Open navigation'}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span />
          <span />
        </button>
        <nav className={menuOpen ? 'site-nav site-nav--open' : 'site-nav'} aria-label="Main navigation">
          <a href="#about" onClick={closeMenu}>About</a>
          <a href="#products" onClick={closeMenu}>Products</a>
          <a href="#principles" onClick={closeMenu}>Our approach</a>
          <a className="nav-contact" href="#contact" onClick={closeMenu}>
            Get in touch <Arrow diagonal />
          </a>
        </nav>
      </header>

      <main id="main-content" tabIndex={-1}>
        <section className="hero" id="home">
          <div className="hero__grid" aria-hidden="true" />
          <div className="hero__content">
            <div className="eyebrow"><span className="status-dot" /> PRACTICAL AI · BUILT AROUND REAL WORK</div>
            <h1>Build better apps.<br /><span className="hero__accent">Make work flow.</span></h1>
            <p className="hero__lead">
              We’re AION Soft Tech. We’re building AppBana to turn business ideas into working
              applications—and exploring AgentBana as a future direction for practical AI agents.
            </p>
            <div className="hero__actions">
              <a className="button button--dark" href="#products">Explore our products <Arrow /></a>
              <a className="text-link" href="#about">About AION <span>↓</span></a>
            </div>
          </div>
          <div className="hero-art" role="img" aria-label="An idea taking shape as connected building blocks">
            <div className="hero-art__orbit hero-art__orbit--one" />
            <div className="hero-art__orbit hero-art__orbit--two" />
            <div className="hero-art__glow" />
            <div className="hero-art__spark hero-art__spark--one">✳</div>
            <div className="hero-art__spark hero-art__spark--two">·</div>
            <div className="hero-art__stack hero-art__stack--back">
              <span className="block block--small block--soft" />
              <span className="block block--small block--outline" />
            </div>
            <div className="hero-art__stack hero-art__stack--middle">
              <span className="block block--medium block--green"><span>AI</span></span>
              <span className="block block--small block--paper"><span>01</span></span>
            </div>
            <div className="hero-art__stack hero-art__stack--front">
              <span className="block block--large block--dark-green">
                <span className="block__symbol">A</span>
                <span className="block__name">AION</span>
                <span className="block__caption">IDEAS, MADE REAL.</span>
              </span>
            </div>
            <div className="hero-art__label hero-art__label--one"><span className="label-line" />A thought</div>
            <div className="hero-art__label hero-art__label--two"><span className="label-line" />A real tool</div>
          </div>
          <a className="scroll-cue" href="#about"><span className="scroll-cue__line" /> OUR PURPOSE</a>
        </section>

        <section className="intro section-pad" id="about">
          <div className="section-tag"><span>01</span> THE OPPORTUNITY</div>
          <div className="intro__layout">
            <h2>Technology should<br />move you <span>forward.</span></h2>
            <div className="intro__copy">
              <p>
                The right software makes everyday work more efficient, giving teams more time to
                focus on what matters. Yet turning a promising idea into a dependable business
                application remains harder than it should be.
              </p>
              <p>
                At AION Soft Tech, we’re addressing that challenge with AI-powered application
                building. AppBana is our first step: helping teams turn ideas into practical
                business software. Looking ahead, we plan to explore AgentBana—a future direction
                for creating AI agents that can take on meaningful work.
              </p>
              <a className="inline-link" href="#products">See where we’re starting <Arrow /></a>
            </div>
          </div>
          <div className="principle-strip">
            <div><span className="principle-strip__number">01</span><span>Solve real business problems</span></div>
            <div><span className="principle-strip__number">02</span><span>Make complex work simpler</span></div>
            <div><span className="principle-strip__number">03</span><span>Build thoughtfully and responsibly</span></div>
          </div>
        </section>

        <section className="products section-pad" id="products">
          <div className="section-heading">
            <div>
              <div className="section-tag section-tag--light"><span>02</span> WHAT WE’RE BUILDING</div>
              <h2>Practical tools.<br /><span>Built for progress.</span></h2>
            </div>
            <p>We’re simplifying how teams build business applications—and exploring how AI agents can help them do more.</p>
          </div>

          <article className="product-card product-card--appbana">
            <div className="product-card__topline">
              <span className="product-card__index">PRODUCT 01</span>
              <span className="product-status"><span className="status-dot" /> IN DEVELOPMENT</span>
            </div>
            <div className="product-card__body">
              <div className="product-card__copy">
                <div className="product-wordmark">App<span>Bana</span><span className="product-wordmark__period">.</span></div>
                <h3>Turn your idea<br />into a working app.</h3>
                <p>
                  We’re building AppBana to help teams create business applications from a
                  description. Shape your data, workflows, and screens in one place—without starting
                  from a blank page.
                </p>
                <span className="product-note">IN DEVELOPMENT · OUR FIRST PRODUCT</span>
              </div>
              <div className="product-visual product-visual--app" aria-hidden="true">
                <div className="app-window">
                  <div className="app-window__top"><span /><span /><span /><i>appbana</i></div>
                  <div className="app-window__body">
                    <div className="app-window__side"><b /><b /><b /><b /></div>
                    <div className="app-window__main">
                      <div className="app-window__heading"><span /><b>▤</b></div>
                      <div className="app-window__metrics"><span /><span /><span /></div>
                      <div className="app-window__table">
                        <span /><span /><span />
                        <i /><i /><i />
                        <i /><i /><i />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="app-float"><span>✳</span><div><b>Describe your idea</b><i>Turn it into a real app.</i></div><Arrow /></div>
              </div>
            </div>
            <div className="product-card__bottom"><span>IDEA → DESIGN → APPLICATION</span><span>THE FOUNDATION</span></div>
          </article>

          <article className="product-card product-card--agentbana">
            <div className="product-card__topline">
              <span className="product-card__index">PRODUCT 02</span>
              <span className="product-status product-status--future"><span /> FUTURE DIRECTION</span>
            </div>
            <div className="product-card__body product-card__body--future">
              <div className="product-card__copy">
                <div className="product-wordmark product-wordmark--future">Agent<span>Bana</span><span className="product-wordmark__period">.</span></div>
                <h3>AI agents for<br />meaningful work.</h3>
                <p>
                  AgentBana is our future direction for making AI agents easier to create for
                  meaningful tasks and business workflows. It is not yet available; features and
                  timing have not been announced.
                </p>
                <span className="product-note">FUTURE DIRECTION · NOT YET AVAILABLE</span>
              </div>
              <div className="agent-visual" role="img" aria-label="A concept illustration of connected AI agent nodes">
                <div className="agent-orbit agent-orbit--outer" />
                <div className="agent-orbit agent-orbit--inner" />
                <div className="agent-node agent-node--core"><span>AG</span><i>AGENT</i></div>
                <div className="agent-node agent-node--one"><span>↗</span></div>
                <div className="agent-node agent-node--two"><span>✳</span></div>
                <div className="agent-node agent-node--three"><span>⌘</span></div>
                <span className="agent-connector agent-connector--one" />
                <span className="agent-connector agent-connector--two" />
                <span className="agent-connector agent-connector--three" />
                <span className="agent-label agent-label--one">THINK</span>
                <span className="agent-label agent-label--two">ACT</span>
                <span className="agent-label agent-label--three">ADAPT</span>
              </div>
            </div>
            <div className="product-card__bottom"><span>INTELLIGENCE → ACTION → POSSIBILITY</span><span>ON THE HORIZON</span></div>
          </article>
          <p className="product-disclaimer">Product status: AppBana is in development. AgentBana is a future direction; its availability and features have not been announced.</p>
        </section>

        <section className="approach section-pad" id="principles">
          <div className="section-tag"><span>03</span> HOW WE THINK</div>
          <div className="approach__heading">
            <h2>Practical by design.<br /><span>Ready for what’s next.</span></h2>
            <p>We focus on tools that make work clearer, more efficient, and easier to adapt.</p>
          </div>
          <div className="approach-grid">
            <article className="approach-item">
              <span className="approach-item__number">01 / START WITH PEOPLE</span>
              <div className="approach-icon approach-icon--sun">↗</div>
              <h3>Understand the work.</h3>
              <p>We begin with the people, goals, and everyday challenges behind each idea.</p>
            </article>
            <article className="approach-item">
              <span className="approach-item__number">02 / BUILD FOR REAL LIFE</span>
              <div className="approach-icon approach-icon--mint">◈</div>
              <h3>Make it dependable.</h3>
              <p>Good software connects clear screens with the data and workflows people rely on.</p>
            </article>
            <article className="approach-item">
              <span className="approach-item__number">03 / USE AI WITH PURPOSE</span>
              <div className="approach-icon approach-icon--lavender">✳</div>
              <h3>Keep AI practical.</h3>
              <p>We explore AI where it can simplify building, reduce busywork, or help people move forward.</p>
            </article>
          </div>
        </section>

        <section className="company">
          <div className="company__pattern" aria-hidden="true" />
          <div className="section-tag section-tag--light"><span>04</span> THE COMPANY</div>
          <div className="company__layout">
            <h2>Building thoughtfully.<br /><span>Growing with purpose.</span></h2>
            <div className="company__copy">
              <p>
                AION Soft Tech is an AI startup focused on simplifying how businesses build
                applications and, over time, AI agents. We combine practical problem-solving with a
                commitment to approachable, dependable software.
              </p>
              <p>
                AppBana is our first product, now in development. AgentBana is a future direction—not
                an available product.
              </p>
              <div className="company__signature"><span>A</span><div><b>AION SOFT TECH</b><i>Practical AI. Better ways to work.</i></div></div>
            </div>
          </div>
        </section>

        <section className="contact section-pad" id="contact">
          <div className="contact__card">
            <div className="contact__text">
              <div className="section-tag"><span>05</span> START A CONVERSATION</div>
              <h2>Let’s build<br />what’s <span>next.</span></h2>
              <p>For product questions, collaboration ideas, or a conversation about what we’re building, contact our team.</p>
              <a className="button button--dark" href="mailto:support@aionsofttech.com">
                Email our team <Arrow diagonal />
              </a>
            </div>
            <a className="contact__email" href="mailto:support@aionsofttech.com">
              <span>DROP US A LINE</span>
              <b>support@aionsofttech.com</b>
              <Arrow diagonal />
            </a>
            <div className="contact__decoration" aria-hidden="true"><span>A</span><i>✳</i></div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <a className="wordmark wordmark--footer" href="#home">
          <img src="./aion-mark.svg" alt="" width="32" height="32" />
          <span>AION<span className="wordmark__light">SOFT TECH</span></span>
        </a>
        <span className="site-footer__note">Practical AI. Better ways to work.</span>
        <a className="site-footer__top" href="#home">BACK TO TOP ↑</a>
        <span className="site-footer__copyright">© {new Date().getFullYear()} AION Soft Tech</span>
      </footer>
    </>
  );
}

export default App;
