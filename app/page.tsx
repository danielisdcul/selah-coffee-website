const featuredDrinks = [
  {
    name: "Golden Hour Latte",
    notes: "Turmeric · honey · oat milk",
    price: "$6",
  },
  {
    name: "Selah Cold Brew",
    notes: "Slow steeped · smooth finish",
    price: "$5.50",
  },
  {
    name: "Rosemary Vanilla",
    notes: "Espresso · vanilla · rosemary",
    price: "$6",
  },
];

const values = [
  {
    number: "01",
    title: "Thoughtful sourcing",
    copy: "We choose ingredients and coffee with intention, prioritizing quality, responsible partnerships, and practices that respect the people behind every cup.",
  },
  {
    number: "02",
    title: "Creative community",
    copy: "We collaborate with local artists, makers, and small businesses—creating opportunities for their work to be experienced, appreciated, and supported.",
  },
  {
    number: "03",
    title: "Room to pause",
    copy: "Selah is designed as a place to slow down. From the atmosphere to the service, every detail makes room for reflection, conversation, and genuine connection.",
  },
];

function Brand({ footer = false }: { footer?: boolean }) {
  return (
    <span className={footer ? "brand brand--footer" : "brand"}>
      {!footer && <img className="brand__mark" src="/selah-mark.svg" alt="" />}
      <img className="brand__wordmark" src="/selah-wordmark.png" alt="" />
    </span>
  );
}

export default function Home() {
  return (
    <main id="top">
      <header className="site-header">
        <a href="#top" aria-label="Selah Coffee home">
          <Brand />
        </a>

        <nav className="site-nav" aria-label="Primary navigation">
          <a href="#story">Our story</a>
          <a href="#menu">Menu</a>
          <a href="#shop">Shop</a>
          <a href="#visit">Visit</a>
        </nav>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <img
          className="hero__image"
          src="/selah-cafe-hero.png"
          alt="Guests enjoying coffee inside Selah Coffee's warm, arched café"
        />
        <div className="hero__shade" aria-hidden="true" />
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">A community-first coffee house</p>
          <h1 id="hero-title">
            Start with coffee.
            <br />
            Stay for company.
          </h1>
          <p className="hero__intro">
            Settle into a quiet corner, pull up to the table, or find somewhere
            in between. There&apos;s room here for focus, conversation, and simply
            being around others.
          </p>
        </div>
      </section>

      <section className="visit" id="visit" aria-labelledby="visit-title">
        <div>
          <p className="eyebrow eyebrow--light">Find us</p>
          <h2 id="visit-title">
            Come as you are.
            <br />
            Stay awhile.
          </h2>
        </div>

        <div className="visit__details">
          <div>
            <span>Find us</span>
            <p>
              1234 Grand Ave.
              <br />
              San Diego, California
            </p>
          </div>
          <div>
            <span>Hours</span>
            <p>
              Mon–Fri 7am–8pm
              <br />
              Sat–Sun 8am–5pm
            </p>
          </div>
          <a
            className="outline-button outline-button--light visit__button"
            href="https://www.google.com/maps/search/?api=1&query=1234+Grand+Ave+San+Diego+California"
            target="_blank"
            rel="noreferrer"
          >
            Get directions
          </a>
        </div>
      </section>

      <section className="story" id="story" aria-labelledby="story-title">
        <div className="story__lead">
          <div>
            <p className="eyebrow">What guides us</p>
            <h2 id="story-title">
              <em>Care</em> in every detail
            </h2>
          </div>
          <p>
            Everything at Selah begins with intention—from the coffee we serve
            to the people we collaborate with and the space we create. Our
            values reflect a commitment to thoughtful sourcing, creative
            community, and making room for moments that matter.
          </p>
        </div>

        <div className="values" aria-label="Selah Coffee values">
          {values.map((value) => (
            <article className="value" key={value.number}>
              <h3>
                {value.number} — {value.title}
              </h3>
              <p>{value.copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="menu-feature" id="menu" aria-labelledby="menu-title">
        <div className="menu-feature__image">
          <img
            src="/selah-menu-tile.png"
            alt="A framed Selah menu on a sunlit cream wall"
          />
        </div>

        <div className="menu-feature__content">
          <p className="eyebrow eyebrow--light">House favorites</p>
          <h2 id="menu-title">
            Made to savor,
            <br />
            <em>never to rush.</em>
          </h2>

          <div className="drink-list">
            {featuredDrinks.map((drink) => (
              <article className="drink" key={drink.name}>
                <div>
                  <h3>{drink.name}</h3>
                  <p>{drink.notes}</p>
                </div>
                <span>{drink.price}</span>
              </article>
            ))}
          </div>

          <a
            className="outline-button outline-button--light"
            href="/selah-menu-board.png"
            target="_blank"
            rel="noreferrer"
          >
            View full menu
          </a>
        </div>
      </section>

      <section className="name-story" aria-labelledby="name-story-title">
        <div>
          <p className="eyebrow">The meaning behind our name</p>
          <h2 id="name-story-title">
            <em>Pause,</em> and let the
            <br />
            moment settle.
          </h2>
        </div>

        <div className="name-story__copy">
          <p>
            Selah is a Hebrew term woven throughout the Psalms. Often
            understood as a musical or reflective pause, it invites the listener
            to stop, breathe, and consider what has just been heard.
          </p>
          <p>
            That same spirit guides our coffee house, a place to slow down,
            become present, and make room for the moment you&apos;re in.
          </p>
        </div>
      </section>

      <section className="shop" id="shop" aria-labelledby="shop-title">
        <div className="shop__copy">
          <p className="eyebrow">Made here, with care</p>
          <h2 id="shop-title">
            Locally
            <br />
            crafted
            <br />
            artisan goods.
          </h2>
          <p>
            Our shelves are shaped by the artists and makers in our community.
            We partner with local creatives to offer handmade ceramics,
            textiles, prints, and everyday goods—each one thoughtfully made and
            chosen to bring a little more beauty to the daily ritual.
            <br />
            Every purchase celebrates independent craft and supports the people
            who make our community more creative.
          </p>

          <div className="shop__actions">
            <a className="outline-button" href="#shop">
              Explore the shop <span aria-hidden="true">→</span>
            </a>
            <a className="outline-button" href="mailto:hello@selahcoffee.com?subject=Meet%20the%20artists">
              Meet the artists <span aria-hidden="true">→</span>
            </a>
          </div>
        </div>

        <div className="shop__image">
          <img
            src="/selah-merch.png"
            alt="Locally made ceramics, coffee goods, and a white T-shirt arranged on a sunlit wall"
          />
          <span>Locally crafted goods</span>
        </div>
      </section>

      <footer className="site-footer">
        <a href="#top" aria-label="Selah Coffee home">
          <Brand footer />
        </a>

        <nav className="footer-links" aria-label="Footer navigation">
          <a href="#story">Our story</a>
          <a href="#menu">Menu</a>
          <a href="#shop">Shop</a>
          <a href="#visit">Visit</a>
        </nav>

        <div className="footer-links">
          <a href="https://www.instagram.com/" target="_blank" rel="noreferrer">
            Instagram
          </a>
          <a href="mailto:hello@selahcoffee.com">Email</a>
        </div>

        <div className="site-footer__bottom">
          <span>© 2026 Selah Coffee</span>
          <span>Good coffee. Peaceful moments.</span>
          <a href="#top">Back to top ↑</a>
        </div>
      </footer>
    </main>
  );
}
