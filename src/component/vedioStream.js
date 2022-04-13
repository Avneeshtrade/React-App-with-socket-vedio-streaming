import React from 'react';
import { useHistory } from 'react-router-dom';

const VedioStream = () => {
    let history = useHistory();
    let {pathname}  = history.location;
    let ids = pathname.split('/');
    let id = ids[ids.length - 1];
    return (
        <div>
            <h1>Vedio Stream from the Server Here</h1>
            {
                id ? <video id="videoPlayer" width="50%" controls muted="muted" autoPlay>
                    <source src={`http://${window.location.hostname}:5000/api/stream/vedio/${id}`} type="video/mp4" />
                </video>
                    : null
            }

        </div>

    )
}

export default VedioStream;