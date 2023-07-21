// * * * * * * * * * * * * 
// Leaderboard Loader, based off rankings/fantasy helper file
// Created by Addison Kline, 2023
// Data from Baseball Analytica Leaderboards
// * * * * * * * * * * * * 

// table displayed when page loaded
const defaultTable = "lb/teams.json";

const teamHeaders = ["Team", "W", "L", "W%", "W%_2", "W%_3", "Rdiff", "wRdiff", "oppOff", "oppDef", "oppQual"];
const battingHeaders = ["Name", "Team", "G", "PA", "AB", "OPS", "wOBA", "EV", "LA", "RV", "OP", "WAR"];
const pitchingHeaders = ["Name", "Team", "G", "GS", "IP", "K/9", "BB/9", "LAO", "DAERA", "W%", "xW%", "xW%lg", "WAR"];

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
            projDate: '04/28/2023',
            projVersion: '1.11',
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
            console.log(request)
            request.onload = () => {
                var reviver = function(key, value) {
                    if (((key === "oppOff") || (key === "oppDef") || (key === "EV") || (key === "LA") || (key === "RV") || (key === "WAR")) && (typeof value === "number") && (value % 1 == 0)) {
                        return value.toString() + ".0" // wins, playoff probability need to be rounded to 1 decimal point
                    }
                    else if (((key === "W%") || (key === "W%_2") || (key === "W%_3") || (key === "xW%") || (key === "xW%lg") || (key === "oppQual") || (key === "OPS") || (key === "wOBA") || (key === "OP") || (key === "LAO")) && (typeof value === "number")) {
                        stringAfterDecimal = value.toString().split(".")[1]
                        if (!stringAfterDecimal) {
                            return value.toString() + ".000"
                        }
                        else if (stringAfterDecimal.length == 1) {
                            return value.toString() + "00"
                        }
                        else if (stringAfterDecimal.length == 2) {
                            return value.toString() + "0"
                        }
                        else {
                            return value // all of these stats should be rounded to 3 decimal places
                        }
                    }
                    else if (((key === "IP") || (key === "K/9") || (key === "BB/9") || (key === "DAERA") || (key === "div%")) && (typeof value === "number")) {
                        stringAfterDecimal = value.toString().split(".")[1]
                        if (!stringAfterDecimal) {
                            return value.toString() + ".00"
                        }
                        else if (stringAfterDecimal.length == 1) {
                            return value.toString() + "0"
                        }
                        else {
                            return value // all of these stats should be rounded to 2 decimal places
                        }
                    }
                    else {
                        return value
                    }
                }

                const json = JSON.parse(request.responseText, reviver)
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
            return "lb/" + this.selectedPlayerType() + ".json"
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

