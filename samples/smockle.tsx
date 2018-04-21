import * as React from "react";
export const index = () => {
  return (
    <body className="sans-loaded serif-loaded">
      <section className="hero" id="hero">
        <div className="wrapper">
          <header>
            <h1 className="big">SALUT!</h1>
            <em>I’m</em>
            <h1>Clay Miller.</h1>
          </header>
          <picture className="profile">
            <source
              media="(min-width: 50em)"
              srcSet="images/silhouette.webp 485w, images/silhouette@2x.webp 970w"
              type="image/webp"
            />
            <source
              media="(min-width: 50em)"
              srcSet="images/silhouette.jpf 485w, images/silhouette@2x.jpf 970w"
              type="image/jp2"
            />
            <source
              media="(min-width: 50em)"
              srcSet="images/silhouette.png 485w, images/silhouette@2x.png 970w"
              type="image/png"
            />
            <img
              alt="Clay Miller"
              srcSet="data:image/gif;base64,R0lGODlhAQABAAAAACH5BAEKAAEALAAAAAABAAEAAAICTAEAOw=="
            />
          </picture>
        </div>
      </section>

      <section className="build alternate" id="work">
        <div className="wrapper">
          <h1>Builder.</h1>
          <p>I love making connections between people and ideas.</p>

          <p>
            The most interesting topics—human-computer interaction, machine
            learning, cryptocurrencies, gene editing, behavioral economics,
            housing policy & effective altruism—connect unconnected ideas.
          </p>

          <p>
            Each topic provides an opportunity to synthesize insights and
            experiences from people around the world. I want to travel and learn
            from them.
          </p>

          <p>
            My work should have a multiplicative effect. I want to use what I
            learn to create opportunities for other people. I want to build
            things that endure.
          </p>
        </div>
      </section>

      <section className="explore" id="play">
        <div className="wrapper">
          <h1>Curator.</h1>
          <h2>Books</h2>
          <ul>
            <li>
              <a href="https://smile.amazon.com/Master-Margarita-Mikhail-Bulgakov-ebook/dp/B01GSQ8E9I/ref=tmm_kin_swatch_0?_encoding=UTF8&qid=1500368821&sr=8-1">
                <i>The Master and Margarita</i>
              </a>
              <small>by</small> Mikhail Bulgakov
            </li>
            <li>
              <a href="https://smile.amazon.com/Intelligent-Investor-Collins-Business-Essentials-ebook/dp/B000FC12C8/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1500368915&sr=1-1">
                <i>The Intelligent Investor</i>
              </a>
              <small>by</small> Benjamin Graham
            </li>
            <li>
              <a href="https://smile.amazon.com/Thinking-Fast-Slow-Daniel-Kahneman-ebook/dp/B00555X8OA/ref=sr_1_1_ha?s=digital-text&ie=UTF8&qid=1500369009&sr=1-1">
                <i>Thinking, Fast and Slow</i>
              </a>
              <small>by</small> Daniel Kahneman
            </li>
            <li>
              <a href="https://smile.amazon.com/Norwegian-Vintage-International-Haruki-Murakami-ebook/dp/B003XT603Q/ref=sr_1_1_ha?s=digital-text&ie=UTF8&qid=1500369071&sr=1-1">
                <i>Norwegian Wood</i>
              </a>
              <small>by</small> Haruki Murakami
            </li>
            <li>
              <a href="https://smile.amazon.com/Infinite-Jest-David-Foster-Wallace-ebook/dp/B000S1M9LY/ref=sr_1_1?s=digital-text&ie=UTF8&qid=1500369110&sr=1-1">
                <i>Infinite Jest</i>
              </a>
              <small>by</small> David Foster Wallace
            </li>
          </ul>

          <h2>Articles</h2>
          <ul>
            <li>
              <a href="http://slatestarcodex.com/2017/06/08/ssc-journal-club-ai-timelines/">
                <i>“SSC Journal Club: AI Timelines”</i>
              </a>
              <small>by</small> Scott Alexander
            </li>
            <li>
              <a href="https://douthat.blogs.nytimes.com/2017/07/06/should-tyler-cowen-believe-in-god/">
                <i>“Should Tyler Cowen Believe in God?”</i>
              </a>
              <small>by</small> Ross Douthat
            </li>
            <li>
              <a href="https://juliagalef.com/2017/07/13/should-we-build-lots-more-housing-in-san-francisco-three-reasons-people-disagree/">
                <i className="mobile-only">
                  “Should we build lots more housing in San Francisco? Three
                  reasons people disagree”
                </i>
                <i className="desktop-only">
                  “Should we build lots more housing in San Francisco…”
                </i>
              </a>
              <small>by</small> Julia Galef
            </li>
            <li>
              <a href="http://www.philosophicaleconomics.com/2017/04/diversification-adaptation-and-stock-market-valuation/">
                <i className="mobile-only">
                  “Diversification, Adaptation, and Stock Market Valuation”
                </i>
                <i className="desktop-only">
                  “Diversification, Adaptation, and…Market Valuation”
                </i>
              </a>
              <small>by</small> Jesse Livermore
            </li>
            <li>
              <a href="https://mereorthodoxy.com/benedict-option-political-theology/">
                <i className="mobile-only">
                  “Indexing Political Theologies: Six Christianity and Culture
                  Strategies”
                </i>
                <i className="desktop-only">
                  “Indexing…: Six Christianity and Culture Strategies”
                </i>
              </a>
              <small>by</small> Jake Meador
            </li>
            <li>
              <a href="https://fivethirtyeight.blogs.nytimes.com/2013/01/16/what-is-driving-growth-in-government-spending/">
                <i>“What Is Driving Growth in Government Spending?”</i>
              </a>
              <small>by</small> Nate Silver
            </li>
            <li>
              <a href="https://www.cato-unbound.org/2017/06/07/alex-tabarrok/making-markets-work-better-dominant-assurance-contracts-some-other-helpful">
                <i className="mobile-only">
                  “Making Markets Work Better: Dominant Assurance Contracts and
                  Some Other Helpful Ideas”
                </i>
                <i className="desktop-only">
                  “Making Markets…: Dominant Assurance Contracts…”
                </i>
              </a>
              <small>by</small> Alex Tabarrok
            </li>
            <li>
              <a href="https://stratechery.com/2017/amazons-new-customer/">
                <i>“Amazon’s New Customer”</i>
              </a>
              <small>by</small> Ben Thompson
            </li>
            <li>
              <a href="http://danwang.co/college-girardian-terror/">
                <i className="mobile-only">
                  “Violence and the Sacred: College as an incubator of Girardian
                  terror”
                </i>
                <i className="desktop-only">
                  “Violence and the Sacred: College as…Girardian terror”
                </i>
              </a>
              <small>by</small> Dan Wang
            </li>
          </ul>

          <h2>Podcasts</h2>
          <ul>
            <li>
              <a href="https://a16z.com/2017/06/28/machine-platform-crowd/">
                <i>“Companies, Networks, Crowds”</i>
              </a>
              <small>on</small>
              <i>a16z Podcast</i>
            </li>
            <li>
              <a href="https://medium.com/conversations-with-tyler/fuchsia-dunlop-sichuan-cuisine-every-grain-of-rice-e13922e8a784">
                <i>“A Conversation with Fuchsia Dunlop”</i>
              </a>
              <small>on</small>
              <i>Conversations with Tyler</i>
            </li>
            <li>
              <a href="https://medium.com/conversations-with-tyler/patrick-collison-stripe-podcast-tyler-cowen-books-3e43cfe42d10">
                <i className="mobile-only">
                  “Patrick Collison has a Few Questions for Tyler”
                </i>
                <i className="desktop-only">
                  “Patrick Collison has…Questions for Tyler”
                </i>
              </a>
              <small>on</small>
              <i>Conversations with Tyler</i>
            </li>
            <li>
              <a href="http://www.econtalk.org/archives/2017/06/don_boudreaux_m.html">
                <i>“Emergent Order”</i>
              </a>
              <small>on</small>
              <i>EconTalk</i>
            </li>
            <li>
              <a href="https://ftalphaville.ft.com/2016/12/02/2180715/podcast-keynes-vs-hayek-whos-winning-now/">
                <i>“Keynes vs Hayek — who’s winning now?”</i>
              </a>
              <small>on</small>
              <i>Financial Times Alphachat</i>
            </li>
            <li>
              <a href="http://www.sfyimby.org/infill-the-yimby-podcast/2017/4/2/at-home-with-supervisor-tang">
                <i>“At Home with Supervisor Tang”</i>
              </a>
              <small>on</small>
              <i>Infill: SF YIMBY Podcast</i>
            </li>
            <li>
              <a href="https://www.bloomberg.com/news/audio/2016-10-28/ritholtz-s-masters-in-business-aswath-damodaran-interview">
                <i>“Aswath Damodaran Interview”</i>
              </a>
              <small>on</small>
              <i className="mobile-only">
                Masters in Business on Bloomberg Radio
              </i>
              <i className="desktop-only">
                Masters in Business: Bloomberg Radio
              </i>
            </li>
          </ul>
        </div>
      </section>

      <section className="connect alternate" id="connect">
        <div className="wrapper">
          <h1>Networker.</h1>
          <div className="connectIcons">
            <a href="https://twitter.com/smockled" title="Twitter">
              <img
                alt="Twitter"
                className="connectIcon"
                src="images/twitter.svg"
              />
            </a>
            <a href="https://github.com/smockle" title="GitHub">
              <img
                alt="GitHub"
                className="connectIcon"
                src="images/github.svg"
              />
            </a>
            <a href="mailto:clay@smockle.com" title="Email">
              <img alt="Email" className="connectIcon" src="images/email.svg" />
            </a>
            <a
              href="http://stackoverflow.com/users/1923134/smockle"
              title="Stack Overflow"
            >
              <img
                alt="Stack Overflow"
                className="connectIcon"
                src="images/stack-overflow.svg"
              />
            </a>
            <a href="https://linkedin.com/in/smockle" title="LinkedIn">
              <img
                alt="LinkedIn"
                className="connectIcon"
                src="images/linkedin.svg"
              />
            </a>
          </div>
        </div>
      </section>
    </body>
  );
};
