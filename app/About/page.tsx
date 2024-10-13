// # Loading Page

export default async function About(){
  await new Promise((resolve)=>{
      setTimeout(resolve,5000);
  })
  return(
      <div>
           <h1><u><b>About</b></u></h1>
           <p>Welcome To my About Page!!!!!!!!!</p>
      </div>
  )
}