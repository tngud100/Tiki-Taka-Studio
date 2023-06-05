<template>
    <section class='studio_section'>
    <HeaderTitle :title-data="title" />
        <div class="" style="height:300px">
                Say this section is Studio Section
        </div>
    </section>
</template>

<script>
import HeaderTitle from "@/components/Header/SubTitle.vue";
export default{
    name:'SubStudio',
    components:{
        HeaderTitle,
    },
    data(){
        return{
            title:'스튜디오',
        }
    }   

}
</script>

<style scoped lang="scss">
.studio_section {
    margin-top: 75px;
  }
</style>