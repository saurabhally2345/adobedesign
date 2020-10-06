import React from 'react';
import Header from '../header';
import Body from '../body/body';
import Midpage from '../midPage/midpage';
import Anotherpage from '../anotherpage/anotherpage';
import Thirdlast from '../thirdlast/thirdlast';
import Careertips from '../careertips/careertips';
import CareerTips from '../careertips/careertips';
import CareerTips2 from '../careertips2/careertips2';
import Newsletter from '../newsletter/newsletter';
import Zoom from '../downloadXD/downloadXD';
import Delivered from '../delivered/delivered';
import CopyRight from '../copyright/copyright';

const Page = () =>{

    return <div>
        <div>
    <Header />
    </div>
    <div>
        <Body />
    </div>
    <div>
      <Midpage/>
    </div>
    <div>
        <Anotherpage />
    </div>
    <div>
        <Thirdlast/>
    </div>
    <div>
        <CareerTips/>
    </div>
    <div>
        <CareerTips2/>
    </div>
    <div>
        <Newsletter/>
    </div>
    <div>
        <Zoom/>
    </div>
    <div>
        <Delivered/>
    </div>
    <div>
        <CopyRight/>
    </div>
    </div>

}

export default Page;