const backgroundApp = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            sections: [
                { title: 'Posts', url: '/index', backlinkedUrl: '../../index'},
                { title: 'Rankings', url: '/rankings', backlinkedUrl: '../../rankings'},
                { title: 'About', url: '/about', backlinkedUrl: '../../about'},
                { title: 'Contact', url: '/contact', backlinkedUrl: '../../contact'}
            ]
        }
    },
    methods: {
        mouseoverBackgroundImage(givenElement) {
            document.getElementById(givenElement).style.cursor = "pointer"
        }
    }
})

backgroundApp.mount("#background")
backgroundApp.mount("#contact-background")