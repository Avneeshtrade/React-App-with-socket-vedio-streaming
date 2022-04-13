import React from "react";
import style from "../style/loader.module.css";

const Loader = () => {
    return (
        <div className={style.wrapper}>
        <div className={style.loader} ></div>
        </div>
        // <div className={style.loaderDiv}>
        //     <img className={style.img} srcset="https://picsum.photos/540/304 540w, https://picsum.photos/960/540 960w" sizes="(min-width: 576px) 540px, 100vw" src="https://picsum.photos/300/160"></img>
        // </div>
    )
}
export default Loader;