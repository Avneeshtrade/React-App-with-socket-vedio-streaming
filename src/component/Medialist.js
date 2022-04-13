import React, { useState, useEffect } from 'react';
import Card from './children/Card';
import Loader from './children/Loader';
import style from './style/uploadbutton.module.css';

const MediaList = () => {
    const [medias, setMedias] = useState([])
    const [state, setState] = useState({file:null,title:'',isLoading:false});
    useEffect(() => {
        async function fetchData() {
            try {
                let res = await fetch(`http://${window.location.hostname}:5000/api/stream/mediafile`).then(res => res.json());
                let payload = await res.payload;
                setMedias([...payload])
            }
            catch (err) {
                console.log("error ", err);
            }
        }
        fetchData();
    }, [])
    const changeHandler = (e) => {
        let { files,name,value } = e.target

            setState(s=>({
                ...s,
                [name]:(name =='file')?[...files]:value
            }))
            if(files && files.length > 0){
                setState(s=>({
                    ...s,
                    title:files[0].name
                })) 
            }
    }
    const uploadHandler = async (e) =>{
            e.preventDefault();
            setState(s=>({
               ...s,
               isLoading:true 
            }))
            let result = await uploadData();
            if(result && result.payload && result.payload.length > 0){
                setMedias(r=>[...result.payload]);
            }
            setState(s=>({
                ...s,
                isLoading:false,
                file:null,
                title:'' 
             }))
    }
    const uploadData = async () =>{
        let formdata = new FormData();
        formdata.append('file',state.file[0]);
        formdata.append('title',state.title);
        return fetch(`http://${window.location.hostname}:5000/api/stream/mediafile`,{
            method:'POST',
            headers:{
                'Accept':'application/json'
            },
            body:formdata
        }).then(r=>r.json());
    }
    return (
            state.isLoading?<Loader />:
            <div>
            
            <h1>Media Files Here</h1>
            <div className={style.formWrapper} >
                <input type='text' name='title' value={state.title} onChange={changeHandler} placeholder='Enter title for the vedio here' />
                <div className={style.uploadBtnWrapper}>
                    <button className={style.btn}>Upload a file</button>
                    <input type='file' name='file' accept='video/mp4' onChange={changeHandler} />
                </div><p>{state.file && state.file.length > 0 ? state.file[0].name : null}</p>
                <input type='submit' onClick={uploadHandler} />
            </div>
            <div style={{
                display:'inline-flex'            
            }} className={style.scroll}>
                {
                    medias && medias.length > 0 && medias.map((e, i) => {
                        let { title, createdAt, updatedAt, id } = e;
                        return <Card key={i} style2={{
                            marginLeft:'20px',
                            width:'300px',
                            cursor:'pointer',
                            height:'250px'
                        }} name={title} id={id} createAt={createdAt} updatedAt={updatedAt} />;
                    })
                }
            </div>

        </div>
    )
}
export default MediaList;