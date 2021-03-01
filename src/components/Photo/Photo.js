import Link from "next/link";

//components
import PhotoWrapper from "./Photo.style";

const Photo = ({photo}) => {

    return (
        <PhotoWrapper>

            <div className="media">

                <img
                className="photo-media-img"
                src={photo['urls']['small']}
                alt={photo['alt_description']}
                />

                <div className="media-body photo-media-body">

                    <h4>
                        {photo['description']}
                    </h4>

                    <div className="media">

                        <img
                           className="photo-user-media-img"
                           src={
                               photo['user']['profile_image'] ? 
                               photo['user']['profile_image']['large'] : 
                               '/images/avatar.png'
                           }
                        />

                        <div className="media-body photo-user-media-body">
                           
                           <Link href={`/users/${photo['user']['username']}`}>
                               <a className="photo-user-link">
                                   {
                                       photo['user']['name']
                                   }
                               </a>
                           </Link>
                        </div>

                    </div>

                </div>

            </div>

            <style jsx>{`

            .photo-media-img-preloader{
                width:30%;
                height:200px;
                background-color:grey;
            }

            .photo-media-img{
                width:30%;
            }

            .photo-media-body{
                margin-left:20px;
                padding:30px;
            }

            .photo-user-media-img-preloader{
                width:100px;
                height:100px;
                border-radius:50%;
                background-color:grey;
            }

            .photo-user-media-img{
                width:100px;
                height:100px;
                border-radius:50%;
            }

            .photo-user-media-body{
                padding:30px 0px;
                margin-left:10px;
            }

            .photo-user-link:hover{
                text-decoration:none;
            }

            `}</style>

        </PhotoWrapper>
    )
};

export default Photo;