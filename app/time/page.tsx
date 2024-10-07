export default function Time() {
  const currentdate = new Date()
  const currentTime = "Last Sync: " + currentdate.getDate() + "/"
  + (currentdate.getMonth()+1)  + "/" 
  + currentdate.getFullYear() + " @ "  
  + currentdate.getHours() + ":"  
  + currentdate.getMinutes() + ":" 
  + currentdate.getSeconds();
  return (
    <main>
      <h1 className="text-red-500 bg-yellow-200">Time</h1>
      {currentTime}
    </main>
  );
}
