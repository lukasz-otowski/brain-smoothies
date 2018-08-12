<template>
    <div class="mainFooter blue darken-4">
        <footer class="page-footer transparent">
            <p>2018 &copy; Łukasz Otowski</p>
        </footer>
    </div>
</template>

<script>
export default{
    name:'footer',
    data(){
        return{
            
        }
    }
}
</script>

<style>
    .mainFooter{
        position: relative;
        background-image: url(../assets/pexels2.jpg);
        background-position: center;
        background-blend-mode: multiply;
        text-align: center;
        border-top: 5px solid #000;
        margin-top: 50px;
        padding: 0 20px 20px 20px;
        width: 100%;
    }
    .mainFooter p{
        margin: 0;
    }
</style>