<template>
    <div>
    <div @click=back class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left back"></div>
    <div class="pay"></div>
    </div>
</template>
<script>
    export default{
        data(){
            return{}
        },
        methods:{
            back(){
            this.$router.go(-1);
        }
        }
    }
</script>
<style>
   .pay{
       height: 570px;;
       background: url('http://127.0.0.1:3000/img/pay.png') no-repeat;
       background-size: cover

   }
   .back{
    position:fixed;
    z-index:10;
    left:10px;
    top:10px;
}
</style>
