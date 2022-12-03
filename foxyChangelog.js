console.log("js/vue test")

const changelogApp = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            versions: [
                { ver: 'v1.03', date: '09/27/2022', desc: 'Resolved issue of playoff games being counted'}, 
                { ver: 'v1.02', date: '09/22/2022', desc: 'Optimized batter and pitcher projection algorithms'}, 
                { ver: 'v1.01', date: '09/11/2022', desc: 'Improved calculation of team strength in team projections'}, 
                { ver: 'v1.0', date: '08/29/2022', desc: 'Created models for teams, batters, and pitchers'} 
            ]
        }
    }
})

changelogApp.mount('#contact-info')