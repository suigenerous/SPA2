import React from "react";

export default function Form(props) {
    // props

    const {
        values,
        inputChange,
        checkboxChange,
        submit,
        disabled,
        errors,
    } = props
    //helper functions

    const onSubmit = evt => {
        evt.preventDefault()
        submit()
    }
    const onCheckboxChange = evt => {
        const { name, checked } = evt.target
        checkboxChange(name, checked)
      }
    
      const onInputChange = evt => {
        const { name, value } = evt.target
        inputChange(name, value)
      }

    // JSX

    return (
        <div className = 'formContainer'>
            <h2>Form</h2>
            <div className='form-group submit'>
                <h3>Add an Order</h3>

                <button disabled={disabled} onClick = {onSubmit}>submit order</button>

                <div className='errors'>
                    <div>{errors.username}</div>
                    <div>{errors.email}</div>
                    <div>{errors.role}</div>
                    <div>{errors.civil}</div>
                </div>
            </div>
            <div className = 'form-inputs'>
                {/* order name text input*/}
                <label>Name&nbsp;
                    <input
                        value = {values.name}
                        onChange = {onInputChange}
                        name = 'name'
                        type = 'text'
                        className = 'nameInput'
                    />
                </label>
                {/* pizza size drop down */}
                <label>Pizza Size&nbsp;
                    <select
                        value={values.pizzaSize}
                        onChange={onInputChange}
                        name='pizzaSize'
                    >
                        <option value=''>- Select an option -</option>
                        <option value='14'>14"</option>
                        <option value='16'>16"</option>
                        <option value='18'>18"</option>
                    </select>
                </label>
                {/* pizza toppings check boxes */}
                <div className='topping-checkboxes'>
                    <label>Pepperoni
                        <input
                            type='checkbox'
                            name='pepperoni'
                            checked={values.toppings.pepperoni}
                            onChange={onCheckboxChange}
                        />
                    </label>
                    <label>Sausage
                        <input
                            type='checkbox'
                            name='sausage'
                            checked={values.toppings.sausage}
                            onChange={onCheckboxChange}
                        />
                    </label>
                    <label>Olives
                        <input
                            type='checkbox'
                            name='olives'
                            checked={values.toppings.olives}
                            onChange={onCheckboxChange}
                        />
                    </label>
                    <label>Jalapenos
                        <input
                            type='checkbox'
                            name='jalapenos'
                            checked={values.toppings.jalapenos}
                            onChange={onCheckboxChange}
                        />
                    </label>
                </div>
                {/* special instructions */}
                <label>Special Instructions&nbsp;
                    <input
                        value = {values.specialInstructions}
                        onChange = {onInputChange}
                        name = 'specialInstructions'
                        type = 'text'
                        className = 'siInput'
                    />
                </label>
            </div>

        </div>
    )
}