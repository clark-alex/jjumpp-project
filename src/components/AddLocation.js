import React, { Component } from 'react';
import axios from 'axios';
import './AddLocation.css';

class AddLocation extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: '',
      street: '',
      city: '',
      country: '',
      facebook: false,
      googleAnalytics: false,
      googleMyBusiness: false,
      infusionSoft: false,
      twitter: false,
      youTube: false,
      linkedIn: false,
    };
  }

  handleInput = e =>
    e.target.checked
      ? this.setState({ [e.target.name]: e.target.checked })
      : this.setState({ [e.target.name]: e.target.value });

  handleSubmit = () => {
    const {
      name,
      street,
      city,
      country,
      facebook,
      googleAnalytics,
      googleMyBusiness,
      infusionSoft,
      twitter,
      youTube,
      linkedIn,
    } = this.state;
    const { addLocationFn } = this.props;
    const body = {
      name,
      address: {
        street,
        city,
        country,
      },
      Facebook: facebook,
      Google_Analytics: googleAnalytics,
      googleMyBusiness,
      infusionSoft,
      Twitter: twitter,
      youTube,
      Linkedin: linkedIn,
    };
    axios.post('/api/addLocation', body).then(res => addLocationFn(res.data));
  };

  stopProp = e => {
    e.stopPropagation();
  };

  render() {
    const { handleToggle } = this.props;
    return (
      <div className="modelBackground flexColumn">
        <div className="addLocationModel ">
          <div className="innerAdd">
            <div className="flexRow closeModel">
              <button type="button" onClick={() => handleToggle('addLocation')}>
                <i className="material-icons">close</i>
              </button>
            </div>
            <h1>Add a Location</h1>

            <div>
              <h2>Name</h2>
              <input name="name" placeholder="+Name" onChange={this.handleInput} />
            </div>

            <h2>address</h2>
            <div className="flexColumn">
              <input name="street" placeholder="+Street" onChange={this.handleInput} />
              <input name="city" placeholder="+City" onChange={this.handleInput} />
              <select name="country" onChange={this.handleInput}>
                <option value="" disabled selected>
                  +Country
                </option>
                <option value="USA">United States</option>
                <option value="UK">United Kingdom</option>
                <option value="Canada">Canada</option>
              </select>
            </div>

            <h2>Integrate with:</h2>
            <section className="integratedWith">
              <div>
                <input name="facebook" onChange={this.handleInput} type="checkbox" />
                <h4>Facebook</h4>
              </div>
              <div>
                <input name="googleAnalytics" onChange={this.handleInput} type="checkbox" />
                <h4>Google Analytics</h4>
              </div>
              <div>
                <input name="googleMyBusiness" onChange={this.handleInput} type="checkbox" />
                <h4>Google My Business</h4>
              </div>
              <div>
                <input name="infusionSoft" onChange={this.handleInput} type="checkbox" />
                <h4>InfusionSoft</h4>
              </div>
              <div>
                <input name="twitter" onChange={this.handleInput} type="checkbox" />
                <h4>Twitter</h4>
              </div>
              <div>
                <input name="youTube" onChange={this.handleInput} type="checkbox" />
                <h4>YouTube</h4>
              </div>
              <div>
                <input name="linkedin" onChange={this.handleInput} type="checkbox" />
                <h4>Linkedin</h4>
              </div>
              <div>
                <button type="button" className="primaryButton" onClick={this.handleSubmit}>
                  Add location
                </button>
              </div>
            </section>
          </div>
        </div>
      </div>
    );
  }
}

export default AddLocation;
