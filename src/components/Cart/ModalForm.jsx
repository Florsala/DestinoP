import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const ModalForm =() =>{
  const [smShow, setSmShow] = useState(false);

  return (
    <>
          <Button type="submit" onClick={() => setSmShow(true)}>
                  Confirmar Reserva
                </Button>

                <Modal
                style={{top: '20%',color: 'var(--blue1-color)' }}
                  size="sm"
                  show={smShow}
                  onHide={() => setSmShow(false)}
                  aria-labelledby="example-modal-sizes-title-sm"
                >
                  <Modal.Header closeButton
                 
                 >
                    <Modal.Title id="example-modal-sizes-title-sm">
                      ¡Muchas gracias!
                    </Modal.Title>
                  </Modal.Header>
                  <Modal.Body style={{textAlign: 'center'

                  }}> En breve nos contactaremos con usted</Modal.Body>
                </Modal>
     
    </>
  );
}

export default ModalForm;