<template>
    <v-container>
        
             <v-col 
              md="6"
        offset-md="3">
                 <v-text-field
                    solo
                    label="Поиск фотографии"
                    prepend-inner-icon="fa-light fa-magnifying-glass"
                    @click:prepend-inner="photoRequest"
                    clearable
                    v-model="input"
                    @keyup.enter="photoRequest"
                    style="margin-left: 10px;"
                  ></v-text-field>
             </v-col>
      
          
                <v-row>
            <v-col
            v-for="obj in photos"
            :key="obj.id"
            class="d-flex child-flex"
            cols="3"
            >
            <v-img
                :src="obj.urls.regular"
                :lazy-src="obj.urls.thumb"
                aspect-ratio="1"
                class="grey lighten-2"
            >
                <template v-slot:placeholder>
                <v-row
                    class="fill-height ma-0"
                    align="center"
                    justify="center"
                >
                    <v-progress-circular
                    indeterminate
                    color="grey lighten-5"
                    ></v-progress-circular>
                </v-row>
                </template>
            </v-img>
            </v-col>
            <v-col v-if="photos.length == 0"
            md="6"
        offset-md="3">
                <v-img 
                src="https://unsplash.com/a/img/empty-states/photos.png" >

                </v-img>
            </v-col>
        </v-row>
    </v-container>
</template>
<script>
import axios from 'axios'
export default {
    name: "MainComp",
    data() {
        return {
            input: null,
            lastInput: null,
            photos: [],
            key: 'vx4V39DT9VUvdPw4QR0yqNR9AteVDXYavE6m6gNjlNQ',
            error: null
        }
    },
    methods: {
        async photoRequest() {
            if(this.input != '' && this.input != null) {
                this.lastInput = this.input 
                await axios.get(`https://api.unsplash.com/search/photos?page=1&query=${this.input.toLowerCase()}&client_id=${this.key}`)
                    .then(res => this.photos = res.data.results)
                    .catch((data) => this.error = data)
            }
        }
    },
    computed: {
        
    },
    async mounted() {
        await axios.get('https://api.unsplash.com/search/photos?page=1&query=random&client_id=08_nEWeR9vO7BQoQBYQllaGwimMEfDDit9XPIQKaFqo')
        .then(res => this.photos = res.data.results)
        .catch((data) => this.error = data)
    }
}
</script>