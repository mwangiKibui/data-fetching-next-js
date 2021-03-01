
import Link from "next/link";

//components
import {UserPhotosWrapper,UserPhotosHeading} from "./User.style";

function UserPhotos({user}){

    const photos = user.photos;

    return(
        <UserPhotosWrapper>
           <UserPhotosHeading>
               Photos by {user['name']}
           </UserPhotosHeading>
           <div className="row">
               {
                   photos.map((photo,i) => (
                       <div className="col-12 col-sm-3 col-md-3" key={i}>
                           <div className="card">


                               {/** image */}                       
                               <Link href={`/photo/${photo['id']}`}>
                                <a>                             

                                    <img
                                    className="card-photo"
                                    src={photo['urls']['small']}
                                    alt="card_photo"
                                    />

                                </a>
                               </Link>

                           </div>
                       </div>
                   ))
               }
           </div>
           <style jsx>{`

            .card-photo-preloader {
                width:100%;
                height:200px;
                background-color:grey;
            }

            .card-photo{
                width:100%;
                height:auto;
            }

           `}</style>
        </UserPhotosWrapper>
    )
};

export default UserPhotos;