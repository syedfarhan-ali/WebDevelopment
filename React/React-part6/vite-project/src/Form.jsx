import { useState } from "react";

export default function Form() {
    let [formData, setFormData] = useState({
        fullName: "",
        userName: "",
        password: "",
    });

    let handleInputChange = (event) => {
        setFormData((currData) => {
            return { ...currData, [event.target.name]: event.target.value };
        });
    };

    let handleSubmit = (event) => {
        event.preventDefault();
        console.log(formData);
        setFormData({
            fullName: "",
            userName: "",
            password: "",
        });
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="fullName">Full Name</label>
            <input
                id="fullName"
                name="fullName"
                placeholder="enter your full name"
                type="text"
                value={formData.fullName}
                onChange={handleInputChange}
            />
            <br></br>
            <br></br>
            <label htmlFor="userName">Full Name</label>
            <input
                id="userName"
                name="userName"
                placeholder="enter your username"
                type="text"
                value={formData.userName}
                onChange={handleInputChange}
            />
            <br></br>
            <br></br>
            <label htmlFor="password">Password</label>
            <input
                id="password"
                name="password"
                placeholder="enter your password"
                type="password"
                value={formData.password}
                onChange={handleInputChange}
            />
            <button>Submit</button>
        </form>
    );
}
