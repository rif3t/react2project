import React, { useRef, useState } from 'react';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import logo from "../Royal-Enfield-Shotgun-650-2.avif"
import naked1 from "../naked1.jpg"

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './motors.css';

// import required modules
import { Keyboard, Pagination, Navigation } from 'swiper/modules';
import Container from 'react-bootstrap/esm/Container';
import Row from 'react-bootstrap/esm/Row';
import Col from 'react-bootstrap/esm/Col';
import naked2 from "../naked2.jpg"
import naked3 from "../naked3.jpg"
import naked4 from "../naked4.jpg"
import naked5 from "../naked5.jpg"
import naked6 from "../naked6.jpg"
import naked7 from "../naked7.jpg"
import naked8 from "../naked8.jpg"
import naked9 from "../naked10.jpg"
import sport1 from "../sport1.jpg"
import sport2 from "../sport2.jpg"
import sport3 from "../sport3.jpg"
import sport5 from "../sport5.jpg"
import sport6 from "../sport6.jpg"
import sport7 from "../sport7.jpg"
import sport9 from "../sport9.jpg"
import sport13 from "../sport13.jpg"
import sport15 from "../sport15.jpg"
import sport16 from "../sport16.jpg"
import sport17 from "../sport17.jpg"
import cruise1 from "../cruise1.jpg"
import cruise2 from "../cruise2.jpg"
import cruise3 from "../cruise3.jpg"
import cruise4 from "../cruise4.jpg"
import cruise5 from "../cruise5.jpg"
import cruise6 from "../cruise6.jpg"
import cruise7 from "../cruise7.jpg"
import cruise8 from "../cruise8.jpg"
import cruise9 from "../cruise9.jpg"
import cruise10 from "../cruise10.jpg"
import tour1 from "../tour1.jpg"
import tour2 from "../tour2.jpg"
import tour3 from "../tour3.jpg"
import tour4 from "../tour4.jpg"
import tour5 from "../tour5.jpg"
import tour6 from "../tour6.jpg"
import tour7 from "../tour7.jpg"
import tour8 from "../tour8.jpg"
import tour9 from "../tour9.jpg"
import scoter1 from "../scoter1.jpg"
import scoter2 from "../scoter2.jpg"
import scoter3 from "../scoter3.jpg"
import scoter4 from "../scoter4.jpg"
import scoter5 from "../scoter5.jpeg"
import scoter6 from "../scoter6.jpeg"
import scoter7 from "../scoter7.jpeg"
import dirt1 from "../dirt1.jpg"
import dirt2 from "../dirt2.jpg"
import dirt3 from "../dirt3.jpg"
import dirt4 from "../dirt4.jpg"
import dirt5 from "../dirt5.png"
import dirt6 from "../dirt6.png"
import dirt7 from "../dirt7.png"
export default function motors() {
  return (
    <>
     <img src={logo} class="img-fluid img mb-3"/>

      <Swiper
        slidesPerView={1}
        spaceBetween={30}
        keyboard={{
          enabled: true,
        }}
        pagination={{
          clickable: true,
        }}
        navigation={true}
        modules={[Keyboard, Pagination, Navigation]}
        className="mySwiper"
      >
        <SwiperSlide className='swip1'> <Container>
          <h1 className='text-center nakedlogo mt-2 mb-4'>ARE U A SAVGE RIDER ?</h1>
          <h6 className='text-center mb-3'>Surf through our gorgeous collection of naked bikes.</h6>
          <Row className=''>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={naked1} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.cycleworld.com/story/bikes/bmw-s-1000-r-dyno-test-2022/'>About S1000rr</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>bmw s1000rr 2022</Card.Title>
        <Card.Text className='text-muted'>price: 1.000.000 EGP</Card.Text>
        <Card.Text>
          color: gray
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={naked2} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_cb600_hornet_07.html'>About Hornet600</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda hornet 600 -2007</Card.Title>
        <Card.Text className='text-muted'>price: 320.000 EGP</Card.Text>
        <Card.Text>
        color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={naked3} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_cb1000r_09.html'>About CB1000R</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda CB1000R 2009</Card.Title>
        <Card.Text className='text-muted'>price: 500.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={naked4} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_cb1000r_19.html'>About CB1000R</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda CB1000R 2019 </Card.Title>
        <Card.Text className='text-muted'>price: 700.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={naked5} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/kawasaki/kawasaki_z1000%2014.htm'>About Z1000</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>KAWASAKI Z1000 2014</Card.Title>
        <Card.Text className='text-muted'>price: 720.000 EGP</Card.Text>
        <Card.Text>
         color: green
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={naked6} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_cb600_hornet_08.html'>About Hornet600</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>HONDA HORNET 600 2008</Card.Title>
        <Card.Text className='text-muted'>price: 270.000 EGP</Card.Text>
        <Card.Text>
         color: silver
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={naked7} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_cb600_hornet_08.html'>About Hornet600</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>HONDA HORNET 900 2002</Card.Title>
        <Card.Text className='text-muted'>price: 350.000 EGP</Card.Text>
        <Card.Text>
         color: silver
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={naked8} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_cb600_hornet_08.html'>About Hornet600</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>HONDA CB650F 2017</Card.Title>
        <Card.Text className='text-muted'>price: 480.000 EGP</Card.Text>
        <Card.Text>
         color: silver
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={naked9} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_cb600_hornet_08.html'>About Hornet600</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Yamaha ZF6 2007</Card.Title>
        <Card.Text className='text-muted'>price: 300.000 EGP</Card.Text>
        <Card.Text>
         color: red
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            
          </Row>
        </Container>
    </SwiperSlide>
        <SwiperSlide>
        <Container>
          <h1 className='text-center nakedlogo mt-2 mb-4'>ARE YOU BRAVE ENOUGH?</h1>
          <h6 className='text-center mb-3'>FEEL THE ADRENALINE</h6>
          <Row className=''>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={sport1} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/kawasaki/Kawasaki_H2_18.html'>About H2</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>kawasaki ninja H2 2018</Card.Title>
        <Card.Text className='text-muted'>price: 2.400.000 EGP</Card.Text>
        <Card.Text>
          color: black&green
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={sport2} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/kawasaki/Kawasaki_h2r_18.html'>About H2R</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>kawasaki ninja H2R 2018</Card.Title>
        <Card.Text className='text-muted'>price: 3.400.000 EGP</Card.Text>
        <Card.Text>
        color: black&green
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={sport3} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About H2</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>kawasaki ninja H2 2021</Card.Title>
        <Card.Text className='text-muted'>price: 3.250.000 EGP</Card.Text>
        <Card.Text>
          color: green
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={sport5} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/suzu/suzuki_gsxr1300r_22.html'>About Hayabusa</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title> Suzuki Hayabusa 2022</Card.Title>
        <Card.Text className='text-muted'>price: 1.550.000 EGP</Card.Text>
        <Card.Text>
         color: silver
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={sport7} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/suzu/suzuki_gsxr1300r_21.html'>About Hayabusa</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title> Suzuki Hayabusa 2021</Card.Title>
        <Card.Text className='text-muted'>price: 1.350.000 EGP</Card.Text>
        <Card.Text>
         color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>


            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={sport9} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/bmw/bmw-s1000rr-m-20.html'>About S1000rr</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title> BMW S1000rr M-Package 2020</Card.Title>
        <Card.Text className='text-muted'>price: 1.200.000 EGP</Card.Text>
        <Card.Text>
         color: white & blue
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
        
            

            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={sport13} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/suzu/suzuki_gsxR600%2013.htm'>About GSX-R600</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title> Suzuki GSX-R 600 2013</Card.Title>
        <Card.Text className='text-muted'>price: 480.000 EGP</Card.Text>
        <Card.Text>
         color: red
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
        
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={sport15} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/kawasaki/kawasaki_zx10R_17.htm'>About ZX-10R</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title> kawasaki ZX-10R 2019</Card.Title>
        <Card.Text className='text-muted'>price: 1.000.000 EGP</Card.Text>
        <Card.Text>
         color: green
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>
            <div class="image-container">
      <Card.Img variant="top" src={sport16} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_cbr1000rr_17.htm'>About CBR1000rr</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title> Honda CBR 1000rr 2017</Card.Title>
        <Card.Text className='text-muted'>price: 800.000 EGP</Card.Text>
        <Card.Text>
         color: red
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            

           
          </Row>
        </Container>
        </SwiperSlide>
        <SwiperSlide><Container>
          <h1 className='text-center nakedlogo mt-2 mb-4'>Enjoy your gorgeous ride!</h1>
          <h6 className='text-center mb-3'>Surf through our gorgeous collection</h6>
          <Row className=''>
          <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={cruise1} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_vt_750_shadow_sport_02.htm'>About honda</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda shadow spirit 750cc 2003</Card.Title>
        <Card.Text className='text-muted'>price: 315.000 EGP</Card.Text>
        <Card.Text>
          color: red
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={cruise2} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/h-d/harley_sportster_s_21.html'>About harley</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Harley davidson sportester s 2024</Card.Title>
        <Card.Text className='text-muted'>price: 1.250.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={cruise3} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_rune.htm'>About Valkery</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda valkery rune 2004</Card.Title>
        <Card.Text className='text-muted'>price: 1.100.000 EGP</Card.Text>
        <Card.Text>
          color: blue
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={cruise4} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_vtx1800n.htm'>About Vtx</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda vtx 1800n 2005</Card.Title>
        <Card.Text className='text-muted'>price: 495.000 EGP</Card.Text>
        <Card.Text>
          color: silver
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={cruise5} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/suzu/suzuki_boulevard_m109r%2013.htm'>About boulvard</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>suzuki boulvard M109R 2013 </Card.Title>
        <Card.Text className='text-muted'>price: 580.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={cruise6} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_shadow_aero_750_06.html'>About Honda</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda shadow 750 2006 </Card.Title>
        <Card.Text className='text-muted'>price: 340.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={cruise7} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/suzu/suzuki_boulevard_m109r%2013.htm'>About boulvard</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>suzuki boulvard M109R 2014 </Card.Title>
        <Card.Text className='text-muted'>price: 730.000 EGP</Card.Text>
        <Card.Text>
          color: black&yellow
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={cruise8} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/kawasaki/kawasaki_vn2000_vulcan_classic%2008.htm'>About Vulcan</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>kawasaki vulcan 2008 </Card.Title>
        <Card.Text className='text-muted'>price: 365.000 EGP</Card.Text>
        <Card.Text>
          color: green
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={cruise10} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/h-d/harley_davidson_xlh883%20sporster%2000.htm'>About Harley</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Harley davidson sportester 883 2015 </Card.Title>
        <Card.Text className='text-muted'>price: 400.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            </Row>
            </Container>
          </SwiperSlide>
        <SwiperSlide><Container>
          <h1 className='text-center nakedlogo mt-2 mb-4'>Riding like a boss!</h1>
          <h6 className='text-center mb-3'>Surf through our gorgeous collection</h6>
          <Row className=''>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={tour1} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_glx1800_gold_wing_13.html'>About Goldwing</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda Gold Wing 2013</Card.Title>
        <Card.Text className='text-muted'>price: 1.000.000 EGP</Card.Text>
        <Card.Text>
          color: silver
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={tour2} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_nc700X_12.html'>About NC700</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda NC700 2012</Card.Title>
        <Card.Text className='text-muted'>price: 450.000 EGP</Card.Text>
        <Card.Text>
          color: red
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={tour3} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/kawasaki/Kawasaki_h2_sx_se_ninja_20.html'>About ninja</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>kawasaki ninja h2sexse 2018</Card.Title>
        <Card.Text className='text-muted'>price: 1.250.000 EGP</Card.Text>
        <Card.Text>
          color: green
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={tour4} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/kawasaki/Kawasaki_h2_sx_se_ninja_20.html'>About ninja</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>kawasaki ninja h2sexse 2018</Card.Title>
        <Card.Text className='text-muted'>price: 860.000 EGP</Card.Text>
        <Card.Text>
          color: green
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={tour5} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/Honda_Goldwing_18.htm'>About Goldwing</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda Gold Wing 2018</Card.Title>
        <Card.Text className='text-muted'>price: 1.250.000 EGP</Card.Text>
        <Card.Text>
          color: gray
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={tour6} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/kawasaki/kawasaki_concours%2009.htm'>About Concorse</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>kawasaki Concorse 2009</Card.Title>
        <Card.Text className='text-muted'>price: 650.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={tour7} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/kawasaki/kawasaki_concours%2017.htm'>About Concorse</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>kawasaki Concorse 2017</Card.Title>
        <Card.Text className='text-muted'>price: 840.000 EGP</Card.Text>
        <Card.Text>
          color: gray
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={tour8} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About GSX-GT</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>suzuki GSX-GT 1000cc 2022</Card.Title>
        <Card.Text className='text-muted'>price: 950.000 EGP</Card.Text>
        <Card.Text>
          color: blue
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid mb-1'>

            <div class="image-container">
      <Card.Img variant="top" src={tour9} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://www.motorcyclespecs.co.za/model/Honda/honda_glx1800_gold_wing_f6b_13.html'>About F6B</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Honda Gold Wing F6B 2013</Card.Title>
        <Card.Text className='text-muted'>price: 820.000 EGP</Card.Text>
        <Card.Text>
          color: red
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            </Row>
            </Container>
        </SwiperSlide>
        <SwiperSlide>
<Container>
<h1 className='text-center nakedlogo mt-2 mb-4'>Enjoy your gorgeous ride!</h1>
<h6 className='text-center mb-3'>Surf through our gorgeous collection</h6>
  <Row>
  <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={scoter1} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Aero wing electric scooter </Card.Title>
        <Card.Text className='text-muted'>price: 14.000 EGP</Card.Text>
        <Card.Text>
          color: !
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={scoter2} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Aero Galaxy 1500WATT electric scooter </Card.Title>
        <Card.Text className='text-muted'>price: 39.000 EGP</Card.Text>
        <Card.Text>
          color: !
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u sorry & thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>

            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={scoter3} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About Suzuki</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Suzuki Burgman 650 2013 </Card.Title>
        <Card.Text className='text-muted'>price: 320.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid '>

            <div class="image-container">
      <Card.Img variant="top" src={scoter4} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About Suzuki</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Suzuki Burgman 650 2015 </Card.Title>
        <Card.Text className='text-muted'>price: 450.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={scoter5} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://eg.hatla2ee.com/en/new-motorcycle/hawa/Hawa-R8'>About Hawa</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Hawa R8 2023 </Card.Title>
        <Card.Text className='text-muted'>price: 34.000 EGP</Card.Text>
        <Card.Text>
          color: white
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={scoter6} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://eg.hatla2ee.com/en/new-motorcycle/hawa/Marino-Sport'>About Hawa</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Hawa Marino sport 2023 </Card.Title>
        <Card.Text className='text-muted'>price: 38.000 EGP</Card.Text>
        <Card.Text>
          color: blue
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid mb-1'>

            <div class="image-container">
      <Card.Img variant="top" src={scoter7} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://eg.hatla2ee.com/en/new-motorcycle/hawa/X-Max'>About Hawa</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Hawa X MAX 2023 </Card.Title>
        <Card.Text className='text-muted'>price: 48.000 EGP</Card.Text>
        <Card.Text>
          color: gray
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid mb-1'>

            <div class="image-container">
      <Card.Img variant="top" src={scoter7} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://eg.hatla2ee.com/en/new-motorcycle/hawa/X-Max'>About Hawa</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Hawa loma 2023 </Card.Title>
        <Card.Text className='text-muted'>price: 36.000 EGP</Card.Text>
        <Card.Text>
          color: gray
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid mb-1'>

            <div class="image-container">
      <Card.Img variant="top" src={scoter7} className='image'/>
      <div class="overlay">
            <div class="text"><a href='https://eg.hatla2ee.com/en/new-motorcycle/hawa/X-Max'>About Hawa</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Hawa X ioms 2023 </Card.Title>
        <Card.Text className='text-muted'>price: 58.000 EGP</Card.Text>
        <Card.Text>
          color: gray
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            
  </Row>
</Container>

        </SwiperSlide>
        <SwiperSlide>
        <Container>
<h1 className='text-center nakedlogo mt-2 mb-4'>Are You Brave Enough!</h1>
<h6 className='text-center mb-3'>Surf through our gorgeous collection</h6>
  <Row>
  <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={dirt1} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>CAN-AM RT 2013 </Card.Title>
        <Card.Text className='text-muted'>price: 700.000 EGP</Card.Text>
        <Card.Text>
          color: gray
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={dirt2} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>CAN-AM ryker 900 RALLY EDITION 2022 </Card.Title>
        <Card.Text className='text-muted'>price: 950.000 EGP</Card.Text>
        <Card.Text>
          color: black
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={dirt3} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>Buggy Term 200cc 2024 </Card.Title>
        <Card.Text className='text-muted'>price: 165.000 EGP</Card.Text>
        <Card.Text>
          color: yellow
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={dirt4} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>KTM 450 sx-f 2018 </Card.Title>
        <Card.Text className='text-muted'>price: 480.000 EGP</Card.Text>
        <Card.Text>
          color: orange
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={dirt5} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>KTM 50 SX 2025 </Card.Title>
        <Card.Text className='text-muted'>price: 850.000 EGP</Card.Text>
        <Card.Text>
          color: !
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={dirt6} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>KTM 450 SX-F 2025 </Card.Title>
        <Card.Text className='text-muted'>price: 1.200.000 EGP</Card.Text>
        <Card.Text>
          color: !
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={dirt7} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>KTM 150 SX 2025 </Card.Title>
        <Card.Text className='text-muted'>price: 560.000 EGP</Card.Text>
        <Card.Text>
          color: !
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid'>

            <div class="image-container">
      <Card.Img variant="top" src={dirt7} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>KTM 600 SX 2025 </Card.Title>
        <Card.Text className='text-muted'>price: 820.000 EGP</Card.Text>
        <Card.Text>
          color: !
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            <Col lg={4} md={5}>
            <Card style={{ width: '30rem' }} className='img-fluid mb-3'>

            <div class="image-container">
      <Card.Img variant="top" src={dirt7} className='image'/>
      <div class="overlay">
            <div class="text"><a href=''>About AERO</a></div>
        </div>
</div>
      <Card.Body>
        <Card.Title>KTM 350 SX 2025 </Card.Title>
        <Card.Text className='text-muted'>price: 960.000 EGP</Card.Text>
        <Card.Text>
          color: !
        </Card.Text>
        <Button onClick={()=>{window.alert("this website for you to pick your type if you want to buy come visit us in our Garage or email us we will be happy to serv u iam sorry and,thanks for visit our website :')")}}  variant="primary">add to cart</Button>
      </Card.Body>
    </Card>
            </Col>
            </Row>
            </Container>
        </SwiperSlide>
      </Swiper>
    </>
  );
}