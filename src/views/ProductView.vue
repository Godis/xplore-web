<template>
  <div>
    <el-row :gutter="20">
      <el-col :span="20" :offset="4">
        <el-table :data="products" stripe border style="width: 100%">
          <el-table-column prop="category" label="Category"></el-table-column>
          <el-table-column prop="brand" label="Brand" width="180"></el-table-column>
          <el-table-column prop="colour" label="Colour"></el-table-column>
          <el-table-column prop="sizing" label="Size"></el-table-column>
        </el-table>
      </el-col>
    </el-row>
    <el-row>
      <el-button v-on:click="create" type="primary" plain>Create a Product</el-button>
    </el-row>
  </div>
</template>

<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

import config from '../config';

export default Vue.extend({
  name: 'ProductView',
  data() {
    return {
      products: [],
    };
  },
  methods: {
    create() {
      this.$router.push('/products/create');
    },
  },
  mounted() {
    axios.get(`${config.apiBaseUrl}/products`).then((res) => {
      this.products = res.data.map(
        (product: any) => {
          product.sizing = `${product.size} (${product.region})`;
          return product;
        },
      );
    });
  },
});
</script>
