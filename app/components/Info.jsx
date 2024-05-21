import Image from 'next/image';

const Info = ({ level, selectedData }) => {
    
    // TODO: ADD A SPINNER

    return (
        <div id='info-content' className='section-content'>
            {
                selectedData.undefined ?
                <h6 id="single-text">Click on a county to view more info</h6>
                :
                <div id="info-text">
                    <h5 id='state'>{selectedData.county.state}</h5>
                    <h4 id='selected-county'>{selectedData.county.name}</h4>
                    <div className="container">
                        <Image src={require(`../public/images/${level.toLowerCase()}/${selectedData.team.logo}`)} alt='Image of team logo' id="logo"></Image>
                    </div>
                    <h4 id='team-name'>{selectedData.team.name}</h4>
                    <h5 id='level'>{level}</h5>
                    <h5 id='team-county'>{selectedData.team.county}</h5>
                    <h6 id="single-text">Click on a county to view more info</h6>
                </div>
            }
        </div>
    )
}

export default Info