const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      Created By&nbsp;
      <a
        href="https://www.linkedin.com/in/mohit-khandelwal-15aug/"
        target="_blank"
        title="Mohit Khandelwal's Linkedin Profile"
      >
        Mohit Khandelwal
      </a>
      <i className="fa-solid fa-copyright"></i>
      {year}
      <a
        href="https://github.com/mohit1508/namaste-react"
        target="_blank"
        title="Quick Bite Github Repository"
      >
        <strong>
          Quick<span>Bite</span>
        </strong>
      </a>
    </div>
  );
};

export default Footer;