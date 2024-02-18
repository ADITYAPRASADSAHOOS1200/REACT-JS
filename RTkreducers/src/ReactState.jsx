import  React , {useState} from "react";

export default function ReactState() {

     const[answer,Setanswer]=useState('');
     const[status,setStatus]=useState('typing');
     const[error,setError]=useState(null);


  if(status === 'success'){
     return <h1>Thank you</h1>
  }else{


   async function handleChange(e){
     e.preventDefault()
      setStatus('submitting')
    try{
      await subMitForm(answer)
       setStatus('success')
    }catch(err){
        setStatus('typing');
        setError(err);
      }

    }

  
  return (
    <div>

     <h1>hello brothers!</h1>   
       <form action=""  onSubmit={handleChange} >
        <textarea 
         value={answer}
         onChange={(e)=>Setanswer(e.target.value)}
         disabled={status === 'submitting'}
         cols="30" 
         rows="10"></textarea>

         <button 
         type="submit"
         disabled={
            answer.length == 0 || status ==='submitting'
         }
         >Submit</button>
         { error !== null &&<p className="Error">
            {error.message}
          </p> }
       </form>
    </div>
  )
}
}
function subMitForm(answer){

 return new Promise((resolve, reject) => {
   setTimeout(()=>{
    let ShouldLearn=answer.toLowerCase() !== 'aditya'

    if(ShouldLearn){
        reject(new Error('Good guess but a wrong answer. Try again!'));       
    }else{
        resolve();
    }
      },1000)
 })
}