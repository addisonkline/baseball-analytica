const backgroundApp = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            sections: [
                { title: 'Posts', url: 'https://baseball-analytica.com', backlinkedUrl: 'https://baseball-analytica.com'},
                { title: 'Rankings', url: '/rankings', backlinkedUrl: '../../rankings'},
                { title: 'About', url: '/about', backlinkedUrl: '../../about'},
                { title: 'Contact', url: '/contact', backlinkedUrl: '../../contact'}
            ]
        }
    },
    methods: {
        backgroundImageClicked(givenElement) {
            console.log("image clicked")
        }
    }
})

backgroundApp.mount("#background")
backgroundApp.mount("#contact-background")