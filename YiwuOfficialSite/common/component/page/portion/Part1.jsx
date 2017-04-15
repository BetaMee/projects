import React from 'react';
import classNames from 'classnames';
import CSSStyles from './Part1.css';


function Part1() {
  return (
    <section className={CSSStyles.container}>
      <header className={CSSStyles.header}>
        <div className={CSSStyles.table}>
          <div className={CSSStyles.logo}>
          </div>
          <div className={CSSStyles.link}>
            @FLLOW US
          </div>
        </div>
      </header>
      <div className={CSSStyles.intro}>
          <div className={CSSStyles.slogan}>
            <span>易你所想，物尽其用</span>
          </div>
          <div className={CSSStyles.buttom}>
            <a href="#" className={CSSStyles.b1}>现在下载</a>
            <a href="#" className={CSSStyles.b2}>查看证书</a>          
          </div>
          <div className={CSSStyles.attention}>
            <span> 
              现在可在安卓市场上下载
            </span>
          </div>
      </div>

      <div className={CSSStyles.pic}>
        <div />
      </div>
    </section>
  );
}


export default Part1;
