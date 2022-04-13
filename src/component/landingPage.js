import React from 'react';
import { useHistory } from 'react-router-dom';

const LandingPage = (props) =>{
    const history = useHistory();
    let {location:{search}} = history;
    return (
        <div class="App">
           <h1>This is Landing page</h1> 
            <p>{JSON.stringify(search)}</p>
        </div>
    )
}

export default LandingPage;