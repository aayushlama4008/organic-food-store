import "./Contact.scss";

import images from "../../constants/images";
import icons from "../../constants/icons";

import questions from "../../constants/questions";
const Contact = () => {
  return (
    <div className="app__contact">
      <div className="app__contact-header grid-center">
        <h1 className="title-text">Get In Touch</h1>
      </div>
      <section className="app__contact-details">
        <div className="app__contact-leaf grid-center">
          <img src={images.basilLeaf} alt="basil-leaf" width={150} />
        </div>
        <div className="app__contact-details-main">
          <div className="links grid-center ">
            <icons.phone className="icon-contact" size={23} />
            <a href="tel:+39 390 390 3909">+39 390 390 3909</a>
            <a href="tel:+39 390 390 3909">+39 390 390 3909</a>
          </div>
          <div className="links grid-center">
            <icons.email className="icon-contact" size={23} />
            <a href="mailto:himlayanorganicfood@gmail.com">
              himlayanorganicfood@gmail.com
            </a>
            <a href="mailto:support@exapmple.com">support@example.com</a>
          </div>
          <div className="links grid-center">
            <icons.location className="icon-contact" size={23} />
            <a
              href="https://maps.app.goo.gl/sgwwx1nTmpLFyW9H9"
              target="_blankk"
            >
              54536 Kröv, Germany
            </a>
          </div>
        </div>
      </section>
      <div className="app__contact-faqs grid-center">
        <h1 className="semi-title-text ">Frequently Asked Questions</h1>
        <img src={images.smallLeaf} alt="small-leaf" />
        <div className="app__contact-questions">
          {questions.map((question, index) => (
            <div className="app__contact-question" key={index}>
              <h4 className="third-title-text">{question.title}</h4>
              <p className="p-text">{question.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Contact;
