<template>
	<div class="current-stack">
		<span class="current-stack-title">Tech stack i use</span>
		<div class="current-stack-icons">
			<font-awesome-icon icon="fa-brands fa-vuejs" />
			<font-awesome-icon icon="fa-brands fa-react" />
			<font-awesome-icon icon="fa-brands fa-square-js" />
			<font-awesome-icon icon="fa-brands fa-java" />
			<font-awesome-icon icon="fa-brands fa-python" />
			<font-awesome-icon icon="fa-brands fa-rust" />
			<font-awesome-icon icon="fa-brands fa-aws" />
			<font-awesome-icon icon="fa-brands fa-html5" />
			<font-awesome-icon icon="fa-brands fa-github" />
			<font-awesome-icon icon="fa-brands fa-css3-alt" />
		</div>

	</div>

</template>

<script lang="ts">
import { defineComponent } from "vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default defineComponent({
	name: "CurrentStack",
	components: {
		FontAwesomeIcon,
	},
});

</script>

<style scoped>
.current-stack {
	display: flex;
	flex-direction: column;
	margin: 0 auto;
	max-width: 900px;
	align-items: center;
}

.current-stack-title {
	font-size: 18px;
	font-weight: 600;
	margin: 15px 0;
}

.current-stack-icons {
	display: flex;
	flex-direction: row;
	justify-content: center;
	flex-wrap: wrap;
	margin: 15px 0;
	width: 100%;
	font-size: 32px;
	color: rgba(255, 255, 255, 0.65);
}

.current-stack-icons > *:hover {
	color: rgba(255, 255, 255, 1);
}

.current-stack-icons > * {
	margin: 10px 10px;
}


</style>