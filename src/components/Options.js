import React, { Component } from 'react';
import axios from 'axios';
import('./OptionsContainer.css');

class Options extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <>
                {/* this should get repeated over and over till the menu has no more */}
                <label>
                    {/* the filler should have the options value in there instead */}
                    <div className='radio' value="filler">
                        {/* should have the option prop in here i ask sydney today how the api looks */}
                        option 1
                    </div>
                </label>
            </>

        )
    }
}

export default Options;