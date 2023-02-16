import React from "react";
import Spinner from 'react-bootstrap/Spinner';

export const SpinnerCustom = () => 
    (
        <>
            <div style={{
                width: '100vw',
                height: '180vh',
                position: 'absolute',
                top: '0',
                left: '0',
                zIndex: '9999',
                backdropFilter: 'blur(5px)'
            }}>
            </div>

            <div style={{
                    display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100vw',
                    height: '100vh',
                    position: 'absolute',
                    top: '0',
                    left: '0',
                    zIndex: '99999'
                }}>
                <Spinner animation="border" />
            </div>
        </>
    )