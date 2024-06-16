import { Helmet } from "react-helmet";
export const Header = (props) => {
  return (
    <header id="header">
      <div className="intro">
        <div className="overlay">
          <div className="container">
            <div className="row">
              <div className="col-md-8 col-md-offset-0 intro-text">
                <Helmet>
                  <title>Dr Luis Arteaga Villa - Plastic Surgery in Colombia</title>
                  <meta
                    name="description"
                    content="Discover top plastic surgery in Colombia with Dr. Luis Arteaga. Achieve stunning results with expert care in a beautiful setting. Contact us!"
                  />
                  <link
                    rel="canonical"
                    href="https://drluisarteagavilla.com/"
                  />
                  <meta name="keywords" content="plastic surgery, Colombia, tummy tuck, breast reduction, breast implants, buttocks enhancement, liposuction" />
                </Helmet>
                <h1>
                  {props.data ? props.data.title : "Loading"}
                  <span></span>
                </h1>
                <p>{props.data ? props.data.paragraph : "Loading"}</p>
                <a
                  href="#contact"
                  className="btn btn-custom btn-lg page-scroll"
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
