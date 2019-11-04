<template>
    <div id="content" class="md-layout">
        <md-card class="md-layout-item md-elevation-10">
            <md-card-header>
                <md-card-header-text>
                    <span class="md-title"><md-icon class="md-size-2x">code</md-icon> Code</span>
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                This is a partial list of my programming projects
            </md-card-content>

            <Project
                name="Much Assembly Required"
                date="[2017-11]"
                description="Multi-player 16-bit assembly programming game in your browser."
                :techs="['Java', 'Pixi.js', 'Typescript', 'MongoDB', 'x86-16 ASM']"
                :links="[{github: 'https://github.com/simon987/Much-Assembly-Required'}, {website:'https://muchassemblyrequired.com'}]"
                media="/static/cubot.png"
                featured
            />

            <Project
                name="Music graph (API & UI)"
                date="[2019-04]"
                description="Massive Web scraping project that attempts to aggregate raw information from
                 Musicbrainz, Last.fm, Spotify and Cover Art Archive to generate an interactive map of music-related data.
                 Uses a graph-database as its core and allows subsecond searching through tens of millions of relationships
                 with its mobile-friendly interface"
                :techs="['D3.js', 'Graph Database', 'Vue.js', 'Python', 'Bash', 'Java']"
                :links="[{'github (ui)': 'https://github.com/simon987/music-graph-ui'},
                 {'github (api)': 'https://github.com/simon987/music-graph-api'}, {website: 'https://mg.simon987.net'}]"
                media="/static/mg.png"
                featured
            />

            <Project
                name="sist2"
                date="[2019-11]"
                description='Lightning-fast file system indexer and search tool. Sist2 is a more powerful and
                    more lightweight version of its Python predecessor.
                    It is currently being used to allow full-text search of terabytes of online documents such
                    as scientific papers and comic books at
                    <a href="https://searchin.the-eye.eu" target="_blank">the-eye.eu</a>.'
                :techs="['C', 'LMDB', 'Elasticsearch']"
                :links="[{'github': 'https://github.com/simon987/sist2'}, {website:'https://searchin.the-eye.eu'}]"
                media="/static/c.png"
                featured
            />


            <Project
                name="task_tracker"
                date="[2019-02]"
                description="Fast task tracker (job queue) with authentication, statistics and web frontend"
                :techs="['Go', 'PostgreSQL', 'Angular', 'Test-Driven']"
                :links="[{github: 'https://github.com/simon987/task_tracker'}, {demo:'https://tt.simon987.net'}]"
                media="/static/tt.png"
                featured
            />

            <Project
                name="irarchives"
                date="[2019-05]"
                description="Large scale reverse image and video search for reddit.
                 This project is a massive rewrite & refactor of the now defunct i.rarchives.com website.
                 It uses a combination of real-time ingesting using reddit_feed and historical
                 archival from Pushshift. Several optimizations have been implemented to allow parametrised
                 image and video search possible among its large dataset (See pg_hamming)."
                :techs="['Python', 'PostgreSQL', 'Javascript']"
                :links="[{'github': 'https://github.com/simon987/irarchives'}]"
                media="/static/irar.png"
            />

<!--            <Project-->
<!--                name="Misc Web scraping"-->
<!--                date="[2018-02]"-->
<!--                description=""-->
<!--                :techs="['Python', 'SQLite']"-->
<!--                media="/static/python.png"-->
<!--            />-->

            <Project
                name="OD-Database"
                date="[2018-07]"
                description="Distributed crawler, database and web frontend for public directories indexing."
                :techs="['Elasticsearch', 'Python', 'Flask', 'PostgreSQL']"
                :links="[{github: 'https://github.com/simon987/od-database'}, {website:'https://od-db.the-eye.eu'}]"
                media="/static/oddb.png"
            />

<!--            <Project-->
<!--                name="task_tracker_drone"-->
<!--                date="[2019-03]"-->
<!--                description="General purpose 'set and forget' task runner and client library for task_tracker"-->
<!--                :techs="['Python']"-->
<!--                :links="[{github: 'https://github.com/simon987/task_tracker_drone'}]"-->
<!--                media="/static/worker.png"-->
<!--            />-->

<!--            <Project-->
<!--                name="ws_bucket"-->
<!--                date="[2019-03]"-->
<!--                description="Simple websocket-based file upload service with token-based auth. Currently used to allow secure file upload for OD-Database workers."-->
<!--                :techs="['Go', 'Test-Driven']"-->
<!--                :links="[{github: 'https://github.com/simon987/ws_bucket'}]"-->
<!--                media="/static/go.png"-->
<!--            />-->

<!--            <Project-->
<!--                name="DataArchivist.net"-->
<!--                date="[2019-04]"-->
<!--                description="Personal data archival blog"-->
<!--                :techs="['HTML', 'Hugo']"-->
<!--                :links="[{'github': 'https://github.com/simon987/dataarchivist.net'}, {website: 'https://dataarchivist.net'}]"-->
<!--                media="/static/rss.png"-->
<!--            />-->

