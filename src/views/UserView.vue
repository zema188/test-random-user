<template>
  <div class="container">
    <router-link to="/" class="btn btn_small back">
      Назад
    </router-link>
    <div class="user"
      v-if="Object.keys(user).length"
    >
      <img :src="user.picture.large">
      <div class="user__item">
        {{ user.name.last }} {{ user.name.first }}
      </div>
      <div class="user__item">
        <span>
          Почта:
        </span>
        {{ user.email }}
      </div>
      <div class="user__item">
        <span>
          Пол:
        </span>
        {{ user.gender }}
      </div>
      <div class="user__item">
        <span>
          Страна:
        </span>
        {{ user.location.country }}
      </div>
      <div class="user__item">
        <span>
          Город:
        </span>
        {{ user.location.city }}
      </div>
      <div class="user__item">
        <span>
          Телефон:
        </span>
        {{ user.phone }}
      </div>
    </div>
  </div>
</template>

<script>

import { getUser } from '@/services/api'

export default {
  name: 'UserView',

  data() {
    return {
      user: {}
    }
  },

  methods: {
    async getUser () {
      try {
        
        const data = await getUser(this.$route.params.seed, this.$route.params.id)
        this.user = { ...data }

      } catch(err) {
        console.error(err)
      }
    }
  },

  mounted() {
      this.getUser()
  }
}
</script>

<style lang="scss" scoped>
.user {
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  padding-top: 20px;
  padding-bottom: 20px;
  & img {
    display: block;
  }
  &__item {
    & span {
      font-weight: bold;
    }
  }
}
.back {
  margin-top: 10px;
}
</style>
  