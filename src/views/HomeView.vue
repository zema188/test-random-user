<template>
  <div class="home">
    <div class="container">
      <the-table/>
    </div>
  </div>
</template>

<script>
import TheTable from '@/components/table/TheTable.vue'

export default {

  name: 'HomeView',

  components: {
    TheTable,
  },
  
}
</script>
