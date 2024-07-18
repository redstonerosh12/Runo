import React from 'react';
import CardPos from './getCardPos';


const clamp = (value, min, max) => Math.max(min, Math.min(max, value));
const CardImage = ({ startX, startY, viewWidth, viewHeight, imgCode }) => {

    const clampedStartX = clamp(startX, 0, 4096 - viewWidth);
    const clampedStartY = clamp(startY, 0, 4096 - viewHeight);

    const containerStyle = {
      width: `${viewWidth}px`, // the desired width of the viewport
      height: `${viewHeight}px`, // the desired height of the viewport
      overflow: 'hidden', // hide the rest of the image
      position: 'relative', // to position the image within this container
      margin: '0', // Ensure no margin
      padding: '0', // Ensure no padding
      transform: 'scale(0.5)', // Scale down the image
    };
  
    const imgStyle = {
      position: 'absolute',
      top: `-${clampedStartY}px`, // negative to move the starting point into view
      left: `-${clampedStartX}px`, // negative to move the starting point into view
      width: '4096px', // original image width
      height: '4096px', // original image height
    };

    const imgSrc = imgCode ? `${process.env.PUBLIC_URL}/UNOZeros.png` : `${process.env.PUBLIC_URL}/UNOFront.png`;
  
    return (
    <div style={containerStyle}>
        <img src={imgSrc} alt="Dynamic View" style={imgStyle} />
    </div>
    );
  };

const CardView = ({cardName}) => {
    const cardPos = CardPos(cardName);
    return <CardImage startX={cardPos.startX} startY={cardPos.startY} viewWidth={cardPos.viewWidth} viewHeight={cardPos.viewHeight} imgCode={cardPos.imgCode} />
}

export { CardImage, CardView };
