import { useRef } from 'react';
import emailjs from '@emailjs/browser';
import '../../styles/Contact.scss'
import { ToastContainer ,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Contact = () => {
    const refForm= useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5tixuv2','template_w56oje5', refForm.current, 'Zg0CaG_Fg70Eslw3m' )
        .then(() =>{
            toast('Mensaje Enviado', {
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
            window.location.reload(false);
        }, () =>{
            toast('Error al enviar el mensaje',{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "light",
            })
        });
    }

    
    return (
        <>
            <ToastContainer>
                
            </ToastContainer>
            <div className='container contact-page'>
                <div className='text-zone'>
                    <h1>
                        Contact Me
                    </h1>

                    <div className="contact-form">
                        <form ref={refForm} onSubmit={sendEmail}>
                            <ul>
                                <li className="half">
                                    <input type="text" name='name' placeholder='Name' required />
                                </li>
                                <li className="half">
                                    <input type="email" name='email' placeholder='Email' required />
                                </li>
                                <li>
                                    <input type="text" name="subject" placeholder='Subject' />
                                </li>

                                <li>
                                    <textarea name="message" placeholder='Message'></textarea>
                                </li>
                                <li>
                                    <input  type="submit" className='flat-button' value="SEND" />
                                </li>
                            </ul>
                        </form>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Contact;
