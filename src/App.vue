<script setup>
import {  RouterView } from 'vue-router'
import SideBarNav from '@/components/SideBarNav.vue';
import TopNav from '@/components/TopNav.vue'
import FooterSection from '@/components/FooterSection.vue'
</script>

<template>
   <div class="main-wrapper">
      <div class="page-wrapper">   
        <TopNav/>
        <SideBarNav/>
        <RouterView />  
        <FooterSection/>                  
      </div>
   </div>
</template>
