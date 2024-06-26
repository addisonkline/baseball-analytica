console.log("js/vue test")

const app = Vue.createApp({
    data() {
        return {
            testVar: 'This is a test variable',
            posts: [
                { id: 'introducing-runners-worth', title: "Runner's Worth: A New Way to Evaluate Pitchers", author: 'A. Carreno', date: '05/24/2024', description: "Modern baserunning stats, at least the ones that are used, rely too heavily on game impact. So let's create an alternative.", url: '/posts/2024-05-24/introducing-runners-worth'},
                { id: 'pitcher-similarity-scores', title: 'A New Approach to Pitcher Similarity Scores', author: 'A. Kline', date: '04/12/2024', description: 'Comparing baseball players is as old as baseball itself. So why not create a modern formula?', url: '/posts/2024-04-12/pitcher-similarity-scores'}, 
                { id: 'american-league-harder', title: 'Is the American League Harder?', author: 'A. Kline', date: '04/05/2024', description: 'Evidence suggests that AL teams have harder schedules on average than NL teams. Is this true? And if so, why?', url: '/posts/2024-04-05/american-league-harder'}, 
                { id: 'schedule-difficulty-by-team', title: 'How Does Schedule Difficulty Vary by Team?', author: 'A. Kline', date: '03/22/2024', description: 'No two teams have the same schedule. How much can they vary, and how much does this matter?', url: '/posts/2024-03-22/schedule-difficulty-by-team'}, 
                { id: 'power-team-success', title: 'How Important is Power to a Team\'s Success?', author: 'A. Carreno', date: '11/03/2023', description: 'Power hitting is an admirable trait in a baseball player, but does a team really need it to win a lot of games?', url: '/posts/2023-11-03/power-team-success'},
                { id: '2023-schedule', title: 'Was the 2023 MLB Schedule Actually Fairer?', author: 'A. Kline', date: '10/27/2023', description: 'This season, MLB introduced a new "well-balanced" schedule in which every team plays every other team at least once. But is this actually fairer than the schedule it replaced?', url: '/posts/2023-10-27/2023-schedule'}, 
                { id: 'hardest-pitch-to-hit', title: 'Settling the Debate: What is the Hardest Pitch to Hit in Baseball?', author: 'A. Carreno', date: '07/21/2023', description: 'Not all pitches are created equal. Many pitchers dedicate their careers to specializing in one or another–but across the whole league, which pitches take the cake when it comes to hitting difficulty?', url: '/posts/2023-07-21/hardest-pitch-to-hit'}, 
                { id: 'batting-average-contact-metric', title: 'Batting Average as a Contact Metric', author: 'A. Kline', date: '06/30/2023', description: 'Batting average is far from a perfect stat, but according to the data, it could be more useful than you think. So does batting average deserve as much grief as it gets?', url: 'posts/2023-06-30/batting-average-contact-metric'},
                { id: 'offensive-performance-by-position', title: 'Offensive Performance by Fielding Position', author: 'A. Kline', date: '06/23/2023', description: 'Commonly-held beliefs about some positions hitting better than others did hold true for years. But how accurate are they in today\'s league?', url: '/posts/2023-06-23/offensive-performance-by-position'},
                { id: 'introducing-daera', title: 'Introducing Defense-Aware ERA', author: 'A. Kline', date: '06/16/2023', description: 'Defense-independent pitching statistics (DIPS), though revolutionary when they were introduced, have long overstayed their welcome in the sabermetrics community. Can there be a modern-day replacement that doesn\'t just ignore batted balls?', url: '/posts/2023-06-16/introducing-daera'},
                { id: 'does-april-matter', title: 'How Much Does April Performance Really Matter?', author: 'A. Kline', date: '04/28/2023', description: 'It was commonly said (until recently) that how a team does in April has little sway over the rest of their season. But how true actually is this? And how does April\'s importance compare to that of other months?', url: '/posts/2023-04-28/does-april-matter'},
                { id: 'if-pitchers-pitched-to-bonds', title: 'What if Pitchers Actually Pitched to Barry Bonds?', author: 'A. Kline', date: '04/07/2023', description: 'Barry Bonds has more intentional walks than any other player in MLB history. But what if he actually got a chance to bat?', url: '/posts/2023-04-07/if-pitchers-pitched-to-bonds'}, 
                { id: 'what-new-rule-change-means-for-baseball', title: 'A Seismic Shift: What the New Rule Change Means for Baseball', author: 'A. Carreno', date: '12/02/2022', description: 'The 2023 MLB season will see a number of new changes, but one of them stands out.', url: '/posts/2022-12-02/what-new-rule-change-means-for-baseball'}, 
                { id: 'who-deserves-nl-cy-young', title: 'Who Deserves the NL Cy Young Award?', author: 'A. Carreno', date: '09/09/2022', description: "This year's NL Cy Young race is shaping up to be one of baseball's most interesting award races in recent memory. Who, if anyone, is most deserving?", url: '/posts/2022-09-09/who-deserves-nl-cy-young'},
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
        isMostRecentPostByAuthor(post, author) { 
            for(var i = 0; i < this.posts.length; i++) {
                if(this.posts[i].author == author) {
                    return this.posts[i] == post
                }
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
app.mount('#bio')