import Carousel from "./Carousel";

function Main() {
  return (
    <div>
      <main className="main">
        <div className="container">
          <h6>Testimonials</h6>
          <h1>What our clients say about us</h1>
          <section className="section1">
            <div className="textBox">
              <p className="textBox-p1">
                I have worked with a number of software developers before but
                none of them quite reached the level of professionalism,
                diligence and enthusiasm that I experienced with Vitaliy and his
                team. They are incredibly easy to work with and almost always
                find great programming solutions to our requirements.
                <br />
                <br />
                <br />
                What I especially liked about the SoftFormance team is their
                passion and understanding for our project. It’s like working
                with friends. Friends that deliver on their promises. I have
                nothing but praise for the work of SoftFormance team and look
                forward to working with this agency in the future.
              </p>
              <p className="textBox-p2">
                <b>Wolfgang Männel</b>
                <br />
                Founder and Managing Director, Fotografen365
              </p>
            </div>

            <div className="photoBox">
              <div className="photoBox-inner">
                <Carousel />
{/* <img src={photo_1} alt="photo-1" height="100%"></img>
                <a className="btn-2 btn2-left">&#10093;</a>
  <a className="btn-2 btn2-right">&#10092;</a>*/}
              </div>
            </div>
          </section>
          <section className="section2">
            <h1>Leave your feedback</h1>
            <p>
              If you had a chance to work with us, please, leave your feedback{" "}
              <br /> and we’ll happily add it to our testimonials page. Thank
              you!
            </p>

            <a className="btn-1" target="_blank" rel="noreferrer" href="https://www.SoftFormance.com">
              leave your feedback
            </a>
          </section>
        </div>
      </main>
    </div>
  );
}

export default Main;