import React, { useState } from 'react';

const Login = props => {
    const initialUserState = {
        name: '',
        id: ''
    }


const [user, setUser] = useState(initialUserState)

const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value})
}

const login = () => {
    props.login(user)
    props.history.push('/')
}


return (
    <div className="submit form">
        <div>
            <div className='form-group'>
                <label htmlFor='user'>Username</label>
                <input
                className='form-control'
                id='name'
                name='name'
                onChange={handleInputChange}
                required
                type='text'
                value={user.name}
                />
            </div>

            <div className='form-group'>
                <label htmlFor='id'>ID</label>
                <input
                className='form-control'
                id='id'
                name='id'
                onChange={handleInputChange}
                required
                type='text'
                value={user.id}
                />
            </div>

            <button onClick={login} className='btn btn-success'/>
        </div>
    </div>
);
}


export default Login;