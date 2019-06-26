<template>
    <div>
        <el-row :gutter="20">
          <el-col :span="23" :offset="1">
              <div class="grid-content bg-purple">
                <el-table :data="products" stripe border style="width: 100%">
                    <el-table-column prop="id" label="id" width="180"></el-table-column>
                    <el-table-column prop="size" label="Size"></el-table-column>
                    <el-table-column prop="region" label="Region"></el-table-column>
                    <el-table-column prop="colour" label="Colour"></el-table-column>
                    <el-table-column prop="brand" label="Brand" width="180"></el-table-column>
                    <el-table-column prop="category" label="Category"></el-table-column>
                </el-table>
              </div>
          </el-col>
        </el-row>
        <el-row>
            <el-button v-on:click="create()" type="primary" plain>Create a Product</el-button>
        </el-row>
    </div>
</template>
<script lang="ts">
import Vue from 'vue';
import axios from 'axios';

export default Vue.extend({
  name: 'ProductList',
  data() {
    return {
      products: [],
    };
  },
  methods: {
    create: (event: any) => {
        location.href = '/';
    },
  },
  mounted() {
    axios.get('http://godis.org.uk/xplore/products').then((res) => {
      this.products = res.data;
    });
  },
});
</script>
