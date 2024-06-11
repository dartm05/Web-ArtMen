import { Helmet } from "react-helmet";
export const Features = (props) => {
  return (
    <div id="procedures" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <Helmet>
            <title>Dr Luis Arteaga Villa - Plastic Surgery - Procedures</title>
            <meta
              name="description"
              content="Our offers include a wide range of procedures: breast augmentation, breast reduction, tummy tuck, liposuction, buttocks enhancement and various face procedures."
            />
            <link
              rel="canonical"
              href="https://drluisarteagavilla.com/procedures"
            />
            <meta name="keywords" content="breast augmentation, breast reduction, tummy tuck, liposuction, buttocks enhancement" />
          </Helmet>
          <h2>Procedures</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-12 col-md-4">
                  {" "}
                  <figure className="figure">
                    <img src={d.img} alt="..." className="team-img" />
                  </figure>
                  <h3 className="title-procedure">{d.title}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
