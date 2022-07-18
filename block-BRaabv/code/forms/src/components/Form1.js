function Form1(props) {
  if (props.currentStep !== 1) {
    return null;
  }
  
  return (
    <fieldset className='form-group'>
        
      <label htmlFor='firstname'>First name</label>
      <input
        id='firstName'
        name='firstname'
        type='text'
        placeholder='Enter Firstname'
        value={props.firstname}
        onChange={props.handleChange}
      />

      <label htmlFor='lastname'>Last name</label>
      <input
        id='lastname'
        name='lastname'
        type='text'
        placeholder='Enter Lastname'
        value={props.lastname}
        onChange={props.handleChange}
      />

      <label htmlFor='date'>Date of Birth</label>
      <input
        type='date'
        value={props.date}
        name='date'
        onChange={props.handleChange}
      />

      <label htmlFor='email'>Email address</label>
      <input
        id='email'
        name='email'
        type='text'
        placeholder='Enter Email'
        value={props.email}
        onChange={props.handleChange}
      />

      <label htmlFor='address'>Address</label>
      <input
        id="address"
        type='text'
        name='address'
        placeholder="Enter your address"
        value={props.address}
        onChange={props.handleChange}
      />

    </fieldset>
  );
}
export default Form1;