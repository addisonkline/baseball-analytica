// * * * * * * * * * * * * 
// FOXY Loader, based off rankings/fantasy helper file
// Created by Addison Kline, circa 2022
// Data from FOXY Projections
// * * * * * * * * * * * * 

// table displayed when page loaded
const defaultTable = "proj/teams.json";

const teamHeaders = ["Team", "W", "L", "Rdiff", "Curr W", "Curr L", "Div%", "WC%", "Post%"];
const battingHeaders = ["Name", "Team", "G", "PA", "AB", "H", "1B", "2B", "3B", "HR", "BB", "HBP", "K", "SB", "CS", "AVG", "OBP", "SLG", "OPS"];
const pitchingHeaders = ["Name", "Team", "G", "IP", "H", "ER", "HR", "K", "BB", "HBP", "ERA", "WHIP", "K/9", "BB/9"];

var dt;

/*
$(document).ready( function () {
    dt = $('#rankingsTable').DataTable({
        "columnDefs": [
            {
                "targets": "_all",
                "className": "dt-head-center",
            }
        ],
        "order": [[1, 'desc']],
        "pageLength": 100,
        "stripeClasses": ['odd', 'even'],

    });
} );
*/

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
        //console.log("equality check working")
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
            projDate: '07/21/2023',
            projVersion: '1.17',
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
                var reviver = function(key, value) {
                    if (((key === "projectedW") || (key === "projectedL") || (key === "div%") || (key === "wc%") || (key === "post%")) && (typeof value === "number") && (value % 1 == 0)) {
                        return value.toString() + ".0" // wins, playoff probability need to be rounded to 1 decimal point
                    }
                    else if (((key === "projectedAVG") || (key === "projectedOBP") || (key === "projectedSLG") || (key === "projectedOPS") || (key === "projectedWHIP")) && (typeof value === "number")) {
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
                    else if (((key === "projectedERA") || (key === "projectedK9") || (key === "projectedBB9")) && (typeof value === "number")) {
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

                json = JSON.parse(request.responseText, reviver)
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
            //dt.clear().destroy();
            this.loadTable(this.generateTableUrlFromSelections())
            //new Promise(r => setTimeout(r, 200));
            /* dt = $('#rankingsTable').DataTable({
                "columnDefs": [
                    {
                        "targets": "_all",
                        "className": "dt-head-center",
                    }
                ],
                "order": [[1, 'desc']],
                "pageLength": 100,
                "stripeClasses": ['odd', 'even'],
        
            });
            /*
            data = JSON.parse(this.generateTableUrlFromSelections);
            console.log(data);
            dt.clear().draw();
            dt.rows.add(data); // Add new data
            dt.columns.adjust().draw(); // Redraw the DataTable
            */
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