<!--            <Project-->
<!--                name="simon987.net"-->
<!--                date="[2019-04]"-->
<!--                description="My personal website"-->
<!--                :techs="['Pixi.js', 'Vue.js']"-->
<!--                :links="[{'github': 'https://github.com/simon987/simon987.net'}, {website: 'https://simon987.net'}]"-->
<!--                media="/static/net.png"-->
<!--            />-->

            <Project
                name="Architeuthis"
                date="[2019-05]"
                description="MITM HTTP(S) proxy with integrated load-balancing, rate-limiting and error handling.
                 This tool was implemented to de-couple the often repetitive
                 HTTP error handling & rate-limiting logic from many Web scraping jobs."
                :techs="['Go']"
                :links="[{'github': 'https://github.com/simon987/Architeuthis'}]"
                media="/static/archi.png"
            />

<!--            <Project-->
<!--                name="pg_hamming"-->
<!--                date="[2019-07]"-->
<!--                description="Custom C-Level function for PostgreSQL to calculate hamming distance-->
<!--                 for fixed-length BYTEA datatype. Was designed and optimized to drastically reduce-->
<!--                  the query time of the irarchives project."-->
<!--                :techs="['C', 'PostgreSQL']"-->
<!--                :links="[{'github': 'https://github.com/simon987/pg_hamming'}]"-->
<!--                media="/static/hamming.png"-->
<!--            />-->

<!--            <Project-->
<!--                name="phpBB request system"-->
<!--                date="[2019-07]"-->
<!--                description="Simple request system for phpBB3.2 built for an online community"-->
<!--                :techs="['PHP']"-->
<!--                :links="[{'github': 'https://github.com/simon987/phpBB-reqs'}]"-->
<!--                media="/static/phpbb.png"-->
<!--            />-->

            <Project
                name="reddit_feed"
                date="[2019-08]"
                description="Fault-tolerant daemon that fetches comments and submissions from reddit.
                 Was built to de-couple, centralize and simplify reddit API calls for various other projects."
                :techs="['Python', 'RabbitMQ']"
                :links="[{'github': 'https://github.com/simon987/reddit_feed'}]"
                media="/static/reddit_feed.png"
            />

            <Project
                name="chan_feed"
                date="[2019-08]"
                description="Daemon that fetches posts from compatible *chan image boards.
                 It keeps track of visited threads to minimize the number of HTTP requests."
                :techs="['Python', 'RabbitMQ', 'SQLite']"
                :links="[{'github': 'https://github.com/simon987/chan_feed'}]"
                media="/static/chan_feed.png"
            />

            <Project
                name="beemer"
                date="[2019-07]"
                description="beemer is an utility tool that executes a custom command on files written in a watched
                 directory. It is mainly used to facilitate offloading of large datasets generated by
                 scraping jobs to cloud storage."
                :techs="['Go']"
                :links="[{'github': 'https://github.com/simon987/beemer'}]"
                media="/static/go.png"
            />

<!--            <Project-->
<!--                name="telegram ingest"-->
<!--                date="[2019-08]"-->
<!--                description="Pushshift Telegram Ingest."-->
<!--                :techs="['Python', 'Elasticsearch', 'Javascript']"-->
<!--                :links="[{'github': 'https://github.com/pushshift/telegram'}]"-->
<!--                media="/static/telegram.png"-->
<!--                fork-->
<!--            />-->

            <Project
                name="Simple Incremental Search Tool"
                date="[2018-01]"
                description="Simple web frontend to an elasticsearch database made for local files indexing.
                 Enables lightning-fast incremental (as you type) search in a modern Web UI."
                :techs="['Elasticsearch', 'Python', 'Flask', 'Javascript', 'SQLite', 'Test-Driven']"
                :links="[{github: 'https://github.com/simon987/Simple-Incremental-Search-Tool'}]"
                media="/static/sist.png"
                archived
            />

        </md-card>

        <router-link to="/">
            <md-button class="md-fab md-fixed md-fab-top-left">
                <md-icon>arrow_back</md-icon>
            </md-button>
        </router-link>
    </div>
</template>

<script>
import Project from "./Project";

export default {
    name: "Code",
    components: {Project}
}
</script>

<style scoped>
    .md-card {
        background-color: white;
        margin: 2em;
        max-width: 1200px;
        min-width: inherit;
    }


    @media screen and (max-width: 1250px) {

        @media screen and (min-width: 600px) {
            .md-layout > .md-card {
                margin-top: 3.5rem;
                max-width: 90%;
            }
        }

        .md-layout > .md-card {
            max-width: 100%;
            margin: 0;
            padding-top: 3rem;
        }

        .md-layout > .md-card > .md-card-header {
            padding-left: 2rem;
        }

        .md-layout > .md-card > .md-card-content {
            padding-left: 2rem;
        }

        .md-fab {
            left: 5px;
            top: 5px;
        }
    }

    .md-layout-item {
        margin-left: auto;
        margin-right: auto;
    }

</style>
