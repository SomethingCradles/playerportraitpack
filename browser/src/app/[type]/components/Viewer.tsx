'use client';

import Preview from "../../components/Preview";
import Gallery from "../../components/Gallery/Gallery";
import { useState } from 'react';

const Viewer = ({images, type}: { images: string[], type: string }) => {
  const [active, setActive] = useState<false | number>(false)

  return (
    <>
      {images.map((image, index) => (
        <Preview
          key={image}
          source={`https://raw.githubusercontent.com/SomethingCradles/playerportraitpack/refs/heads/master/sources/${type}/${image}`}
          tag={image.replace('l.png', '')}
          index={index}
          activate={setActive}
        />
      ))}

      <Gallery
        active={active}
        images={images}
        type={type}
        onClose={setActive}
      />
    </>
  );
}

export default Viewer;
