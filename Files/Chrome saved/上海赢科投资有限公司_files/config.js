top.tlbs.name=top.tlbs.name||'上网助手';
top.tlbs.workspace='customize/L_bar/bjyd';
top.tlbs.config=top.tlbs.config || {};
top.tlbs.tlbaurl='http://' + top.tlbs.tlbaurl;
top.tlbs.config.l={b : '{$workspace}/images/content/logoback.png', c : 37.5, i : '{$workspace}/images/content/tlb_opt.png?uflag=20151218144734'};
top.tlbs.config.delclose=false;
top.tlbs.config.switchimage=0;
top.tlbs.config.waterline=0.06;
top.tlbs.config.simplifiedCloseMenu=1; // 0: Disable, 1: Enable
top.tlbs.config.SimplifiedCloseMenuOption=1; //0:close for session, 1: close for day, 2: close for week, 3: close month
top.tlbs.config.h={f : 0, opacityDegree : .65, a : 15, o : 2};
top.tlbs.config.tlb={ets : {e : '', ea : ''}, eds : {e : '', ea : ''}, cs : {e : '', ea : '001'}};
top.tlbs.config.c='{$workspace}/images/menu/more_close.png';
top.tlbs.config.bg={f : '', c : '', fs : '', l : '', fc : '#F5F5F5'};
top.tlbs.config.m=[ {id : 'm1', d : 1, e : 1, c : [ {id : '001', u : top.tlbs.tlbaurl+'/tlbagui/traffic/html/all.html?page=overview&tid='+top.tlbs.tid+'&cid='+top.tlbs.cid, t : 0, p : 3, a : '{$workspace}/images/content/tlb_switch_app1.png?uflag=20151218144734', n : '我的流量', l : '{$workspace}/images/content/tlb_app1.png?uflag=20151218144734'}, {id : '48040', u : 'http://frp.orientalwisdom.com/udp/html/crayon.html', t : 0, p : 1, a : '{$workspace}/images/content/tlb_switch_app2.png?uflag=20151218144734', n : '赢流量', l : '{$workspace}/images/content/tlb_app2.png?uflag=20151218144734'}, {id : '19660', u : 'http://17jifen.bj.chinamobile.com/hd/toolbar/index.html', t : 0, p : 1, a : '{$workspace}/images/content/tlb_switch_app3.png?uflag=20151218144734', n : '热捧游戏', l : '{$workspace}/images/content/tlb_app3.png?uflag=20151218144734'}, {id : '002', u : top.tlbs.tlbaurl+'/tlbagui/traffic/html/newPreference.html?tid='+top.tlbs.tid+'&cid='+top.tlbs.cid, t : 0, p : 2, a : '{$workspace}/images/content/tlb_switch_app4.png?uflag=20151218144734', n : '最新发布', l : '{$workspace}/images/content/tlb_app4.png?uflag=20151218144734'}], a : '{$workspace}/images/menu/more2.png', l : '{$workspace}/images/menu/more1.png'}, {id : 'm3', input : 1, d : 2, e : 1, c : [ {id : '009', u : top.tlbs.tlbaurl+'/tlbagui/research/js/configNew.js', t : 0, p : 1}], l : '{$workspace}/images/menu/more_feedback.png'}, {id : 'm4', d : 2, e : 1, c : [ {id : '008', u : top.tlbs.tlbaurl+'/tlbagui/research/html/about.html?v1.0', t : 0, p : 1}], l : '{$workspace}/images/menu/more_about.png'}];
top.tlbs.config.buoy={al : 0.7, t : 300, e : 1, r : [ {id : 'r1', u : 'app:001', e : 1, iu : '', c : '#C1EF65', l : 0, bc : '#C1EF65', bu : '{$workspace}/images/content/buoy_r1.png?uflag=20151218144734', h : 100}, {id : 'r2', u : '', e : 0, iu : '', c : '', l : 0, bc : '', bu : '{$workspace}/images/content/buoy_r1.png?uflag=20151218144734', h : 0}, {id : 'r3', u : '', e : 0, iu : '', c : '', l : 0, bc : '', bu : '{$workspace}/images/content/buoy_r1.png?uflag=20151218144734', h : 0}, {id : 'r4', u : '', e : 0, iu : '', c : '', l : 0, bc : '', bu : '{$workspace}/images/content/buoy_r1.png?uflag=20151218144734', h : 0}], an : 1, a : 10, sd : 0, o : 3, ab : 0.5};
top.tlbs.res={RES_PLEASE_WAIT: "请稍候...",RES_PROMPT_ACTION: "点击查看",RES_CLOSING_TITLE: "关闭",RES_CLOSING_CONFIRM: "确定关闭{$toolbarname}吗？<br>关闭后当天将不再显示哦。",RES_CLOSING_TIME: "本次关闭",RES_CLOSING_DAY: "本日关闭",RES_CLOSING_WEEK: "本周关闭",RES_CLOSING_MONTH: "本月关闭",RES_CLOSING_CANCEL: "返回",RES_CLOSING_YES: "确认",RES_BATCHOPEN_TITLE: "{$toolbarname}",RES_BATCHOPEN_USER: "尊敬的客户：",RES_BATCHOPEN_TEXT: "欢迎试用{$toolbarname}流量查询服务。本项服务免费，取消可点击“客户服务”按钮。",RES_BATCHOPEN_CANCEL: "我知道了",RES_TRAFFIC_TITLE: "流量提醒",RES_TRAFFIC_USER: "尊敬的客户：",RES_TRAFFIC_CANCEL: "我知道了",RES_TRAFFIC_YES: "查看详情",RES_SIMPLIFIED_MINIMIZE: "最小化",RES_SIMPLIFIED_CLOSE: "今日关闭",RES_SIMPLIFIED_CONFIRM: "确定",RES_SIMPLIFIED_CANCEL: "取消",RES_SIMPLIFIED_PROMPT: "请确认关闭操作："};
top.tlbs.UAhight=[/Android 2.3.5.*MOT-XT910.*AppleWebKit/i,/Android 2.3.3.*GT-I9000.*AppleWebKit/i];
top.tlbs.fireFoxUrl=[/kickass.to/i,/thepiratebay.se/i,/instagram.com/i,/apple.com/i,/neobux.com/i,/reddit.com/i,/cnn.com/i,/people.com/i,/odnoklassniki.ru/i];
top.tlbs.heightUrls=[/mogujie.com/i,/caijing.com.cn/i,/jang.com.pk/i,/goal.com/i,/saharareporters.com/i,/vanguardngr.com/i];
top.tlbs.config.trafficApp='001';
top.tlbs.config.recommandApp='002';
