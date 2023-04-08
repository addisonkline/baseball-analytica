// * * * * * * * * * * * * 
// FOXY Loader, based off rankings/fantasy helper file
// Created by Addison Kline, circa 2022
// Data from FOXY Projections
// * * * * * * * * * * * * 

// table displayed when page loaded
const defaultTable = "proj/teams.json";

const teamHeaders = ["Team", "Projected W", "Projected L", "Current W", "Current L"];
const battingHeaders = ["Name", "Team", "G", "PA", "AB", "H", "1B", "2B", "3B", "HR", "BB", "HBP", "K", "SB", "CS", "AVG", "OBP", "SLG", "OPS"];
const pitchingHeaders = ["Name", "Team", "G", "IP", "H", "ER", "HR", "K", "BB", "HBP", "ERA", "WHIP", "K/9", "BB/9"];

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
    for (var i = 0; i < json.length; i++) {
        const thisRow = json[i]
        const tr = document.createElement("tr")

        for (var key in thisRow) {
            const td = document.createElement("td")
            td.textContent = thisRow[key]
            tr.appendChild(td)
        }

        rankingsBody.appendChild(tr)
    }

    // populate table header
    if (table.includes("teams")) { // if it's a team table
        const tr = document.createElement("tr")

        for (i = 0; i < teamHeaders.length; i++) {
            const th = document.createElement("th")
            th.textContent = teamHeaders[i]
            tr.appendChild(th)
        }
        rankingsHeader.appendChild(tr)
    }
    else if (table.includes("batters")) { // if it's a batter table
        const tr = document.createElement("tr")

        for (i = 0; i < battingHeaders.length; i++) {
            const th = document.createElement("th")
            th.textContent = battingHeaders[i]
            tr.appendChild(th)
        }
        rankingsHeader.appendChild(tr)
    }
    else if (table.includes("pitchers")) { // if it's a pitcher table
        console.log("equality check working")
        const tr = document.createElement("tr")

        for (i = 0; i < pitchingHeaders.length; i++) {
            const th = document.createElement("th")
            th.textContent = pitchingHeaders[i]
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
            projDate: '04/01/2023',
            projVersion: '1.04',
            batterDataShown: true,
            countBatterTables: 0,
            countPitcherTables: 0,
            dataOptions: [
                { title: 'Teams', url: "teams"},
                { title: 'Batters', url: "batters" },
                { title: 'Pitchers', url: "pitchers" }
            ],          
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
            return "proj/" + this.selectedPlayerType() + ".json"
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

