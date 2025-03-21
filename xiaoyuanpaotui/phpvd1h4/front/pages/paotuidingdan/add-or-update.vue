<template>
	<view class="content">
		<form class="app-update-pv">
			
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">订单编号</view>
				<view :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="right-input">
					{{ruleForm.dingdanbianhao}}
				</view>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">订单名称</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.dingdanmingcheng" v-model="ruleForm.dingdanmingcheng" placeholder="订单名称"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">地点类型</view>
				<picker @change="didianleixingChange" :value="didianleixingIndex"  :range="didianleixingOptions">
					<view :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.didianleixing?ruleForm.didianleixing:"请选择地点类型"}}</view>
				</picker>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">出发地</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.chufadi" v-model="ruleForm.chufadi" placeholder="出发地"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">目的地</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.mudedi" v-model="ruleForm.mudedi" placeholder="目的地"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group" @tap="xiangguantupianTap" :class='left == "left"?"":"active"'>
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">相关图片</view>
				<view class="right-input" :style='{textAlign:"left"}' style="padding:0">
					<image :style='{"width":"88rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"88rpx"}' class="avator" v-if="ruleForm.xiangguantupian" :src="baseUrl+ruleForm.xiangguantupian" mode="aspectFill"></image>
					<image :style='{"width":"88rpx","boxShadow":"0 0 16rpx rgba(0,0,0,.3)","borderRadius":"100%","textAlign":"left","height":"88rpx"}' class="avator" v-else src="../../static/gen/upload.png" mode="aspectFill"></image>
				</view>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">跑腿费用</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.paotuifeiyong" v-model="ruleForm.paotuifeiyong" placeholder="跑腿费用"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">状态</view>
				<picker @change="zhuangtaiChange" :value="zhuangtaiIndex"  :range="zhuangtaiOptions">
					<view :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.zhuangtai?ruleForm.zhuangtai:"请选择状态"}}</view>
				</picker>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">个人账号</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.gerenzhanghao" v-model="ruleForm.gerenzhanghao" placeholder="个人账号"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">姓名</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.xingming" v-model="ruleForm.xingming" placeholder="姓名"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">手机号码</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.shoujihaoma" v-model="ruleForm.shoujihaoma" placeholder="手机号码"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">发布日期</view>
				<picker mode="date" :value="ruleForm.faburiqi" @change="faburiqiChange">
					<view :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.faburiqi?ruleForm.faburiqi:"请选择发布日期"}}</view>
				</picker>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"308rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">订单内容</view>
				<textarea :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"280rpx"}' v-model="ruleForm.dingdanneirong" placeholder="订单内容"></textarea>
			</view>
			
			
			<view class="btn">
				<button :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,0) inset","backgroundColor":"rgba(128, 67, 228, 1)","borderColor":"#409EFF","borderRadius":"8rpx","color":"#fff","borderWidth":"0","width":"80%","fontSize":"28rpx","borderStyle":"solid","height":"80rpx"}' @tap="onSubmitTap" class="bg-red">提交</button>
			</view>
		</form>

			
	</view>
</template>

