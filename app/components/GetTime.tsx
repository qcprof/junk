'use client'

let abc = true
function alertme(){
  alert('abcdef')
}

export default function GetTime() {
  return (
    <>
      <button className='btn btn-secondary' onClick={alertme} >Get Time</button>
    </>
  );
}
