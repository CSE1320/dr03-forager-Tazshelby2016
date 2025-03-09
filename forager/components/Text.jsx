import React from 'react';

function Text({level=0,text="", styles=""}){
    const level0 = (<p className={styles}>{text}</p>);
    const level1 = (<h1 className={styles}>{text}</h1>);
    const level2 = (<h2 className={styles}>{text}</h2>);
    const level3 = (<h3 className={styles}>{text}</h3>);
    const level4 = (<h4 className={styles}>{text}</h4>);
    const level5 = (<h5 className={styles}>{text}</h5>);
    const level6 = (<h6 className={styles}>{text}</h6>);

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