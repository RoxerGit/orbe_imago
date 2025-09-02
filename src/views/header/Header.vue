

<template>
<!--	<div class="format header">-->
		<el-header direction="horizontal" class="header">
			<el-row :gutter="0">
				<el-col  :xs="24" :md="10">
						<img src="../../assets/1 Header/Recurso 2.png" class="image"/>
				</el-col>
				<el-col  :xs="24" :md="14" class="texto1">
						INTELIGENCIA CREATIVA
				</el-col>
			</el-row>
		</el-header>
<!--	</div>-->
</template>

<style scoped>
.image{
	//width: 100%;
}

.header{
	//background:  url("../../assets/Recurso3.png");
	background-color: rgb(16, 24, 32);
	height: 200px;
	align-content: space-around;
}

.texto1{
	font-family: "TENOR SANS";
	font-size: 28px;
	letter-spacing: .8rem;
	text-align: center;
	font-weight: bold;
	
	display:flex;
	    justify-content: center;
	    align-items: center;
}
</style>