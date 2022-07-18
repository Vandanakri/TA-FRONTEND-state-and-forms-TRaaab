function Form2(props) {
  if (props.currentStep !== 2) {
    return null;
  }
  return (
    <fieldset className='form-group'>

      <label htmlFor='message'>Message</label>
      <textarea
        id='message'
        name='message'
        type='text'
        placeholder='Enter Message'
        value={props.message}
        onChange={props.handleChange}
      ></textarea>


       <div>
       <input
          id='checkbox1'
          name='checkbox1'
          type='checkbox'
          value={props.checkbox1}
          onChange={props.handleChange}
        />
        <label htmlFor='checkbox1'>The number one choice</label>
       </div>
        
      <div>
        <input
          id='checkbox2'
          name='checkbox2'
          type='checkbox'
          value={props.checkbox2}
          onChange={props.handleChange}
        />
        <label htmlFor='checkbox2'>The number two choice</label>
        </div>

    </fieldset>
  );
}
export default Form2;