<template>
    <div id="content" class="md-layout">
        <md-card class="md-layout-item md-elevation-10 md-size-90">
            <md-card-header>
                <span class="md-display-3 text-mono">simon987.net<span class="vim-caret">_</span></span>
            </md-card-header>

            <md-card-content>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio itaque ea, nostrum odio. Dolores, sed
                accusantium quasi non.
            </md-card-content>

            <div class="sections">
                <md-empty-state
                    md-rounded
                    md-icon="code"
                    md-label="Code"
                    md-description="Placeholder text">
                </md-empty-state>

                <md-empty-state
                    md-rounded
                    md-icon="edit"
                    md-label="Blog"
                    md-description="Placeholder text">
                </md-empty-state>
            </div>

            <div class="sections-small">
                <md-card md-with-hover>
                    <md-ripple>
                        <md-card-header><span class="md-title"><md-icon>code</md-icon>Code</span></md-card-header>
                        <md-card-content>Placeholder text</md-card-content>
                    </md-ripple>
                </md-card>

                <md-card md-with-hover>
                    <md-ripple>
                        <md-card-header><span class="md-title"><md-icon>edit</md-icon>Blog</span></md-card-header>
                        <md-card-content>Placeholder text</md-card-content>
                    </md-ripple>
                </md-card>

                <md-card md-with-hover>
                    <md-ripple>
                        <md-card-header><span class="md-title"><md-icon>email</md-icon>Contact</span></md-card-header>
                        <md-card-content>Placeholder text</md-card-content>
                    </md-ripple>
                </md-card>
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
    }

    .md-card .md-ripple {
        padding: 0 1em;
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

    .md-empty-state {
        display: inline-block;
        margin-left: 16px;
        margin-top: 1em;
        margin-bottom: 2em;
    }

    .sections {
        text-align: center;
    }

    .sections-small .md-card {
        background-color: rgba(58, 59, 82, 0.08);
    }

    .md-layout-item {
        margin-left: auto;
        margin-right: auto;
    }

    .md-display-3 {
        font-weight: bold;
    }

    @media screen and (max-width: 972px) {
        .md-display-3 {
            font-size: 42px;
        }

        .sections {
            display: none;
        }

        .sections-small {
            display: inherit;
        }
    }

    @media screen and (min-width: 972px) {
        .sections-small {
            display: none;
        }
    }

    .md-empty-state.md-theme-default.md-rounded {
        background-color: rgba(58, 59, 82, 0.08);
    }

    .md-empty-state:hover {
        cursor: pointer;
        transition: 0.3s;
        box-shadow: 0 6px 6px -3px rgba(0, 0, 0, .2), 0 10px 14px 1px rgba(0, 0, 0, .14), 0 4px 18px 3px rgba(0, 0, 0, .12);
    }

</style>
<style>
    .md-empty-state:hover .md-empty-state-icon {
        color: #FF5252 !important;
        transition: 0.1s;
    }
</style>
