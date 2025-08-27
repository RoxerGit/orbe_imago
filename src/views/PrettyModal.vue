<template>
	<div>
    <button @click = "openModal(Modal, {msg: 'Welcome to jenesius-vue-modal'})">Open Modal</button>
    <modal-container/>
	</div>
</template>

<script setup lang="ts">
import {container as ModalContainer, openModal} from "jenesius-vue-modal";
import Modal from "../components/modals/modal-alert.vue";

</script>
<style>
/*@import "./../../project/default-style.css";*/
</style>