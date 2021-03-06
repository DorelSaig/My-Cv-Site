import React, { Component } from 'react';

class Contact extends Component {
  render() {

    if(this.props.data){
      var name = this.props.data.name
      var city = this.props.data.address.city;
      var state = this.props.data.address.state;
      var zip = this.props.data.address.zip;
      var phone= this.props.data.phone;
      var email = this.props.data.email;
      var message = this.props.data.contactmessage;
    }

    return (
      <section id="contact">
        <div className="row section-head">
          <div className="two columns header-col">
            <a href="mailto:dorels@taz.co.il">
              <h1>
                <span>Get In Touch.</span>
              </h1>
            </a>
          </div>

          <div className="ten columns">
            <p className="lead">
              <span>{message}</span>
            </p>
            <br />
            {/* <button className="glow-on-hover from-right">
               <a href="mailto:dorels@taz.co.il">
                DorelS@taz.co.il
                </a>
            </button> */}
          </div>
        </div>
       
        <div className="row">
          <div className="eight columns"></div>

          <aside className="ten columns footer-widgets">
            <div className="widget widget_contact">
              <h4>Address and Phone</h4>
              <p className="address">
                {name}
                <br />
                {city}, <br />
                {state} {zip}
                <br />
                <span>{phone}</span>
                <br />
                <span>
                  <a href="mailto:dorels@taz.co.il">{email}</a>
                </span>
              </p>
            </div>
          </aside>
        </div>
      </section>
    );
  }
}

export default Contact;
