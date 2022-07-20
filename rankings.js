// * * * * * * * * * * * * 
// Fantasy Helper
// Created by Addison Kline, circa 2021
// Data from Fangraphs.com, Baseball-Reference.com
// * * * * * * * * * * * * 

// table displayed when page loaded
const defaultTable = "data/json-team-data-2022-midseason.json";

const teamHeaders = ["Team", "Win-Loss", "Offense Rank", "Defense Rank", "Overall Rank"];
const battingHeaders = ["Name", "Team", "G", "PA", "Ranking"];
const startingPitchingHeaders = ["Name", "Team", "IP", "GS", "Ranking"];
const reliefPitchingHeaders = ["Name", "Team", "IP", "G", "Ranking"];

// this function only works when outside the vue app... oh well
function populateTable(json, table) {
    const rankingsBody = document.querySelector("#rankingsTable > tbody")
    const rankingsHeader = document.querySelector("#rankingsTable > thead")

    // clears table header
    while (rankingsHeader.firstChild) {
        rankingsHeader.removeChild(rankingsHeader.firstChild)
    }

    // clears table body
    while (rankingsBody.firstChild) {
        rankingsBody.removeChild(rankingsBody.firstChild)
    }

    // populate table body
    json.forEach((row) => {
        const thisRow = row
        const tr = document.createElement("tr")

        row.forEach((cell) => {
            const td = document.createElement("td")
            td.textContent = cell
            tr.appendChild(td)
        })

        rankingsBody.appendChild(tr)
    })  

    // populate table header
    if (table.includes("team")) { // if it's a team table
        const tr = document.createElement("tr")

        for (i = 0; i < teamHeaders.length; i++) {
            const th = document.createElement("th")
            th.textContent = teamHeaders[i]
            tr.appendChild(th)
        }
        rankingsHeader.appendChild(tr)
    }
    else if (table.includes("batter")) { // if it's a batter table
        const tr = document.createElement("tr")

        for (i = 0; i < battingHeaders.length; i++) {
            const th = document.createElement("th")
            th.textContent = battingHeaders[i]
            tr.appendChild(th)
        }
        rankingsHeader.appendChild(tr)
    }
    else if (table.includes("starting-pitcher")) { // if it's a starting pitcher table
        console.log("equality check working")
        const tr = document.createElement("tr")

        for (i = 0; i < startingPitchingHeaders.length; i++) {
            const th = document.createElement("th")
            th.textContent = startingPitchingHeaders[i]
            tr.appendChild(th)
        }
        rankingsHeader.appendChild(tr)
    }
    else if (table.includes("relief-pitcher")) { // if it's a relief pitcher table
        console.log("equality check working")
        const tr = document.createElement("tr")

        for (i = 0; i < reliefPitchingHeaders.length; i++) {
            const th = document.createElement("th")
            th.textContent = reliefPitchingHeaders[i]
            tr.appendChild(th)
        }
        rankingsHeader.appendChild(tr)
    }
    else {
        console.warn("equality check not working, table header can't be loaded")
    }
}

const helperApp = Vue.createApp({

    data() {
        return {
            url: 'https://baseball-analytica.com',
            batterDataShown: true,
            countBatterTables: 0,
            countPitcherTables: 0,
            dataOptions: [
                { title: 'Teams', url: "-team-data-"},
                { title: 'Batters', url: "-batter-data-" },
                { title: 'Starting Pitchers', url: "-starting-pitcher-data-" },
                { title: 'Relief Pitchers', url: "-relief-pitcher-data-" }
            ],
            rankingTimes: [
                { title: '2022 mid-season', url: "2022-midseason" },
                { title: '2021 end-of-season', url: "2021-final" }
            ]
            
        }
    },
    methods: {
        // loads table using Ajax
        loadTable(table) {
            // requests table data
            const request = new XMLHttpRequest()

            request.open("get", table)
            request.onload = () => {
                const json = JSON.parse(request.responseText)
                populateTable(json, table)
            }

            request.send()
        },
        selectedPlayerType() {
            return document.getElementById("playerType").value
        },
        selectedRankingTime() {
            return document.getElementById("rankingTimeSelect").value
        },
        generateTableUrlFromSelections() {
            return "data/json" + this.selectedPlayerType() + this.selectedRankingTime() + ".json"
        },
        getRankingsButtonClicked() {
            this.loadTable(this.generateTableUrlFromSelections())
        }
    },
    // generates team rankings when page loads
    created: function() { 
        this.loadTable(defaultTable)
    },
    computed: {

    }
})

const vm = helperApp.mount('#helper')

