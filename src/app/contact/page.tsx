import styles from './contact.module.css';
import Button1 from '../components/Button1'
import Heading from '../components/Heading';

export default function Contact() {
  return (
    <> 
    <div>
      <Heading title='CONTACT ME' subtitle='Get in touch'/>
    </div>
    <div className={styles.contactContainer}>
      
      <div className={styles.contactInfo}>
        <h3>Contact Information</h3>
        <p><strong>Email: </strong> waleedshaikh@gmail.com</p>
        <p><strong>Phone:</strong>+92 3182164523</p>
        <p><strong>Address:</strong> Scheme 33, Karachi, Pakistan</p>
      </div>

      
      <div className={styles.contactForm}>
        <h3>Get in Touch</h3>
        <form>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" required />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea id="message" name="message" rows={5} required></textarea>
          </div>
          <Button1 text='Send Message'/>
        </form>
      </div>
    </div>
    </>
  );
}
