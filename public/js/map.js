import * as d3 from 'd3';
import * as topojson from 'topojson';

// Load map data
export default async function doAllWork() {

    const teamsData = await fetchTeamData();
    const countyData = await fetchCountyData();
    const mapData = await fetchSVGData();
    createMap(teamsData, countyData, mapData);
}

async function fetchTeamData() {
    return (await fetch('/api/teams')).json();
}

async function fetchCountyData() {
    return (await fetch('/api/counties')).json();
}

async function fetchSVGData() {
    return (await fetch('api/map')).json();
}

function convertToMapping(data) {
    const dataMapping = new Map();
    for (let i = 0; i < data.length; i++) {
        dataMapping.set(data[i].id, data[i]);
    }
    return dataMapping;
}

function createMap(teamsData, countyData, mapData) {
    let newMapData = topojson.feature(mapData, mapData.objects.counties).features;
    const teamsDataMapping = convertToMapping(teamsData);

    const svg = d3.select("#map")
    .append("svg")
    .attr("width", 1200)
    .attr("height", 600)
    .attr("align-self", "center");
            
    svg.selectAll("path")
    .data(newMapData)
    .enter()
    .append("path")
    .attr("d", d3.geoPath())
    .style("fill", d => getColor(d));
    // .on("mouseover", handleMouseOver)
    // .on("mouseout", handleMouseOut);
    
    
    function getColor(county) {
        for (let i = 0; i < countyData.length; i++) {
            if (county.id == countyData[i].fips_id) {
                return teamsDataMapping.get(countyData[i].MLB)['color'];
            }
        }
    }
    
    // var tooltip = d3.select("#theChart")
    // .append("div")
    // .style("position", "absolute")
    // .style("visibility", "hidden")
    // .style("background-color", "#edf8c2")
    // .style("color", "black")
    // .style("border", "solid")
    // .style("border-width", "0px")
    // .style("border-radius", "5px")
    // .style("padding", "10px")
    // .style("box-shadow", "2px 2px 20px")
    // .style("opacity", "0.8")
    // .attr("id", "tooltip");
    
    // function handleMouseOver (event, d) {
    //     d3.select(this).attr("stroke", "pink");
    //     tooltip
    //         .style("visibility", "visible")
    //         .style("top", (event.pageY) - 40 + "px").style("left", (event.pageX) + 10 + "px")
    //         .html("<center> " +  handleGetLocation(d.id) + " </center>");
    // };
    
    // function handleGetLocation(x) {
    //     for (let i = 0; i < team_data.length; i++) {
    //         if (x == team_data[i].id) {
    //             return eduData[i].id;
    //         }
    //     }  
    // }
    
    // function handleMouseOut (event, d) {
    //     d3.select(this).attr("stroke", "none");
    //     tooltip.style("visibility", "hidden");
    // };
}