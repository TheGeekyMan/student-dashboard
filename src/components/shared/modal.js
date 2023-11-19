import React from "react";
import styles from './modal.module.scss';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

const CustomModal = ({show, onHide, title}) => {

    return (
        <Modal
            show={show}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header>
                <Modal.Title id="contained-modal-title-vcenter">{title}</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nec ultricies elit. Sed vulputate ante sit amet nisl viverra, 
                nec sollicitudin lorem varius. Quisque rhoncus tortor et lobortis gravida. Phasellus metus lorem, dignissim in rhoncus in, 
                tincidunt sed dolor. Nullam eu neque id turpis pulvinar ornare id fermentum mauris. Vestibulum tempor risus nec sapien mattis facilisis. 
                Nullam dolor lacus, pharetra nec nisl non, pretium bibendum justo. In feugiat nunc et metus aliquet, eget pulvinar dolor pulvinar. 
                Nullam commodo scelerisque magna, ac iaculis sem tristique et.
                </p>
            </Modal.Body>
            <Modal.Footer>
                <Button onClick={onHide}>Close</Button>
            </Modal.Footer>
        </Modal>
    );
}

export default CustomModal;
