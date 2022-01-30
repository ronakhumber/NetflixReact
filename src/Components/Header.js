import Nav from './Nav.js'

function Header() {
    return ( 
    <header className="header">
    <Nav />
    <article className="header-content">
        <h1 className="header-title">
        Unlimited movies, TV shows, and more.
        </h1>
        <h4 className="header-subtitle">
        Watch anywhere. Cancel anytime.
        </h4>
        <article className="cta">
        <p className="cta-paragraph">
            Ready to watch? Enter your email to create or restart your membership.
        </p>
        <article className="cta-content">
            <input type="email" placeholder="Email adress" />
            <button className="try-button">
            Try 30 Days Free
            </button>
        </article>
        </article>
        <p className="header-summary">
        Only new members are eligible for this offer.
        </p>
    </article>
    </header>
     );
}

export default Header;