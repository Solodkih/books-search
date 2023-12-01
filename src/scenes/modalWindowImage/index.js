import React from 'react';
import './modalWindowImage.scss';
import { useSelector, useDispatch } from 'react-redux';
import {
  nextImage,
  previousImage,
  setShowImage,
} from '../../redux/modalWindowImageSlice';
import useGetInternalUrlImage from '../../components/hooks/useGetInternalUrlImage';

export default function ModalWindowImage() {
  const dispatch = useDispatch();
  const currentImage =
    useSelector((state) => {
      return state.modalWindowImage.currentImage;
    }) || null;

  const url = useGetInternalUrlImage(currentImage);

  const handlerCanselWindow = () => {
    dispatch(setShowImage({ show: false }));
  };

  return (
    <div className="modalWindowImage">
      <button
        className="modalWindowImage_button"
        onClick={() => {
          dispatch(previousImage());
        }}
      >
        <i className="modalWindowImage_arrow modalWindowImage_arrow__left"></i>
      </button>
      <div className="modalWindowImage_image-block">
        <button
          className="modalWindowImage_image-block-cansel"
          onClick={handlerCanselWindow}
        ></button>
        <img className="modalWindowImage_image" alt="image" src={url} />
      </div>
      <button
        className="modalWindowImage_button"
        onClick={() => {
          dispatch(nextImage());
        }}
      >
        <i className="modalWindowImage_arrow modalWindowImage_arrow__right"></i>
      </button>
    </div>
  );
}