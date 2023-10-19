import React, { useState } from 'react'
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import moment from "moment";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBirthdayCake, faPen, } from "@fortawesome/free-solid-svg-icons";

import LeftSidebar from "../../components/LeftSidebar/LeftSidebar";
import Avatar from "../../components/Avatar/Avatar";
import EditProfileForm from "./EditProfileform";
import ProfileBio from "./ProfileBio";
import "./UserProfile.css";



const UserProfile = ({ slideIn, handleSlideIn }) => {

  const { id } = useParams();

  const users = useSelector((state) => state.usersReducer);
  const currentProfile = users.filter((user) => user._id === id)[0];
  const currentUser = useSelector((state) => state.currentUserReducer);
  const [Switch, setSwitch] = useState(false);

  return (
    <div className="home-container-1">
      <LeftSidebar slideIn={slideIn} handleSlideIn={handleSlideIn} />
      <div className="home-container-2">
        <section>
          <div className="user-details-container">
            <div className="user-details">
              <Avatar backgroundColor="purple" color="white" fontSize="50px" px="40px" py="30px">
                {currentProfile?.name.charAt(0).toUpperCase()}
              </Avatar>
              <div className="user-name">
                <h1>{currentProfile?.name}</h1>
                <p>points: {currentProfile?.points || 0}</p>
                <p>
                  <FontAwesomeIcon icon={faBirthdayCake} /> Joined{" "}
                  {moment(currentProfile?.joinedOn).fromNow()}
                </p>
              </div>
            </div>
            {currentUser?.result._id === id && (
              <button
                type="button"
                onClick={() => setSwitch(true)}
                className="edit-profile-btn"
              >
                <FontAwesomeIcon icon={faPen} /> Edit Profile
              </button>
            )}
          </div>
          <>
            {Switch ? (
              <EditProfileForm
                currentUser={currentUser}
                setSwitch={setSwitch}
              />
            ) : (
              <ProfileBio currentProfile={currentProfile} />
            )}
          </>
        </section>
        <section className='reward-section'>
          <div>
            <h1>Badges</h1>
            {
              currentProfile && currentProfile.badges && <div >
                <p>{currentProfile.badges.length} badge</p>
                <div className='badge-container'>
                  {currentProfile.badges.map(badge => {
                    return <div style={{ padding: '3px 6px', borderRadius: '2px', backgroundColor: 'orange', textAlign: 'center' }}>{badge}</div>
                  })}
                </div>
                {currentProfile && !currentProfile.badges && <div>0 Badges</div>}
              </div>
            }
          </div>
          <div>
            <div>
              <h3>Badge Criteria</h3>
              <ul>
                <li>When you post 10 Answer you'll get <span style={{ fontWeight: '600' }}>"Teacher"</span> Badge.</li>
                <li>When you post 10 Question you'll get <span style={{ fontWeight: '600' }}>"Curious"</span> Badge.</li>
                <li>When you get 120 points you'll get <span style={{ fontWeight: '600' }}>"Professor"</span> Badge.</li>
                <li>When your any question get 10 upvote you'll get <span style={{ fontWeight: '600' }}>"Popular"</span> Badge.</li>
              </ul>
            </div>
            <div>
              <h3>Earn Points</h3>
              <ul>
                <li>5 points on every answer you post</li>
                <li>2 points on every question you post</li>
                <li>10 points when your any question get upvote</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}

export default UserProfile
