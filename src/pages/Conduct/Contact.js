
import  "./Contact.css"
import Header from "../../component/Header";
import HeaderImage from '../../photos/header_bg_2.jpg'
import { MdEmail } from "react-icons/md";
import { BsMessenger } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";

const Conduct = () => {
  return (
    <>
      <Header  title="Get In Touch" image={HeaderImage}>
        Reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
        pariatur. Excepteur sint occaecat cupidatat non proident,
      </Header>
      <section className="contact">
        <div className="container contact__container">
          <div className="contact__wrapper">
            <a
              href="mailto:samwelsaruni99@gmail.com"
              target="_blank"
              rel="noreffer noopener"
            >
              <MdEmail />
            </a>
            <a
              href="http://m.me/sammy saruni"
              target="_blank"
              rel="noreffer noopener"
            >
              <BsMessenger/>
            </a>
            <a
              href="https://wa.me/+254710243762"
              target="_blank"
              rel="noreffer noopener"
            >
              <IoLogoWhatsapp />
            </a>
          </div>
        </div>
      </section>
    </>
  );
};

export default Conduct;
