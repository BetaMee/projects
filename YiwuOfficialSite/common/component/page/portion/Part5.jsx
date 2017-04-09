import React from 'react';
import classNames from 'classnames';
import CSSStyles from './Part5.css';

function Part5() {
  return (
    <div className={CSSStyles.container}>
      <div className={CSSStyles.intro}>
          <p className={CSSStyles.title}>
            Powerful Features
          </p>
          <p className={CSSStyles.slogan}>
            When it comes to creating text art, Monodraw helps you out by providing the tools you need.
          </p>
      </div>
      <div className={CSSStyles.tags}>
        <div className={CSSStyles.tag}>
          <p>特性1</p>
          <p>Shapes can be grouped for effortless management. 
          By composing multiple elements to form a single group, 
          duplication and movement become very easy.</p>
        </div>
        <div className={CSSStyles.tag}>
          <p>特性2</p>
          <p>Alignment guides are a life-saver when arranging and 
          sizing your content – no longer do you have to 
          stare at the screen and count the number of characters.</p>          
        </div>
        <div className={CSSStyles.tag}>
          <p>特性3</p>
          <p>When you need to focus on a particular part of the canvas,
           the rest of the shapes can be locked or hidden away. 
          You can then zoom in to concentrate on the currently visible elements.</p>          
        </div>
        <div className={CSSStyles.tag}>
          <p>特性4</p>
          <p>All functionality can be efficiently accessed via shortcuts, 
          so there is no need to take your hands off the keyboard. 
          Tools are quickly accessible with a single keystroke, 
          without the need for a modifier.</p>          
        </div>
      </div>
    </div>
  );
}

export default Part5;
