import React from 'react';
import styled from 'styled-components';

interface Props {
  children: React.ReactNode;
}

export default function Modal({ children }: Props) {
  return (
    <ModalBack>
      <ModalWrap>
        <ModalClose />
        {children}
      </ModalWrap>
    </ModalBack>
  );
}

const ModalBack = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  overflow: hidden;
  -webkit-overflow-scrolling: touch;
  outline: 0;
  background: rgba(0, 0, 0, 0.6);
  z-index: 1040;

  &.off {
    display: none;
  }
`;

const ModalWrap = styled.div`
  position: relative;
  width: calc(100vw - 36px);
  max-width: 580px;
  height: auto;
  max-height: calc(100vh - 40px);
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  border-radius: 10px;
  padding: 40px 30px;
  overflow-y: auto;
  background: #fff;
`;

const ModalClose = styled.button`
  position: absolute;
  width: 20px;
  height: 20px;
  top: 20px;
  right: 20px;
  background: url(${'/images/icon/close.svg'}) no-repeat 50% 50%;
  background-size: cover;
  cursor: pointer;
`;
