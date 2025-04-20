import { Flipcard } from "./flip-card";

export const Catalogue = (props) => {
  return (
    <div id="procedures" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <h2>Our Catalogue</h2>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((procedure, index) => (
                <div className="col-md-4 col-sm-6" key={index}>
                  <div className="container-procedure">
                    <Flipcard
                      imgsrc={procedure.img}
                      description={procedure.description}
                    />
                  </div>
                  <h3 className="title-procedure">{procedure.title}</h3>
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
