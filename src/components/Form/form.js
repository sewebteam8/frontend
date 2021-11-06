import React, { useState } from 'react';
import './form.css';
import axios from 'axios'

const Form = () => {

    const [name, setName] = useState('');
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('');
    const [amount, setAmount] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        const data = {
            name : name,
            phone : phone,
            email : email,
            amount : amount
        }

        axios.get('http://localhost:4000');
    }

    const handleChange = (e) => {
        const field = e.currentTarget.name;
        if(field == 'name')setName(e.currentTarget.value)
        if(field == 'phone')setPhone(e.currentTarget.value)
        if(field == 'email')setEmail(e.currentTarget.value)
        if(field == 'amount')setAmount(e.currentTarget.value)
    }

    return ( 
        <React.Fragment>
            <div className="container-fluid payment">
                <div className="row">
                    <div className="form-pay">
                        <div className="col-md-4 col-12 form-input-adm">
                            <div class="form-group">
                                <label for="name">Name</label>
                                <input type="text" class="form-control" id="name" placeholder="Name" value={name} onChange={handleChange} name="name"/>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 form-input-adm">
                            <div class="form-group">
                                <label for="Email">Email</label>
                                <input type="email" class="form-control" id="Email" placeholder="abc@gmail.com" value={email} onChange={handleChange} name="email"/>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 form-input-adm">
                            <div class="form-group">
                                <label for="Phone">Phone</label>
                                <input type="phone" class="form-control" id="Phone" placeholder="" value={phone} onChange={handleChange} name="phone"/>
                            </div>
                        </div>

                        <div className="col-md-4 col-12 form-input-adm">
                            <div class="form-group">
                                <label for="Payment">Amount</label>
                                <input type="text" class="form-control" id="Payment" placeholder="" value={amount} onChange={handleChange} name="amount"/>
                            </div>
                        </div>

                        <div className="col-4">
                            <button className="btn paybtn" onClick={handleSubmit}>Proceed</button>
                        </div>
                    </div>
                </div>
            </div>
        
        </React.Fragment> 
    );
}
 
export default Form;