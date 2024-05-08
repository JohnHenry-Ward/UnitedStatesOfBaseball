// TODO :: Make these URL's work in dev and prod
async function fetchTeamData() {
    return (await fetch('http://localhost:3000/api/teams')).json();
}

async function fetchCountyData() {
    return (await fetch('http://localhost:3000/api/counties')).json();
}

async function fetchSVGData() {
    return (await fetch('http://localhost:3000/api/map')).json();
}

module.exports = {
    fetchTeamData,
    fetchCountyData,
    fetchSVGData
}