

import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card } from 'antd';
import rect from '../../assets/Rectangle 6319.svg'
import logo from '../../assets/zippyy_logo.svg';
import logo1 from '../../assets/mail.svg';
import './Page4.css';
import box from '../../assets/Vector.svg';
import phone from '../../assets/Phone.svg';
function Page4() {
  const [orderid, setorderid] = useState('');
  const navigate = useNavigate();
  const handleTrackClick = () => {
    navigate('/page3');
  };

  return (
    <div style={{ backgroundColor: '#F5F8F8' }}>
      <Card style={{ margin: '16px' }}>
        <div style={{ backgroundColor: '#FBEAE7', display: 'flex', flexDirection: 'row', border: '1px ', borderRadius: '16px' }}>
          <div style={{ marginTop: '60px', marginLeft: '43px', width: '58%' }}>
            <h1 style={{ position: 'absolute', fontFamily: 'Poppins', fontWeight: '600', fontSize: '36px', lineHeight: '54px', color: '#121114' }}>Customise your tracking page</h1>
            <p style={{ position: 'absolute', top: '150px', color: '#5F5A6B', fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24.83px', width: '698px', height: '71px' }}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eget sem iaculis, congue ligula ac, imperdiet purus. Nunc elementum massa metus, id consectetur justo aliquet quis.</p>
          </div>
          <div style={{ Width: '614px', height: '311px', top: '100px', left: '786px', radius: '16px' }}>
            <img src={rect} alt="nologo"></img>
          </div>
        </div>

        <div>
          <h1 style={{ textAlign: 'center', paddingTop: '30px', color: '#121114', fontFamily: 'Poppins', fontWeight: '500', fontSize: '32px', lineHeight: '48px' }}>Track your shipment</h1>
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: '20px' }}>
            <img src={logo} alt="nologo" style={{ maxWidth: '100%', height: 'auto' }} />
          </div>
          <p style={{ color: '#121114', marginLeft: '478px', paddingTop: '30px', fontFamily: 'Poppins', fontWeight: '400', fontSize: '16px', lineHeight: '24px', marginBottom: '10px' }}>Enter up to 25 of your Zippyy order IDs <span style={{ fontSize: '10px', lineHeight: '15px' }}>(Comma separated)</span></p>


          <div><input style={{
            backgroundColor: 'white',
            color: '#D9D9D9',
            fontFamily: 'Poppins',
            fontWeight: '400',
            fontSize: '14px',
            lineHeight: '21px',
            width: '476px',
            height: '40px',
            borderRadius: '6px',
            border: '1px solid #D9D9D9',
            marginLeft: '478px',
            padding: '10px'

          }}
            type="text"
            value={orderid}
            placeholder='XXXXXX21233, WWWW1122, QQQWWW1122'
            onChange={(e) => setorderid(e.target.value)}
            required
          /></div>

          <div style={{ display: 'flex', justifyContent: 'center', marginTop: '30px' }}>
            <button
              style={{
                fontFamily: 'Poppins',
                fontWeight: '500',
                fontSize: '16px',
                lineHeight: '24px',
                backgroundColor: '#D54029',
                color: 'white',
                border: '1px solid',
                padding: '10px',
                borderRadius: '6px',
                cursor: 'pointer',
                width: '180px',
                height: '36px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
              }}

              onClick={handleTrackClick}
            >
              Track
            </button>
          </div>


          <div style={{ marginTop: '40px', marginLeft: '41px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#F5F8F8', width: '476px', height: '151px', marginLeft: '10px', display: 'flex', flexDirection: 'column', }}>

              <div style={{ paddingLeft: '41px', paddingTop: '11px', color: "#121114", fontFamily: 'Poppins', fontWeight: '500', fontSize: '22px', lineHeight: '33px' }}>
                <p>Contact Information</p>
              </div>
              <div style={{ paddingLeft: '41px', paddingTop: '11px', color: '#5F5A6B' }}>
                <img src={box} alt="logo" />
                <span style={{ paddingLeft: '10px', color: '#5F5A6B', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> support@godash.ai</span>
              </div>
              <div style={{ paddingLeft: '41px', paddingTop: '11px', color: '#5F5A6B' }}>
                <img src={phone} alt="logo" />
                <span style={{ paddingLeft: '10px', fontWeight: '400', fontSize: '16px', lineHeight: '24px' }}> 1800097866</span>
              </div>
              <div style={{ paddingLeft: '4px', paddingTop: '10px' }}>
                <hr style={{ width: '466px' }}></hr>
              </div>
              <div style={{ paddingLeft: '41px', paddingTop: '5px', color: "#0C77FF", fontFamily: 'Poppins', fontWeight: '400', fontSize: '10px', lineHeight: '15px' }}>
                <p>Privacy policy</p>
              </div>

            </div>
          </div>

          <hr style={{ border: 'none', borderTop: '1px solid #D9D9D9', marginTop: '30px', marginBottom: '20px' }} />
          <div style={{ display: 'flex', flexDirection: 'column', }}>
            <ul style={{ listStyle: 'none', marginLeft: '30%', padding: 0, display: 'flex', gap: '15px' }}>
              <li style={{ display: 'flex', color: '#68717D', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px' }}>
                &copy; 2024 GoDash. All rights reserved
              </li>
              <li style={{ display: 'flex', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px', color: '#68717D' }}>
                <span style={{ marginRight: '8px' }}>•</span>
                <a href="/privacy-policy" style={{ textDecoration: 'none', color: '#68717D' }}>Privacy policy</a>
              </li>
              <li style={{ display: 'flex', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px', color: '#68717D' }}>
                <span style={{ marginRight: '8px' }}>•</span>
                <a href="/terms-of-service" style={{ textDecoration: 'none', color: '#68717D' }}>Terms of service</a>
              </li>
              <li style={{ display: 'flex', fontSize: '12px', fontFamily: 'Poppins', fontWeight: 400, lineHeight: '18px', color: '#68717D' }}>
                <span style={{ marginRight: '8px' }}>•</span>
                <a href="mailto:Support@gdoash.ai" style={{ textDecoration: 'underline', color: '#68717D', display: 'flex', alignItems: 'center' }}>
                  <img src={logo1} alt='nologo' style={{ marginRight: '4px' }}></img> Support@gdoash.ai
                </a>
              </li>
              <li>
                <div style={{ fontFamily: 'Poppins', fontSize: '12px', fontWeight: 400, lineHeight: '18px', marginLeft: '200px' }}>
                  <p>Powered by Zippyy</p>
                </div>
              </li>
            </ul>


          </div>

        </div>
      </Card>
    </div >
  );
}

export default Page4;


