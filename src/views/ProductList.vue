<template>
  <div>
    <el-row :gutter="20">
      <el-col
        v-for="product in products"
        :key="product.id"
        :span="4"
      >
        <ProductItem
          :product="product"
        />
      </el-col>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';
import ProductItem from '@/components/ProductItem.vue';

export default Vue.extend({
  name: 'ProductList',
  components: {
    ProductItem,
  },
  data() {
    return {
      products: [],
    };
  },
  mounted() {
    axios.get('http://godis.org.uk/xplore/products').then(res => {
      this.products = res.data;
    });
  },
});
</script>
