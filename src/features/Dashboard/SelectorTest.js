import React from "react";

import DataSelect from "../../common/components/DataSelect";

const SelectorTest = () => {

    const options = ['sales', 'subscriptions']

    return (
        <div>
            <DataSelect options={options}/>
        </div>
    )
}

export default SelectorTest