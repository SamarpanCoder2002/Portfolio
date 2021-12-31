import IPadContainer from "../ipad-design/ipad-container";

const chaptersList = [
  {
    title: "1. App Authentication UI Make",
    redirectLink: "https://youtu.be/nbCFUYTNZl0",
  },
  {
    title: "2. Email And Password Authentication",
    redirectLink: "https://youtu.be/zklM-r-YQQo",
  },
  {
    title: "3. Google And Facebook Authentication",
    redirectLink: "https://youtu.be/ieOFp1xjqtU",
  },
  {
    title: "4. Start With Cloud Firestore and Make New User Account",
    redirectLink: "https://youtu.be/8uO-LaFLU0Q",
  },
  {
    title: "5. Making UI of Chat And Status Collection Screen",
    redirectLink: "https://youtu.be/6iX510y6UW4",
  },
  {
    title: "6. Call Logs And Multiple Message Option UI",
    redirectLink: "https://youtu.be/dnm-GId8YMg",
  },
  {
    title: "7. Start And Complete the UI of Menu Screen",
    redirectLink: "https://youtu.be/U5FDSvsrkQw",
  },
  {
    title: "8. Start With SQLite to Config Tables With Data Store",
    redirectLink: "https://youtu.be/NcZtxiLtR9g",
  },
  {
    title: "9. Connection Send And Accept Request Management",
    redirectLink: "https://youtu.be/ZQq-ynCawLI",
  },
  {
    title: "10. Search Bar With Functionality - Connection Screen",
    redirectLink: "https://youtu.be/WMDERyyqILc",
  },
  {
    title: "11. Start With Chat Screen UI",
    redirectLink: "https://youtu.be/E9v38PpPsxQ",
  },
  {
    title: "12. Text Chat UI Completion in Chat Screen",
    redirectLink: "https://youtu.be/isFuz1q-IVY",
  },
  {
    title: "13. Making Image Chat UI",
    redirectLink: "https://youtu.be/WpMMmwiOdh0",
  },
  {
    title: "14. Making Video Chat UI",
    redirectLink: "https://youtu.be/z_wz0Nw_7GQ",
  },
  {
    title: "15. Document And Loation Chat UI",
    redirectLink: "https://youtu.be/yViWjhS2kd4",
  },
  {
    title: "16. Audio And Voice Conversation UI",
    redirectLink: "https://youtu.be/vnFw3rFwGQ4",
  },
  {
    title: "17. Show New Connected User to User List",
    redirectLink: "https://youtu.be/Ze0fhMhI2HE",
  },
  {
    title: "18. Send And Receive Incoming Text Messages",
    redirectLink: "https://youtu.be/CWNKa0oBR5s",
  },
  {
    title: "19. Send And Receive Incoming Voice/Audio Messages",
    redirectLink: "https://youtu.be/LwhfMOEd_pI",
  },
  {
    title: "20. Send And Receive Incoming Image Messages",
    redirectLink: "https://youtu.be/m05WT_Za58g",
  },
  {
    title: "21. Send And Receive Incoming Video Messages",
    redirectLink: "https://youtu.be/kh9h5C4cpmU",
  },
  {
    title: "22. Send And Receive Incoming Current Location Messages",
    redirectLink: "https://youtu.be/Zg45y5xkXLo",
  },
  {
    title: "23. Send And Receive Incoming Document Messages",
    redirectLink: "https://youtu.be/VO_COUhJ3G4",
  },
  {
    title: "24. Notification (Foreground And Background) Integration",
    redirectLink: "https://youtu.be/o9xiH4cHQ_Q",
  },
  {
    title: "25. Custom App Icon Integration",
    redirectLink: "https://youtu.be/ftZk9kh0sjM",
  },
  {
    title: "26. Fetching Old Conversation Messages from SQLite",
    redirectLink: "https://youtu.be/ZyiKeZkuiaE",
  },
  {
    title: "27. Auto Scrolling in Chat Screen",
    redirectLink: "https://youtu.be/XadGEZYr5Go",
  },
];

const SocialMediaFlutterApp = () => {
  return (
    <div className="social-media-chat-app-flutter-tutorial">
      <p
        className="fs-4 text-center fw-bold heading aos-removal-class"
        data-aos="zoom-in"
        data-aos-duration="1400"
        data-aos-delay="800"
      >
        <img
          src="https://img.icons8.com/fluency/50/000000/star.png"
          alt="star"
          width="35px"
          className="pb-2"
        />{" "}
        Build a Social Media Chat App in Flutter
      </p>
      <p
        className="mt-2 fs-5 text-center aos-removal-class"
        data-aos="zoom-in"
        data-aos-duration="1400"
        data-aos-delay="1000"
      >
        <img
          src="https://img.icons8.com/external-justicon-lineal-color-justicon/64/000000/external-emoji-emoji-justicon-lineal-color-justicon-9.png"
          alt="happy"
          width="25px"
          className="pb-1"
        />
        &nbsp;Project Demo
      </p>

      {
        <div
          className="mt-4 mb-5 aos-removal-class"
          data-aos="fade-up"
          data-aos-duration="1400"
          data-aos-delay="1200"
        >
          <IPadContainer
            videoLink={"https://www.youtube.com/embed/QEDhmxzEqUA"}
          />
        </div>
      }

      <div className="fs-6">
        <ul className="list-unstyled">
          <li
            data-aos="fade-left"
            data-aos-duration="1000"
            className="aos-removal-class"
          >
            <a
              href="https://youtube.com/playlist?list=PLn4o1Gy6eg752X6ZaJ7UL55kLJ235laOg"
              target="_blank"
              style={{ lineHeight: "40px" }}
              rel="noreferrer"
            >
              👉 Checkout Full Tutorial Playlist
            </a>
          </li>
          <li
            data-aos="fade-left"
            data-aos-duration="1000"
            className="aos-removal-class"
          >
            <a
              href="https://github.com/SamarpanCoder2002/Generation-Chat-App-Tutorial.git"
              target="_blank"
              rel="noreferrer"
            >
              👉 Source Code of Tutorial Available Here
            </a>
          </li>
        </ul>
      </div>

      <div className="fs-6 mt-4">
        <h3
          className="fw-bold aos-removal-class"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <img
            src="https://img.icons8.com/doodle/48/000000/star--v1.png"
            alt="star-smooth"
            width="35px"
            className="pb-2"
          />
          &nbsp;Chapters
        </h3>
        <ul className="list-unstyled mt-3">
          {chaptersList.map((chapter, index) => (
            <ChapterSublist
              redirectLink={chapter.redirectLink}
              chapterName={chapter.title}
            />
          ))}

          {/* <p
            className="fs-6 fw-bold mt-4 aos-removal-class"
            style={{ color: "#2e2e2e" }}
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            More Coming Soon{" "}
            <img
              src="https://img.icons8.com/emoji/48/000000/grinning-face-emoji.png"
              alt="excitement-emoji"
              width="30px"
              className="pb-1"
            />
          </p> */}
        </ul>
      </div>
    </div>
  );
};

const ChapterSublist = ({ redirectLink, chapterName }) => (
  <li
    style={{ lineHeight: "40px" }}
    data-aos="fade-left"
    data-aos-duration="1000"
    className="aos-removal-class"
  >
    <a href={redirectLink} target="_blank" rel="noopener noreferrer">
      {chapterName}
    </a>
  </li>
);

export default SocialMediaFlutterApp;
