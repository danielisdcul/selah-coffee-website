const featuredDrinks = [
  { name: "Golden Hour Latte", notes: "Turmeric · honey · oat milk", price: "$6" },
  { name: "Selah Cold Brew", notes: "Slow steeped · smooth finish", price: "$5.50" },
  { name: "Rosemary Vanilla", notes: "Espresso · vanilla · rosemary", price: "$6" },
];

export default function Home() {
  return (
    <main>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="Selah Coffee home">
          <span className="brand-name">SELAH</span>
          <span className="brand-sub">COFFEE</span>
        </a>
        <nav className="desktop-nav" aria-label="Primary navigation">
          <a href="#story">Our story</a>
          <a href="#menu">Menu</a>
          <a href="#merch">Shop</a>
          <a href="#visit">Visit</a>
        </nav>
        <a className="header-cta" href="#menu">Order online <span aria-hidden="true">↗</span></a>
      </header>

      <section className="hero" id="top" aria-labelledby="hero-title">
        <img src="/selah-cafe-hero.png" alt="Warm, sunlit interior of Selah Coffee with arched walls and guests at cafe tables" />
        <div className="hero-shade" />
        <div className="hero-content">
          <p className="eyebrow light">A neighborhood coffee house</p>
          <h1 id="hero-title">Make room for<br /><em>a slower moment.</em></h1>
          <div className="hero-bottom">
            <p>Thoughtfully sourced coffee, simple food, and a warm place to pause.</p>
            <a className="round-link" href="#visit" aria-label="Plan your visit">
              <span>Visit us</span><span aria-hidden="true">↓</span>
            </a>
          </div>
        </div>
      </section>

      <section className="intro section-pad" id="story">
        <p className="eyebrow">Good coffee, peaceful moments</p>
        <div className="intro-grid">
          <h2>A daily ritual,<br />made with intention.</h2>
          <div className="intro-copy">
            <p>Selah is a place to stop, breathe, and be present. We make coffee with care and spaces that feel easy to settle into.</p>
            <a className="text-link" href="#menu">See what we&apos;re pouring <span aria-hidden="true">→</span></a>
          </div>
        </div>
        <div className="story-notes" aria-label="Our values">
          <span>01 <strong>Seasonal ingredients</strong></span>
          <span>02 <strong>Responsible sourcing</strong></span>
          <span>03 <strong>Made for community</strong></span>
        </div>
      </section>

      <section className="menu-feature" id="menu">
        <div className="menu-image-wrap">
          <img src="/selah-menu-tile.png" alt="Framed Selah menu sign on a warm cream wall" />
          <span className="image-label">Our menu</span>
        </div>
        <div className="menu-copy">
          <p className="eyebrow light">House favorites</p>
          <h2>Made to savor,<br /><em>never to rush.</em></h2>
          <div className="drink-list">
            {featuredDrinks.map((drink) => (
              <div className="drink" key={drink.name}>
                <div><h3>{drink.name}</h3><p>{drink.notes}</p></div>
                <span>{drink.price}</span>
              </div>
            ))}
          </div>
          <a className="button-light" href="/selah-menu-board.png" target="_blank" rel="noreferrer">View full menu <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <section className="quote section-pad">
        <span className="steam-mark" aria-hidden="true">∿</span>
        <blockquote>“Selah” is an invitation to pause —<br />to notice the moment you&apos;re in.</blockquote>
      </section>

      <section className="merch section-pad" id="merch">
        <div className="merch-copy">
          <p className="eyebrow">A little Selah, to go</p>
          <h2>Objects for<br /><em>slow living.</em></h2>
          <p>Everyday pieces, small-batch coffee, and thoughtful goods inspired by the rhythms of the café.</p>
          <a className="button-dark" href="#visit">Explore the shop <span aria-hidden="true">→</span></a>
        </div>
        <div className="merch-image">
          <img src="/selah-merch.png" alt="Cream Selah merchandise display with a white shirt, ceramics, plants, and coffee bags" />
          <div className="product-card">
            <span>Selah Everyday Tee</span><strong>$28</strong>
          </div>
        </div>
      </section>

      <section className="visit" id="visit">
        <div className="visit-heading">
          <p className="eyebrow light">Come sit awhile</p>
          <h2>Your table<br />is waiting.</h2>
        </div>
        <div className="visit-details">
          <div><span>Find us</span><p>412 Willow Street<br />Pasadena, California</p></div>
          <div><span>Hours</span><p>Mon–Fri &nbsp; 7am–5pm<br />Sat–Sun &nbsp; 8am–4pm</p></div>
          <a className="map-link" href="https://maps.google.com" target="_blank" rel="noreferrer">Get directions <span aria-hidden="true">↗</span></a>
        </div>
      </section>

      <footer>
        <div className="footer-brand"><span>SELAH</span><small>COFFEE</small></div>
        <div className="footer-links"><a href="#story">Our story</a><a href="#menu">Menu</a><a href="#merch">Shop</a><a href="#visit">Visit</a></div>
        <div className="footer-social"><a href="#top">Instagram</a><a href="mailto:hello@selahcoffee.com">Email</a></div>
        <div className="footer-bottom"><span>© 2026 Selah Coffee</span><span>Good coffee, peaceful moments.</span><a href="#top">Back to top ↑</a></div>
      </footer>
    </main>
  );
}
