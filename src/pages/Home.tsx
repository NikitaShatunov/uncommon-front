const Home = () => {
  return (
    <div className="home__wrapper">
      <div className="logoContainer">
        <img src="/img/bgphoto.svg" alt="bgphoto" />
      </div>
      <div className="signature__container"><div className="content">
        Discover a world of unparalleled style at Uncommon – your exclusive
        destination for rare streetwear treasures. Immerse yourself in the
        essence of fashion's avant-garde. Elevate your wardrobe with
        extraordinary pieces that defy convention and embrace the extraordinary.
        Unveil your unique identity through Uncommon's curated selection of
        exceptional shoes and apparel, where every piece tells a story of
        individuality and daring expression.
      </div></div>
      <h1>New collection:</h1>
      <div className="imageContainer">
       <div> <img src="/img/newCollection/image1.svg" alt="image1" /></div>
      <div>  <img src="/img/newCollection/image2.svg" alt="image2" /></div>
      <div><img src="/img/newCollection/image3.svg" alt="image3" /></div>
      </div>
      <h3>we are uncommon</h3>
      <img className="rockimg" src="/img/rock.svg" alt="rock" />
      <div style={{marginTop: 110}}><a href="/catalog">catalog</a></div>
    </div>
  )
}

export default Home
