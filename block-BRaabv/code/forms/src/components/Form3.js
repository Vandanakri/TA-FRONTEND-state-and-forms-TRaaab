function Form3(props) {
  if (props.currentStep !== 3) {
    return null;
  }
  return (
    <>
      <fieldset className='form-group'>

          <div>
          <input
            className='form-control'
            id='checkbox3'
            name='checkbox3'
            type='checkbox'
            value={props.checkbox3}
            onChange={props.handleChange}
          />
          <label htmlFor='checkbox3'>I want to add this option</label>
          </div>

          <div>
          <input
              className='form-control'
              id='checkbox4'
              name='checkbox4'
              type='checkbox'
              value={props.checkbox4}
              onChange={props.handleChange}
          />
          <label htmlFor='checkbox4'>The number one choice</label>
          </div>

      </fieldset>

      <button className='btna btn-success btn-block'>Sign up</button>
    </>
  );
}
export default Form3;