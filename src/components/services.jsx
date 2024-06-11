import { Helmet } from "react-helmet";
export const Services = (props) => {
  return (
    <div id='services' className='text-center'>
      <div className='container'>
        <div className='section-title'>
        <Helmet>
            <title>Dr Luis Arteaga Villa - Plastic Surgery - Our Services</title>
            <meta
              name="description"
              content="Our packages are completely customizable, allowing you to choose the services that best suit your needs."
            />
            <link
              rel="canonical"
              href="https://drluisarteagavilla.com/services"
            />
          </Helmet>
          <h2>Our Services</h2>
          <p>
            Here are some of the services included in our packages
          </p>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4'>
                  {' '}
                  <i className={d.icon}></i>
                  <div className='service-desc'>
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
