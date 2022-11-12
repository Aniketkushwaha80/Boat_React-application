import React from 'react';
import "./Footer.css"
import {
  MDBFooter,
  MDBContainer,
  MDBIcon,
  MDBInput,
  MDBCol,
  MDBRow,
  MDBBtn
} from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter className='text-center' color='white' bgColor='black'>
        <div id="slidetext">
    <marquee  scrollamount="12"  behavior="" direction="">No.1 Wireless Hearable Brand In India. No.1 Wireless Hearable Brand In India. </marquee>
</div>


<div id="footer-div1"  className='mb-4'>
  <p>  India's fastest growing audio & wearables brand. The most incredible range of wireless earphones, earbuds, headphones, smart watches, and home audio. From workouts to adventures, boAt will get you sailing!</p>
</div>
        
      <MDBContainer className='p-4'>
     

        <section className=''>
          <MDBRow>
            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
         

              <ul className='list-unstyled mb-0'>
                <li>
                 <img className="footer-logo" src="https://cdn.shopify.com/s/files/1/0057/8938/4802/files/Boat-Logo_200x.png?v=1600753267" alt="" />
                </li>
                <li>
                  <p href='#!' className='text-white'>
                    Link 1
                  </p>
                </li>
              
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Shop</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p href='#!' className='text-white'>
                  True Wireless Earbuds
                  </p>
                </li>
                <li>
                  <p href='#!' className='text-white'>
                  Wireless Headphones
                  </p>
                </li>
                <li>
                  <p href='#!' className='text-white'>
                  Wired Headphones
                  </p>
                </li>
                <li>
                  <p href='#!' className='text-white'>
                  Wireless Speakers
                  </p>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>Help</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p href='#!' className='text-white'>
                  Track Your Order
                  </p>
                </li>
                <li>
                  <p href='#!' className='text-white'>
                  Warranty & Support
                  </p>
                </li>
                <li>
                  <p href='#!' className='text-white'>
                  Return Policy
                  </p>
                </li>
                <li>
                  <p href='#!' className='text-white'>
                  Service Centers
                  </p>
                </li>
              </ul>
            </MDBCol>

            <MDBCol lg='3' md='6' className='mb-4 mb-md-0'>
              <h5 className='text-uppercase'>COMPANY</h5>

              <ul className='list-unstyled mb-0'>
                <li>
                  <p href='#!' className='text-white'>
                  About boat
                  </p>
                </li>
                <li>
                  <p href='#!' className='text-white'>
                  News
                  </p>
                </li>
                <li>
                  <p href='#!' className='text-white'>
                  Read Our Blog
                  </p>
                </li>
                <li>
                  <p href='#!' className='text-white'>
                  Security
                  </p>
                </li>
              </ul>
            </MDBCol>
          </MDBRow>
        </section>
      </MDBContainer>

     <div>
     <MDBFooter bgColor='black' className='text-center text-white text-lg-left'>
      <MDBContainer className='p-4 pb-0'>
        <form action=''>
          <MDBRow className='d-flex justify-content-center'>
            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <p className='pt-2'>
                <strong>Sign up for our newsletter</strong>
              </p>
            </MDBCol>

            <MDBCol md='5' size='12' className='mb-4 mb-md-0'>
              <MDBInput type='text' id='form5Example2' label='Email address' contrast />
            </MDBCol>

            <MDBCol size='auto' className='mb-4 mb-md-0'>
              <MDBBtn outline color='light'>
                Subscribe
              </MDBBtn>
            </MDBCol>
          </MDBRow>
        </form>
      </MDBContainer>

      <div className='text-center p-3' style={{ backgroundColor: 'black' }}>
        &copy; {new Date().getFullYear()} Copyright:{' '}
        <a className='text-white' href='https://mdbootstrap.com/'>
          MDBootstrap.com
        </a>
      </div>
    </MDBFooter>
     </div>
    </MDBFooter>
  );
}