export const Stay = (props) => {
  return (
    <div id='stay' className='text-center'>
      <div className='container'>
        <div className='col-md-8 col-md-offset-2 section-title'>
          <h2>About your stay</h2>
          <p>
            Our hotel is located in Cartagena de Indias, at 1.6 km from the beach and close to various places of interest such as San Felipe de Barajas, La Popa and The Gold Museum.
          </p>
        </div>
        <div id='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className='col-md-4 col-sm-6 stay'>
                  <div className='thumbnail'>
                    {' '}
                    <img src={d.img} alt='...' className='stay-img' />
                 
                  </div>
                </div>
              ))
            : 'loading'}
        </div>
      </div>
    </div>
  )
}
