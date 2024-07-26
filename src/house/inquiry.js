import {useState, useRef} from "react";

const Inquiry = () => {
    const counterRef = useRef(0);
    const inputRef = useRef(null);

    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        comment: ''
    });

    const onChange = (e) => {
        counterRef.current++;
        inputRef.current.value = ' from Ref' // will change input value, strange behaviour.
        setContactInfo({...contactInfo, [e.target.id]: e.target.value});
    };

    const onSubmit = (e) => {
        e.preventDefault();
        console.log(`Send to: ${contactInfo}`);
    }

    return(
        <form className='mt-2'>
            <div className='form-group'>
                <label htmlFor='name'>Name</label>
                <input
                    ref={inputRef}
                    type='text'
                    className='form-control'
                    placeholder='Name'
                    id='name'
                    value={contactInfo.name}
                    onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Email address</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Email'
                    id='email'
                    value={contactInfo.email}
                    onChange={onChange}/>
            </div>
            <div className='form-group'>
                <label htmlFor='name'>Comment</label>
                <input
                    type='text'
                    className='form-control'
                    placeholder='Comment'
                    id='comment'
                    value={contactInfo.comment}
                    onChange={onChange}/>
            </div>
            <button
                className='btn btn-primary mt-2'
                disabled={!contactInfo.name || !contactInfo.email}
                onClick={onSubmit}
            >
                Submit
            </button>
        </form>
    )
};
export default Inquiry;