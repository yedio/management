import React from 'react';
import styled from 'styled-components';
import Modal from '../../../components/Modal';

export default function MainModal() {
  return (
    <Modal>
      <h1>pokemonnnn!!!!!</h1>
      {/* {(function () {
        if (modalType === '수익 랭킹 상세')
          return <ModalBody>Pokemon!!!</ModalBody>;
      })()} */}
    </Modal>
  );
}

const ModalBody = styled.div``;
