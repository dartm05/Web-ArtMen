
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
          
       

          <a href="#" className="navbar-brand">
          <img  src="img/logo.png" alt="" width="24" height="24" class="inline-block"/>
          </a>
          <a className='navbar-brand page-scroll' href='#page-top'>
            <span className="d-lg-inline-block d-none">Dr Luis Arteaga Villa</span>
        
          </a>{' '}
     
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
              <a href='#features' className='page-scroll'>
                Procedures
              </a>
            </li>
           
            <li>
              <a href='#services' className='page-scroll'>
                Services
              </a>
            </li>
            <li>
              <a href='#portfolio' className='page-scroll'>
                Gallery
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

            <li><a href="https://instagram.com/dr.luis_arteaga?utm_medium=copy_link"><i className='fa fa-instagram fa-2x'  aria-hidden="true"></i></a>
            
            </li>
          </ul>
        </div>
      </div>
    </nav>
  )
}
