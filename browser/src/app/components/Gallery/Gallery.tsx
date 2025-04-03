'use client';

import React, { Dispatch, SetStateAction } from 'react';
import Lightbox from "yet-another-react-lightbox";
import { Captions, Thumbnails } from 'yet-another-react-lightbox/plugins';

import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/captions.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";

import './component.module.css'

const Gallery = ({active, images, type, onClose}: {
  active: number | false,
  images: string[],
  type: string,
  onClose: Dispatch<SetStateAction<number | false>>,
}) => {
  const items = images.map((image) => ({
    src: `https://raw.githubusercontent.com/RegnantPhoenix/playerportraitpack/refs/heads/master/sources/${type}/${image}`,
    description: image.replace('l.png', ''),
  }))

  return (
    <Lightbox
      open={!!active}
      close={() => onClose(false)}
      index={!active ? 0 : active}
      slides={items}
      plugins={[Captions, Thumbnails]}
      captions={{descriptionTextAlign: 'center'}}
      thumbnails={{
        position: 'bottom'
      }}
      carousel={{ preload: 4 }}
    />
  );
}

export default Gallery;
