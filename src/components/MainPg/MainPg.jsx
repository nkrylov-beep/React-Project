import React from 'react';
import classes from './MainPg.modules.css';

class MainPg extends React.Component {
    render(){
        return (
            <div className="fullscreen-bg">
                <video loop autoPlay controls className="fullscreen-bg__video">
                    <source src="https://r7---sn-ug5onuxaxjvh-n8vs.googlevideo.com/videoplayback?expire=1577048382&ei=3YT_XdHSPI-m7QT0nIzYAg&ip=188.43.31.249&id=o-ANtzx0xN3HKCzTJEayalmdff3nXdAJHI1V8q1HmO7x2U&itag=22&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-ug5onuxaxjvh-n8vs%2Csn-axq7sn76&ms=au%2Conr&mv=m&mvi=6&pl=24&nh=%2CIgpwcjAyLmxlZDAzKgkxMjcuMC4wLjE&initcwndbps=1015000&mime=video%2Fmp4&ratebypass=yes&dur=1230.471&lmt=1552607269200602&mt=1577026664&fvip=7&fexp=23842630%2C23860862&c=WEB&txp=4532432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgEeBcjKjMI33UeJcOCho5iIOG4xSB3ytPluBMcHA66ZECIQDN4sRYg1yBmPmy_r9E2MSoxZcSxnTwMfJSCaNK3Ola5w%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cnh%2Cinitcwndbps&lsig=AHylml4wRgIhALnYc__BdcLc7cqgPAdVs9JbLIz_RIxp5Y28TWDjyRxxAiEA9-tzimHa8967OMgAveYE8VtAJZZPcWhDbbDy2yxQE4U%3D" type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default MainPg;