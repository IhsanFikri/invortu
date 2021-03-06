import React from 'react';
import ImageGallery from 'react-image-gallery';
// import 'react-image-gallery/styles/css/image-gallery.css';
import './styles.css';
import { photos } from './photo-data';

function PhotoSection() {
  // const renderYoutubeVideo = () => {
  //   return (
  //     <iframe
  //       title="Pre-Wedding Dinda & Indra"
  //       width="100%"
  //       height="360px"
  //       src="https://www.youtube.com/embed/75w39OY7N-k"
  //       frameBorder="0"
  //       allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
  //       allowFullScreen
  //     ></iframe>
  //   );
  // };

  return (
    <div id="fh5co-testimonial" className="fh5co-section">
      <div className="container">
        <div className="row">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading">
              <h2 className="main-font">#ZulviaIhsan</h2>
              <p className="sub-title">
                "Dan di antara tanda-tanda kebesaran-Nya adalah Dia menciptakan untukmu jodoh dari jenismu sendiri agar kamu mendapatkan ketenangan jiwa dan Dia menjadikan cinta di antara kamu, sesungguhnya itulah tanda-tanda kebesaran-Nya bagi orang-orang yang berpikir." <br />
                (Ar-Rum 30:21).
              </p>
            </div>
          </div>
          {/* <div className="row">
            <div className="col-md-10 col-md-offset-1">{renderYoutubeVideo()}</div>
          </div> */}
          <div className="row">
            <div className="col-md-10 col-md-offset-1">
              <ImageGallery items={photos} showBullets={false} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default PhotoSection;
