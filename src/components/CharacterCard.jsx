export const CharacterCard = ({ uid, name, dispatch }) => {

    return (
        <>
        
                        <div className="card" style={style}>
                            <img src={}  
                            className="card-img-top" alt="..." />
                            <div className="card-body">
                               <h5 className="card-title">{name}</h5>
                               <div className="d-flex justify-content-between">
                                <Link to={`//profile-page/people/${uid}`}>
                                        <button className="btn btn-primary">Learn More</button>
                        </Link>
                        <button
                            className="btn btn-warning"
                            //onclick={() => {}}   this onClick should dispatch to save the character to the faves array in the store</div>
                    //   <svg xmlns=                
                </div>
            </div>
         </>
    );
}
