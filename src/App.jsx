import './App.css'
import pam1 from '../assets/pam1.png'
import pam2 from '../assets/pam2.png'
import pam3 from '../assets/pam3.webp'
import pam4 from '../assets/pam4.png'
import pam5 from '../assets/pam5.png'
import pam6 from '../assets/pam6.png'

function App() {
  return (
    <main className="page-shell">
      <section className="hero-layout">
        <div className="hero-text">
          <h1 className="brand-mark">
            <span className="dot-group" aria-hidden="true">
              <span className="dot dot-lg"></span>
              <span className="dot dot-md"></span>
              <span className="dot dot-sm"></span>
            </span>
            HER
            <span className="dot-group dot-group-right" aria-hidden="true">
              <span className="dot dot-sm"></span>
              <span className="dot dot-md"></span>
              <span className="dot dot-lg"></span>
            </span>
          </h1>
          <p className="hero-subtitle">The girl whom I loved the most</p>
          <span className="beating-heart" aria-hidden="true">💗</span>
        </div>
        <div className="portrait-wrap">
          <img src={pam3} alt="Pam portrait" className="portrait" />
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span>💗</span>
        <span className="divider-line"></span>
        <span>💗</span>
      </div>

      <section className="love-section">
        <div className="love-image-wrap">
          <img src={pam1} alt="Pam" className="love-image" />
        </div>
        <div className="love-text">
          <h2 className="love-heading">The Most Beautiful Girl I Have Ever Seen</h2>
          <p className="love-paragraph">
            The moment I saw her, the whole world went quiet. Her smile could light up the darkest of rooms,
            and her eyes held galaxies I wanted to get lost in forever. Every glance from her felt like a
            gentle whisper from the universe telling me she was the one.
          </p>
          <span className="love-emoji" aria-hidden="true">🌸</span>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span>💖</span>
        <span className="divider-line"></span>
        <span>💖</span>
      </div>

      <section className="love-section love-section-reverse">
        <div className="love-image-wrap">
          <img src={pam4} alt="Pam" className="love-image" />
        </div>
        <div className="love-text">
          <h2 className="love-heading">The One Who Made Me Smile Every Single Time</h2>
          <p className="love-paragraph">
            Even on the hardest days, just one look at her and everything felt alright. She had this magic —
            the kind that turned ordinary moments into memories I'd hold onto forever. Her laughter was my
            favorite melody, and her happiness was the only thing that ever truly mattered to me.
          </p>
          <span className="love-emoji" aria-hidden="true">✨</span>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span>💗</span>
        <span className="divider-line"></span>
        <span>💗</span>
      </div>

      <section className="love-section">
        <div className="love-image-wrap">
          <img src={pam5} alt="Pam" className="love-image" />
        </div>
        <div className="love-text">
          <h2 className="love-heading">The Reason I Believed in Forever</h2>
          <p className="love-paragraph">
            Before her, forever was just a word. She made it a feeling — warm, infinite, and real.
            Every second with her felt like a lifetime of happiness wrapped into one beautiful moment.
            She wasn't just my love — she was my home, my peace, and my everything.
          </p>
          <span className="love-emoji" aria-hidden="true">🤍</span>
        </div>
      </section>

      <div className="section-divider" aria-hidden="true">
        <span>💖</span>
        <span className="divider-line"></span>
        <span>💖</span>
      </div>

      <section className="love-section love-section-reverse">
        <div className="love-image-wrap">
          <img src={pam6} alt="Pam" className="love-image" />
        </div>
        <div className="love-text">
          <h2 className="love-heading">The Girl Who Stole My Heart and Kept It Safe</h2>
          <p className="love-paragraph">
            She didn't just walk into my life — she danced into it and changed everything.
            With her gentle soul and fierce heart, she taught me what it means to truly love someone
            more than yourself. My heart was always hers, and it always will be.
          </p>
          <span className="love-emoji" aria-hidden="true">💕</span>
        </div>
      </section>

      <footer className="love-footer">
        <p className="footer-text">Forever & Always 💗</p>
      </footer>
    </main>
  )
}

export default App

