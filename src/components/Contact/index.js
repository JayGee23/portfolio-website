import Loader from 'react-loaders';
import './index.scss';
import AnimatedLetters from '../AnimatedLetters';
import { useEffect, useRef, useState } from 'react';
import emailjs from '@emailjs/browser';
import { MapContainer, Marker, Popup, TileLayer} from 'react-leaflet';

const Contact = () => {
    const [letterClass, setLetterClass] = useState('text-animate');
    const form = useRef()

    useEffect(() => {
        const timeoutId = setTimeout(() => {
          setLetterClass('text-animate-hover');
        }, 3000);
      
        return () => {
          clearTimeout(timeoutId);
        };
    }, []);

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                'service_ukn6ufd',
                'template_p8euigu',
                form.current,
                '1VPtwC2k-6Q-U2jzo'
            )
            .then(
                () => {
                    alert('Message sucessfully sent!')
                    window.location.reload(false)
                },
                () => {
                    alert('Failed to send message, please try again')
                }
            )
    }

    return (
        <>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        <AnimatedLetters letterClass={letterClass} strArray={['C', 'o','n','t','a','c','t', ' ', 'm', 'e']} idx={15} 
                        />
                    </h1>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ipsum faucibus vitae aliquet nec. Viverra orci sagittis eu volutpat odio. Fermentum et sollicitudin ac orci. In metus vulputate eu scelerisque felis imperdiet proin.
                    </p>

                    <div className='contact-form'>
                        <form ref={form} onSubmit={sendEmail}>
                            <ul>
                                <li className='half'>
                                    <input type='text' name='user_name' placeholder='Name' required />
                                </li>
                                <li className='half'>
                                    <input type='email' name='user_email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type='text' name='subject' placeholder='Subject' required />
                                </li>
                                <li>
                                    <textarea placeholder='Message' name='message' required></textarea>
                                </li>
                                <li>
                                    <input type='submit' className='flat-button' value='SEND' />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
                <div className='info-map'>
                    Jay Guarino,
                    <br />
                    Vancouver, BC
                    <br />
                    Canada 
                    <br />
                    <span>jayguarino@gmail.com</span>
                </div>
                <div className='map-wrap'>
                <MapContainer center={[49.271298360778495, -123.10632884888848]} zoom={16}>
                    <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" 
                    />
                    <Marker position={[49.271298360778495, -123.10632884888848]}>
                        <Popup className='popup'>Thanks for stopping by!</Popup>
                    </Marker>
                </MapContainer>
                </div>
            </div>

            <Loader type='pacman' />
        </>
    )
}

export default Contact