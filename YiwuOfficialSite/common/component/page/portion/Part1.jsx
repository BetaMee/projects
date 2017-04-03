import React from 'react';
import classNames from 'classnames';
import CSSStyles from './Part1.css';


function Part1() {
  return (
    <section className={CSSStyles.container}>
      <header className={CSSStyles.header}>
        <div className={CSSStyles.table}>
          <div>
            Logo
          </div>
          <div>
            fllow us
          </div>
        </div>
      </header>
      <div className={CSSStyles.intro}>
          <div className={CSSStyles.slogan}>
            <span>这是一款全新的产品</span>
          </div>
          <div className={CSSStyles.buttom}>
            <a href="#" className={CSSStyles.b1}>现在下载</a>
            <a className={CSSStyles.b2}>查看证书</a>          
          </div>
          <span> 
            现在可在安卓市场上下载
          </span>
      </div>

      <div>
      
      </div>
    </section>
  );
}


export default Part1;
