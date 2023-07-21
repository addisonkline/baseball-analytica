console.log("js/vue test")

const changelogApp = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            versions: [
                { ver: 'v1.17', date: '07/18/2023', desc: 'Minor internal bug fixes'}, 
                { ver: 'v1.16', date: '07/06/2023', desc: 'Improved method for data collection'}, 
                { ver: 'v1.15', date: '06/27/2023', desc: 'Fixed issue with playoff probabilities not being between 0 and 100%'}, 
                { ver: 'v1.14', date: '05/04/2023', desc: 'Fixed issue with projected pitcher HR totals being too low'}, 
                { ver: 'v1.13', date: '05/01/2023', desc: 'Redeployed batter and pitcher projections'},
                { ver: 'v1.12', date: '04/29/2023', desc: 'Added wild card, playoff probabilities'}, 
                { ver: 'v1.11', date: '04/25/2023', desc: 'Added run differential, other internal improvements'}, 
                { ver: 'v1.1', date: '04/18/2023', desc: 'Added division probabilities, other internal improvements'}, 
                { ver: 'v1.05', date: '04/10/2023', desc: 'Internal code improvements'}, 
                { ver: 'v1.04', date: '04/01/2023', desc: 'Early-season team projections now consider previous season performance'},  
                { ver: 'v1.03', date: '09/27/2022', desc: 'Resolved issue of playoff games being counted'}, 
                { ver: 'v1.02', date: '09/22/2022', desc: 'Optimized batter and pitcher projection algorithms'}, 
                { ver: 'v1.01', date: '09/11/2022', desc: 'Improved calculation of team strength in team projections'}, 
                { ver: 'v1.0', date: '08/29/2022', desc: 'Created models for teams, batters, and pitchers'} 
            ]
        }
    }
})

changelogApp.mount('#contact-info')