import Modal from "./Modal/Modal";
import ControlledModal from "./Modal/ControlledModal";
import {useState} from "react";


const ImplementModal = ()=>{
    const [shouldShow, setShouldShow] = useState(false);
    return (
        <div>

            <p>
                uncontrolled modal:
            </p>
            <hr/>
            <Modal>
                "this is children"
            </Modal>

            <p>
                controlled modal:
            </p>
            <hr/>
            <ControlledModal shouldShow={shouldShow}  onRequestClose={()=>{setShouldShow(false)}}>
                <p> this is controoled Modal</p>
            </ControlledModal>
            <button onClick={()=>{ setShouldShow(!shouldShow)}}>
                {shouldShow ?"hide Modal " : "showModal"}
            </button>


            <hr/>




        </div>
    )
}

export  default  ImplementModal