<script>
	import wPicker from "@/components/w-picker/w-picker.vue";

	export default {
		data() {
			return {
				cross:'',
				ruleForm: {
				dingdanbianhao: this.getUUID(),
				dingdanmingcheng: '',
				didianleixing: '',
				chufadi: '',
				mudedi: '',
				xiangguantupian: '',
				dingdanneirong: '',
				paotuifeiyong: '',
			        zhuangtai: '未接单',
				gerenzhanghao: '',
				xingming: '',
				shoujihaoma: '',
				faburiqi: '',
				sfsh: '',
				shhf: '',
				userid: '',
				},
				didianleixingOptions: [],
				didianleixingIndex: 0,
				zhuangtaiOptions: [],
				zhuangtaiIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   dingdanbianhao : false,
                                   dingdanmingcheng : false,
                                   didianleixing : false,
                                   chufadi : false,
                                   mudedi : false,
                                   xiangguantupian : false,
                                   dingdanneirong : false,
                                   paotuifeiyong : false,
                                   zhuangtai : false,
                                   gerenzhanghao : false,
                                   xingming : false,
                                   shoujihaoma : false,
                                   faburiqi : false,
                                   sfsh : false,
                                   shhf : false,
                                   userid : false,
                                },
			}
		},
		components: {
			wPicker
		},
		computed: {
			baseUrl() {
				return this.$base.url;
			},
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
			
		},
		async onLoad(options) {
    		        this.ruleForm.faburiqi = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.gerenzhanghao = this.user.gerenzhanghao
			this.ro.gerenzhanghao = true;
			this.ruleForm.xingming = this.user.xingming
			this.ro.xingming = true;
			this.ruleForm.shoujihaoma = this.user.shoujihaoma
			this.ro.shoujihaoma = true;


			// 自定义下拉框值
			this.didianleixingOptions = "食堂,教室,宿舍楼,其它".split(',')
			// 自定义下拉框值
			this.zhuangtaiOptions = "已接单,未接单".split(',')

			// 如果有登陆，获取登陆后保存的userid
			this.ruleForm.userid = uni.getStorageSync("userid")
			if (options.refid) {
				// 如果上一级页面传递了refid，获取改refid数据信息
				this.ruleForm.refid = options.refid;
				this.ruleForm.nickname = uni.getStorageSync("nickname");
			}
			// 如果是更新操作
			if (options.id) {
				this.ruleForm.id = options.id;
				// 获取信息
				res = await this.$api.info(`paotuidingdan`, this.ruleForm.id);
				this.ruleForm = res.data;
			}
			// 跨表
			this.cross = options.cross;
			if(options.cross){
				var obj = uni.getStorageSync('crossObj');
				for (var o in obj){
					if(o=='dingdanbianhao'){
					this.ruleForm.dingdanbianhao = obj[o];
					this.ro.dingdanbianhao = true;
					continue;
					}
					if(o=='dingdanmingcheng'){
					this.ruleForm.dingdanmingcheng = obj[o];
					this.ro.dingdanmingcheng = true;
					continue;
					}
					if(o=='didianleixing'){
					this.ruleForm.didianleixing = obj[o];
					this.ro.didianleixing = true;
					continue;
					}
					if(o=='chufadi'){
					this.ruleForm.chufadi = obj[o];
					this.ro.chufadi = true;
					continue;
					}
					if(o=='mudedi'){
					this.ruleForm.mudedi = obj[o];
					this.ro.mudedi = true;
					continue;
					}
					if(o=='xiangguantupian'){
					this.ruleForm.xiangguantupian = obj[o];
					this.ro.xiangguantupian = true;
					continue;
					}
					if(o=='dingdanneirong'){
					this.ruleForm.dingdanneirong = obj[o];
					this.ro.dingdanneirong = true;
					continue;
					}
					if(o=='paotuifeiyong'){
					this.ruleForm.paotuifeiyong = obj[o];
					this.ro.paotuifeiyong = true;
					continue;
					}
					if(o=='zhuangtai'){
					this.ruleForm.zhuangtai = obj[o];
					this.ro.zhuangtai = true;
					continue;
					}
					if(o=='gerenzhanghao'){
					this.ruleForm.gerenzhanghao = obj[o];
					this.ro.gerenzhanghao = true;
					continue;
					}
					if(o=='xingming'){
					this.ruleForm.xingming = obj[o];
					this.ro.xingming = true;
					continue;
					}
					if(o=='shoujihaoma'){
					this.ruleForm.shoujihaoma = obj[o];
					this.ro.shoujihaoma = true;
					continue;
					}
					if(o=='faburiqi'){
					this.ruleForm.faburiqi = obj[o];
					this.ro.faburiqi = true;
					continue;
					}
					if(o=='userid'){
					this.ruleForm.userid = obj[o];
					this.ro.userid = true;
					continue;
					}
				}
			}
			this.styleChange()
		},
		methods: {
			styleChange() {
				this.$nextTick(()=>{
					// document.querySelectorAll('.app-update-pv .cu-form-group .uni-input-input').forEach(el=>{
					//   el.style.backgroundColor = this.addUpdateForm.input.content.backgroundColor
					// })
				})
			},

			// 多级联动参数

			faburiqiChange(e) {
				this.ruleForm.faburiqi = e.target.value;
				this.$forceUpdate();
			},


			// 下拉变化
			didianleixingChange(e) {
				this.didianleixingIndex = e.target.value
				this.ruleForm.didianleixing = this.didianleixingOptions[this.didianleixingIndex]
			},
			// 下拉变化
			zhuangtaiChange(e) {
				this.zhuangtaiIndex = e.target.value
				this.ruleForm.zhuangtai = this.zhuangtaiOptions[this.zhuangtaiIndex]
			},

			xiangguantupianTap() {
				let _this = this;
				this.$api.upload(function(res) {
					_this.ruleForm.xiangguantupian = 'upload/' + res.file;
					_this.$forceUpdate();
					_this.$nextTick(()=>{
						_this.styleChange()
					})
				});
			},

			getUUID () {
				return new Date().getTime();
			},
			async onSubmitTap() {
































//跨表计算判断
				if((!this.ruleForm.dingdanbianhao)){
					this.$utils.msg(`订单编号不能为空`);
					return
				}
				if((!this.ruleForm.dingdanmingcheng)){
					this.$utils.msg(`订单名称不能为空`);
					return
				}
				if(this.ruleForm.paotuifeiyong&&(!this.$validate.isIntNumer(this.ruleForm.paotuifeiyong))){
					this.$utils.msg(`跑腿费用应输入整数`);
					return
				}
				//更新跨表属性
			       var crossuserid;
			       var crossrefid;
			       var crossoptnum;
				if(this.cross){
					var statusColumnName = uni.getStorageSync('statusColumnName');
					var statusColumnValue = uni.getStorageSync('statusColumnValue');
					if(statusColumnName!='') {
						var obj = uni.getStorageSync('crossObj');
						if(!statusColumnName.startsWith("[")) {
							for (var o in obj){
								if(o==statusColumnName){
									obj[o] = statusColumnValue;
								}

							}
							var table = uni.getStorageSync('crossTable');
							await this.$api.update(`${table}`, obj);
						} else {
						       crossuserid=Number(uni.getStorageSync('userid'));
						       crossrefid=obj['id'];
						       crossoptnum=uni.getStorageSync('statusColumnName');
						       crossoptnum=crossoptnum.replace(/\[/,"").replace(/\]/,"");
						}
					}
				}
				if(crossrefid && crossuserid) {
					this.ruleForm.crossuserid=crossuserid;
					this.ruleForm.crossrefid=crossrefid;
					let params = {
						page: 1,
						limit:10,
						crossuserid:crossuserid,
						crossrefid:crossrefid,
					}
					let res = await this.$api.list(`paotuidingdan`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`paotuidingdan`, this.ruleForm);
						}else{
							await this.$api.add(`paotuidingdan`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`paotuidingdan`, this.ruleForm);
					}else{
						await this.$api.add(`paotuidingdan`, this.ruleForm);
					}
					this.$utils.msgBack('提交成功');
				}
			},
			optionsChange(e) {
				this.index = e.target.value
			},
			bindDateChange(e) {
				this.date = e.target.value
			},
			getDate(type) {
				const date = new Date();
				let year = date.getFullYear();
				let month = date.getMonth() + 1;
				let day = date.getDate();
				if (type === 'start') {
					year = year - 60;
				} else if (type === 'end') {
					year = year + 2;
				}
				month = month > 9 ? month : '0' + month;;
				day = day > 9 ? day : '0' + day;
				return `${year}-${month}-${day}`;
			},
			toggleTab(str) {
				this.$refs[str].show();
			}
		}
	}
