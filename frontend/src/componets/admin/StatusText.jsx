import React, { useState } from 'react';
import { Text, Box, Image } from "@chakra-ui/react";
import {RoomCardConfirmModal} from './RoomCardConfirmModal';
import {RoomCardCancelModal} from './RoomCardCancelModal';

const statusStyles = {
  cancelado: {
    bg: "#F5667A1A",
    color: "#F2415A",
  },
  confirmado: {
    bg: "#D4EDDA",
    color: "#155724",
  },
  porConfirmar: {
    color: "#FFCD29",
    fontSize: "12px",
    textAlign: "center",
    fontFamily: "Nunito Sans",
  },
};

const StatusText = ({ status, children, mostrarIconos = true }) => {
  const styles = statusStyles[status] || {};

  const [isConfirmModalOpen, setIsConfirmModalOpen] = useState(false);
  const [isCancelModalOpen, setIsCancelModalOpen] = useState(false);

  const openConfirmModal = () => {
    setIsConfirmModalOpen(true);
  };

  const closeConfirmModal = () => {
    setIsConfirmModalOpen(false);
  };

  const openCancelModal = () => {
    setIsCancelModalOpen(true);
  };

  const closeCancelModal = () => {
    setIsCancelModalOpen(false);
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          gap: "8px",
        }}
      >
        <Text
          sx={{
            width: "91px",
            height: "30px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flex: "none",
            order: "1",
            flexGrow: "0",
            fontSize: "12px",
            ...styles,
            overflow: "hidden",
            borderRadius: "8px",
          }}
        >
          {children}
        </Text>

        {status === "porConfirmar" && mostrarIconos && (
          <Box
            sx={{
              position: "relative",
              right: "0",
              top: "100%",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-end",
            }}
          >
            <Box onClick={openConfirmModal} cursor="pointer" boxSize={22}>
              <Image src="icons/check.png" alt="check" />
            </Box>
            <Box onClick={openCancelModal} cursor="pointer" boxSize={22} marginTop="8px">
              <Image src="icons/cancel.png" alt="cancel" />
            </Box>
          </Box>
        )}
      </Box>

      {/* Modales */}
      <RoomCardConfirmModal isOpen={isConfirmModalOpen} onClose={closeConfirmModal} estado={status} />
      <RoomCardCancelModal isOpen={isCancelModalOpen} onClose={closeCancelModal} estado={status}/>
    </>
  );
};

export default StatusText;