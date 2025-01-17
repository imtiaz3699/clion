import React, { createContext, useState, useContext } from 'react';
import { Modal } from 'antd'; 
import { useSelector, useDispatch } from 'react-redux';
import { handleOpenModal,handleModalClose } from '../redux/productDetailReducer';
import { IoCloseSharp } from "react-icons/io5";
import Rating from '../components/sharedComponents/Rating/Rating';

const ModalContext = createContext();

export const ModalProvider = ({ children }) => {
    const isModalOpen = useSelector((state) => state.productDetail.isModalOpen);
    const productData = useSelector((state) => state.productDetail.productData);
    console.log(productData,'flasdfhlaksdjfhasd986786')
    const dispatch =  useDispatch();


  return (
    <ModalContext.Provider value={{ handleOpenModal, handleModalClose }}>
      {children}
      <div className = 'productDetailModal'>
      <Modal
        open={isModalOpen}
        // onCancel={()=>  dispatch(handleModalClose())}
        closable={false}
        footer={null} 
        className = '!max-w-[1400px] !w-full relative'
        centered>
      <div className = 'absolute -right-[60px] z-10 top-0 w-[48px] h-[48px] rounded-full bg-gray-900 flex items-center justify-center'> <IoCloseSharp className = 'text-white'/> </div>
        <div className = ' flex flex-row items-center w-full gap-[56px]'>
              <div className = 'flex flex-col gap-6 '>
                <div className = 'max-w-[616px] w-full max-h-[464px] h-full border-[1px] border-gray-200'></div>
                <div className = ''></div>
              </div>   
              <div className= ''>
                    <Rating value = {2.8} />
              </div>   
        </div>
      </Modal>
      </div>
    </ModalContext.Provider>
  );
};

export const useModal = () => useContext(ModalContext);
