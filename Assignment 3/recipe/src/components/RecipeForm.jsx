import React,{ useState } from 'react';
 
function RecipeForm(props) {
    const [input1, setInput] = useState('');
    const [input2, setBody] = useState('');
    
    const handleChange = e => {
      setInput(e.target.value);
     
    };
    const handleChangeBody = e => {
     
      setBody(e.target.value);
    };

    const handleSubmit = e => {
     e.preventDefault();

     props.onSubmit({
       id: Math.floor(Math.random() * 1000),
       text: input1,
       body: input2,
       
     });
     setInput('');
     setBody('');
    };

  return <div>
  <form className='recipe-form' onSubmit={handleSubmit}>
      <input type='text' placeholder='Add Title' value={input1} name='text' className='title-input' onChange={handleChange}/>
      <br/>
      <textarea type='text' placeholder='Add Recipe' value={input2} name='text1' className='body-input' onChange={handleChangeBody}/>
      <br/>
      <button className='recipe-button'>Submit</button>
      </form>
  </div>;
}

export default RecipeForm;
