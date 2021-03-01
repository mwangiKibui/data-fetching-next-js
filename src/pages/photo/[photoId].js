import {useRouter} from "next/router";

//components
import PhotoWrapper from "../../styles/Photo.style";
import Photo from "../../components/Photo/Photo";
import {fetchPhoto,fetchPhotos} from '../../library/photos/photos';

function PhotoComponent({photo}){

    const router = useRouter();

    if(router.isFallback) return (
        <p>
            Loading..
        </p>
    )

    return (
        <PhotoWrapper>

            <div className="container">
                <div className="row">
                    <div className="col-12 col-sm-12 col-md-12">
                        <Photo photo={photo} />
                    </div>
                </div>
            </div>
        </PhotoWrapper>
    )
};

export async function getStaticProps(context){

    

};

export async function getStaticPaths(){

    
};

export default PhotoComponent;