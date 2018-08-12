<template>
  <div class="index container">
    <div class="card blue darken-4" v-for="smoothie in smoothies" :key="smoothie.id">
        <div class="card-content">
           <i class="material-icons delete gray-text" @click="deleteSmoothie(smoothie.id)">delete</i>
            <h2 class="pink-text text-lighten-4">{{smoothie.title}}</h2>
            <ul class="ingredients">
                <li v-for="(ing,index) in smoothie.ingredients" :key="index">
                    <span class="chip">{{ing}}</span>
                </li>
            </ul>
        </div>
        <span class="btn-floating btn-large halfway-fab pink lighten-4">
            <router-link :to="{name:'editSmoothie', params:{smoothie_slug: smoothie.slug} }">
                <i class="material-icons edit pink-text">edit</i>
            </router-link>
        </span>
    </div>
  </div>
</template>

<script>
    //import database from firebase
    import db from '@/firebase/init'

    export default {
        name: 'index',
        data() {
            return {
                smoothies: []
            }
        },
        methods: {
            deleteSmoothie(id) {
                //delete doc from firestore
                db.collection('brain-smoothies').doc(id).delete()
                    .then(() => {
                        this.smoothies = this.smoothies.filter(smoothie => {
                            return smoothie.id != id
                        })
                    })
            }
        },
        created() {
            //fetch data from firestore
            db.collection('brain-smoothies').get()
                .then(snapshot => {
                    snapshot.forEach(doc => {
                        let smoothie = doc.data()
                        smoothie.id = doc.id
                        this.smoothies.push(smoothie)
                    })
                })
        }
    }

</script>

<style>
    body {
        background: url(../assets/pexels.jpg) center / cover;
        background-blend-mode: multiply;
    }

    .index {
        display: grid;
        grid-template-columns: 1fr 1fr 1fr;
        grid-gap: 30px;
        margin-top: 60px;
    }

    .index h2 {
        font-size: 1.8em;
        font-weight: bold;
        text-align: center;
        text-shadow: 0 0 5px #880e4f;
        margin-top: 0;
    }

    .index .ingredients {
        margin: 30px auto;
    }

    .index .ingredients li {
        display: inline-block;
    }

    .index .delete {
        position: absolute;
        cursor: pointer;
        font-size: 1.4em;
        color: #aaa;
        top: 4px;
        right: 4px;
    }

    .index .card {
        background: url(/static/img/pexels.06595a6.jpg) center / cover;
        background-blend-mode: soft-light;
        border: 3px solid #004;
        border-top-left-radius: 20%;
        border-bottom-right-radius: 20%;
    }

    .index .card .chip {
        cursor: default;
        border: 2px solid #008;
    }

</style>
