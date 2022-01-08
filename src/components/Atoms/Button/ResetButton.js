export default function ResetButton({buttons}) {

    const clickEvent = () =>{
        alert('Feature coming soon!')
    }

    return( 
        <>
          {buttons.map((buttonData) => (
            <div>
             <button key={buttonData.id} onClick={() => {clickEvent()}}> {buttonData.title} </button>
            </div>
          ))}
          </>
    )
}