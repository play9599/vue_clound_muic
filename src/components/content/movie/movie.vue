<template>
    <div class="wrapper">
        <div class="content">
            <div class="left">
                <div class="txt">MV详情 </div>
                <div class="video">
                    <video :src="movieUrl.url" controls :poster="result.cover" ref="video" style="width: 90%;height: 20em; margin-top: 1em;border: none;outline: none;"></video>
<!--                    歌手区-->
                    <div class="song">
                        <div class="song-img">
                            <img :src="result.cover" alt="" style="width: 4em;height: 4em;border-radius: 50%;">
                            <span>{{result.artistName}}</span>
                        </div>
                        <div class="song-date">
                            <p class="name" ref="songName"  @click="btn">{{result.name}}</p>
                            <span>发布:{{result.publishTime}}</span>
                            <span>播放:{{result.playCount}}次</span>
                            <ul class="tags">
                                <li v-for="item in result.videoGroup"><a href="javascript:;" >{{item.name}}</a></li>
                            </ul>
                            <p v-show="show">{{result.desc}}</p>
                        </div>
<!--                        按钮区-->
                        <div class="button-group">
                            <button>赞(31763)</button>
                            <button>收藏({{result.subCount}})</button>
                            <button>分享({{result.shareCount}})</button>
                            <button><a :href="movieUrl.url" download="download">下载MV </a></button>
                        </div>
<!--                  发布评论区      -->
                        <div class="send">
                            <h4>评论 <span style="font-size: small">({{result.commentCount}})</span></h4>
                            <textarea name="" id="" cols="14" rows="10" style="resize:none;outline:none;border: 1px solid #ccc;border-radius: 1em" ref="textarea"></textarea>
                            <div class="send-button">
