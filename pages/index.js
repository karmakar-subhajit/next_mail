import { useState } from 'react';
import axios from 'axios';

export default function Home() {
  const [emailData, setEmailData] = useState({
    to: '',
    subject: '',
    text: '',
  });

  const handleChange = (e) => {
    setEmailData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post('/api/send-email', emailData);
      setEmailData({ to: '', subject: '', text: '' });
      console.log('Email sent');
    } catch (error) {
      console.error('Error sending email:', error);
    }
  };

  return (
    <>
      <div>
        <h1>Send Email</h1>
        <form onSubmit={handleSubmit}>
          <input
            type="email"
            name="to"
            placeholder="To"
            value={emailData.to}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="subject"
            placeholder="Subject"
            value={emailData.subject}
            onChange={handleChange}
            required
          />
          <textarea
            name="text"
            placeholder="Message"
            value={emailData.text}
            onChange={handleChange}
            required
          ></textarea>
          <button type="submit">Send</button>
        </form>
      </div>
    </>
  );
}
