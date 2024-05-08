
const Info = ({ level, selectedData }) => {

    return (
        <div id='info-content' className='section-content'>
            {
                selectedData.undefined ?
                <div>
                    <h6>Click on a county to view more info</h6>
                </div>
                :
                <div>
                    <h5>selectedData.county.state</h5>
                    <h4>{selectedData.county.name}</h4>
                    <img src='/' alt='img of team logo'></img>
                    <h4>{selectedData.team.name}</h4>
                    <h5>{level}</h5>
                    <h5>selectedData.team.county</h5>
                    <h6>Click on a county to view more info</h6>
                </div>
                
            }
        </div>
    )
}

export default Info