<!--                                表情 艾特 话题 -->
                                <a href="javascript:;">
                                    <svg t="1622269336208" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="3938" width="24" height="24"><path d="M288.0289 400.288396c0 30.777933 24.953082 55.731014 55.732613 55.731014s55.733013-24.953082 55.733013-55.731014c0-30.778532-24.953482-55.731014-55.733013-55.731014S288.0289 369.509864 288.0289 400.288396zM622.406792 400.288396c0 30.777933 24.953881 55.731014 55.733013 55.731014 30.779132 0 55.732014-24.953082 55.732014-55.731014 0-30.778532-24.953082-55.731014-55.732014-55.731014C647.360873 344.557382 622.406792 369.509864 622.406792 400.288396zM510.941765 762.511409c-78.007911 0-156.033809-39.054521-200.61998-100.314787-16.763035-22.293685-27.822536-50.114822-39.05632-72.407708-5.528652-16.763634 5.525654-33.437329 16.763634-39.054521 16.763634-5.53025 27.823136 5.529251 33.440327 16.761636 5.528652 22.292885 16.763035 39.05552 27.822137 55.731014 44.586171 55.731014 100.318784 83.640092 161.558463 83.640092 61.266261 0 122.616666-27.820937 156.055794-78.0229 11.146443-16.762635 22.293685-38.968579 27.822936-55.731014 5.616192-16.761636 22.292885-22.292885 33.438329-16.761636 16.764634 5.528252 22.294884 22.290887 16.764634 33.437329-5.617192 27.822137-22.292885 50.114023-39.05652 72.407708C666.993562 723.54283 588.966665 762.511409 510.941765 762.511409zM510.941765 956.900214c-243.33382 0-445.129003-201.789787-445.129003-445.149589 0-243.344412 201.795183-445.134998 445.129003-445.134998 243.351408 0 445.14719 201.790586 445.14719 445.134998C956.088756 755.110427 754.293173 956.900214 510.941765 956.900214zM510.941765 125.999564c-213.638553 0-385.743466 172.100316-385.743466 385.751061 0 213.665135 172.104913 385.761054 385.743466 385.761054 213.655542 0 385.756457-172.095919 385.756457-385.761054C896.698223 298.09988 724.597307 125.999564 510.941765 125.999564z" p-id="3939"></path></svg>
                                </a>
                                <a href="javascript:;">
                                    <svg t="1622269397652" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="4154" width="24" height="24"><path d="M514.162246 64.443731c-246.201331 0-446.51045 200.783932-446.51045 447.571618 0 246.772336 201.037712 447.539896 448.157973 447.539896 50.29857 0 99.615788-8.224312 146.523121-24.436552 18.414395-6.370081 31.060413-12.423961 31.472805-12.630668 7.194866-3.217275 12.614296-9.049097 15.213493-16.401552 2.63092-7.305383 2.155083-15.133675-1.299599-22.043039l-2.883677-5.831822c-7.131421-14.262842-24.974811-20.569478-40.156582-13.850449-0.031722 0.031722-5.8001 3.02694-20.094664 8.082072-41.075511 14.627139-84.21196 22.059412-12.235616 22.059412-210.92592 0-382.487298-171.57775-382.487298-382.487298S305.423131 129.512702 516.349051 129.512702c210.894198 0 382.455575 171.5931 382.455575 382.423853-0.887206 51.868321-13.882172 100.486622-36.606733 136.855948-20.664645 33.104979-46.939055 51.994188-72.199369 51.994188-0.317225 0-0.601704 0-0.887206 0-45.829791-0.792039-75.433016-68.586075-75.433016-172.718737l0-185.269587c0-5.53097-1.426489-9.635451-4.373611-12.550851-4.944616-4.944616-12.360516-4.817726-21.267373-4.864798l-2.472308 0.016373-9.223059-0.016373c-7.701402 0.031722-13.469779-0.063445-17.495466 3.945869-3.645017 3.613294-4.119831 9.096169-4.119831 13.469779l0 31.060413c-45.196365-36.100196-80.440054-59.474556-131.9758-60.378136-1.045819-0.016373-2.059915-0.031722-3.074012-0.031722-108.74368 0-198.470237 99.218746-200.657043 222.779899-2.155083 124.701117 84.845387 227.723491 193.969737 229.625818 1.045819 0.01535 2.059915 0.031722 3.074012 0.031722 63.293535 0 122.276904-34.087353 159.992901-92.103698 24.373107 60.251246 61.519122 91.216491 110.48637 92.071975 0.697895 0.01535 1.394766 0.01535 2.060939 0.01535 33.945113 0 66.716494-14.610766 94.924953-42.328038 47.63695-46.796816 76.066443-124.796284 76.066443-208.643947l0-2.883677C959.595154 265.227664 759.761873 64.443731 514.162246 64.443731zM646.73975 541.348422c0 92.230588-58.475809 167.282934-130.390699 167.282934s-130.390699-75.052347-130.390699-167.282934c0-92.246961 58.475809-167.298284 130.390699-167.298284S646.73975 449.102485 646.73975 541.348422z" p-id="4155"></path></svg>
                                </a>
                                <a href="javascript:;">
                                    <svg t="1622269430327" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="5001" width="24" height="24"><path d="M512 106.666667c235.626667 0 426.666667 181.482667 426.666667 405.333333s-191.04 405.333333-426.666667 405.333333a442.197333 442.197333 0 0 1-211.562667-53.269333l-105.813333 45.824a38.869333 38.869333 0 0 1-51.050667-20.032 38.442667 38.442667 0 0 1-2.133333-24.32l27.029333-113.088C116.202667 685.162667 85.333333 602.005333 85.333333 512 85.333333 288.149333 276.373333 106.666667 512 106.666667z m-30.805333 202.666666H434.346667a8.533333 8.533333 0 0 0-8.170667 6.058667l-0.32 1.578667L416.554667 405.333333 328.533333 405.333333a8.533333 8.533333 0 0 0-8.362666 6.826667L320 413.866667v46.933333a8.533333 8.533333 0 0 0 6.826667 8.362667l1.706666 0.170666 81.28-0.021333-8.981333 85.333333L328.533333 554.666667a8.533333 8.533333 0 0 0-8.362666 6.826666L320 563.2v46.933333a8.533333 8.533333 0 0 0 6.826667 8.362667l1.706666 0.170667 65.557334-0.021334-9.088 86.613334a8.533333 8.533333 0 0 0 6.762666 9.237333l1.706667 0.170667h46.848a8.533333 8.533333 0 0 0 8.170667-6.058667l0.32-1.578667 9.28-88.384h96l-9.088 86.613334a8.533333 8.533333 0 0 0 6.762666 9.237333l1.706667 0.170667h46.848a8.533333 8.533333 0 0 0 8.170667-6.058667l0.32-1.578667 9.28-88.384L716.8 618.666667a8.533333 8.533333 0 0 0 8.362667-6.826667L725.333333 610.133333v-46.933333a8.533333 8.533333 0 0 0-6.826666-8.362667L716.8 554.666667l-91.968-0.021334 8.981333-85.333333L716.8 469.333333a8.533333 8.533333 0 0 0 8.362667-6.826666L725.333333 460.8v-46.933333a8.533333 8.533333 0 0 0-6.826666-8.362667L716.8 405.333333l-76.245333-0.021333 9.109333-86.549333a8.533333 8.533333 0 0 0-6.762667-9.258667l-1.706666-0.170667H594.346667a8.533333 8.533333 0 0 0-8.170667 6.058667l-0.32 1.578667L576.554667 405.333333h-96l9.109333-86.549333a8.533333 8.533333 0 0 0-6.762667-9.258667l-1.706666-0.170666z m88.618666 159.978667l-8.981333 85.333333h-96l8.981333-85.333333h96z" fill="#999999" p-id="5002"></path></svg>
                                </a>
                                <button>发表</button>
                            </div>
                        </div>
