import React from 'react';
import classes from './MainPg.modules.css';

class MainPg extends React.Component {
    render(){
        return (
            <div className="fullscreen-bg">
                <video loop autoPlay controls className="fullscreen-bg__video">
                    <source src="https://r7---sn-ug5onuxaxjvh-n8vs.googlevideo.com/videoplayback?expire=1577288081&ei=MS0DXuLQH4iGyQWhjZW4Aw&ip=188.43.31.249&id=o-AOf6hCUZvAEwgqBgoMO8gu0M9P2Ky46-J9RkLaxMwqeQ&itag=22&source=youtube&requiressl=yes&mm=31%2C26&mn=sn-ug5onuxaxjvh-n8vs%2Csn-axq7sn76&ms=au%2Conr&mv=m&mvi=6&pl=24&nh=%2CIgpwcjAyLmxlZDAzKgkxMjcuMC4wLjE&initcwndbps=1287500&mime=video%2Fmp4&ratebypass=yes&dur=1230.471&lmt=1552607269200602&mt=1577266423&fvip=7&fexp=23842630%2C23860863&c=WEB&txp=4532432&sparams=expire%2Cei%2Cip%2Cid%2Citag%2Csource%2Crequiressl%2Cmime%2Cratebypass%2Cdur%2Clmt&sig=ALgxI2wwRQIgUtxGAcBUW58jx5t4JNYc10OUdllf10Nd8Ju3N1IFfmMCIQDouhqPBlsHbXPe0dhnoL4-9MVTFmpYMmb4nbwWWfbhcQ%3D%3D&lsparams=mm%2Cmn%2Cms%2Cmv%2Cmvi%2Cpl%2Cnh%2Cinitcwndbps&lsig=AHylml4wRQIgWkgMk6I2_CglpSCndHIL2NfTOQ4dGftYTDQj7YRC_O0CIQDPrKoVOfkFqzeZqacxWGoR7LqjVOcvV96usPdxfhlUsQ%3D%3D" type="video/mp4"/>
                </video>
            </div>
        );
    }
}

export default MainPg;
