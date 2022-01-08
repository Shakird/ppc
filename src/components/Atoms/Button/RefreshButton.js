export default function RefreshButton({buttons}) {

    return( 
        <>
          {buttons.map((buttonData) => (
            <div>
             <button key={buttonData.id} onClick={() => window.location.reload(false)}> {buttonData.title} </button>
            </div>
          ))}
          </>
    )
}
