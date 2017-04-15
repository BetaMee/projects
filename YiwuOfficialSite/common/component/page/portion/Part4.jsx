import React from 'react';
import classNames from 'classnames';
import CSSStyles from './Part4.css';


function Part4() {
  return (
    <div className={CSSStyles.container}>
      <div className={CSSStyles.main}>
         <div className={CSSStyles.features}>
          <div>
            <h2>查看资料</h2>
            <p>A picture is worth a thousand words. 
            A diagram is probably worth twice as much. 
            Enhance your technical documentation (code, specs) with easy to comprehend textual art. 
            Visualisation of data structures,
            algorithms and data formats plays a crucial role in understanding. 
            You will be reading the code more often than writing it, 
            so why not make it much easier to grasp.</p>
          </div>
        </div>
         <div className={CSSStyles.pic}>
        </div>
      </div>
    </div>
  );
}


export default Part4;
