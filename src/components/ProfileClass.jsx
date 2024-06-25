import { Component } from "react";
import ProfileUserClass from "./ProfileUserClass";
import ProfileRepoClass from "./ProfileRepoClass";
import {
  Github_API_User,
  Github_UserName,
  options,
} from "../utils/constants";

// Profileclass is class component
class Profile extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: null,
      repoInfo: null,
    };
  }

  componentDidUpdate() {}

  componentWillUnmount() {}

  async componentDidMount() {
    try {
      const response = await Promise.all([
        fetch(Github_API_User + Github_UserName, options),
        fetch(Github_API_User + Github_UserName + "/repos", options),
      ]);

      const resData = await Promise.all(response.map((r) => r.json()));

      this.setState({
        userInfo: resData[0],
        repoInfo: resData[1],
      });
    } catch (error) {
      console.error(error);
    }
  }

  render() {
    const { userInfo, repoInfo } = this.state; 

    return (
      <>
        {userInfo && repoInfo ? (
          <div className="profile-class-container">
            <div className="profile-container">
              <h1 className="profile-title">About Me</h1>
              <ProfileUserClass userInfo={userInfo} />
            </div>
            <div className="repo-container">
              <h1 className="repo-title">
                Quick<span>Bite</span> App Github Repository
              </h1>
              <ProfileRepoClass userInfo={userInfo} repoInfo={repoInfo} />
            </div>
          </div>
        ) : null}
      </>
    );
  }
}

export default Profile;