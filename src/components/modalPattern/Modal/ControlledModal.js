import React from 'react';
import styled from "styled-components";

const ModalBackground = styled.div`
   position: absolute ;
   left: 0;
   right: 0;
   top: 0;
   bottom: 0;
   background-color: rgb(0,0,0,0.7);
 `
const ModalBody = styled.div`
  background-color: white;
  position: absolute;
  transform: translateY(-50%);
  transform: translateX(-50%);
  left: 50%;
  top: 50%;
  padding: 20px;
  width: 50%;
  
`
const ControlledModal = ({shouldShow , onRequestClose, children }) => {
    return shouldShow ?(
        <>

            {shouldShow && (
                <ModalBackground onClick={onRequestClose}>
                    <ModalBody>
                        <button onClick={onRequestClose} style={{ position: "absolute" ,  right:"5px"  ,top:"5px"}}> X </button>
                        {children}
                    </ModalBody>
                </ModalBackground>
            )

            }
        </>
    ):null


};

export default ControlledModal;