<!--                        评论区-->
                        <div class="comment" v-if="comments.hotComments.length > 0">
                            <h4>精彩评论</h4>
                            <ul class="comment-lists">
                                <li class="comment-list" v-for="item in comments.hotComments">
                                     <img :src="item.user.avatarUrl" alt="" style="width: 2em;height: 2em;border-radius: 50%;">
                                    <div class="auth">
                                        <span><a href="" @click.prevent="name_click(item.user.userId)">{{item.user.nickname}}</a>: {{item.content}}</span>
                                        <span>{{new Date(item.time).toUTCString()}}</span>
                                    </div>
                                    <ul>
                                        <li class="txts">举报</li>
<!--                                        点赞  分享   发表-->
                                        <li @click="addCount">
                                            <svg v-if="!praise" t="1622268630475" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2982" width="12" height="12"><path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253" p-id="2983"></path><path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819" p-id="2984"></path></svg>
                                            <svg v-else t="1622268630475" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2982" width="12" height="12"><path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253" p-id="2983" fill="#d81e06"></path><path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819" p-id="2984" fill="#d81e06"></path></svg>
<!--                                            点赞数-->
                                            <span>{{item.likedCount}}</span>
                                        </li>
                                        <li>
                                            <svg t="1622268579558" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2104" width="12" height="12"><path d="M511.998 64c21 0 38.1 17 38.1 38.1s-17 38.1-38.1 38.1c-205.4 0-371.9 166.5-371.9 371.9s166.5 371.8 371.9 371.8 371.9-166.5 371.9-371.9c0-21 17-38.1 38.1-38.1s38 17.1 38 38.1c0 247.4-200.6 448-448 448s-448-200.6-448-448 200.6-448 448-448z m230.6 190.5c-14.2-14.7-14-38 0.5-52.4 14.5-14.5 37.8-14.6 52.7-0.2l65.6 65.6c19.8 19.8 19.8 51.8 0 71.6l-65.6 65.6c-14.6 14.6-38.3 14.6-52.9 0-14.6-14.6-14.6-38.3 0-52.9l11.1-11.1h-48.3c-131.3 0-175.9 55.9-175.9 225 0 20.7-16.7 37.4-37.4 37.4s-37.4-16.7-37.4-37.4c0-209.1 76.3-299.8 250.7-299.8h48.3l-11.4-11.4z" fill="#707070" p-id="2105"></path></svg>
                                        </li>
                                        <li @click="send(item.user.nickname)">
                                            <svg t="1622268524349" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1274" width="12" height="12"><path d="M800.13 258H240.76a93.62 93.62 0 0 0-93.52 93.52V724.3a93.66 93.66 0 0 0 93.52 93.51h95.63L365 886.48A36.26 36.26 0 0 0 387.2 907a36 36 0 0 0 29.88-3.35l143.09-85.8h240a93.61 93.61 0 0 0 93.52-93.51V351.53A93.73 93.73 0 0 0 800.13 258zM411 834.8l-33-79.24H240.76a31.31 31.31 0 0 1-31.27-31.26V351.53a31.31 31.31 0 0 1 31.27-31.27h559.37a31.31 31.31 0 0 1 31.27 31.27V724.3a31.31 31.31 0 0 1-31.27 31.26H542.89z m0 0" p-id="1275"></path><path d="M302.72 537.91a46.65 46.65 0 1 0 46.65-46.65 46.64 46.64 0 0 0-46.65 46.65z m0 0M475 548.62a46.65 46.65 0 1 0 13.42-44.68A46.66 46.66 0 0 0 475 548.62z m0 0M648.36 555.76a46.66 46.66 0 1 0 6.09-46.25 46.66 46.66 0 0 0-6.09 46.25z m0 0" p-id="1276"></path></svg>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                        <div class="comment" v-if="comments.comments.length > 0">
                            <h4>评论</h4>
                            <ul class="comment-lists">
                                <li class="comment-list" v-for="item in comments.comments">
                                    <img :src="item.user.avatarUrl" alt="" style="width: 2em;height: 2em;border-radius: 50%;">
                                    <div class="auth">
                                        <span><a href="javascript:;" @click.prevent="name_click(item.user.userId)" >{{item.user.nickname}}</a>: {{item.content}}</span>
                                        <span>{{new Date(item.time).toUTCString()}}</span>
                                    </div>
                                    <ul>
                                        <li class="txts">举报</li>
                                        <!--                                        点赞  分享   发表-->
                                        <li @click="addCount">
                                            <svg v-if="!praise" t="1622268630475" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2982" width="12" height="12"><path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253" p-id="2983"></path><path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819" p-id="2984"></path></svg>
                                            <svg v-else t="1622268630475" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2982" width="12" height="12"><path d="M884.875894 423.143253 646.970506 423.143253c92.185562-340.464205-63.516616-357.853247-63.516616-357.853247-65.993017 0-52.312436 52.182476-57.3031 60.881602 0 166.502152-176.849824 296.971645-176.849824 296.971645l0 472.171899c0 46.607504 63.516616 63.393819 88.433098 63.393819l357.452111 0c33.641191 0 61.036122-88.224344 61.036122-88.224344 88.434122-300.70569 88.434122-390.177444 88.434122-390.177444C944.657442 418.179195 884.875894 423.143253 884.875894 423.143253L884.875894 423.143253 884.875894 423.143253zM884.875894 423.143253" p-id="2983" fill="#d81e06"></path><path d="M251.671415 423.299819 109.214912 423.299819c-29.420053 0-29.873378 28.89612-29.873378 28.89612l29.420053 476.202703c0 30.309306 30.361495 30.309306 30.361495 30.309306L262.420223 958.707948c25.686009 0 25.458835-20.049638 25.458835-20.049638L287.879058 459.411271C287.879058 422.837284 251.671415 423.299819 251.671415 423.299819L251.671415 423.299819 251.671415 423.299819zM251.671415 423.299819" p-id="2984" fill="#d81e06"></path></svg>
                                            <!--                                            点赞数-->
                                            <span>{{item.likedCount}}</span>
                                        </li>
                                        <li>
                                            <svg t="1622268579558" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="2104" width="12" height="12"><path d="M511.998 64c21 0 38.1 17 38.1 38.1s-17 38.1-38.1 38.1c-205.4 0-371.9 166.5-371.9 371.9s166.5 371.8 371.9 371.8 371.9-166.5 371.9-371.9c0-21 17-38.1 38.1-38.1s38 17.1 38 38.1c0 247.4-200.6 448-448 448s-448-200.6-448-448 200.6-448 448-448z m230.6 190.5c-14.2-14.7-14-38 0.5-52.4 14.5-14.5 37.8-14.6 52.7-0.2l65.6 65.6c19.8 19.8 19.8 51.8 0 71.6l-65.6 65.6c-14.6 14.6-38.3 14.6-52.9 0-14.6-14.6-14.6-38.3 0-52.9l11.1-11.1h-48.3c-131.3 0-175.9 55.9-175.9 225 0 20.7-16.7 37.4-37.4 37.4s-37.4-16.7-37.4-37.4c0-209.1 76.3-299.8 250.7-299.8h48.3l-11.4-11.4z" fill="#707070" p-id="2105"></path></svg>
                                        </li>
                                        <li @click="send(item.user.nickname)">
                                            <svg t="1622268524349" class="icon" viewBox="0 0 1024 1024" version="1.1" xmlns="http://www.w3.org/2000/svg" p-id="1274" width="12" height="12"><path d="M800.13 258H240.76a93.62 93.62 0 0 0-93.52 93.52V724.3a93.66 93.66 0 0 0 93.52 93.51h95.63L365 886.48A36.26 36.26 0 0 0 387.2 907a36 36 0 0 0 29.88-3.35l143.09-85.8h240a93.61 93.61 0 0 0 93.52-93.51V351.53A93.73 93.73 0 0 0 800.13 258zM411 834.8l-33-79.24H240.76a31.31 31.31 0 0 1-31.27-31.26V351.53a31.31 31.31 0 0 1 31.27-31.27h559.37a31.31 31.31 0 0 1 31.27 31.27V724.3a31.31 31.31 0 0 1-31.27 31.26H542.89z m0 0" p-id="1275"></path><path d="M302.72 537.91a46.65 46.65 0 1 0 46.65-46.65 46.64 46.64 0 0 0-46.65 46.65z m0 0M475 548.62a46.65 46.65 0 1 0 13.42-44.68A46.66 46.66 0 0 0 475 548.62z m0 0M648.36 555.76a46.66 46.66 0 1 0 6.09-46.25 46.66 46.66 0 0 0-6.09 46.25z m0 0" p-id="1276"></path></svg>
                                        </li>
                                    </ul>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div class="right">
                <h2>相关推荐</h2>
                <ul class="recommend">
                    <li v-for="item in moreMovie" @click="li_click(item.id)">
                        <img  :src="item.cover" alt="" style="width: 8em;height: 5em;border-radius: 1em;">
                        <div>
                            <p>{{item.name}}</p>
                            <span>by {{item.artistName}}</span>
                        </div>
                        <span class="playCount">{{item.playCount | parse}}</span>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</template>

