
import './styles.css'

export default function Home() {
  return (
    <main>
      <section className="hero">
        <div className="hero-text">
          <p className="mini">Apostrophy Creative</p>
          <h1>
            Dream.<br/>
            <span>Create. Believe. 🤍</span>
          </h1>

          <p className="desc">
            Soft aesthetic personalized gifts for birthdays, graduations,
            anniversaries & unforgettable memories.
          </p>

          <div className="buttons">
            <a className="btn filled">Shop Gifts ✨</a>
            <a className="btn outline">Graduation Gifts 🎓</a>
          </div>
        </div>

        <div className="hero-image"></div>
      </section>

      <section className="section">
        <h2>Shop By Occasion ✨</h2>

        <div className="occasion-grid">
          <div className="occasion-card">Birthday 🎂</div>
          <div className="occasion-card">Graduation 🎓</div>
          <div className="occasion-card">Anniversary 💕</div>
          <div className="occasion-card">Farewell 🤍</div>
          <div className="occasion-card">Friendship ✨</div>
        </div>
      </section>

      <section className="section soft">
        <h2>Most Loved Gifts 🤍</h2>

        <div className="products">
          <div className="product-card">
            <div className="placeholder"></div>
            <h3>Birthday Surprise Box 🎀</h3>
            <p>Personalized aesthetic gifts made with love & memories.</p>
          </div>

          <div className="product-card">
            <div className="placeholder"></div>
            <h3>Graduation LEGO Frame 🎓</h3>
            <p>Perfect sentimental graduation gift ideas.</p>
          </div>

          <div className="product-card">
            <div className="placeholder"></div>
            <h3>Anniversary Memory Frame 💕</h3>
            <p>Romantic personalized gifts for special moments.</p>
          </div>
        </div>
      </section>

      <section className="graduation">
        <p className="mini">Graduation Spotlight</p>

        <h2>Made for unforgettable convocation moments 🎓</h2>

        <p className="desc center">
          Personalized graduation gifts inspired by emotional memories,
          university milestones & meaningful moments.
        </p>
      </section>

      <section className="section">
        <h2>Customer Love 🥹</h2>

        <div className="reviews">
          <div className="review">“She literally cried opening this 😭”</div>
          <div className="review">“Best graduation gift ever.”</div>
          <div className="review">“Looks prettier in real life 🤍”</div>
        </div>
      </section>

      <section className="cta">
        <h2>Ready to surprise someone? ✨</h2>

        <p>Personalized gifts made with memories & love.</p>

        <a
          href="https://wa.me/601113165425"
          className="btn filled"
        >
          Customize Yours 🤍
        </a>
      </section>
    </main>
  )
}
