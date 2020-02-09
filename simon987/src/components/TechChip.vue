<template>
    <md-chip :class="this.name.toLowerCase().replace(/[. \-]/gi, '')">{{this.name}}</md-chip>
</template>

<script>
export default {
    name: "TechChip",
    props: ["name"],
}
</script>

<style scoped>
    .python {
        background: #3572A5;
        color: white;
    }

    .go {
        background: #00ADD8;
        color: white;
    }

    .java {
        background: #b07219;
        color: white;
    }

    .typescript {
        background: #2b7489;
        color: white;
    }

    .mongodb {
        background: #589636;
        color: white;
    }

    .x86-16asm {
        background: #6E4C13;
        color: white;
    }

    .angular {
        background: #b52e31;
        color: white;
    }

    .postgresql {
        background: #dad8d8;
    }

    .pixijs {
        background: #E91E63;
        color: white;
    }

    .vuejs {
        background: #2c3e50;
        color: white;
    }

    .c {
        background: #555555;
        color: white;
    }

    .d3js {
        background: #F68945;
    }

    .javascript {
        background: #f1e05a;
    }

    .bash {
        background: #89e051;
    }

    .elasticsearch {
        background: #0077CC;
        color: white;
    }

    .flask {
        background: black;
        color: white;
    }

    .php {
        background: #4F5D95;
        color: white;
    }

    .rabbitmq {
        background: #FF6600;
        color: white;
    }

    .html {
        background: #e34c26;
        color: white;
    }

    .sqlite {
        background: #5AB1E3;
        color: white;
    }

    .testdriven {
        background: #7BFF7B;
    }

    .hugo {
        background: #FF4088;
        color: white;
    }

    .graphdatabase {
        background: #63B543;
        color: white;
    }

    .scala {
        background: #c22d40;
        color: white;
    }

    .h2 {
        background: #0000BB;
        color: white;
    }

    .akka {
        background: #15A9CE;
        color: white;
    }
</style>


