import React from 'react';
import classes from './MainPg.modules.css';

class MainPg extends React.Component {
    render(){
        return (
            <div className="fullscreen-bg">
                <video loop autoPlay controls className="fullscreen-bg__video">
                    <source src="https://r7---sn-ug5onuxaxjvh-n8vs.googlevideo.com/videoplayback?expire=1577243208&ei=6H0CXtWuJ4Pz7QTF1ZmACw&ip=188.43.31.249&id=o-AJpJNngnvGrbKkysjLqldfKKpA3okNpRG_y0pWmrOhZF&itag=22&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-ug5onuxaxjvh-n8vs%2Csn-axq7sn76&ms=au%2Conr&mv=m&mvi=6&pl=24&nh=%2CIgpwcjAyLmxlZDAzKgkxMjcuMC4wLjE&initcwndbps=1196250&mime=video%2Fmp4&ratebypass=yes&dur=1230.471&lmt=1552607269200602&mt=1577221503&fvip=7&fexp=23842630&beids=23865219&c=WEB&txp=4532432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIhAPewo5AO1_N4y9FnjpEWbU1s2RRBgoSfaj9UrrxrXWwcAiADHAQ_6uLEn-Oi-wwRuym5MSk3aKvdR85X1bNBFE5jhQ%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cnh%2Cinitcwndbps&lsig=AHylml4wRQIhAOjcxdC4mEiX7zbf33FTx3paLHxm34LhbPtPjXd0BxcKAiAQ0WNLHk7B2vWOBgyHeuY1cdyqPQvqUKwbh3dwLx1c0Q%3D%3D" type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default MainPg;
