<template>
    <div id="content" class="md-layout">
        <md-card class="md-layout-item md-elevation-10 main-card">
            <md-card-header>
                <md-card-header-text>
                    <span class="md-display-3 text-mono">simon987.net<span class="vim-caret">_</span></span>
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                Software engineering student, open source zealot, data archival hobbyist
            </md-card-content>

            <div class="sections">
                <md-button to="/code" class="md-raised big-button">
                    <md-icon class="md-accent">code</md-icon> Code
                    <div class="desc">Projects showcase</div>
                </md-button>

                <md-button href="https://dataarchivist.net" target="_blank" class="md-raised big-button">
                    <md-icon class="md-accent">edit</md-icon> Blog
                    <div class="desc">Personal tech blog</div>
                </md-button>

                <md-button to="/contact" class="md-raised big-button">
                    <md-icon class="md-accent">email</md-icon> Contact
                    <div class="desc">Contact page</div>
                </md-button>
            </div>
        </md-card>
    </div>
</template>

<script>
export default {
    name: "Jumbotron"
}
</script>

<style scoped>
    .md-card {
        background-color: white;
        margin: 2em;
        max-width: 1200px;
        min-width: inherit;

        padding: 2rem;
    }

    @media screen and (max-width: 1250px) {
        .md-card {
            max-width: 90%;
        }

        .md-display-3 {
            font-size: 30px;
        }
    }

    .text-mono {
        font-family: Hack, "Andale Mono", monospace;
        /*color: rgba(0, 0, 0, 0.87);*/
    }

    ::selection {
        background: #f9989f;
    }

    ::-moz-selection {
        background: #f9989f;
    }

    .vim-caret {
        -webkit-animation: vimCaret 1s linear infinite;
        -o-animation: vimCaret 1s linear infinite;
        animation: vimCaret 1s linear infinite;
        text-shadow: none;
    }

    @-webkit-keyframes vimCaret {
        0% {
            background-color: transparent;
        }
        49% {
            background-color: transparent;
        }
        50% {
            color: #FF5252;
        }
        100% {
            color: #FF5252;
        }
    }

    @-o-keyframes vimCaret {
        0% {
            color: transparent;
        }
        49% {
            color: transparent;
        }
        50% {
            color: #FF5252;
        }
        100% {
            color: #FF5252;
        }
    }

    @keyframes vimCaret {
        0% {
            color: transparent;
        }
        49% {
            color: transparent;
        }
        50% {
            color: #FF5252;
        }
        100% {
            color: #FF5252;
        }
    }

    .sections {
        text-align: center;
    }

    .md-layout-item {
        margin-left: auto;
        margin-right: auto;
    }

    .md-display-3 {
        font-weight: bold;
    }

    .main-card {
        padding: 1rem 2rem 2rem 2rem;
    }

    .big-button {
        height: 110px;
        width: 100%;
    }

    .desc {
        opacity: 0.8;
        font-weight: normal;
        text-transform: none;
    }

    .md-button {
        margin-left: 0;
    }
</style>


