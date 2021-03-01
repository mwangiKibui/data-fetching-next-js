
//components
import Meta from '../components/Layout/Meta';
import HomePageWrapper from '../styles/Home.style';
import Photos from "../components/Photos/Photos";
import {fetchPhotos} from "../library/photos/photos";

function Home({photos}) {

  return (
    <HomePageWrapper>
      <Meta />
      <Photos  photos={photos}/>
    </HomePageWrapper>
  )
};

export async function getServerSideProps(){

 

}

export default Home;