<script>
   import {getMovieDate,getMovieComment,aboutMovie,movieUrl,songerDetail} from "@/network/video";
	export default {
		name: "movie",
      data(){
			return {
				result:null,
          show:false,
          playCount:2667,
		      praise:false,
          comments:null,
          moreMovie:null,
          movieUrl :null,
          songerDetail:null
      }
      },
      created() {
			  getMovieDate(this.$route.query.id).then(res=>{
			console.log(res.data)
			      this.result = res.data
        })
          getMovieComment(this.$route.query.id).then(res=>{
          	this.comments = res
          })
          aboutMovie(this.$route.query.id).then(res=>{
          	this.moreMovie = res.mvs
          })
		    movieUrl(this.$route.query.id).then(res=>{
		    	this.movieUrl = res.data
        })
	  },
      watch:{
			  show(newVal){
			  	  if (newVal === true){
				        this.$refs.songName.setAttribute("data-value","▼")
            }else{
				        this.$refs.songName.setAttribute("data-value","▲")
            }
          }
      },
      mounted() {
			this.$nextTick(()=>{
			      this.$refs.songName.setAttribute("data-value","▲")
      })
	  },
      methods:{
		  name_click(id){
		  	this.$router.replace({path:"/userDate",query:{id}})
      },
			  btn(){
			  	this.show = ! this.show
        },
        send(name){
			  	this.$refs.textarea.value =` 回复${name}：`
        },
          //点赞的函数
          addCount(){
			  	if (this.praise === true) return false
			  	  this.playCount += 1
              this.praise = true
          },
      //    相关推荐的点击事件
          li_click(id){
			  getMovieDate(id).then(res=>{
				  this.result = res.data
			  })
			  getMovieComment(id).then(res=>{
				  this.comments = res
			  })
			  aboutMovie(id).then(res=>{
				  this.moreMovie = res.mvs
			  })
			  movieUrl(id).then(res=>{
				  this.movieUrl = res.data
			  })
          }
      },
      filters:{
        //日期转换
			  // Time(value){
			  // 	let year = value.getFullYear()
        //   let mouth = value.getMonth()
        //   let day = value.getDay()
        //   let time = value.getTime()
        //   let secounds = format(value.getSeconds())
        //
        //     return `${year}-${mouth}-${day} ${time}:${secounds}`
        // }
		  parse(val){
		  	return Math.floor(val/1000)>0?Math.floor(val/1000)+"万":val
      }
      }
  }
