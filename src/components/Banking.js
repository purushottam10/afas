import Carousel from 'react-bootstrap/Carousel';

function Client() {
    return (
        <section id="clients" class="wow fadeInUp">
      <div class="container">
        <header class="section-header">
        <h3>Our Clients</h3>
      </header>
        <Carousel variant="dark">
            <Carousel.Item>
                <div class="sliderimg">
                <img
                    className=" center "
                    src="assets/img/clients/client-1.png"
                    alt="First slide"
                />
                </div>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div class="sliderimg">
                <img
                    className=" center"
                    src="assets/img/clients/client-2.png"
                    alt="Second slide"
                />
                 </div>

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div class="sliderimg">
                <img
                    className="center "
                    src="assets/img/clients/client-3.png"
                    alt="Third slide"
                />
                    </div>

                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item>
            <div class="sliderimg">
                <img
                    className="center "
                    src="assets/img/clients/client-4.png"
                    alt="First slide"
                /> </div>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item><div class="sliderimg">
                <img
                    className="center"
                    src="assets/img/clients/client-5.png"
                    alt="First slide"
                /> </div>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>
            <Carousel.Item><div class="sliderimg">
                <img
                    className=" center"
                    src="assets/img/clients/client-6.png"
                    alt="First slide"
                /></div>
                <Carousel.Caption>

                </Carousel.Caption>
            </Carousel.Item>

        </Carousel>
        </div>
        </section>
    );
}

export default Client;