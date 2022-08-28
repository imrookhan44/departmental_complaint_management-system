import React from "react";

function Mid() {
  return (
    <div>
      {/* <div style={{position: 'absolute', left: '14%', width: '30%'}} className="row content">

  <h2><b>Complaint Handling Process</b></h2><br />
  <p> We would love to hear about positive experiences you have had with us. Alternatively, if we have not met your expectation, we would like to know about it as well. Our staff are committed to treating complaints seriously and resolving them as quickly and fairly as possible. We would advise you to submit your complaint online as the accuracy of the information is important to us in resolving the complaint promptly. You may also enclose relevant documents related to the complaint raised.</p><br />
  <h2><b>Complaint Channels:</b></h2>
  <br />
  <ol>
    <li>Call our Contact Centre at 118 or sms at 8118</li>
    <li>wuscms@gmail.com</li>
  </ol>
  <div>
    <h2><b>Acknowledgement</b></h2>
    <ul>
      <li>Your complaint will be auto-acknowledged within 24-hours.</li>
                  </ul>
                  <br />
    <h2><b>Investigation</b></h2>
    <ul>
      <li>We will investigate and liaise with the relevant parties to resolve the compliant.</li>
    </ul><br />
    <h2><b>Resolution</b></h2>
    <ul>
      <li>We will work towards resolving your complaint within 14 days from the day of receipt.
        If a complaint requires complex investigations, we will notify you for an extension of time.
        you will be kept informed of the status of your compliant from time to time.</li>
    </ul>
  </div>
</div> */}
          <div className="row" >
              <div className="col-2"></div>
        <div className="col-4">
          <h2>
            <b>Complaint Handling Process</b>
          </h2>
          <br />
          <p>
            {" "}
            We would love to hear about positive experiences you have had with
            us. Alternatively, if we have not met your expectation, we would
            like to know about it as well. Our staff are committed to treating
            complaints seriously and resolving them as quickly and fairly as
            possible. We would advise you to submit your complaint online as the
            accuracy of the information is important to us in resolving the
            complaint promptly. You may also enclose relevant documents related
            to the complaint raised.
          </p>
          <br />\{" "}
          <h2>
            <b>Complaint Channels:</b>
          </h2>
          <br />
          <ol>
            <li>Call our Contact Centre at 118 or sms at 8118</li>
            <li>wuscms@gmail.com</li>
          </ol>
        </div>
        <div className="col-4">
          <div>
            <h2>
              <b>Acknowledgement</b>
            </h2>
            <ul>
              <li>Your complaint will be auto-acknowledged within 24-hours.</li>
            </ul>
            <br />
            <h2>
              <b>Investigation</b>
            </h2>
            <ul>
              <li>
                We will investigate and liaise with the relevant parties to
                resolve the compliant.
              </li>
            </ul>
            <br />
            <h2>
              <b>Resolution</b>
            </h2>
            <ul>
              <li>
                We will work towards resolving your complaint within 14 days
                from the day of receipt. If a complaint requires complex
                investigations, we will notify you for an extension of time. you
                will be kept informed of the status of your compliant from time
                to time.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Mid;
