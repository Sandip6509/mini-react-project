import React,{useState} from 'react'

const Form = () => {
    const [form, setForm] = useState({
        name: '',
        email: '',
    })

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value,
        })
    }
    return (
        <div>
            <form>
                <label>
                Name:
                <input
                    type="text"
                    name="name"
                    value={form.name}
                    onChange={handleChange}
                />
                </label>
                <label>
                Email:
                <input
                    type="email"
                    name="email"
                    value={form.email}
                    onChange={handleChange}
                />
                </label>
            </form>
            <div>
                <h3>Form Data:</h3>
                <p>Name: {form.name}</p>
                <p>Email: {form.email}</p>
            </div>
        </div>
    )
}

export default Form