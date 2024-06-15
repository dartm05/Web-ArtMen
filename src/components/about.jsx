import { Helmet } from "react-helmet";
export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            <img src="img/about.jpeg" className="img-responsive" alt="" />{" "}
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
            <Helmet>
                  <title>
                    Dr Luis Arteaga Villa - Plastic Surgery - About Us
                  </title>
                  <meta
                    name="description"
                    content="Our offers include a wide range of procedures: breast augmentation, breast reduction, tummy tuck, liposuction, buttocks enhancement and various face procedures."
                  />
                  <link
                    rel="canonical"
                    href="https://drluisarteagavilla.com/about"
                  />
                </Helmet>
              <h2>About Us</h2>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
             
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
