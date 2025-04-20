import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { Helmet } from "react-helmet";

export const ProcedureDetail = (props) => {
  const location = useLocation();
  const { pathname } = location;
  const [procedureData, setProcedureData] = useState();

  useEffect(() => {
    setProcedureData(
      props.data.filter((item) => item.link === pathname.split("/")[2])
    );
  }, [procedureData]);

  return (
    <section id="procedure-detail">
      <div className="container">
        <div className="section-title text-center center">
          <h2> {procedureData ? procedureData[0].title : "Loading"}</h2>
          <div className="row">
            <div className="col-xs-12 col-md-6">
              {" "}
              <img
                src="img/about.jpeg"
                className="img-responsive"
                height={500}
                alt=""
              />{" "}
            </div>
            <div className="col-lg-6 col-sm-6 col-xs-12"></div>
          </div>
        </div>
      </div>
    </section>
  );
};
