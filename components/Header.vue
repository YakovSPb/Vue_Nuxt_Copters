<template>
	<div class="header">
		<div class="container">
			<div class="header_inner">
				<div class="logo">
					<nuxt-link to="/" class="logo__link">
						<div class="logo__img"><img src="@/assets/img/logo.svg" alt="alt"></div>
						<div class="logo__text"><img src="@/assets/img/pepelane.svg" alt="alt"></div>				
					</nuxt-link>
					
				</div>
				<div class="slogun">World's first affordable airsharing</div>
				<div class="mode">
					<div class="mode__img"><img src="@/assets/img/moon.svg" alt="alt"></div>
					<div class="mode__text">Night mod</div>
				</div>
				<div class="buts">
					<div class="buts__comment"><img src="@/assets/img/quote.svg" alt="alt"></div>
					<div class="buts__bell"><img src="@/assets/img/subtract.svg" alt="alt"></div>
				</div>
				<div class="user">
					<div class="user__name">Bessie Cooper</div>
					<div class="user__img"><img src="@/assets/img/user.png" alt="alt"></div>
				</div>
			</div>
		</div>

	</div>


</template>


<style scoped>
.header_inner{
  display: flex;
  align-items: center;
  margin: 48px 0 40px 0;
}
.logo{
  margin-right: 48px;
}
.logo__link{
  display: flex;
  align-items: center;
}
.logo__img{
  width: 48px;
  height: 48px;
  margin-right: 26px
}
.mode{
  display: flex;
  margin-left: auto;
  margin-right: 100px;
  cursor: pointer;
}
.mode__img{
  margin-right: 18px;
}

.buts{
  display: flex;
  margin-right: 50px;
}
.buts__comment{
  margin-right: 26px;
  cursor: pointer;
}
.buts__bell{
  cursor: pointer;
}

.user{
  display: flex;
  align-items: center;
  cursor: pointer;
}
.user__name{
  font-family: 'CodecPro';
  font-weight: 700;
  font-size: 16px;
  margin-right: 16px;
  color: #012345;
}
.user__img img{
  width: 56px;
  height: 56px;
  border-radius: 100%;
}
</style>