import * as d3 from 'd3';
import * as topojson from 'topojson';

export default async function generateMap(level) {
    const teamsData = await fetchTeamData();
    const countyData = await fetchCountyData();
    const mapData = await fetchSVGData();
    createMap(teamsData, countyData, mapData, level);
}

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

function convertToMapping(data, key_name) {
    const dataMapping = new Map();
    for (let i = 0; i < data.length; i++) {
        dataMapping.set(data[i][key_name], data[i]);
    }
    return dataMapping;
}

function createMap(teamsData, countyData, mapData, level) {
    const newMapData = topojson.feature(mapData, mapData.objects.counties).features;
    const teamsDataMapping = convertToMapping(teamsData, 'team_id');
    const countyDataMapping = convertToMapping(countyData, 'fips_id');

    // remove any potential maps that already exist before creating a new one
    d3.select("#map").selectAll("*").remove();
   
    const map = d3.select("#map")
    .append("svg")
    .attr("width", 1000)
    .attr("height", 600)
    .attr("align-self", "center")
    .attr("class", "svg");
            
    map.selectAll("path")
    .data(newMapData)
    .enter()
    .append("path")
    .attr("d", d3.geoPath())
    .style("fill", d => getColor(d))
    .on("mouseover", handleMouseOver)
    .on("mouseout", handleMouseOut);
    
    const tooltip = d3.select("#map")
    .append("div")
    .style("position", "absolute")
    .style("visibility", "hidden")
    .style("background-color", "#edf8c2")
    .style("color", "black")
    .style("border", "solid")
    .style("border-width", "0px")
    .style("border-radius", "5px")
    .style("padding", "10px")
    .style("box-shadow", "2px 2px 20px")
    .style("opacity", "0.8")
    .attr("id", "tooltip");

    function getColor(county) {
        for (let i = 0; i < countyData.length; i++) {
            if (county.id == countyData[i].fips_id) {
                return teamsDataMapping.get(countyData[i][level.toLowerCase()])['color'];
            }
        }
    }
    
    function handleMouseOver (event, d) {
        d3.select(this).attr("stroke", "black");

        let county = countyDataMapping.get((d.id))
        let team_id = county[level.toLowerCase()]
        let team = teamsDataMapping.get((team_id).toString())

        tooltip
            .style("visibility", "visible")
            .style("top", (event.pageY) - 40 + "px").style("left", (event.pageX) + 10 + "px")
            .html("<center> " +  county['name'] + ' ' + team['team_name'] + " </center>");
    };
    
    function handleMouseOut (event, d) {
        d3.select(this).attr("stroke", "none");
        tooltip.style("visibility", "hidden");
    };
}
