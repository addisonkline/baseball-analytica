console.log("js/vue test")

const app = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            posts: [
                { id: 'not-all-runs-equal-2', title: 'Not All Runs are Created Equal, Part 2', author: 'A. Kline', date: '07/30/2021', description: 'Weighted run differential has the potential to be a useful tool, but how can its potential be reached, and how useful can it get to begin with?', url: 'posts/2021-07-30/not-all-runs-equal-2.html'},
                { id: 'not-all-runs-equal', title: 'Not All Runs are Created Equal', author: 'A. Kline', date: '07/16/2021', description: 'Not only do runs determine who wins a baseball game, they have consistently been a cornerstone of sabermetrics. All despite the fact that no two runs are exactly alike.', url: 'posts/2021-07-16/not-all-runs-equal.html'},
                { id: 'good-pitching-bad-hitting', title: 'Good Pitching or Bad Hitting?', author: 'A. Kline', date: '06/18/2021', description: 'Pitchers have obviously been having quite a successful year. But is it becuase they are actually better, or are hitters just worse?', url: 'posts/2021-06-18/good-pitching-bad-hitting.html'},
                { id: 'whip-is-overrated', title: 'WHIP is Overrated', author: 'A. Kline', date: '05/28/2021', description: 'Walks plus hits per innings pitched seems simple enough, so why is it not treated as such?', url: 'posts/2021-05-28/whip-is-overrated.html'},
                { id: 'past-present-future-sabermetrics', title: 'The Past, Present, and Future of Sabermetrics', author: 'A. Kline', date: '05/21/2021', description: 'In-depth statistical analysis of baseball was not invented by Bill James, nor did it peak with Moneyball. How has sabermetrics changed (and not yet changed) the sport of baseball?', url: 'posts/2021-05-21/past-present-future-sabermetrics.html'}
            ]
        }
    },
    methods: {
        goToUrl(url) {
            window.location.pathname = (url)
            console.log(window.location)
        },
        highlightTitle(givenElement) {
            document.getElementById(givenElement).style.color = "#646464" // rgb(100, 100, 100)
            document.getElementById(givenElement).style.textDecoration = "underline"
            document.getElementById(givenElement).style.cursor = "pointer" 
        },
        unHighlightTitle(givenElement) {
            document.getElementById(givenElement).style.color = "#000000" // black
            document.getElementById(givenElement).style.textDecoration = "none"
            document.getElementById(givenElement).style.cursor = "auto"
        }
    }
})

app.mount('#posts-section')