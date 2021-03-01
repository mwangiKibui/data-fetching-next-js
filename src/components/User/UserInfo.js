
//third-party
import {FaTwitter,FaInstagram} from "react-icons/fa";

//components
import UserInfoWrapper from "./User.style";

function UserInfo({user}){
    return (
        <UserInfoWrapper>

            <div className="media">
                <img
                className="user-info-media-img"
                src={
                    user['profile_image'] ? 
                    user['profile_image']['large'] : 
                    '/images/avatar.png'
                }
                alt={user['name']}
                />
                <div className="media-body">
                    <h5 className="media-heading">{user['name']}</h5>
                    <p className="media-text">{user['bio']}</p>
                    <ul className="media-social-list">
                        {
                            user['twitter_username'] && (
                                <li className="media-social-list-item">
                                    <a href={`https://twitter.com/${user['twitter_username']}`}>
                                        <FaTwitter className="media-social-list-item-icon" />
                                    </a>
                                </li>
                            )
                        }
                        {
                            user['instagram_username'] && (
                                <li className="media-social-list-item">
                                    <a href={`https://instagram.com/${user['instagram_username']}`}>
                                        <FaInstagram className="media-social-list-item-icon" />
                                    </a>
                                </li>
                            )
                        }
                    </ul>
                </div>

                {/** styles */}

                <style jsx>{`

                .user-info-media-img{
                    width:200px;
                    height:200px;
                    background-color:grey;
                    border-radius:50%;
                    margin-right:10px;
                }

                .media-body{
                    padding:30px 0px;
                }

                .media-text{
                    margin:5px 0px;
                }

                .media-social-list{
                    list-style-type:none;
                    padding:0px;
                    display:inline-flex;
                    justify-content:space-between;
                }

                .media-social-list-item{
                    margin-right:10px;
                }
                `}</style>
                
            </div>

        </UserInfoWrapper>
    )
}

export default UserInfo;