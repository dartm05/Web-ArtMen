export const Features = (props) => {
  return (
    <div id='features' className='text-center'>
      <div className='container'>
        <div className='col-md-10 col-md-offset-1 section-title'>
          <h2>Procedures</h2>
        </div>
        <div className='row'>
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className='col-xs-12 col-md-4'>
                  {' '}
                  <figure className="figure" >
                  <img  src={d.img} alt='...' className='team-img'  />
                 </figure>
                  <h3 className="title-procedure">{d.title}</h3>
                  
                </div>
              ))
            : 'Loading...'}
        </div>
      </div>
    </div>
  )
}
