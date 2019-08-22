<template>
    <md-card>
        <md-card-header>
            <md-card-header-text>
                <div class="md-title">
                    <md-icon v-if="this.fork" md-src="/static/fork.svg"></md-icon>
                    {{this.name}}
                    <TechChip :name="tech" :key="tech" v-for="tech in this.techs"/>
                </div>
                <div class="md-subhead">
                    <span class="muted">{{this.date}}</span>
                    {{this.description}}
                </div>
            </md-card-header-text>

            <md-card-media md-big>
                <img :src="this.media" alt="media">
            </md-card-media>
        </md-card-header>

        <md-card-actions md-alignment="space-between">
            <div>
                <a v-for="link in this.links" :href="Object.values(link)[0]" target="_blank">
                    <md-button>{{Object.keys(link)[0]}}</md-button>
                </a>
            </div>
        </md-card-actions>
    </md-card>
</template>

<script>
import TechChip from "./TechChip";
import MdRouterLink from "vue-material/src/core/mixins/MdRouterLink/MdRouterLink";

export default {
    name: "Project",
    components: {MdRouterLink, TechChip},
    props: {
        name: String,
        date: String,
        description: String,
        media: String,
        techs: Array,
        links: Array,
        fork: {
            default: false,
            type: Boolean
        }
    }
}
</script>

<style scoped>
    .md-card {
        background-color: white;
        margin: 2em;
    }

    .md-title .md-icon {
        display: inline-block;
    }

    .muted {
        color: #9e9e9e;
        font-weight: bold;
    }

    .md-subhead {
        margin-top: 0.4rem;
        opacity: .8;
    }

    .md-card-header .md-card-media.md-big {
        max-height: 160px;
        height: 100%;
    }

    @media screen and (max-width: 600px) {
        .md-card-media {
            display: none;
        }
    }
</style>
