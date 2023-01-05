const Hero = () => (
  <div
    className="p-5 text-center bg-image d-flex justify-content-center align-items-center"
    style={{
      backgroundImage:
        "url('https://i.picsum.photos/id/238/2560/1440.jpg?hmac=wKo4dLHwDntZmO_fdtnKtsnmRcPMACca3m5J5vx2AVc')",
      height: 600,
    }}
  >
    <div className="mask" style={{ backgroundColor: '#1f293790' }}>
      <div className="d-flex justify-content-center align-items-center h-100 p-5">
        <div className="text-white">
          <h1 className="mb-3">This website is awesome</h1>
          <h4 className="mb-3">
            This website has some subtext that goes here under the main title.
          </h4>
          <a className="btn btn-outline-light btn-lg" href="#!" role="button">
            Call to action
          </a>
        </div>
      </div>
    </div>
  </div>
)

export default Hero
