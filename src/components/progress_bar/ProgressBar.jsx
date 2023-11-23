import React, { useState, useEffect } from "react";
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import {
  MDBCard,
  MDBCardBody,
  MDBCol,
  MDBContainer,
  MDBIcon,
  MDBRow,
  MDBTypography,
} from "mdb-react-ui-kit";
import { useTranslation } from 'react-i18next';
import formateDate from "../../utils/formatDate";
import parseTimestamp from "../../utils/parseTimestamp";
import './bar.css';


const ProgressBar = ({orderTracking}) => {
  const { t } = useTranslation();
  if (!orderTracking) return null;
  const formatted = formateDate(orderTracking.PromisedDate);
  const {formattedDate,formattedTime } = parseTimestamp(orderTracking.CurrentStatus.timestamp);

  let orderState, stateLevel = 3 ;
  if (orderTracking.CurrentStatus.state === 'CANCELLED'){
    orderState = 'cancelled';
  }
  else if (orderTracking.CurrentStatus.state === 'DELIVERED'){
    orderState = 'delivered';
    stateLevel = 4;
  }
  else {
    orderState = 'pending';
  }

  return (
     <section className="vh-100" dir={t('dir')}>
        <MDBContainer className="py-5 h-100" style={{borderColor:'#8e8e8e'}}>
          <MDBRow className="justify-content-center align-items-center h-100">
            <MDBCol size="12">
              <MDBCard
                className="card-stepper text-black"
                style={{ borderRadius: "16px" }}
              >
                <MDBCardBody className="p-5">
                  <div className="d-flex justify-content-between align-items-center mb-5" >
                    <div>
                      <MDBTypography tag="h6" className="mb-0" style={{color:'#8e8e8e', textAlign:t('Align'), lineHeight:'2.2rem'}}>
                      {t('Delivery number')}
                      {" "}
                          <span className="font-weight-bold">
                            {orderTracking.TrackingNumber}
                          </span>
                          <br/>
                          <span className={`font-weight-bold ${orderState}`} style={{fontSize:'35px'}}>
                            {t(orderTracking.CurrentStatus.state)}
                          </span>
                      </MDBTypography>
                    </div>

                    <div className="">
                      <p className="mb-0" style={{textAlign:'left', color:'#8e8e8e',textAlign:t('Align')}}>
                      {t('Last updated')} 
                      <br/><span style={{color:'black', fontWeight:'bold'}}>
                         {formattedDate}, {formattedTime}  
                         </span>
                      </p>
                    </div>

                    <div className="text-end">
                      <p className="mb-0" style={{textAlign:'left', color:'#8e8e8e',textAlign:t('Align')}}>
                      {t('Merchant name')}
                      <br/><span style={{color:'black', fontWeight:'bold'}}> Mahmoud </span>
                      </p>
                    </div>

                    <div className="text-end">
                      <p className="mb-0" style={{textAlign:'left', color:'#8e8e8e',textAlign:t('Align')}}>
                      {t('Delivery time within')} 
                      <br/>
                      <span style={{color:'black', fontWeight:'bold'}}> 
                        {formatted}
                      </span>
                      </p>
                    </div>
                  </div>
                  <hr style={{width:'100%',color:'8e8e8e'}}/>

                  <ul
                    id="progressbar-2"
                    className="d-flex justify-content-between mx-0 mt-0 mb-5 px-0 pt-0 pb-2"
                  >
                   <li className={`step0 text-center ${orderState}`} id="step1"></li>
                    <li className={`step0 text-center ${orderState}`} id="step2"></li>
                    <li className={`step0 text-center ${orderState} ${orderState === 'delivered'? 'delivered' : ''}'}`} id="step3"></li>
                    <li className={`step0 text-end ${orderState === 'delivered'? orderState:'text-muted'}`}  id="step4"></li>
                  </ul>

                  <div className="d-flex justify-content-between">
                    <div className="d-lg-flex align-items-center">
                      <div style={{width:'150px'}}> 
                        <p className="fw-bold mb-1"> {t('The shipment has been created')}</p>
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <div style={{width:'150px'}}>
                        <p className="fw-bold mb-1"> {t('The shipment has been received from the merchant')}</p>
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <div style={{width:'150px'}}>
                        <p className="fw-bold mb-1"> {t('The shipment is out for delivery')}</p>
                      </div>
                    </div>
                    <div className="d-lg-flex align-items-center">
                      <div style={{width:'150px'}}>
                        <p className="fw-bold mb-1"> {t('The shipment has been delivered')}</p>
                      </div>
                    </div>
                  </div>
                </MDBCardBody>
              </MDBCard>
            </MDBCol>
          </MDBRow>
        </MDBContainer>
      </section>
  );
};
 
export default ProgressBar;