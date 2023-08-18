import React, { useState } from "react";
import RightOffCanvas from "../templates/RIghtOffCanvas";
import InfiniteList from "../templates/multi-select-list/InfiniteList";
import SearchNews from "../templates/search-news/SearchNews";
import { IS_BOOLEAN } from "../../mapper";



function SearchComponent( {onCloseRightNav, showRightNav}) {

    const [searchData, setSerchData] = useState({});
    

    return (
        <div>
            <RightOffCanvas
          handleClose={onCloseRightNav}
          show={showRightNav}
          title={`News List`}
          className="w-50"
        >
        
            <SearchNews updateData={(data) => setSerchData(data)}/>
            <InfiniteList data={searchData}/>
            
        </RightOffCanvas>
        </div>
    );
}

export default SearchComponent;