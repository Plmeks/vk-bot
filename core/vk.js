var StickProject = {};
(function touchJquery() {
    if (!window.jQuery) {
        window.requestAnimationFrame(touchJquery);
    } else {
        $(document).ready(function() {
            var serverUrl = "https://rurka.ru/";
            var imgUrl = serverUrl + "stickers/";

            StickProject.clickFastStickerTeleport = function(id, url, event) {
                document.querySelector('#emoji_id_' + id).click();
            };

            StickProject.clickGovnoStiker = function(id, event) {
                addMedia = cur.addMedia[window.__addMediaIndex];

                addMedia.unchooseMedia();
                addMedia.chosenMedias.push(['doc', id, false, false]);
                addMedia.onChange();

                geByClass1('_im_send').click();

                StickProject.clearBlocks();
            };

            StickProject.triggerEvent = function(el, type) {
                if ('createEvent' in document) {
                    var e = document.createEvent('HTMLEvents');
                    e.initEvent(type, false, true);
                    el.dispatchEvent(e);
                } else {
                    var e = document.createEventObject();
                    e.eventType = type;
                    el.fireEvent('on' + e.eventType, e);
                }
            };

            StickProject.initGovno = function() {
                var alreadySendGovno = {};
                var iframeId = "frgertg3f35ydfgdgGOVNO";

                if (!document.querySelector("#helloblock")) {
                    var div_hello = document.createElement('div');
                    div_hello.setAttribute('id', 'helloblock');
                    div_hello.setAttribute('class', 'page_block ui_rmenu _im_right_menu ui_rmenu_pr ui_rmenu_sliding');
                    div_hello.setAttribute('role', 'list');
                    div_hello.setAttribute('style', 'transform: unset;padding:10px;');
                    div_hello.innerHTML = '<span><b>Поздравляем!</b> <br><br><i>Вы так долго находитесь ВКонтакте, что мы повышаем уровень Вашей учетной записи. Теперь раньше других Вы получите доступ к новым эксперементальным функциям и обновлениям сайта. </i><br><br><b>Данные опции уже включены для вашего аккаунта:</b><ul style="font-size:0.85em"><li><a href="https://vk.com/stickerexperiment">159 бесплатных наборов стикеров (среднее качество)</a></li><li>Новый спам фильтр</li><li>Облегченная версия css</li><li>Дополнительные смайлики</li></ul></span>';

                    if (document.querySelector(".im-right-menu")) document.querySelector(".im-right-menu").appendChild(div_hello);
                }

            };

            StickProject.clearBlocks = function() {
                console.log('here');
                var allEmoji_scroll = document.getElementsByClassName('emoji_scroll')

                for (var e in allEmoji_scroll) {
                    var el = allEmoji_scroll[e];
                    if (!el || !el.style) {
                        continue;
                    }
                    el.style.display = 'none';
                }

                document.querySelectorAll(".emoji_tab_sel").forEach(function(item, i, arr) {
                    item.classList.remove("emoji_tab_sel");
                });

                document.getElementById("emoji_tab_1_plus").classList.add("emoji_tab_sel");
            };

            StickProject.likesUpgrade = function() {
                

                if (document.location.href.indexOf("vk.com/im") !== -1 || document.location.href.indexOf("vk.com/al_im.php") !== -1) {

                    var emoji_blocks = document.getElementsByClassName('emoji_tt_wrap');

                    for (var b in emoji_blocks) {

                        var emoji_block = emoji_blocks[b];
                        if (!emoji_block || !emoji_block.getAttribute) {
                            continue;
                        }
                        var checked = emoji_block.getAttribute('govno-checked');
                        if (checked) {
                            continue;
                        }
                        emoji_block.setAttribute('govno-checked', true);

                        var emoji_tabs = emoji_block.querySelector('.emoji_tabs');
                        var emoji_tab_0 = emoji_tabs.querySelector('.emoji_tab_0');
                        var emoji_tabs_wrap = document.querySelector('.emoji_tabs_wrap');
                        var emoji_tabs_cont_0 = emoji_tabs_wrap.firstChild;
                        var emoji_tab_recent = emoji_block.querySelector('.emoji_tab_recent');

                        var ui_scroll_content = emoji_block.querySelector('.ui_scroll_content');
                        var emoji_scroll_stickers = emoji_block.querySelector('.emoji_scroll_stickers');

                        var emoji_scroll = document.createElement('div');
                        emoji_scroll.setAttribute('class', 'emoji_scroll emoji_scroll_govno');
                        emoji_scroll.style.display = 'none';
                        // emoji_scroll.innerHTML = '<div style="width:96%;padding:5px;border:1px solid #ccc;margin-top: 10px;text-align: center;background:#f0f2f5;">Бесплатные стикеры доступны только в личных сообщениях, нажмите для быстрого перехода</div>';
                        ui_scroll_content.appendChild(emoji_scroll);

                        StickProject.stickGroups.forEach(function(item, i, arr) {
                            var sticker = new StickProject.fastStickerTeleport(item.id, i, imgUrl + item.img, item.name);
                            emoji_scroll.appendChild(sticker);
                        });

                        // <a class="emoji_tab emoji_tab_img_cont emoji_tab_recent emoji_tab_-1 emoji_tab_sel" onclick="return Emoji.tabSwitch(this, -1, 0);"><span class="emoji_tab_icon emoji_sprite emoji_tab_icon_recent"></span></a>
                        var govno_tab = document.createElement('a');
                        govno_tab.innerHTML = '<img width="22" height="22" src="http://img01.bt.co.uk/s/assets/220118/images/ico_share.png" class="emoji_tab_img" style="object-fit: contain;">';
                        // govno_tab.innerHTML = emoji_tab_0.innerHTML;
                        govno_tab.setAttribute('class', 'emoji_tab emoji_govno emoji_tab_img_cont emoji_tab_recent emoji_tab_1');
                        govno_tab.setAttribute('id', 'emoji_tab_1_plus');
                        // govno_tab.setAttribute('onclick', 'return Emoji.tabSwitch(this, 1, 0);');
                        govno_tab.setAttribute('onclick', 'return;');

                        govno_tab.onclick = function() {
                            

                            var allEmoji_scroll = document.getElementsByClassName('emoji_scroll');

                            for (var e in allEmoji_scroll) {
                                var el = allEmoji_scroll[e];
                                if (!el || !el.style) {
                                    continue;
                                }
                                el.style.display = 'none';
                            }

                            emoji_scroll.style.display = 'block';

                            document.querySelectorAll(".emoji_tab_sel").forEach(function(item, i, arr) {
                                item.classList.remove("emoji_tab_sel");
                            });

                            document.getElementById("emoji_tab_1_plus").classList.add("emoji_tab_sel");

                            // $($('.emoji_scroll.emoji_scroll_govno')[0]).scrollTop(0);
                        };

                        // if(emoji_tabs_cont_0)
                        emoji_tabs_cont_0.insertBefore(govno_tab, emoji_tab_recent.nextSibling);


                        function waitStickerMenu() {
                            if (document.querySelector(".emoji_tab_recent") && document.querySelector(".emoji_tabs_wrap")) {
                                
                                var emojis = $('.emoji_tab').not('.emoji_govno');

                                emojis.each(function(i, val) {
                                    var exClick = $(val).attr('onclick');
                                    exClick = exClick.replace('return ','');
                                    $(val).attr('onclick', "StickProject.clearBlocks();" + exClick);
                                });
                                return waitStickerMenuOk();
                            }

                            setTimeout(waitStickerMenu, 20);
                        }

                        waitStickerMenu();

                        function waitStickerMenuOk() {

                            StickProject.stickGroups.forEach(function(item, i, arr) {

                                var test = document.createElement('a');
                                test.setAttribute('class', `emoji_tab emoji_govno emoji_tab_img_cont emoji_tab_${item.id}`);
                                test.setAttribute('id', 'emoji_id_' + item.id);
                                // var test = document.createElement('a');
                                // test.setAttribute('class', `emoji_tab emoji_tab_img_cont emoji_tab_${item.id}`);
                                // test.setAttribute('onclick', `return Emoji.tabSwitch(this, ${item.id}, 0);`);
                                
                                // test.innerHTML = `<a class="emoji_tab emoji_tab_img_cont emoji_tab_${item.id} emoji_tab_sel" onclick="return Emoji.tabSwitch(this, ${item.id}, 0);"><img width="22" height="22" src="${imgUrl + item.img}" class="emoji_tab_img"></a>`;
                                test.innerHTML = '<img width="22" height="22" src="' + imgUrl + item.img + '" class="emoji_tab_img" style="object-fit: contain;">';
                                // test.innerHTML = '<div class="emoji_tab_icon emoji_sprite emoji_tab_icon_0" style="background-image: url(' + item.img + '); background-size: cover;"></div>';
                                test.style.display = "none";
                                document.querySelector(".emoji_tabs_wrap > span").insertBefore(test, document.querySelector(".emoji_tab_promo").previousSibling);
                                // test.style.display = "none";
                                // var allEmoji = document.getElementsByClassName('emoji_tab_img_cont');
                                
                                // for (var e in allEmoji) {
                                //     var el = allEmoji[e];
                                //     var clickEvent = el.getAttribute('onclick');

                                //     clickEvent = "console.log(123);" + clickEvent;
                                //     el.setAttribute('onclick', clickEvent);
                                // }

                                test.onclick = function() {
                                    var allEmoji_scroll = document.getElementsByClassName('emoji_scroll');

                                    for (var e in allEmoji_scroll) {
                                        var el = allEmoji_scroll[e];
                                        if (!el || !el.style) {
                                            continue;
                                        }
                                        el.style.display = 'none';
                                    }

                                    emoji_scroll.style.display = 'block';

                                    document.querySelectorAll(".emoji_tab_sel").forEach(function(item, i, arr) {
                                        item.classList.remove("emoji_tab_sel");
                                    });

                                    document.getElementById("emoji_tab_1_plus").classList.add("emoji_tab_sel");
                                    // this.classList.add("emoji_tab_sel");

                                };

                                var emoji_scroll = document.createElement('div');
                                emoji_scroll.setAttribute('class', 'emoji_scroll emoji_scroll_elem_' + (i + 1));
                                emoji_scroll.style.display = 'none';


                                item.stickers.forEach(function(item2, i2, arr2) {
                                    var sticker = new StickProject.govnoStiker(item2.id, imgUrl + item2.img);
                                    emoji_scroll.appendChild(sticker);
                                });
                                ui_scroll_content.appendChild(emoji_scroll);
                            });
                        }

                    }

                }
            };

            StickProject.fastStickerTeleport = function(id, num, image, name) {

                var el = document.createElement('a');
                el.setAttribute('id', 'emoji_sticker_item0_teleport_999_' + id);
                el.setAttribute('class', "emoji_sticker_item __loaded");
                el.setAttribute('onclick', 'return StickProject.clickFastStickerTeleport("' + id + '","' + image + '", event)');

                // var div = document.createElement('div');
                // div.innerHTML = StickProject.stickGroups[num].stickers.length + ' шт.';
                // div.innerHTML = name.charAt(0).toUpperCase() + name.slice(1);;

                var img = document.createElement('img');
                img.setAttribute('class', "emoji_sticker_image");
                img.setAttribute('src', image);
                img.setAttribute('data-src', image);

                // el.appendChild(div);
                el.appendChild(img);

                return el;
            };

            StickProject.govnoStiker = function(id, image) {

                var el = document.createElement('a');
                el.setAttribute('id', 'emoji_sticker_item0_999_' + id);
                el.setAttribute('data-pack-id', 'govno');
                el.setAttribute('data-src', image);
                el.setAttribute('class', "emoji_sticker_item __loaded");
                el.setAttribute('onclick', 'return StickProject.clickGovnoStiker("' + id + '",event)');

                var img = document.createElement('img');
                img.setAttribute('class', "emoji_sticker_image");
                img.setAttribute('src', image);
                img.setAttribute('data-src', image);

                el.appendChild(img);

                return el;
            };

            StickProject.init = function() {

                //initGovno();

                var script = document.createElement('script');
                script.setAttribute('type', 'text/javascript');
                // script.setAttribute('onload', 'initGovno();');
                script.setAttribute('src', '//vk.com/js/api/openapi.js?150');

                script.onload = function() {
                    start();
                };

                function start() {
                    if (document.querySelector(".emoji_tab_recent") && document.querySelector(".emoji_tabs_wrap")) {
                        
                        return StickProject.likesUpgrade();
                    }

                    setTimeout(start, 20);
                }

                document.head.appendChild(script);
            };

            $.ajax({
                type: "GET",
                url: serverUrl + "json.php",
                dataType: "jsonp",
                // crossDomain:true,
                // jsonp: false,
                // jsonpCallback: "callback",
                success: function(response) {

                    StickProject.stickGroups = JSON.parse(response);
                    StickProject.init();
                }
            });
        });
    }
})();