</script>

<style lang="scss" scoped>
	.container {
		padding: 20upx;
	}
	
	.content:after {
		position: fixed;
		top: 0;
		right: 0;
		left: 0;
		bottom: 0;
		content: '';
		background-image: url(http://codegen.caihongy.cn/20210813/7639e79d6cbf43dd8e38675849f31acc.jpg);
		background-attachment: fixed;
		background-size: cover;
		background-position: center;
	}

	textarea {
		border: 1upx solid #EEEEEE;
		border-radius: 20upx;
		padding: 20upx;
	}

	.title {
		width: 180upx;
	}

	.avator {
		width: 150upx;
		height: 60upx;
	}

	.right-input {
		flex: 1;
		text-align: left;
		padding: 0 24upx;
	}
	
	.cu-form-group.active {
		justify-content: space-between;
	}
	
	.btn {
	  display: flex;
	  align-items: center;
	  justify-content: center;
	  flex-wrap: wrap;
	  padding: 20upx 0;
	}
	
	.cu-form-group {
		padding: 0 24upx;
		background-color: transparent;
		min-height: inherit;
	}
	
	.cu-form-group+.cu-form-group {
		border: 0;
	}
	
	.cu-form-group uni-input {
		padding: 0 30upx;
	}
	
	.uni-input {
		padding: 0 30upx;
	}
	
	.cu-form-group uni-textarea {
		padding: 30upx;
		margin: 0;
	}
	
	.cu-form-group uni-picker::after {
		line-height: 88rpx;
	}
	
	.select .uni-input {
		line-height: 88rpx;
	}
	
	.input .right-input {
		line-height: 88rpx;
	}
</style>
