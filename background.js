const backgroundApp = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            sections: [
                { title: 'Posts', url: 'index.html', backlinkedUrl: '../../index.html'},
                { title: 'Tools', url: 'tools.html', backlinkedUrl: '../../tools.html'},
                { title: 'About', url: 'about.html', backlinkedUrl: '../../about.html'},
                { title: 'Contact', url: 'contact.html', backlinkedUrl: '../../contact.html'}
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