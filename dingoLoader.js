// * * * * * * * * * * * * 
// FOXY Loader, based off rankings/fantasy helper file
// Created by Addison Kline, 2022
// Data from FOXY Projections
// * * * * * * * * * * * * 

// table displayed when page loaded
const defaultTable = "odds/game_odds.json";
const timesTable = "generation_times.json";

const headers = ["Game Date", "Away Team", "Home Team", "Away%", "Home%"]

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

var items = [];

$.getJSON(timesTable, function( data ) {
    $.each( data, function( key, val ) {
        items.push(val);
    });
});

// this function only works when outside the vue app... oh well
function populateTable(json, table) {
    const rankingsBody = document.querySelector("#rankingsTable > tbody")
    const rankingsHeader = document.querySelector("#rankingsTable > thead")

    //console.log(items)
    dateText = document.getElementById('date') // element to add date text to
    
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
    const tr = document.createElement("tr")

    for (i = 0; i < headers.length; i++) {
        const th = document.createElement("th")
        th.textContent = headers[i]
        tr.appendChild(th)
    }
    rankingsHeader.appendChild(tr)

    itemsIndex = 6 // used to determine which date to use

    dateText.textContent = "Valid as of " + items[itemsIndex] // changes date on "Valid as of"
}

const helperApp = Vue.createApp({

    data() {
        return {
            url: 'https://baseball-analytica.com',
            projDate: '07/25/2023',
            projVersion: '1.0',
            batterDataShown: true,
            countBatterTables: 0,
            countPitcherTables: 0,
            dataOptions: [],          
        }
    },
    methods: {
        // loads table using Ajax
        loadTable(table) {
            // requests table data
            const request = new XMLHttpRequest()

            request.open("get", table)
            request.onload = () => {
                json = JSON.parse(request.responseText)
                populateTable(json, table)
            }

            request.send()
        },
    },
    // generates team rankings when page loads
    created: function() { 
        this.loadTable(defaultTable)
    },
    computed: {

    }
})

const vm = helperApp.mount('#helper')