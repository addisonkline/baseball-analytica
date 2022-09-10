console.log("js/vue test")

const app = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            posts: [
                { id: 'who-deserves-nl-cy-young', title: 'Who Deserves the NL Cy Young Award?', author: 'A. Carreno', date: '09/09/2022', description: "This year's NL Cy Young race is shaping up to be on of baseball's most interesting award race in recent memory? Who, if anyone, is most deserving?", url: '/posts/2022-09-09/who-deserves-nl-cy-young'},
                { id: 'analyzing-orioles-surprising-season', title: 'The Little Bird That Could: Analyzing the Orioles’ Surprising Season', author: 'A. Carreno', date: '08/26/2022', description: 'In less than a year, the Orioles have gone from basement dwellers to legitimate contenders in the toughest division in baseball. How?', url: '/posts/2022-08-26/analyzing-orioles-surprising-season'},
                { id: 'not-all-runs-equal-3', title: 'Not All Runs are Created Equal, Part 3', author: 'A. Kline', date: '07/29/2022', description: 'How can the formula for weighted run differential, a metric designed for comparing teams across different environments, be improved upon?', url: '/posts/2022-07-29/not-all-runs-equal-3' },
                { id: '2022-midseason-review', title: '2022 Midseason Review', author: 'A. Kline', date: '07/22/2022', description: 'The first half of the 2022 Major League Baseball season is now over. How do players and teams stack up?', url: '/posts/2022-07-22/2022-midseason-review' },
                { id: 'different-orders-different-outcomes', title: 'Different Orders, Different Outcomes', author: 'A. Kline', date: '07/15/2022', description: 'Scoring by simply racking up hits is one thing, but what about the effect of sequencing on runs?', url: '/posts/2022-07-15/different-orders-different-outcomes' },
                { id: 'is-fip-overrated', title: 'Is FIP Overrated?', author: 'A. Kline', date: '07/01/2022', description: 'FIP helps us understand the role of the pitcher on the field in a more complex way, but does so by, ironically, making some big simplifications.', url: '/posts/2022-07-01/is-fip-overrated'},
                { id: 'park-factors-and-air', title: 'Park Factors and the Air', author: 'A. Kline', date: '05/13/2022', description: 'The shapes of Major League stadiums have been known to influence game outcomes, but what about the climates where those stadiums are?', url: '/posts/2022-05-13/park-factors-and-air'},
                { id: '2021-season-in-review', title: '2021: A Season in Review', author: 'A. Kline', date: '01/07/2022', description: '2021 was quite an interesting season. Not like this site has been around for any other seasons, though.', url: '/posts/2022-01-07/2021-season-in-review'},
                { id: 'not-all-runs-equal-2', title: 'Not All Runs are Created Equal, Part 2', author: 'A. Kline', date: '07/30/2021', description: 'Weighted run differential has the potential to be a useful tool, but how can its potential be reached, and how useful can it get to begin with?', url: '/posts/2021-07-30/not-all-runs-equal-2'},
                { id: 'not-all-runs-equal', title: 'Not All Runs are Created Equal', author: 'A. Kline', date: '07/16/2021', description: 'Not only do runs determine who wins a baseball game, they have consistently been a cornerstone of sabermetrics. All despite the fact that no two runs are exactly alike.', url: '/posts/2021-07-16/not-all-runs-equal'},
                { id: 'good-pitching-bad-hitting', title: 'Good Pitching or Bad Hitting?', author: 'A. Kline', date: '06/18/2021', description: 'Pitchers have obviously been having quite a successful year. But is it becuase they are actually better, or are hitters just worse?', url: '/posts/2021-06-18/good-pitching-bad-hitting'},
                { id: 'whip-is-overrated', title: 'WHIP is Overrated', author: 'A. Kline', date: '05/28/2021', description: 'Walks plus hits per innings pitched seems simple enough, so why is it not treated as such?', url: '/posts/2021-05-28/whip-is-overrated'},
                { id: 'past-present-future-sabermetrics', title: 'The Past, Present, and Future of Sabermetrics', author: 'A. Kline', date: '05/21/2021', description: 'In-depth statistical analysis of baseball was not invented by Bill James, nor did it peak with Moneyball. How has sabermetrics changed (and not yet changed) the sport of baseball?', url: '/posts/2021-05-21/past-present-future-sabermetrics'}
            ]
        }
    },
    methods: {
        goToUrl(url) {
            window.location.pathname = (url)
            console.log(window.location)
        },
        getAuthorUrl(authorName) {
            switch(authorName) {
                case "A. Kline":
                    return "writers/kline"
                case "A. Carreno":
                    return "writers/carreno"
            }
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