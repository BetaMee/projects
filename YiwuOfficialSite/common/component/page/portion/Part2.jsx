import React from 'react';
import classNames from 'classnames';
import CSSStyles from './Part2.css';


function Part2() {
  return (
    <div className={CSSStyles.container}>
      <div className={CSSStyles.slogan}>
        <span>hhhh,全新的</span>
      </div>

      <div className={CSSStyles.intro}>
        SO Powerful
      </div>

      <div className={CSSStyles.main}>
        <div className={CSSStyles.features}>
          这是一款集编辑和各种好玩的功能于一体的易物
        </div>

        <div className={CSSStyles.pic}>
        
        </div>
      </div>

    </div>
  );
}


export default Part2;
