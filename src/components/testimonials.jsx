export const Testimonials = (props) => {
  return (
    <div id="testimonials">
      <div className="container">
        <div className="text-center">
          <h2>- What our clients say - </h2>
        </div>
        <div className="row">
          <div className="container video-container">
            <div className="testimonial-wrapper">
              <div className="testimonial-video">
                <video
                  src="https://66b3b0a24bc7580a0bc21022--drluisarteagavilla-video.netlify.app/"
                  type="video/mp4"
                  autoPlay
                  muted
                  loop
                  preload="auto"
                ></video>
              </div>
            </div>
            <div className="testimonial-wrapper">
              <div className="testimonial-video">
                <iframe
                  width="360"
                  height="515"
                  src="https://youtube.com/embed/7rBDXb05C9c"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
            <div className="testimonial-wrapper">
              <div className="testimonial-video">
                <iframe
                  width="360"
                  height="515"
                  src="https://youtube.com/embed/7rBDXb05C9c"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
