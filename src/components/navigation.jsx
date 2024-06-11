
export const Navigation = (props) => {
  return (
    <nav id='menu' className='navbar navbar-default navbar-fixed-top'>
      <div className='container'>
        <div className='navbar-header'>
          <button
            type='button'
            className='navbar-toggle collapsed'
            data-toggle='collapse'
            data-target='#bs-example-navbar-collapse-1'
          >
            {' '}
            <span className='sr-only'>Toggle navigation</span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
            <span className='icon-bar'></span>{' '}
          </button>
          
       
          <a className='navbar-brand page-scroll' href='#page-top'>
          
            <img  src="img/logoFinal.png" alt="" width="139" height="35" class="inline-block"/>
          </a>
     
        </div>

        <div
          className='collapse navbar-collapse'
          id='bs-example-navbar-collapse-1'
        >
          <ul className='nav navbar-nav navbar-right'>
          <li>
              <a href='#about' className='page-scroll'>
                About
              </a>
            </li>
            <li>
              <a href='#procedures' className='page-scroll'>
                Procedures
              </a>
            </li>
           
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#team' className='page-scroll'>
                Stay
              </a>
            </li>
            <li>
              <a href='#contact' className='page-scroll'>
                Contact
              </a>
            </li>

            <li><a href="https://www.instagram.com/drluisarteaga"><i className='fa fa-instagram fa-2x'  aria-hidden="true"></i></a>
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
