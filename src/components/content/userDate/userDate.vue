<template>
<!--    <svg t="1620975081082" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3466" width="128" height="128"><path d="M257.7 752c2 0 4-0.2 6-0.5L431.9 722c2-0.4 3.9-1.3 5.3-2.8l423.9-423.9c3.9-3.9 3.9-10.2 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2c-1.9 11.1 1.5 21.9 9.4 29.8 6.6 6.4 14.9 9.9 23.8 9.9z m67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" p-id="3467"></path></svg>-->
    <div class="user">
        <div class="userDate">
            <img :src="user.avatarUrl" alt="">
            <div class="data">
                <div class="date_top">
                    <p>{{user.nickname}}</p>
                    <span>Lv9</span>
                    <a href="javascript:;" title="性别" alt="性别">
                        <svg v-if="user.gender" t="1620975106705" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4351" width="24" height="24"><path d="M512 105.3c-220.7 0-399.7 179-399.7 399.7s179 399.7 399.7 399.7 399.7-179 399.7-399.7-179-399.7-399.7-399.7z m241.6 270.8h-0.5v175.4h-99.8v-90.1l-46.6 49.7c13.7 27.1 21.4 57.6 21.4 90 0 110.4-89.5 200-199.9 200s-199.9-89.5-199.9-200 89.5-200 199.9-200c36.1 0 70.1 9.6 99.3 26.4l48.3-51.4h-97.5v-99.7h275.3v99.7z" fill="#0091FF" p-id="4352"></path><path d="M428 501.5c-55.1 0-99.7 44.8-99.7 100s44.6 100 99.7 100 99.7-44.8 99.7-100-44.7-100-99.7-100z" fill="#0091FF" p-id="4353"></path></svg>
                        <svg v-else t="1620975125345" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5230" width="24" height="24"><path d="M512 105.5c-220.6 0-399.5 178.9-399.5 399.5S291.4 904.5 512 904.5 911.5 725.6 911.5 505 732.6 105.5 512 105.5z m200 621.9H561.5v75.1h-99.1v-75.1H312V627.3h150.4v-6.2c-33.6-8.6-65.5-25.9-91.8-52.2-78-78-78-204.5 0-282.5s204.5-78 282.5 0 78 204.5 0 282.5c-26.3 26.3-58.1 43.7-91.7 52.2v6.2h150.4v100.1h0.2z" fill="#FF4D94" p-id="5231"></path><path d="M582.4 356.1c-39.1-39.1-102.5-39.1-141.6 0-39.1 39.1-39.1 102.4 0 141.5 39.1 39.1 102.5 39.1 141.6 0 39.1-39 39.1-102.4 0-141.5z" fill="#FF4D94" p-id="5232"></path></svg>
                    </a>
                    <div>
                        <svg t="1620975081082" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3466" width="20" height="20"><path d="M257.7 752c2 0 4-0.2 6-0.5L431.9 722c2-0.4 3.9-1.3 5.3-2.8l423.9-423.9c3.9-3.9 3.9-10.2 0-14.1L694.9 114.9c-1.9-1.9-4.4-2.9-7.1-2.9s-5.2 1-7.1 2.9L256.8 538.8c-1.5 1.5-2.4 3.3-2.8 5.3l-29.5 168.2c-1.9 11.1 1.5 21.9 9.4 29.8 6.6 6.4 14.9 9.9 23.8 9.9z m67.4-174.4L687.8 215l73.3 73.3-362.7 362.6-88.9 15.7 15.6-89zM880 836H144c-17.7 0-32 14.3-32 32v36c0 4.4 3.6 8 8 8h784c4.4 0 8-3.6 8-8v-36c0-17.7-14.3-32-32-32z" p-id="3467"></path></svg>
                        编辑个人信息
                    </div>
                </div>
                <div class="center">
                    <ul>
                        <li>
                            <p>{{user.eventCount}}</p>
                            <p>动态</p>
                        </li>
                        <li>
                            <p>{{user.followeds}}</p>
                            <p>关注</p>
                        </li>
                        <li>
                            <p>{{user.follows}}</p>
                            <p>粉丝</p>
                        </li>
                    </ul>
                    <p>所在地区: <span>{{user.city === 430800 ? "湖南省张家界市":"其他"}}</span></p>
                    <p>社交网络</p>
                    <p>个人介绍: <span>{{user.signature}}</span></p>
                </div>
            </div>
        </div>
        <div class="my" v-if="myLove.length > 0">
            <p>我创建的歌单 ({{myLove.length}})</p>
            <list :list = "myLove"></list>
        </div>
        <div class="my" v-if="subMusic.length>0">
            <p>我收藏的歌单 ({{subMusic.length}})</p>
            <list :list = "subMusic"></list>
        </div>
    </div>
