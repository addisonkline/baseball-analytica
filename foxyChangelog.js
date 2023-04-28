console.log("js/vue test")

const changelogApp = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            versions: [
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