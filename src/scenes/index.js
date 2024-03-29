import React, { useState } from 'react';
import { useSelector } from 'react-redux';

import SideBarLeft from './sideBarLeft';
import MainScene from './mainScene';
import ModalWindowImage from './modalWindowImage';
import { useResize } from '../components/hooks/useResize';
import Loupe from '../components/loupe';

import './scene.scss';

export default function Main() {
  const show = useSelector((state) => {
    return state.modalWindowImage.show;
  });

  const [showMenu, setShowMenu] = useState(false);
  const { isScreenMd, isScreenSm } = useResize();

  return (
    <>
      {show && <ModalWindowImage />}
      <div className="scene">
        {(!isScreenSm || (!isScreenMd && showMenu) || isScreenMd) && (
          <SideBarLeft
            showMenu={showMenu}
            setShowMenu={setShowMenu}
            className={`scene__side-bar-left${showMenu ? '-full-dispay' : ''}`}
          />
        )}
        <button
          type="button"
          onClick={() => {
            setShowMenu(!showMenu);
          }}
          className="scene__btn-show-menu"
        >
          <div
            className={`scene__loupe scene__loupe_${showMenu ? 'right' : 'left'}`}
          >
            <Loupe />
          </div>
          <i
            className={`scene__arrow scene__arrow_${showMenu ? 'left' : 'right'}`}
          />
        </button>
        <MainScene
          showMenu={showMenu}
          setShowMenu={setShowMenu}
          className="scene__main-scene"
        />
      </div>
    </>
  );
}
