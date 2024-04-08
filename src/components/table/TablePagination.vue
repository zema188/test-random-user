<template>
    <div class="pagination">
        <button class="pagination__item"
            v-if="value !== 1"
            @click="handleInput(value - 1)"
        >
            Назад
        </button>
        <button class="pagination__item _number"
            :class="{active: value === 1}"
            @click="handleInput(1)"
        >
            1
        </button>
        <div class="pagination__points"
            v-if="value !== 1 && value !== 2"
        >
            ...
        </div>
        <button class="pagination__item _number"
            v-if="value !== 1 && value !== 2"
            @click="handleInput(value - 1)"
        >
            {{ value - 1}}
        </button>
        <button class="pagination__item _number active"
            v-if="value !== 1"
            @click="handleInput(value)"
        >
            {{ value }}
        </button>
        <button class="pagination__item _number"
            v-if="value + 1 !== quantityPages && value !== quantityPages"
            @click="handleInput(value + 1)"
        >
            {{ value + 1}}
        </button>
        <div class="pagination__points"
            v-if="value + 1 !== quantityPages && value !== quantityPages"
        >
            ...
        </div>
        <button class="pagination__item _number"
            v-if="quantityPages !== 1 && quantityPages !== value"
            :class="{active: quantityPages === value}"
            @click="handleInput(quantityPages)"
        >
            {{ quantityPages }}
        </button>
        <button class="pagination__item"
            v-if="value !== quantityPages"
            @click="handleInput(value + 1)"
        >
            Вперед
        </button>
    </div>
</template>

<script>

export default {
    name: 'TablePagination',

    props: {
        value: {
            type: Number,
            required: true
        },
        quantityPages: {
            type: Number,
            required: true
        },
    },

    data() {
        return {

        }
    },

    methods: {
        handleInput (value) {
            this.$emit('input', value)
        }
    },

    mounted() {
    }
}
</script>

<style lang="scss" scoped>
.pagination {
    display: flex;
    gap: 5px;
    height: fit-content;
    flex: 1;
    &__item {
        color: rgb(103, 132, 170);
        background: rgba(255, 255, 255, 0.78);
        border: 1px solid rgb(8, 84, 189);
        transition: all .3s;
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
        font-weight: bold;
        &.active {
            color: #fff;
            background: rgb(148, 185, 235);
            border-color: rgb(148, 185, 235);
        }
        &._number {
            width: 50px;
            height: 50px;
        }
    }
    &__points {
        display: flex;
        align-items: flex-end;
        margin: 0 15px;
    }
}
</style>