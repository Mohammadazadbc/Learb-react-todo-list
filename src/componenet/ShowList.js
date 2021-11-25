import React from 'react';

const ShowList = ({ListVision,showHideList}) => {
    return <button className='hide-btn' onClick={ListVision}>{showHideList ? "Hide List": "show List"} </button> ;
};

export default ShowList;