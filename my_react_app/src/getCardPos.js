
function CardPos(cardName){
    if (typeof cardName !== 'string') {
        return 'Error: cardName must be a string';
    }

    let imgCode = 0; //0 is UNOFront, 1 is UNOZeros.
    let viewWidth = 409.6;
    let viewHeight = 585.1;

    let startX = 0;
    let startY = 0;

    //Deal with wild card
    if(cardName[0] === 'W'){
        imgCode = 0;
        startX = 9*viewWidth;
        startY = 0;
        return { startX, startY, viewWidth, viewHeight, imgCode };
    }

    //Deal with Draw 4 card 
    if(cardName[0] === 'D'){
        imgCode = 0;
        startX = 9*viewWidth;
        startY = 2*viewHeight;

        return { startX, startY, viewWidth, viewHeight, imgCode };
    }
    
    //Deal with coloured numeric cards
    if(!isNaN(cardName[1])){

        if(cardName[0] === 'R'){
            startY = 0;
        }
        else if(cardName[0] === 'Y'){
            startY = viewHeight;
        }
        else if(cardName[0] === 'B'){
            startY = viewHeight * 2;
        }
        else if(cardName[0] === 'G'){
            startY = viewHeight * 3;
        }


        if(cardName[1] !== '0'){
            imgCode = 0;
            var cardNum = parseInt(cardName[1]);
            startX = (cardNum - 1) * viewWidth;
        } else { // special case for R0, Y0, B0, G0
            imgCode = 1;
            startY = 0;
            if(cardName[0] === 'R'){
                startX = 0;
            }
            else if(cardName[0] === 'Y'){
                startX = viewWidth;
            }
            else if(cardName[0] === 'B'){
                startX = viewWidth * 2;
            }
            else if(cardName[0] === 'G'){
                startX = viewWidth * 3;
            }
            
        }

        return { startX, startY, viewWidth, viewHeight, imgCode };
    }

    //At this stage all numeric colour cards and draw 4 and wild have been dealt with
    //Now deal with special cards (skip, draw2, reverse)
    imgCode = 0;

    //Skip cards
    if(cardName[1] === 'S'){
        startY = 4*viewHeight;
        if(cardName[0] === 'R'){
            startX = 0;
        }
        else if(cardName[0] === 'Y'){
            startX = viewWidth;
        }
        else if(cardName[0] === 'B'){
            startX = viewWidth * 2;
        }
        else if(cardName[0] === 'G'){
            startX = viewWidth * 3;
        }
        return { startX, startY, viewWidth, viewHeight, imgCode };
    }

    // Draw 2 cards
    if(cardName[1] === 'D'){
        startY = 4*viewHeight;
        let relative0X = viewWidth * 4;
        
        if(cardName[0] === 'R'){
            startX = relative0X;
        }
        else if(cardName[0] === 'Y'){
            startX = relative0X + viewWidth;
        }
        else if(cardName[0] === 'B'){
            startX = relative0X + viewWidth * 2;
        }
        else if(cardName[0] === 'G'){
            startX = relative0X + viewWidth * 3;
        }
        return { startX, startY, viewWidth, viewHeight, imgCode };
    }

    // Reverse cards
    if(cardName[1] === 'R'){
        if (cardName[0] === 'R'){
            startX = 8*viewWidth;
            startY = 4*viewHeight;
        }
        else if (cardName[0] === 'Y'){
            startX = 9*viewWidth;
            startY = 4*viewHeight;
        }
        else if (cardName[0] === 'B'){
            startX = 0;
            startY = 5*viewHeight;
        }
        else if (cardName[0] === 'G'){
            startX = 1*viewWidth;
            startY = 5*viewHeight;
        }
        return { startX, startY, viewWidth, viewHeight, imgCode };
    }

    //special question mark card for invalid cards
    startX = 9*viewWidth;
    startY = 6*viewHeight;
    return { startX, startY, viewWidth, viewHeight, imgCode };


    

    

    
}

module.exports = CardPos;