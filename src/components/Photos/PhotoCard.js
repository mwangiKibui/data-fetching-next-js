
import Link from 'next/link';

//components
import {PhotoCardWrapper} from './Photos.style';

const PhotoCard = (photo) => {

     
    return (
        <PhotoCardWrapper>
        <div className="card">

            <Link href={`/photo/${photo['photo']['id']}`}>
            <a>
            <img
            className="card-img-top"
            src={photo['photo'].urls.small}
            alt={photo['photo'].alt_description}
            />
            </a>
            </Link>

            <div className="card-body">

                <div className="media">

                    <Link href={`/users/${photo['photo']['user']['username']}`}>
                    <a>
                    <img 
                    className="card-body-media-image"
                    src={
                        photo['photo'].user.profile_image ? 
                        photo['photo'].user.profile_image.large : 
                        "/images/avatar.png"
                    }
                    />
                    </a>
                    </Link>

                    <div className="media-body">

                        <Link href={`/users/${photo['photo']['user']['username']}`}>
                            <a className="media-body-link">
                            {photo['photo'].user.name}
                            </a>
                        </Link>

                    </div>

                </div>

            </div>

            <style jsx>{`
            
            .card{
                width:100%;
                margin:10px;
            }

            .card-img-top-preloader {
                width:100%;
                height:200px;
                background-color:grey;
            }

            .card-img-top{
                width:100%;
                height:auto;
            }

            .card-body-media-image-preloader{
                width:50px;
                height:50px;
                border-radius:50%;
                background-color:grey;
                margin-right:3px;
            }

            .card-body-media-image{
                width:50px;
                height:50px;
                border-radius:50%;
                margin-right:3px;
            }

            .media-body{
                width:100%;
                height:50px;
                display:flex;
                justify-content:center;
                align-items:center;
            }

            .media-body-link{
                color:#2c2c2c;
                text-decoration:none;

            }

            .media-body-link:hover{
                color:#2c2c2c;
                text-decoration:none;
            }

            `}</style>

        </div>
        </PhotoCardWrapper>
    )
};

export default PhotoCard;