</template>

<script>
    import {my_songList_Date,user_data} from "@/network/myDetail";
    import list from "../../common/list/list";
	export default {
		name: "userDate",
        data(){
			return{
				gender:true,
                subMusic:null,
                myLove:null,
                user:{"userId":322406014,"userType":0,"nickname":"Dog_bear_cat","avatarImgId":109951165310318190,"avatarUrl":"http://p2.music.126.net/hP0lEwX9end8vwfUT-1nhQ==/109951165310318199.jpg","backgroundImgId":109951164896020700,"backgroundUrl":"http://p1.music.126.net/zpevq3bfUagfsxIDKzHjZQ==/109951164896020705.jpg","signature":"初心不变，童心未泯","createTime":1471843994226,"userName":"5_88309829E6F2F52F263E6CFDE87F2474","accountType":5,"shortUserName":"88309829E6F2F52F263E6CFDE87F2474","birthday":968428800000,"authority":0,"gender":1,"accountStatus":0,"province":430000,"city":430800,"authStatus":0,"description":null,"detailDescription":null,"defaultAvatar":false,"expertTags":null,"experts":null,"djStatus":0,"locationStatus":10,"vipType":0,"followed":false,"mutual":false,"authenticated":false,"lastLoginTime":1620840563068,"lastLoginIP":"2409:8954:f124:2eb5:d64f:55d2:e024:dc7","remarkName":null,"viptypeVersion":1580918874837,"authenticationTypes":0,"avatarDetail":null,"anchor":false}
            }
        },
        components:{
		    list
        },
        created() {
			//歌单数据
			my_songList_Date(this.$route.query.id).then(res=>{
				console.dir(res.playlist)
				this.myLove = res.playlist.filter(value => value.userId === parseInt(this.$route.query.id))
                this.subMusic = res.playlist.filter(value => value.userId !== parseInt(this.$route.query.id))
            })
            //用户数据
			user_data(this.$route.query.id).then(res=>{
				this.user = res.profile
            })
		},
	}
</script>

<style scoped lang="scss">
.userDate{
    overflow: hidden;
    padding: 3em;
    img{
        width: 15em;
        height: 15em;
        border-radius: 15em;
        background-size: cover;
        float: left;
        margin-right: 2em;
    }
    .data{
        .date_top{
            overflow: hidden;
            padding-bottom: 1em;
            border-bottom: 1px solid #cccccc;
            p{
                font-weight: bolder;
                font-size:2rem;
            }
            span{
                float: left;
                display: inline-block;
                border-radius: .5em;
                background-color: #99a9bf;
                cursor: pointer;
                position: relative;
                top: 10px;
                opacity: .2;
            }
            a{
                position: relative;
                top: .5em;
                margin-left: 1em;
            }
            div{
                float: right;
                position: relative;
                width: 10em;
                text-align: center;
                padding: .3em;
                border-radius: 1em;
                border: 1px solid #cccccc;
                svg{
                    position: absolute;
                    left: 10px;
                }
            }
        }
        .center{
            ul{
                overflow: hidden;
                margin-top: 10px;
                li{
                    padding: .5em;
                    &:nth-child(1){
                        border-left: none;
                    }
                    float: left;
                    text-align: center;
                    list-style: none;
                    margin-right: 2em;
                    border-left: 1px solid #cccccc;
                }
            }
            p{
                font-size: small;
                span{
                    color: #99a9bf;
                }
            }
        }
    }
}
.my{
    p{
        margin-left: 1em;
    }
}
</style>