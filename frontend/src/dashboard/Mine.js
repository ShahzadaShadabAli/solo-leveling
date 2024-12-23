const Mine = () => {
    return (
      <div className="my-5">
         
         <h1 className="text-center mb-5" style={{ fontSize: 60 }}>Mines</h1>
            <div className="mines">
                <div className="mine">
                    <img src="/images/gold-mine.png" alt=""  width={400}/>
                    <h2 className="text-center mt-3">Gold Mine</h2>
                </div>
                <div className="mine">
                    <img src="/images/dam.png" alt=""  width={300}/>
                    <h2 className="text-center mt-3">Water Dam</h2>
                </div>
                <div className="mine">
                    <img src="/images/strange-mine.jpg" alt="" className="rounded"  width={400}/>
                    <h2 className="text-center mt-3">Exotic Mine</h2>
                </div>
            </div>
        
      </div>
    );
}
 
export default Mine;