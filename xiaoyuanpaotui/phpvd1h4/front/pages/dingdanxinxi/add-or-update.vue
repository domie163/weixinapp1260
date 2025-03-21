<template>
	<view class="content">
		<form class="app-update-pv">
			
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">订单编号</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.dingdanbianhao" v-model="ruleForm.dingdanbianhao" placeholder="订单编号"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">订单名称</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.dingdanmingcheng" v-model="ruleForm.dingdanmingcheng" placeholder="订单名称"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">地点类型</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.didianleixing" v-model="ruleForm.didianleixing" placeholder="地点类型"></input>
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
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">订单状态</view>
				<picker @change="dingdanzhuangtaiChange" :value="dingdanzhuangtaiIndex"  :range="dingdanzhuangtaiOptions">
					<view :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.dingdanzhuangtai?ruleForm.dingdanzhuangtai:"请选择订单状态"}}</view>
				</picker>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">跑腿账号</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.paotuizhanghao" v-model="ruleForm.paotuizhanghao" placeholder="跑腿账号"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">跑腿姓名</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.paotuixingming" v-model="ruleForm.paotuixingming" placeholder="跑腿姓名"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">联系手机</view>
				<input :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' :disabled="ro.lianxishouji" v-model="ruleForm.lianxishouji" placeholder="联系手机"></input>
			</view>
			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"108rpx"}' class="cu-form-group select">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">操作时间</view>
				<picker mode="date" :value="ruleForm.caozuoshijian" @change="caozuoshijianChange">
					<view :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"88rpx"}' class="uni-input">{{ruleForm.caozuoshijian?ruleForm.caozuoshijian:"请选择操作时间"}}</view>
				</picker>
			</view>
			
			<!-- 否 -->
 

			<view :style='{"boxShadow":"0 0 16rpx rgba(0,0,0,.3)","backgroundColor":"rgba(255, 255, 255, 0.25)","borderColor":"#ccc","margin":"0 0 20rpx 0","borderWidth":"0","borderStyle":"solid","height":"308rpx"}' class="cu-form-group">
				<view :style='{"width":"160rpx","fontSize":"28rpx","color":"rgba(128, 67, 228, 1)","textAlign":"left"}' class="title">备注</view>
				<textarea :style='{"boxShadow":"none","backgroundColor":"rgba(255, 255, 255, 0)","borderColor":"rgba(0, 0, 0, 0.3)","borderRadius":"16rpx","color":"rgba(0, 0, 0, 1)","textAlign":"left","borderWidth":"4rpx","fontSize":"28rpx","borderStyle":"solid","height":"280rpx"}' v-model="ruleForm.beizhu" placeholder="备注"></textarea>
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
				dingdanbianhao: '',
				dingdanmingcheng: '',
				didianleixing: '',
				chufadi: '',
				mudedi: '',
				xiangguantupian: '',
				gerenzhanghao: '',
				xingming: '',
				shoujihaoma: '',
			        dingdanzhuangtai: '未送达',
				beizhu: '',
				paotuizhanghao: '',
				paotuixingming: '',
				lianxishouji: '',
				caozuoshijian: '',
				sfsh: '',
				shhf: '',
				ispay: '',
				userid: '',
				},
				dingdanzhuangtaiOptions: [],
				dingdanzhuangtaiIndex: 0,
				// 登陆用户信息
				user: {},
                                ro:{
                                   dingdanbianhao : false,
                                   dingdanmingcheng : false,
                                   didianleixing : false,
                                   chufadi : false,
                                   mudedi : false,
                                   xiangguantupian : false,
                                   gerenzhanghao : false,
                                   xingming : false,
                                   shoujihaoma : false,
                                   dingdanzhuangtai : false,
                                   beizhu : false,
                                   paotuizhanghao : false,
                                   paotuixingming : false,
                                   lianxishouji : false,
                                   caozuoshijian : false,
                                   sfsh : false,
                                   shhf : false,
                                   ispay : false,
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
    		        this.ruleForm.caozuoshijian = this.$utils.getCurDate();
			let table = uni.getStorageSync("nowTable");
			// 获取用户信息
			let res = await this.$api.session(table);
			this.user = res.data;
			
			// ss读取
			this.ruleForm.paotuizhanghao = this.user.paotuizhanghao
			this.ro.paotuizhanghao = true;
			this.ruleForm.paotuixingming = this.user.paotuixingming
			this.ro.paotuixingming = true;
			this.ruleForm.lianxishouji = this.user.lianxishouji
			this.ro.lianxishouji = true;


			// 自定义下拉框值
			this.dingdanzhuangtaiOptions = "未送达,运输中,已送达".split(',')

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
				res = await this.$api.info(`dingdanxinxi`, this.ruleForm.id);
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
					if(o=='dingdanzhuangtai'){
					this.ruleForm.dingdanzhuangtai = obj[o];
					this.ro.dingdanzhuangtai = true;
					continue;
					}
					if(o=='beizhu'){
					this.ruleForm.beizhu = obj[o];
					this.ro.beizhu = true;
					continue;
					}
					if(o=='paotuizhanghao'){
					this.ruleForm.paotuizhanghao = obj[o];
					this.ro.paotuizhanghao = true;
					continue;
					}
					if(o=='paotuixingming'){
					this.ruleForm.paotuixingming = obj[o];
					this.ro.paotuixingming = true;
					continue;
					}
					if(o=='lianxishouji'){
					this.ruleForm.lianxishouji = obj[o];
					this.ro.lianxishouji = true;
					continue;
					}
					if(o=='caozuoshijian'){
					this.ruleForm.caozuoshijian = obj[o];
					this.ro.caozuoshijian = true;
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

			caozuoshijianChange(e) {
				this.ruleForm.caozuoshijian = e.target.value;
				this.$forceUpdate();
			},


			// 下拉变化
			dingdanzhuangtaiChange(e) {
				this.dingdanzhuangtaiIndex = e.target.value
				this.ruleForm.dingdanzhuangtai = this.dingdanzhuangtaiOptions[this.dingdanzhuangtaiIndex]
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
					let res = await this.$api.list(`dingdanxinxi`, params);
					if (res.data.total >= crossoptnum) {
						this.$utils.msg(uni.getStorageSync('tips'));
						return false;
					} else {
                //跨表计算
						if(this.ruleForm.id){
							await this.$api.update(`dingdanxinxi`, this.ruleForm);
						}else{
							await this.$api.add(`dingdanxinxi`, this.ruleForm);
						}
						this.$utils.msgBack('提交成功');
					}
				} else {
                //跨表计算
					if(this.ruleForm.id){
						await this.$api.update(`dingdanxinxi`, this.ruleForm);
					}else{
						await this.$api.add(`dingdanxinxi`, this.ruleForm);
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