</script>

<style scoped lang="scss">
.wrapper{
    /*background-color: lightpink;*/
    .content{
        width: 60em;
        height: 100%;
        /*background-color: #a58bff;*/
        margin: 0 auto;
        display: flex;
        .left{
            flex: 1;
            /*background-color: #99a9bf;*/
            .txt{
                font-weight: bold;
                font-size: 1.3rem;
            }
            .video{
                width: 100%;
                vidoe{
                    width: 100%;
                    height: 359px;
                }
            }
            .song{
                margin-top: 1em;
                .song-img{
                    display: table;
                    &>img{
                        display: table-cell;
                    }
                    &>span{
                        display: table-cell;
                       vertical-align: middle;
                        padding: 1em;
                    }
                }
                .song-date{
                    margin-top: 1em;
                    p{
                        font-weight: bold;
                        display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp:3;
                        overflow: hidden;
                        &::after{
                            display:inline-block;
                            content: attr(data-value);
                            margin-left: .5em;
                        }
                    }
                    span{
                        color: #c8ccc9;
                        &:nth-child(3){
                            margin-left: 1em;
                        }
                    }
                    .tags{
                        display: flex;
                        &>li{
                            margin-top: .5em;
                            list-style: none;
                            padding: .5em;
                            background-color: rgba(255, 250, 229, 0.5);
                            border-radius: 1em;
                            a{
                                color: black;
                            }
                            &+li{
                                margin-left: 1em;
                            }
                        }
                    }
                }
                .button-group{
                    margin-top: .5em;
                    display: flex;
                    box-sizing: border-box;
                    button{
                        flex: 1;
                        padding: 1em;
                        margin: .5em;
                        border-radius: 1em;
                        border: none;
                        outline: none;
                    }
                }
                .send{
                    box-sizing: border-box;
                    textarea{
                        margin-top: 1em;
                        width: 98%;
                        padding: .5em;
                        height: 5em;
                    }
                    .send-button{
                        margin-bottom: 1em;
                        overflow: hidden;
                        &>a+a{
                            margin-left: 2em;
                        }
                        button{
                            float: right;
                            padding: .5em;
                           border-radius: 1em;
                            border: none;
                            outline: none;
                        }
                    }
                }
                .comment{
                    margin-top: 2em;
                }
                .comment-list{
                    position: relative;
                    font-size: .8rem;
                    color: #99a9bf;

                    &:hover .txts{
                        visibility: inherit;
                        font-weight: initial;
                    }
                    display: table-row;
                    img{
                        display: table-cell;
                        vertical-align: top;
                        text-align: center;
                    }
                    .auth{
                        width: 100%;
                        display: table-cell;
                        vertical-align: top;
                        padding-left: .8em;
                        margin-top: 1em;
                        span{
                            display: block;
                            margin-top: 1em;
                        }
                    }
                   ul{
                        position: absolute;
                       list-style: none;
                       display: flex;
                       right: 0;
                       bottom: 0;
                       li{
                           width: 2em;
                           &+li{
                               border-left:1px solid silver;
                           }
                           padding-right: 1em;
                           padding-left: 1em;
                           text-align: center;

                           &:nth-child(1){
                               visibility: hidden;
                               &:hover{
                                   color: chocolate;
                               }
                           }
                       }
                   }
                }
            }
        }
        .right{
            width: 18em;
            /*background-color: #a8edea;*/
            .recommend{
                margin-top: 1em;
                li{
                    position: relative;
                    display: flex;
                    p{
                      display: -webkit-box;
                        -webkit-box-orient: vertical;
                        -webkit-line-clamp:2;
                        overflow: hidden;
                    }
                    &+li{
                        margin-top: 1em;
                    }
                    .playCount{
                        color: black;
                        position: absolute;
                        left: 3.2em;
                        &::before{
                            display: inline-block;
                            content: "▷";
                            color: white;
                            padding:.2em;
                        }
                    }
                    &>div{
                        margin-left: 1em;
                        &>span{
                            margin-top: .5em;
                        }
                    }
                }
            }
        }
    }
}
</style>