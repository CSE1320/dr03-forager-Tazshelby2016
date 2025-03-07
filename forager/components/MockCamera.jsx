import React from 'react';
import BasicImage from '@/components/BasicImage'


const MockCamera = () =>{
    return (
        <>
          <BasicImage height="100px" width="100px" alt="testing" src="image1.png" hazard={true} />
        </>
    );
}

export default MockCamera;