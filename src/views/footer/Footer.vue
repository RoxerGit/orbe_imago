<template>
<!--	<div>-->
	<el-footer direction="horizontal" class="footer">
		<el-row :gutter="24">
			<el-col :span="8">
				<div class="texto1">
					DIRECCION
				</div>
			</el-col>
			<el-col :span="8">
				<div class="texto1">
					DIRECCION
				</div>
			</el-col>
			<el-col :span="8">
				<div class="texto2">
					TELÉFONOS
				</div>
			</el-col>			
			<el-col :span="8">
				<div class="logo"> 
					<img src="../../assets/8 Pie de página/Recurso 29.png" class="image"/>
				</div>
			</el-col>
		
		</el-row>
	</el-footer>
</template>
<style scoped>
.footer{
	background-color: rgb(16, 24, 32);
	height: 200px;
	align-content : space-around;
	}
	
.texto1{
	font-family: "TENOR SANS";
	font-size: 18px;
}

.texto2{
	font-family: "TENOR SANS";
	font-size: 18px;
}

.logo{
	text-align-last: end;
}
</style>