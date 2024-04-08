<template>
    <select class="select" :value="value" @input="handleChange($event.target.value)">
        <option v-for="option in options"
            :key="option"
            :value="option"
        >
            {{ option }}
        </option>
    </select>
</template>

<script>

export default {
    name: 'TheSelect',

    props: {
        value: {
            type: Number,
            required: true
        },
        options: {
            type: Array,
            required: true
        }
    },

    data() {
        return {

        }
    },

    methods: {
        handleChange (value) {
            this.$emit('input', parseInt(value))
        }
    },
}
</script>

<style lang="scss" scoped>
.select {
    padding: 10px;
    background: #96969667;
}
</style>