import { Component } from "react";
import { SiGmail, SiLinkedin, SiGithub, SiTwitter } from "react-icons/si";
import {
  Github_Link,
  Email_Link,
  Linkedin_Link,
  Twitter_Link,
} from "../utils/constants";

class SocialProfileClass extends Component {
  constructor(props) {
    super(props);
  }

  async componentDidMount() {}

  componentDidUpdate() {}

  componentWillUnmount() {}

  render() {
    return (
      <div className="social-media-container">
        <a
          href={Linkedin_Link}
          title="Lets connect on Linkedin"
          className="icon-button linkedin"
          target="_blank"
          rel='noopener noreferrer'
        >
          <i>
            <SiLinkedin title="Lets connect on Linkedin" />
          </i>
        </a>
        <a href={Github_Link} title="Follow me on Github" className="icon-button github" target="_blank" rel='noopener noreferrer'>
          <i>
            <SiGithub title="Follow me on Github" />
          </i>
        </a>
        <a href={Email_Link} title="Any Query! Mail me" className="icon-button email" target="_blank" rel='noopener noreferrer'>
          <i>
            <SiGmail title="Any Query! Mail me" />
          </i>
        </a>
      </div>
    );
  }
}

export default SocialProfileClass;