<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4>
        <v-card class="blue darken-3 white--text">
            <v-card-title class="headline">
                <strong>{{ stock.name }}
                    <small> (Preço: {{ stock.price | currency}}) | Qtde: {{ stock.quantity }}</small>
                </strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field 
                    label="Quantidade" 
                    type="number" 
                    v-model.number="quantity"
                    :error="insufficientQuantity || !Number.isInteger(quantity)" />
                <v-btn 
                    class="blue darken-3 white--text" 
                    :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)" 
                    @click="sellStock">{{ insufficientQuantity ? 'Insuficiente' : 'Vender' }}</v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    props: ['stock'],
    data() {
        return {
            quantity: 0
        }
    },
    computed: {
        insufficientQuantity() {
            return this.quantity > this.stock.quantity
        }
    },
    methods: {
//        ...mapActions({ sellStock }),  (dessa forma nao funciona pois o nome da action é igual ao metodo abaixo. No caso ao inves de chamar a action o metodo abaixo seria chamado infinitamente)
        ...mapActions({ sellStockAction: 'sellStock' }), //Necessario mudar o nome da action para 'sellStockAction' devido ao problema relatado acima.
        sellStock() {
            const order = {
                stockId: this.stock.id,
                stockPrice: this.stock.price,
                quantity: this.quantity,
            }
            //this.$store.dispatch('sellStock', order)  (Esse modo permite chamar as actions diretamente (dispatch.('nomeAction')) sem a necessidade de mapear as action (mapAction))
            this.sellStockAction(order) //chamando action atraves do mapeamento 
            this.quantity = 0
        }
    }
}
</script>

<style>

</style>