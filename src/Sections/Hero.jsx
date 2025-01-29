import Heading from "../components/Heading/Heading";
import Image from "../components/Image";
import fayyazPic from "../../public/assets/images/fayyaz-pic.webp";
import DownloadButton from "../components/DownloadButton";
import SocialIcons from "../components/SocialIcons/SocialIcons";
import Paragraph from "../components/Paragraph"


export default function Hero() {
  return (
    <section className="hero-section">
      <div className="container">
        <div className="row justify-content-between align-items-center">
          <div className="col-lg-7 col-md-7 col-12 text-md-start text-center">
            <Heading
              smallText="I am Sheikh Fayyaz"
              bigText1="Next-Level"
              bigText2="Frontend Developer."
            />

            <div className="theme-bg-shadow position-relative d-md-none d-block px-4 my-4">
              <Image
                imgPath={fayyazPic}
                imgAlt="sheikh fayyaz Frontend Developer"
                imgLoading="eager"
              />
            </div>

            <Paragraph
              mb="mb-md-5 mb-3"
              content="I break down complex user experinece problems to create integritiy focussed solutions that connect billions of people."
            />
            <div className="d-flex align-items-center gap-4 flex-wrap justify-content-md-start justify-content-center">
              <div className="">
                <DownloadButton />
              </div>
              <div className="">
                <SocialIcons />
              </div>
            </div>
          </div>
          <div className="col-lg-3 col-md-3 col-12">
            <div className="theme-bg-shadow position-relative d-md-block d-none">
              <Image
                imgPath={fayyazPic}
                imgAlt="sheikh fayyaz Frontend Developer"
                imgLoading="eager"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
