import React from 'react';
import CSSStyles from './Part3.css';


function Part3() {
  return (
    <div className={CSSStyles.container}>
      <div className={CSSStyles.main}>
        <div className={CSSStyles.pic}>
        </div>

         <div className={CSSStyles.features}>
          <div>
            <h2>发布商品</h2>
            <p>A picture is worth a thousand words. 
            A diagram is probably worth twice as much. 
            Enhance your technical documentation (code, specs) with easy to comprehend textual art. 
            Visualisation of data structures,
            algorithms and data formats plays a crucial role in understanding. 
            You will be reading the code more often than writing it, 
            so why not make it much easier to grasp.</p>
          </div>
        </div>
      </div>
    </div>
  );
}


export default Part3;