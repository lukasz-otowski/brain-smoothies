<template>
    <div class="navbar">
        <nav class="nav-extended blue darken-4">
            <div class="nav-content">
               
                <router-link :to="{name: 'index'}">
                    <span class="nav-title pink-text text-lighten-4">Brain smoothies</span>
                </router-link>
                
                <a href="" class="btn-floating btn-large halfway-fab pink lighten-4">
                    <router-link :to="{name: 'addSmoothie'}">
                        <i class="material-icons pink-text">add</i>
                    </router-link>
                </a>
                
            </div>
        </nav>
    </div>
</template>

<script>
export default{
    name:'navbar',
    data(){
        return{
            
        }
    }
}
</script>

<style>
    .nav-extended{
        background-image: url(../assets/pexels2.jpg);
        background-blend-mode: multiply;
        border-bottom: 5px solid #000;
    }
    .navbar nav{
        padding: 0 20px;
    }
    .navbar .nav-title {
        font-weight: bold;
    }
</style>