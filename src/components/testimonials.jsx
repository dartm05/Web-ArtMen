export const Testimonials = (props) => {
  return (
    <div id="testimonials"> 
      <div className="container">
        <div className="text-center">
          <h2>- What our clients say - </h2>
        </div>
        <div className="row">
          <div className="container">
            <div className="col-md-4 col-sm-6">
              <div className="testimonial-wrapper">
                <div className="testimonial-video">
                  <iframe
                    src="https://youtube.com/embed/Homqh-hB7kU"
                    title="Dr Luis Arteaga Explains Tummy Tuck"
                    type="video/mp4"
                    width="360"
                    height="515"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>

            <div className="col-md-4 col-sm-6">
              <div className="testimonial-wrapper">
                <div className="testimonial-video">
                  <iframe
                    width="360"
                    height="515"
                    src="https://youtube.com/embed/7rBDXb05C9c"
                    title="Testimonial from a patient: Giselle"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
            <div className="col-md-4 col-sm-6">
              <div className="testimonial-wrapper">
                <div className="testimonial-video">
                  <iframe
                    width="360"
                    height="515"
                    src="https://youtube.com/embed/FJiblyuLcdc"
                    title="Testimonial from a patient: Alexka"
                    style={{ border: 0 }}
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                  ></iframe>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
