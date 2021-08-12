import React, { useEffect, useState } from 'react';
import HomeGrid from '../HomeGrid/HomeGrid';
import Pagination from '../Page/Pagination';

const HomeContent = ({ items, isOldState }) => {
    console.log(items)
    return (
        <div>
           {
               items.map(item => <HomeGrid item={item}/>)
           }
        </div>
    );
};

export default HomeContent;