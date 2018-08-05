import React, { Component } from 'react';
import axios from 'axios'
import './AddLocation.css'

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
            linkedIn: false
        }
    }
    handleInput = (e) => {
        console.log(e)
        e.target.checked ?
            this.setState({ [e.target.name]: e.target.checked })
            :
            this.setState({ [e.target.name]: e.target.value })
    }
    handleSubmit = () => {
        const body = {
            "name": this.state.name,
            "address": {
                "street": this.state.street,
                "city": this.state.city,
                "country": this.state.country
            },
            "Facebook": this.state.facebook,
            "Google_Analytics": this.state.googleAnalytics,
            "Google_My_Business": this.state.googleMyBusiness,
            "Infusion_Soft": this.state.infusionSoft,
            "Twitter": this.state.twitter,
            "You_Tube": this.state.youTube,
            "Linkedin": this.state.linkedIn
        }
        console.log(body)
        axios.post('/api/addLocation', body).then((res)=>console.log(res.data))
    }

    render() {
        console.log(this.state)
        return (
            <div className='modelBackground flexColumn'>
                <div className='addLocationModel'>
                    <h1>add a location</h1>
                    <h3>name</h3>
                    <input name='name' onChange={this.handleInput} />
                    <h3>address</h3>
                    <input name='street' placeholder='street' onChange={this.handleInput} />
                    <input name='city' placeholder='city' onChange={this.handleInput} />
                    <input name='country' placeholder='country' onChange={this.handleInput} />
                    <h3>Integrate with</h3>
                    <h4>Facebook</h4>
                    <input name='facebook' onChange={this.handleInput} type='checkbox' />
                    <h4>Google Analytics</h4>
                    <input name='googleAnalytics' onChange={this.handleInput} type='checkbox' />
                    <h4>Google My Business</h4>
                    <input name='googleMyBusiness' onChange={this.handleInput} type='checkbox' />
                    <h4>InfusionSoft</h4>
                    <input name='infusionSoft' onChange={this.handleInput} type='checkbox' />
                    <h4>Twitter</h4>
                    <input name='twitter' onChange={this.handleInput} type='checkbox' />
                    <h4>YouTube</h4>
                    <input name='youTube' onChange={this.handleInput} type='checkbox' />
                    <h4>Linkedin</h4>
                    <input name='linkedin' onChange={this.handleInput} type='checkbox' />
                    <button onClick={this.handleSubmit}>Add location</button>

                </div>
            </div>
        );
    }
}

export default AddLocation;