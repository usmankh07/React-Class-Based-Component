import React, { Component } from 'react'
import NewsItems from './NewsItems'

export class News extends Component {
    khabrien = [
        {
            "source": {
                "id": null,
                "name": "Daily Beast"
            },
            "author": "Laura Bradley",
            "title": "'Succession' Finale Shocker: Tom Wambsgans Gets the Last Laugh - The Daily Beast",
            "description": "As devastating as the lows have been for Kendall Roy this season, the finale gives him (and his siblings) one more delirious high—before staging a “Game of Thrones”-level betrayal.",
            "url": "https://www.thedailybeast.com/succession-season-3-finale-shocker-sees-tom-wambsgans-get-the-last-laugh",
            "urlToImage": "https://img.thedailybeast.com/image/upload/c_crop,d_placeholder_euli9k,h_1440,w_2560,x_0,y_164/dpr_2.0/c_limit,w_740/fl_lossy,q_auto/v1639374642/matthew-macfadyen_d4xcfz",
            "publishedAt": "2021-12-13T06:30:02Z",
            "content": "You know your relationship with your mother is complicated when you give her a wedding toast that both calls her out for being an absentee parent and places her marriage in competition with your own.… [+8736 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Michelle Toh, CNN Business",
            "title": "SenseTime delays its IPO after being hit by another US blacklist - CNN",
            "description": "SenseTime is postponing its big stock market debut after once again getting caught up in tensions between the United States and China.",
            "url": "https://www.cnn.com/2021/12/13/investing/sensetime-ipo-hong-kong-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211212224342-sensetime-file-07072021-restricted-super-tease.jpg",
            "publishedAt": "2021-12-13T06:03:00Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Asia stocks edge higher, Fed stars in central bank extravaganza - Reuters",
            "description": "Asian stocks crept higher on Monday as investors prepared to tiptoe through a minefield of 17 central bank meetings this week and the likely early end to U.S. policy stimulus.",
            "url": "https://www.reuters.com/markets/europe/global-markets-wrapup-1-pix-2021-12-13/",
            "urlToImage": "https://www.reuters.com/resizer/cks3uJmzlUbMewcrgbQYbH--wzA=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/K232S7T53RNRJOBN56YG5WWZJM.jpg",
            "publishedAt": "2021-12-13T05:59:00Z",
            "content": "SYDNEY, Dec 13 (Reuters) - Asian stocks crept higher on Monday as investors prepared to tiptoe through a minefield of 17 central bank meetings this week and the likely early end to U.S. policy stimul… [+3210 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Hope amid the rubble: Kentucky tornado death toll could fall, company says - Reuters",
            "description": "A ray of hope emerged on Sunday from the aftermath of a barrage of tornadoes that obliterated a Kentucky town and killed people in five states, as representatives of a destroyed candle factory said far fewer people may have died than previously feared.",
            "url": "https://www.reuters.com/markets/commodities/devastated-kentucky-tornado-survivors-pick-through-debris-shelter-with-relatives-2021-12-12/",
            "urlToImage": "https://www.reuters.com/resizer/tEl8nmq4ftKFQSELMI5Fwfe1JRE=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/MJIRQZTZCVPGRHRHWV535LLH34.jpg",
            "publishedAt": "2021-12-13T05:25:00Z",
            "content": "MAYFIELD, Ky., Dec 12 (Reuters) - A ray of hope emerged on Sunday from the aftermath of a barrage of tornadoes that obliterated a Kentucky town and killed people in five states, as representatives of… [+5110 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Jessie Yeung, CNN",
            "title": "India's Harnaaz Sandhu is crowned Miss Universe 2021 - CNN",
            "description": "Harnaaz Sandhu of India was crowned Miss Universe 2021 on Sunday, marking the end of a controversial pageant hosted this year in southern Israel.",
            "url": "https://www.cnn.com/style/article/miss-universe-india-harnaaz-sandhu-intl-hnk/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211212223602-miss-universe-2021-miss-india-super-tease.jpg",
            "publishedAt": "2021-12-13T04:50:22Z",
            "content": "beautyPublished 13th December 2021\r\nHarnaaz Sandhu of India was crowned Miss Universe 2021 on Sunday, marking the end of a controversial pageant hosted this year in southern Israel.\r\nIn a speech on s… [+3254 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Kyle Stewart, Dennis Romero",
            "title": "White House official allegedly said National Guard troops would protect Trump supporters Jan. 6 - NBC News",
            "description": "A report out Sunday that recommends that Trump administration chief of staff Mark Meadows be held in contempt of Congress alleges that he said National Guard",
            "url": "https://www.nbcnews.com/politics/congress/white-house-official-allegedly-said-national-guard-troops-protect-trum-rcna8530",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211212-mark-meadows-mc-1119p-604e57.jpg",
            "publishedAt": "2021-12-13T04:49:00Z",
            "content": "A report out Sunday that recommends that Trump administration chief of staff Mark Meadows be held in contempt of Congress alleges that he said National Guard troops would keep President Donald Trumps… [+3524 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "CBS Sports"
            },
            "author": "",
            "title": "NFL Week 14 grades: Chiefs get an 'A' for destroying Raiders, Jaguars get an 'F' as Urban Meyer rumors swirl - CBS Sports",
            "description": "Here are the Week 14 grades for each team",
            "url": "https://www.cbssports.com/nfl/news/nfl-week-14-grades-chiefs-get-an-a-for-destroying-raiders-jaguars-get-an-f-as-urban-meyer-rumors-swirl/",
            "urlToImage": "https://sportshub.cbsistatic.com/i/r/2021/12/12/72b032b1-8bce-4ca5-9cba-8d9ff79f857f/thumbnail/1200x675/ca3fdcceacdfbc89d006a570ee3bca4c/chiefs.jpg",
            "publishedAt": "2021-12-13T04:42:00Z",
            "content": "When a team scores 48 points in a win, you usually end up talking about their offense after the game, but in the Chiefs' 48-9 victory over the Raiders on Sunday, it was their defense that stood out t… [+3938 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "KTRK-TV"
            },
            "author": "Brooke Taylor",
            "title": "Deadly Baytown drive-by shooting: 1 dead, 13 people injured at candlelight vigil, Harris County Sheriff Ed Gonzalez says - KTRK-TV",
            "description": "One person was killed in a shooting that injured at least 13 other people at a candlelight vigil in Baytown, according to Sheriff Ed Gonzalez.",
            "url": "https://abc13.com/fatal-shooting-baytown-thirteen-people-injured-1400-block-of-north-market-loop-1-person-fatally-shot/11332046/",
            "urlToImage": "https://cdn.abcotvs.com/dip/images/11332044_121221-ktrk-deputy.png?w=1600",
            "publishedAt": "2021-12-13T04:19:19Z",
            "content": "BAYTOWN, Texas (KTRK) -- One person was killed in a shooting that injured at least 13 other people Sunday evening at a candlelight vigil in Baytown, according to Harris County Sheriff Ed Gonzalez.It … [+1640 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "YouTube"
            },
            "author": null,
            "title": "Looking back in time with the James Webb Space Telescope - 60 Minutes",
            "description": "Scott Pelley reports on the James Webb Space Telescope, due to launch December 22. Scientists hope it will be able to see the universe’s first stars and gala...",
            "url": "https://www.youtube.com/watch?v=sMxdeUJ0v2c",
            "urlToImage": "https://i.ytimg.com/vi/sMxdeUJ0v2c/maxresdefault.jpg",
            "publishedAt": "2021-12-13T04:05:21Z",
            "content": null
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "Deon J. Hampton",
            "title": "‘I can’t believe I’m even here,’ candle factory survivor says - NBC News",
            "description": "His Friday night shift was supposed to go on as usual.",
            "url": "https://www.nbcnews.com/news/us-news/-cant-believe-m-even-candle-factory-employee-says-rcna8528",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/rockcms/2021-12/211212-candle-factory-mayfield-kentucky-ew-635p-8a711f.jpg",
            "publishedAt": "2021-12-13T03:50:00Z",
            "content": "MAYFIELD, Ky. His Friday night shift was supposed to go on as usual. Mark Saxton showed up for work 30 minutes early, as he always does, greeted friends and got down to business. As a forklift operat… [+3260 chars]"
        },
        {
            "source": {
                "id": "bloomberg",
                "name": "Bloomberg"
            },
            "author": null,
            "title": "South Korea Breaks With U.S. on Boycott of Beijing Olympics - Bloomberg",
            "description": null,
            "url": "https://www.bloomberg.com/tosv2.html?vid=&uuid=958252fb-5bf2-11ec-98d6-416578506641&url=L25ld3MvYXJ0aWNsZXMvMjAyMS0xMi0xMy9zb3V0aC1rb3JlYS1icmVha3Mtd2l0aC11LXMtb24tYm95Y290dC1vZi1iZWlqaW5nLW9seW1waWNz",
            "urlToImage": null,
            "publishedAt": "2021-12-13T03:23:00Z",
            "content": "To continue, please click the box below to let us know you're not a robot."
        },
        {
            "source": {
                "id": null,
                "name": "MarketWatch"
            },
            "author": "Associated Press",
            "title": "Newsom positions California to become first blue state to pursue gun control by mimicking Texas abortion law - MarketWatch",
            "description": "Conservative lawmakers in Texas have outlawed most abortions once a fetal heartbeat can be detected and effectively deputized private citizens to enforce the ban, empowering them to sue abortion clinics and anyone else who ‘aids and abets’ such a procedure",
            "url": "https://www.marketwatch.com/story/newsom-positions-california-to-become-first-blue-state-to-pursue-gun-control-by-mimicking-texas-abortion-law-01639365434",
            "urlToImage": "https://images.mktw.net/im-450916/social",
            "publishedAt": "2021-12-13T03:17:00Z",
            "content": "SACRAMENTO, Calif. (AP) California Gov. Gavin Newsom on Saturday pledged to empower private citizens to enforce a ban on the manufacture and sale of assault weapons in the state, citing the same auth… [+3758 chars]"
        },
        {
            "source": {
                "id": "fox-news",
                "name": "Fox News"
            },
            "author": "Michael Lee",
            "title": "FEMA administrator blames climate change for deadly tornado outbreak - Fox News",
            "description": "Federal Emergency Management Agency Administrator Deanne Criswell laid blame on climate change for the deadly tornado outbreak over the weekend, claiming such disasters will be the \"new normal\" from now on.",
            "url": "https://www.foxnews.com/us/fema-administrator-blames-climate-change-for-deadly-tornado-outbreak",
            "urlToImage": "https://static.foxnews.com/foxnews.com/content/uploads/2021/10/Deanne-Criswell-Smile.jpg",
            "publishedAt": "2021-12-13T02:21:48Z",
            "content": "Federal Emergency Management Agency Administrator Deanne Criswell laid blame on climate change for the deadly tornado outbreak over the weekend, claiming such disasters will be the \"new normal\" from … [+2171 chars]"
        },
        {
            "source": {
                "id": "nbc-news",
                "name": "NBC News"
            },
            "author": "The Associated Press",
            "title": "New Caledonia votes to stay in France amid boycott by separatists - NBC News",
            "description": "Voters in the French island territory of New Caledonia chose overwhelmingly Sunday to stay part of France, in a referendum boycotted by pro-independence forces.",
            "url": "https://www.nbcnews.com/news/world/new-caledonia-votes-stay-france-amid-boycott-separatists-n1285804",
            "urlToImage": "https://media-cldnry.s-nbcnews.com/image/upload/t_nbcnews-fp-1200-630,f_auto,q_auto:best/newscms/2021_50/3524638/211213-new-caledonia-mb-0726.JPG",
            "publishedAt": "2021-12-13T02:05:00Z",
            "content": "NOUMEA, New Caledonia Voters in the French island territory of New Caledonia chose overwhelmingly Sunday to stay part of France, in a referendum boycotted by pro-independence forces and closely watch… [+4392 chars]"
        },
        {
            "source": {
                "id": "abc-news",
                "name": "ABC News"
            },
            "author": "Jack Date, Luke Barr",
            "title": "New cyber vulnerability poses 'severe risk,' DHS says - ABC News",
            "description": "",
            "url": "https://abcnews.go.com/US/cyber-vulnerability-poses-severe-risk-dhs/story?id=81713422",
            "urlToImage": "https://s.abcnews.com/images/Business/ransomware-illo-rt-ps-210603_1622752123454_hpMain_16x9_992.jpg",
            "publishedAt": "2021-12-13T01:50:18Z",
            "content": "Late Saturday, the Department of Homeland Security Cybersecurity and Infrastructure Security Agency (CISA) issued an urgent statement about a new cyber vulnerability that could touch a wide swath of … [+2880 chars]"
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Tales of survival: Mayfield residents waited, panicked, prayed - Reuters",
            "description": "Until the power went out on Friday night, Rick Foley was closely tracking the storm system with the help of radar and television news. But when his house in Mayfield, Kentucky, went dark, all he could do was sit tight and wait. Finally he heard the roar.",
            "url": "https://www.reuters.com/markets/commodities/tales-survival-mayfield-residents-waited-panicked-prayed-2021-12-13/",
            "urlToImage": "https://www.reuters.com/resizer/q4bSd2c7xfT4kJ6hf4DhCvKWqCY=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/Y6G6WPEHHZPTBAW36C5JVCY3PQ.jpg",
            "publishedAt": "2021-12-13T01:50:00Z",
            "content": "MAYFIELD, Ky., Dec 12 (Reuters) - Until the power went out on Friday night, Rick Foley was closely tracking the storm system with the help of radar and television news. But when his house in Mayfield… [+4931 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "The Guardian"
            },
            "author": "Guardian staff reporter",
            "title": "Chris Wallace announces he is leaving Fox News to join CNN streaming service - The Guardian",
            "description": "Departure after 18 years deals blow to Fox’s news operation at a time when its opinion side has become preeminent",
            "url": "https://amp.theguardian.com/media/2021/dec/12/chris-wallace-fox-news-cnn-streaming-service",
            "urlToImage": null,
            "publishedAt": "2021-12-13T01:34:00Z",
            "content": "Fox NewsDeparture after 18 years deals blow to Foxs news operation at a time when its opinion side has become preeminent\r\nGuardian staff and agencies\r\nSun 12 Dec 2021 18.46 GMT\r\nVeteran TV anchor Chr… [+2410 chars]"
        },
        {
            "source": {
                "id": "cnn",
                "name": "CNN"
            },
            "author": "Akanksha Sharma, CNN Business",
            "title": "Narendra Modi's Twitter account hacked with announcement India would adopt Bitcoin - CNN",
            "description": "Narendra Modi's Twitter handle was \"very briefly compromised,\" his office said, when a tweet was sent from the Indian Prime Minister's account saying his country had adopted Bitcoin and would be distributing the cryptocurrency.",
            "url": "https://www.cnn.com/2021/12/12/india/modi-twitter-hack-intl/index.html",
            "urlToImage": "https://cdn.cnn.com/cnnnext/dam/assets/211212081900-narendra-modi-file-110221-super-tease.jpg",
            "publishedAt": "2021-12-13T01:29:00Z",
            "content": null
        },
        {
            "source": {
                "id": "reuters",
                "name": "Reuters"
            },
            "author": null,
            "title": "Horse racing idols app injects new life into Japan mobile gaming market - Reuters",
            "description": "When an ageing racehorse, Makahiki, broke records by winning his first race in five years in Kyoto in early October, Japanese social media was flooded with comments from an unlikely group of racing enthusiasts: gamers.",
            "url": "https://www.reuters.com/world/asia-pacific/horse-racing-idols-app-injects-new-life-into-japan-mobile-gaming-market-2021-12-13/",
            "urlToImage": "https://www.reuters.com/resizer/9-MKHAhTwe4Uefwznip6YfJf5Cg=/1200x628/smart/filters:quality(80)/cloudfront-us-east-2.images.arcpublishing.com/reuters/H4YAJK4BSRNBXF23TAUXEIXCKE.jpg",
            "publishedAt": "2021-12-13T00:28:00Z",
            "content": "TOKYO, Dec 13 (Reuters) - When an ageing racehorse, Makahiki, broke records by winning his first race in five years in Kyoto in early October, Japanese social media was flooded with comments from an … [+3683 chars]"
        },
        {
            "source": {
                "id": null,
                "name": "ESPN"
            },
            "author": "Michael DiRocco",
            "title": "Urban Meyer denies Jacksonville Jaguars reports -- 'If there is a source, that source is unemployed' - ESPN",
            "description": "Jaguars coach Urban Meyer on Sunday denied that he and receiver Marvin Jones had a screaming match and that he called his assistant coaches losers, and said anyone leaking information risks losing their job.",
            "url": "https://www.espn.com/nfl/story/_/id/32855042/urban-meyer-denies-jacksonville-jaguars-reports-there-source-source-unemployed",
            "urlToImage": "https://a2.espncdn.com/combiner/i?img=%2Fphoto%2F2021%2F1008%2Fr920023_1296x729_16%2D9.jpg",
            "publishedAt": "2021-12-13T00:17:26Z",
            "content": "NASHVILLE -- Jacksonville Jaguars coach Urban Meyer wants to take out the garbage.\r\nAnd by garbage, he means the person or persons leaking information outside the organization regarding what's going … [+4567 chars]"
        }
    ]
    constructor() {
        super()
        console.log("This is our constructor");
        this.state = {
           khabrien: this.khabrien
        }
    }

    render() {
        return (
            <div className='container my-3'>
                {/* <NewsItems title="News" description="About News"/> */}
                <div className="row">
                    {this.state.khabrien.map((element) => {
                        return <div className='col-md-4'>{<NewsItems title={element.title} description={element.description} imageUrl={element.urlToImage} newsUrl={element.url}/>}</div>
                    })}
                </div>
            </div>
        )
    }
}

export default News
