console.log("js/vue test")

const changelogApp = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            versions: [
                { ver: '1.0', date: '05/01/2024', desc: 'Created model for calculating game odds' }
            ]
        }
    }
})

changelogApp.mount('#contact-info')