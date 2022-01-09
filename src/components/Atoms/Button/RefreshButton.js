import React from 'react'

const clickRefresh = () =>{
  window.location.reload(true)
}

export default function RefreshButton({buttons}) {

    return( 
        <>
          {buttons.map((buttonData) => (
            <div>
             <button data-testid='refreshButton' key={buttonData.id} onClick={() => {clickRefresh()}}> {buttonData.title} </button>
            </div>
          ))}
          </>
    )
}
