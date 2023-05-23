import React from 'react';
import { MDBFooter, MDBContainer, MDBRow, MDBCol, MDBIcon } from 'mdb-react-ui-kit';

export default function Footer() {
  return (
    <MDBFooter bgColor='light' className='text-center text-lg-start text-muted '>
           <hr/>
            <section className=''>
        <MDBContainer className='text-center text-md-start mt-5'>
          <MDBRow className='mt-3'>
            <MDBCol md='3' lg='4' xl='3' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>
                <MDBIcon color='secondary' icon='gem' className='me-3' />
                <span style={{marginLeft: '10px',color:'black'}}>Pizza Pilot</span> 
              </h6>
              <p>
              Order a delicious pizza on the go, anywhere, anytime. Every time you order, you get a hot and fresh pizza delivered.
              </p>
            </MDBCol>

            <MDBCol md='2' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  About
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Home
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  FAQ
                </a>
              </p>
            </MDBCol>

            <MDBCol md='3' lg='2' xl='2' className='mx-auto mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Useful links</h6>
              <p>
                <a href='#!' className='text-reset'>
                  Pricing
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Settings
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Orders
                </a>
              </p>
              <p>
                <a href='#!' className='text-reset'>
                  Help
                </a>
              </p>
            </MDBCol>

            <MDBCol md='4' lg='3' xl='3' className='mx-auto mb-md-0 mb-4'>
              <h6 className='text-uppercase fw-bold mb-4'>Contact</h6>
              <p>
                <MDBIcon color='secondary' icon='home' className='me-2' />
                Bhopal Madhya pradesh 462003
              </p>
              <p>
                <MDBIcon color='secondary' icon='envelope' className='me-3' />
                info@PizzaPilot.com
              </p>
              <p>
                <MDBIcon color='secondary' icon='phone' className='me-3' /> + 91 8340785819
              </p>
              <p>
                <MDBIcon color='secondary' icon='print' className='me-3' /> + 01 234 567 89
              </p>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>

      
      <div className='text-center p-4' style={{ backgroundColor: 'green'}}>
        
        <a  href='' className='me-4 text-reset justify-content-right'>
            <MDBIcon  color='white' fab icon='facebook-f'  />
          </a>
          <span style={{marginLeft: '20px'}}></span>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='twitter' />
          </a>
          <span style={{marginLeft: '20px'}}></span>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='instagram' />
          </a>
          <span style={{marginLeft: '20px'}}></span>
          <a href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='linkedin' />
          </a>
          <span style={{marginLeft: '20px'}}></span>
          <a  href='' className='me-4 text-reset'>
            <MDBIcon color='white' fab icon='github' />
          </a>
          <span style={{marginLeft: '30px',color:'black'}}>©PizzaPilot, All rights reserved </span>
          
      </div>
     
    </MDBFooter>
  );
}