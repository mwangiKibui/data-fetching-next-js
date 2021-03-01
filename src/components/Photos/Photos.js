
import PhotoCard from './PhotoCard';
import PhotosWrapper from './Photos.style';

const Photos = ({photos}) => {

    return (
        <PhotosWrapper>
            <div className="container">
                <div className="row">
                    {
                        photos.map((photo,id) => (
                            <div className="col-sm-3 col-md-3" key={id}>
                                <PhotoCard photo={photo} />
                            </div>
                        ))
                    }
                </div>
            </div>
        </PhotosWrapper>
    )
};

export default Photos;