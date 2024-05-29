import React from 'react';
// import { Card } from 'antd';
import box from '../../assets/Vector.svg';
import phone from '../../assets/Phone.svg'

function AddressBox() {
    return (
        <div style={{ marginTop: '40px', marginLeft: '41px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ backgroundColor: '#F5F8F8', width: '693px', height: '150.01px', marginLeft: '10px', display: 'flex', flexDirection: 'column', }}>

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
                    <hr style={{ width: '681.01px' }}></hr>
                </div>
                <div style={{ paddingLeft: '41px', paddingTop: '5px', color: "#0C77FF", fontFamily: 'Poppins', fontWeight: '400', fontSize: '10px', lineHeight: '15px' }}>
                    <p>Privacy policy</p>
                </div>

            </div>
        </div>
    );
}

export default AddressBox;
