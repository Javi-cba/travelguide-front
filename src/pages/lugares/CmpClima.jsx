import React from 'react';
import { Flex, Modal } from 'antd';

export default function CmpClima({ lugar, isOpen, onClose }) {
  return (
    <Modal
      title={`Clima en ${lugar.nombre}`}
      open={isOpen}
      onCancel={onClose}
      footer={null}
    >
      <Flex justify="center" gap="1.8rem" wrap>
        {lugar.clima.map((climaData, index) => (
          <div key={index}>
            <img src={climaData.icono} alt={index} />
            <h4>{climaData.dia}</h4>
            <p>{climaData.temperatura.promedio}</p>
          </div>
        ))}
      </Flex>
    </Modal>
  );
}
