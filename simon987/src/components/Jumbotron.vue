<template>
    <div id="content" class="md-layout md-centered">
        <md-card class="md-layout-item md-elevation-10">
            <md-card-header>
                <span class="md-display-4 text-mono">simon987.net<span class="vim-caret">_</span></span>
            </md-card-header>

            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
                accusantium quasi non.
            </md-card-content>

            <md-card-actions>
                <md-button>Action</md-button>
                <md-button>Action</md-button>
            </md-card-actions>
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
        margin-top: 2em;
        background-color: white;
        padding: 2.5em;
    }

    .text-mono {
        font-family: Hack, "Andale Mono", monospace;
    }

    ::selection {
        background: #f9989f;
    }

    ::-moz-selection {
        background: #f9989f;
    }

    .md-display-4 {
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
            color: inherit;
        }
        100% {
            color: inherit;
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
            color: inherit;
        }
        100% {
            color: inherit;
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
            color: inherit;
        }
        100% {
            color: inherit;
        }
    }
</style>
