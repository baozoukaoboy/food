<template>
    <div>
    <header class="mui-bar mui-bar-nav">
			<router-link to="/" class="mui-action-back mui-icon mui-icon-left-nav mui-pull-left"></router-link>
			<h1 class="mui-title">消息</h1>
    </header>
    <ul class="mui-table-view">
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../img/logo/news.png">
						<div class="mui-media-body">
							零食大减价
							<p class='mui-ellipsis'>零食全部8折</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../img/logo/news.png">
						<div class="mui-media-body">
							新鲜水果
							<p class='mui-ellipsis'>马来西亚正宗金枕头16.8/斤</p>
						</div>
					</a>
				</li>
				<li class="mui-table-view-cell mui-media">
					<a href="javascript:;">
						<img class="mui-media-object mui-pull-left" src="../img/logo/news.png">
						<div class="mui-media-body">
							生猛海鲜
							<p class='mui-ellipsis'>深海魔鬼鱼200元/斤</p>
						</div>
					</a>
				</li>
		</ul>    
    </div>
</template>
<style scoped>
.mui-bar-nav{
    position: relative;
}
</style>
