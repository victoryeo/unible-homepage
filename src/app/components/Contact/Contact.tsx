import "./Contact.css";

export const Contact = () => {
  return (
    <>
      <div id="contact"></div>
      <div className="contact_container">
        <div className="contact-heading">
          <h1 className="gradient__text">
            Do you want to join us in utilizing stablecoin?
          </h1>
        </div>

        <div className="contact-btn">
          <p><a href="mailto:sales@unible.io">Email us</a></p>
        </div>
      </div>
    </>
    
  );
};
