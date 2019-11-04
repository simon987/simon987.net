<template>
    <div id="content" class="md-layout">
        <md-card class="md-layout-item md-elevation-10">
            <md-card-header>
                <md-card-header-text>
                    <span class="md-title"><md-icon class="md-size-2x">email</md-icon> Contact</span>
                </md-card-header-text>
            </md-card-header>

            <md-card-content>
                You can contact me by email at <a href="mailto:me@simon987.net" class="mail">me@simon987.net</a>
                <a href="https://simon987.net/gpg">(GPG <md-icon>lock</md-icon>)</a>
            </md-card-content>
        </md-card>

        <router-link to="/">
            <md-button class="md-fab md-fixed md-fab-top-left">
                <md-icon>arrow_back</md-icon>
            </md-button>
        </router-link>
    </div>
</template>

<script>

export default {
    name: "Contact",
    components: {}
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

    .mail {
        color: #F4511E !important;
    }

</style>
