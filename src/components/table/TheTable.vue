<template>
    <div class="table"
        v-if="getUsers"
    >
        <table>
            <caption>Таблица пользователей</caption>
            <thead>
                <tr>
                    <th class="index">№</th>
                    <th>Фамилия</th>
                    <th>Имя</th>
                    <th>Почта</th>
                    <th>Логин</th>
                </tr>
            </thead>
            <tbody>
                <table-row v-for="(user, index) of getUsers" :key="index"
                    :user="user"
                    :index="index"
                    :currentPage="currentPage"
                    :usersPerPage="usersPerPage"
                />
            </tbody>
        </table>
        <div class="table__filter">
            <table-pagination
                v-model="currentPage"
                :quantityPages="quantityPages"
            />
            <the-select
                :value="usersPerPage" @input="handleUpdateUsersPerPage($event)"
                :options="selectPerPage"
            />
        </div>
    </div>
</template>

<script>

import TheSelect from '@/components/TheSelect.vue'
import TablePagination from '@/components/table/TablePagination.vue'
import TableRow from '@/components/table/TableRow.vue'

export default {
    name: 'TheTable',

    components: { TablePagination, TheSelect, TableRow },

    data() {
        return {
            currentPage: 1,
            usersPerPage: 10,
            selectPerPage: [10, 25, 50]
        }
    },

    methods: {
        handleUpdateUsersPerPage: function(value) {
            this.usersPerPage = value
            
            if(!this.getUsers.length) {
                this.currentPage = this.quantityPages
            }
        }
    },

    computed: {
        getUsers: function() {
            return this.$store.getters.users?.slice((this.currentPage-1) * this.usersPerPage, ((this.currentPage-1) * this.usersPerPage) + this.usersPerPage)
        },

        quantityPages: function() {
            return Math.ceil(this.$store.getters.users?.length / this.usersPerPage)
        }
    },

    mounted() {
        if(!this.$store.getters.users) {
            this.$store.dispatch('setData')
        }
    }
}
</script>

<style lang="scss" scoped>
table {
    border: 1px solid #dededf;
    height: 100%;
    width: 100%;
    table-layout: fixed;
    border-collapse: collapse;
    border-spacing: 1px;
    text-align: left;
    & caption {
        font-size: 25px;
        font-weight: bold;
        margin-bottom: 20px;
    }
    & th {
        border: 1px solid #dededf;
        background-color: #eceff1;
        color: #000000;
        padding: 5px;
    }
    & td {
        border: 1px solid #dededf;
        background-color: #ffffff;
        color: #000000;
        padding: 5px;
    }
}

.table {
    padding-top: 20px;
    padding-bottom: 20px;
    &__filter {
        display: flex;
        justify-content: space-between;
        gap: 20px;
        flex-wrap: wrap;
        margin-top: 10px;
    }
}

.index {
    width: 50px;
}
</style>