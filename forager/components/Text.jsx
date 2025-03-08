import React from 'react';

function Text({level=0,text="", style=""}){
    const level0 = (<p className={style}>{text}</p>);
    const level1 = (<h1 className={style}>{text}</h1>);
    const level2 = (<h2 className={style}>{text}</h2>);
    const level3 = (<h3 className={style}>{text}</h3>);
    const level4 = (<h4 className={style}>{text}</h4>);
    const level5 = (<h5 className={style}>{text}</h5>);
    const level6 = (<h6 className={style}>{text}</h6>);

    if(level === 1){
        return level1;
    }
    else if (level === 2){
        return level2;
    }
    else if (level === 3){
        return level2;
    }
    else if (level === 4){
        return level2;
    }
    else if (level === 5){
        return level2;
    }
    else if (level === 6){
        return level2;
    }
    else {
        return level0;
    }
}

export default Text;