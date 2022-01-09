export default function ResetButton({buttons}) {

    const clickEvent = () =>{
        alert('Feature coming soon!')
    }

    return( 
        <>
          {buttons.map((buttonData) => (
            <div>
             <button data-testid='resetButton' key={buttonData.id} onClick={() => {clickEvent()}}> {buttonData.title} </button>
            </div>
          ))}
          </>
    )
}