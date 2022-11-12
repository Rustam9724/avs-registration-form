const videoImage = require('../assets/video-image.png');

function Video() {
    return (
        <div className="video-container">
            <img className="video-image" src={videoImage}/>
        </div>
    )
}

export default Video;