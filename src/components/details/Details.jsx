import React from "react";
import parseTimestamp from "../../utils/parseTimestamp";
import { useTranslation } from 'react-i18next';
import Table from 'react-bootstrap/Table';
import '../details/details.css';
import inq from '../../imgs/inquiry.jpg';
import Button from 'react-bootstrap/Button';
import { Container, Row, Col } from 'react-bootstrap';

const Details = ({ transitEvent }) => { //destructre ll props y3nii hadek obj gwah transitEvents
        const { t } = useTranslation();
        if (!transitEvent) return null;
        
        return ( 
            <div>
               <Container dir={t('dir')}>
                    <Row>
                    <Col xs={7}>
                                <p className="headln" style={{textAlign:t('Align')}}>{t('Shipment details')}</p>
                                <Table striped bordered hover style={{borderRadius:'10px'}}>
                                    <thead>
                                        <tr>
                                        <th>{t('Branch')}</th>
                                        <th>{t('Date')}</th>
                                        <th>{t('Time')}</th>
                                        <th>{t('Details')}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {transitEvent.map((timeEvent) => {
                                        const {formattedDate,formattedTime } = parseTimestamp(timeEvent.timestamp);
                                        return (
                                            <tr key={timeEvent.timestamp}>
                                            <td>{t(timeEvent.hub)}</td>
                                            <td>{formattedDate}</td>
                                            <td>{formattedTime}</td>
                                            <td>
                                                {t(timeEvent.state)} <br/>
                                              <span style={{color:'#ffb12b'}}> 
                                                {t(timeEvent.reason)} 
                                              </span> 
                                            </td>
                                            </tr>
                                        )})}
                                    </tbody>
                                </Table>
                        </Col>
                        <Col xs={5}>
                        <div>
                            <p className="headln"  style={{textAlign:t('Align')}}>{t('Delivery address')}</p>
                            <div style={{backgroundColor:"#fafafa", borderRadius:'10px', boxShadow:'2px 2px 2px 2px #fafafa'}}>
                                <p className="Address" style={{textAlign:t('Align')}}>{t('Address')}</p>
                            </div>
                            <div style={{borderColor:"#fafafa", display:'flex',borderRadius:'10px', boxShadow:'2px 2px 5px 5px #fafafa'}}>
                                <p className="Address" style={{fontWeight:'bolder', fontSize:'18px', paddingTop:'6%', paddingBottom:'0',textAlign:t('Align')}}>{t('Inquiry')}
                                <br/>
                                <Button variant="danger" style={{marginTop:'15px'}}>{t('Inquiry_Button')}</Button>{' '}
                                </p>
                                <img src={inq} style={{height:'25vh'}}/> 
                            </div>
                        </div>
                        </Col>
                       
                    </Row>
                </Container> 
            </div>
        );
    }
 
export default Details;