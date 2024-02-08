import { Form, useNavigate } from 'react-router-dom';

export default function ContactUs() {
  const navigate = useNavigate();

  function handleSubmit() {
    //some validations or whatever I want to do
    
    //and at the end of submit go to this path
    navigate('/');

    //this not work with react component <Form>
    //propably not working the onSubmit={handleSubmit} call
    //correct
    //using react component <Form> works if i move the event on button:
    //<input className="btn btn-outline-primary" type="submit" value="Submit" onClick={handleSubmit}/>
  }

  return (
    <>
      <p>Contact with us page</p>
      <form onSubmit={handleSubmit}>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Title
          </span>
          <input
            type="text"
            className="form-control"
            aria-label="title input"
            aria-describedby="input-title-message"
          />
        </div>
        <div className="input-group mb-3">
          <span className="input-group-text" id="inputGroup-sizing-default">
            Message
          </span>
          <textarea
            className="form-control"
            aria-label="body input"
            aria-describedby="textarea-input-body-message"
          />
        </div>

        <input className="btn btn-outline-primary" type="submit" value="Submit" />
      </form>
    </>
  );
}
