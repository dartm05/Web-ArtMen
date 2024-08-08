export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0 intro-text">
                <h1 style={{ color: "white" }}>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <h2 style={{ color: "white" }}>
                  {props.data ? props.data.subtitle : "Loading"}
                  <span></span>
                </h2>
                <h3 style={{ color: "white" }}>
                  {props.data ? props.data.intro : "Loading"}
                  <span></span>
                </h3>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
                  id="btn-contact"
                >
                  Contact Us
                </a>{" "}
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
