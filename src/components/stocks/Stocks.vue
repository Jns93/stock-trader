<template>
    <v-layout row wrap>
        <!-- Usando o componente -->
        <Stock v-for="stock in stocks" :key="stock.id" :stock="stock"/>
    </v-layout>
</template>

<script>
import Stock from './Stock' //Importando o componente

export default {
    components: { Stock }, //registrando o componente
    computed: {
        stocks() {
           return this.$store.getters.stocks 
        }
    }
}
</script>

<style>

</style>