import { useState } from "react";
import VisibilitySensor from "react-visibility-sensor";
import ReactPlayer from 'react-player'

export default function GridGallery({ video }) {
  const [videoShownArray, setvideoShownArray] = useState(
    Array(video.length).fill(false)
  );

  const videosVisibleChange = (index, isVisible) => {
    if (isVisible) {
      setvideoShownArray((currentvideoShownArray) => {
        currentvideoShownArray[index] = true;
        return [...currentvideoShownArray];
      });
    }
  };

  return (
    <div className="grid lg:grid-cols-3 gap-3 xsm:grid-cols-2 mx-auto">
      {video &&
        video.map((videoUrl, index) => (
          <VisibilitySensor
            key={index}
            partialVisibility={true}
            offset={{ bottom: 80 }}
            onChange={(isVisible) => videosVisibleChange(index, isVisible)}
          >
            <GridGalleryCard
              videoUrl={videoUrl}
              show={videoShownArray[index]}
            />
          </VisibilitySensor>
        ))}
    </div>
  );
}

function GridGalleryCard({ videoUrl, show }) {
  return (
    <div
      className={`relative transition ease-in duration-300 transform ${
        show ? "" : "translate-y-16 opacity-0"
      }`}
    >
      <div className="absolute inset-0 z-10 flex transition duration-200 ease-in hover:opacity-0">
        <div className="absolute inset-0 bg-black opacity-70"></div>
        {/* <div className="mx-auto text-white z-10 self-center uppercase tracking-widest text-sm">
          
        </div> */}
      </div>
      {/* <ReactPlayer className='grid xsm:gap-4' url={videoUrl}  width={490} height={400}/> */}

        {/* <div className="grid grid-cols-3 gap-3">
          <video src={require('../pages/photos/vid1.mp4')} />
          <video src={require('../pages/photos/vid2.mp4')} />
          <video src={require('../pages/photos/vid3.mp4')} />
          </div> */}

        <img className="rounded-lg" src={videoUrl} alt=""  width={510} height={500}/>
    </div>
  );
}
