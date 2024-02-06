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
    //<input class="btn btn-outline-primary" type="submit" value="Submit" onClick={handleSubmit}/>
  }

  return (
    <>
      <p>Contact with us page</p>
      <form onSubmit={handleSubmit}>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Title
          </span>
          <input
            type="text"
            class="form-control"
            aria-label="title input"
            aria-describedby="input-title-message"
          />
        </div>
        <div class="input-group mb-3">
          <span class="input-group-text" id="inputGroup-sizing-default">
            Message
          </span>
          <textarea
            class="form-control"
            aria-label="body input"
            aria-describedby="textarea-input-body-message"
          />
        </div>

        <input class="btn btn-outline-primary" type="submit" value="Submit" />
      </form>
    </>
  );
}
