import { Button, Modal } from 'antd';
import React, { useState } from 'react';

interface AddMachineProps {
  setopen: (value: boolean) => void;
  open: boolean;
}

const Index: React.FC<AddMachineProps> = ({setopen,open}) => {
  
  const handleOk = () => {
    // setIsModalOpen(false);
    setopen(false)
  };

  const handleCancel = () => {
    // setIsModalOpen(false);
    setopen(false)

  };

  return (
    <>
    
      <Modal 
      title="Add Machine" 
      open={open} 
      onOk={handleOk} 
      onCancel={handleCancel}>
       
      </Modal>
    </>
  );
};

export default Index;