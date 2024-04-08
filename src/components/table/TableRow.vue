<template>
    <tr
        @click="handleClick()"
    >
        <td>{{ indexInTable }}</td>
        <td>{{ user.name.last }}</td>
        <td>{{ user.name.first }}</td>
        <td>{{ user.email }}</td>
        <td>{{ user.login.username }}</td>
    </tr>
</template>

<script>

import router from '@/router'

export default {
    name: 'TableRow',

    props: {
        user: {
            type: Object,
            required: true,
        },
        index: {
            type: Number,
            required: true,
        },
        currentPage: {
            type: Number,
            required: true,
        },
        usersPerPage: {
            type: Number,
            required: true,
        },
    },

    methods: {
        handleClick: function() {
            router.push(`user/${this.$store.getters.seed}/${this.indexInTable}`)
        }
    },

    computed: {
        indexInTable: function() {
            return (this.currentPage - 1) * this.usersPerPage + this.index + 1
        }
    },
}
</script>

<style lang="scss" scoped>
td {
    border: 1px solid #dededf;
    background-color: #ffffff;
    color: #000000;
    padding: 5px;
    transition: .2s;
}
tr {
    cursor: pointer;
    &:hover {
        & td {
            background-color: #f0eeee;
        }
    }
}
</style>