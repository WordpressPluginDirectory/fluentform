(()=>{"use strict";function t(e){return t="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},t(e)}function e(t){return function(t){if(Array.isArray(t))return n(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return n(t,e);var a=Object.prototype.toString.call(t).slice(8,-1);"Object"===a&&t.constructor&&(a=t.constructor.name);if("Map"===a||"Set"===a)return Array.from(t);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return n(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function n(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,a=new Array(e);n<e;n++)a[n]=t[n];return a}function a(n,a,i,f){var r=0,s="";i.stepAnimationDuration=parseInt(i.stepAnimationDuration);var o="yes"==a.find(".ff-step-container").attr("data-enable_step_data_persistency"),l=!1;o&&(l="yes"==a.find(".ff-step-container").attr("data-enable_step_page_resume"));var c=!!window.fluentFormVars.is_rtl,d=!1,u=function(){return window.fluentFormApp(a)},p=function(t){var e=t.response,a=t.step_completed,r=[];if(jQuery.each(e,(function(t,e){if(e){var a=Object.prototype.toString.call(e);if("[object Object]"===a){var f=jQuery("[data-name=".concat(t,"]"));if(f.length&&"tabular-element"===f.attr("data-type"))jQuery.each(e,(function(e,a){var i=jQuery('[name="'.concat(t,"[").concat(e,']\\[\\]"]'));i.length||(i=jQuery('[name="'.concat(t,"[").concat(e,']"]'))),jQuery.each(i,(function(t,e){var i=n(e).val();-1===jQuery.inArray(i,a)&&i!==a||n(e).prop("checked",!0).change()}))}));else if("chained-select"===f.attr("data-type")){var s={meta_key:f.find("select:first").attr("data-meta_key"),form_id:f.closest("form").attr("data-form_id"),action:"fluentform_get_chained_select_options",filter_options:"all",keys:e};jQuery.getJSON(i.ajaxUrl,s).then((function(t){jQuery.each(t,(function(t,n){var a=f.find("select[data-key='".concat(t,"']"));0!=a.attr("data-index")&&jQuery.each(n,(function(t,e){a.append(jQuery("<option />",{value:e,text:e}))})),a.attr("disabled",!1).val(e[t])}))}))}else jQuery.each(e,(function(e,n){jQuery('[name="'.concat(t,"[").concat(e,']"]')).val(n).change()}))}else if("[object Array]"===a){var o=jQuery("[name=".concat(t,"]"));if("file"==(o=(o=o.length?o:jQuery("[data-name=".concat(t,"]"))).length?o:jQuery("[name=".concat(t,"\\[\\]]"))).attr("type"))w(o,e);else if(o.prop("multiple"))if(n.isFunction(window.Choices)){var l=o.data("choicesjs");r.push({handler:l,values:e})}else o.val(e).change();else if("repeater_field"===o.attr("data-type")){var c=o.find("tbody"),d=o.attr("data-name");jQuery.each(e,(function(t,e){0!=t?c.find("tr:last").clone().appendTo(c).find(".ff-el-form-control").each((function(a,i){var f="ffrpt-"+(new Date).getTime()+a;n(i).val(e[a]),n(i).attr({id:f,name:"".concat(d,"[").concat(t,"][]"),value:e[a]}).change()})):c.find("tr:first .ff-el-form-control").each((function(t,a){n(a).val(e[t]).change()}))}))}else o.each((function(t,a){-1!=jQuery.inArray(n(a).val(),e)&&n(a).prop("checked",!0).change()}))}else{var u=jQuery("[name=".concat(t,"]"));if(u.hasClass("fluentform-post-content")&&window.wp&&window.wp.editor){var p=u.attr("id");window.tinymce.get(p).setContent(e)}if("radio"===u.prop("type")||"checkbox"===u.prop("type"))jQuery("[name=".concat(t,'][value="').concat(e,'"]')).prop("checked",!0).change();else{var v=u.closest(".ff-el-group").find(".fluentform-signature-pad");if(v.length){var m=v[0].getContext("2d"),_=new Image;_.src=e,_.onload=function(){m.drawImage(_,0,0)}}u.val(e).change()}}}})),r.length>0)for(var s=0;s<r.length;s++)r[s].handler.setValue(r[s].values).change();d=!0,l&&g(a,i.stepAnimationDuration,!0).then((function(){y(n("".concat(f," .fluentform-step.active"))),h(i.stepAnimationDuration)})).catch((function(t){console.error("An error occurred during the slider update:",t)})),d=!1},v=function(t,e){0!==t.length&&(n.each(t,(function(t,e){n(e).attr("data-step-number",t)})),t.on("click",(function(t){var a=u(),r=n(this),s=0;try{var o=r.data("step-number");if(isNaN(o))return;n.each(e,(function(t,e){if(s=t,t<o){var i=n(e).find(":input").not(":button").filter((function(t,e){return!n(e).closest(".has-conditions").hasClass("ff_excluded")}));i.length&&a.validate(i)}})),g(o,i.stepAnimationDuration,!0).then((function(){y(n("".concat(f," .fluentform-step.active"))),h(i.stepAnimationDuration)})).catch((function(t){console.error("An error occurred during the slider update:",t)}))}catch(t){if(!(t instanceof window.ffValidationError))throw t;g(s,i.stepAnimationDuration,!0).then((function(){y(n("".concat(f," .fluentform-step.active"))),h(i.stepAnimationDuration)})).catch((function(t){console.error("An error occurred during the slider update:",t)})),a.showErrorMessages(t.messages),a.scrollToFirstError(350)}})))},m=function(t){if(a.find(".ff-el-progress").length){var e=t.totalSteps,f=t.activeStep,r=100/e*(f+1),s=a.find(".ff-el-progress-title li"),o=a.find(".ff-step-header .ff-el-progress-bar"),l=o.find("span");o.css({width:r+"%"}),r?o.append(l.text(parseInt(r)+"%")):l.empty();var c=i.step_text,d=n(s[f]).text();c=c.replace("%activeStep%",f+1).replace("%totalStep%",e).replace("%stepTitle%",d),a.find(".ff-el-progress-status").html(c),s.css("display","none"),n(s[f]).css("display","inline")}},_=function(t){y(n("".concat(f," .fluentform-step.active"))),n(f).on("click",".fluentform-step  .step-nav button, .fluentform-step  .step-nav img",(function(e){var i=n(this).data("action"),s="next",o=n(this).closest(".fluentform-step"),l=u();if("next"==i){try{var c=o.find(":input").not(":button").filter((function(t,e){return!n(e).closest(".has-conditions").hasClass("ff_excluded")}));c.length&&l.validate(c),r++}catch(e){if(!(e instanceof window.ffValidationError))throw e;return l.showErrorMessages(e.messages),void l.scrollToFirstError(350)}a.trigger("ff_to_next_page",r),jQuery(document).trigger("ff_to_next_page",{step:r,form:a});var d=a.find(".fluentform-step");a.trigger("ff_render_dynamic_smartcodes",n(d[r]))}else r--,s="prev",a.trigger("ff_to_prev_page",r),jQuery(document).trigger("ff_to_prev_page",{step:r,form:a});var p="yes"!=a.find(".ff-step-container").attr("data-disable_auto_focus");g(r,t,p,s).then((function(){y(n("".concat(f," .fluentform-step.active"))),h(t)})).catch((function(t){console.error("An error occurred during the slider update:",t)}))}))};function h(t){setTimeout((function(){var t=function(){var t=n("".concat(f," .fluentform-step.active")),e=null;return e=a.find(".fluentform-step").last().hasClass("active")&&t.children().not(".ff-inner_submit_container").toArray().every((function(t){return n(t).hasClass("ff_excluded")}))?t.find('button[type="submit"]').first():t.find("input, select, textarea").first(),e}();t&&t.length&&t.focus()}),t)}var g=function(t,i){var s=!(arguments.length>2&&void 0!==arguments[2])||arguments[2],l=arguments.length>3&&void 0!==arguments[3]?arguments[3]:"next";return new Promise((function(u){n("div"+f+"_errors").empty(),r=t;var p=a.find(".ff-step-body"),v=a.find(".ff-step-titles li"),_=a.find(".fluentform-step"),h=_.length;_.removeClass("active"),n(_[r]).addClass("active"),v.removeClass("ff_active ff_completed"),n.each(e(Array(r).keys()),(function(t){n(n(v[t])).addClass("ff_completed")})),n(v[r]).addClass("ff_active");var g,y={left:-100*r+"%"};switch(c&&(y={right:-100*r+"%"}),n(_[r]).closest(".ff-step-container").data("animation_type")){case"slide":g=p.animate(y,i).promise();break;case"fade":p.css({opacity:0}),g=p.animate(y,i).animate({opacity:1},i).promise();break;case"slide_down":p.hide(),p.css(y),g=p.slideDown(i).promise();break;default:p.css(y),g=Promise.resolve()}g.then((function(){if(s&&function(){if(!window.ff_disable_step_scroll){var t,e,f,r,s,o,l=a.find(".ff_step_start");t=window.ff_scroll_top_offset?window.ff_scroll_top_offset:l.offset().top-20,r=(f=(e=l).offset().top)+e.outerHeight(),o=(s=n(window).scrollTop())+n(window).height(),r>s&&f<o&&!window.ff_force_scroll||n("html, body").delay(i).animate({scrollTop:t},0)}}(),!o||d||0===r||b(a,r).then((function(t){console.log(t)})),m({activeStep:r,totalSteps:h}),_.last().hasClass("active")?a.find('button[type="submit"]').css("visibility","visible"):a.find('button[type="submit"]').css("visibility","hidden"),!window.ff_disable_auto_step){var t=a.find(".fluentform-step.active"),e=a.find(".fluentform-step.active > div").length-1,f=a.find(".fluentform-step.active > .ff_excluded").length;if(a.find(".fluentform-step.active > .ff-t-container").length&&(e-=a.find(".fluentform-step.active > .ff-t-container").length,e+=a.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > div").length,f+=a.find(".fluentform-step.active > .ff-t-container > .ff-t-cell > .ff_excluded").length,a.find(".fluentform-step.active > .ff-t-container.ff_excluded").length&&(f-=a.find(".fluentform-step.active > .ff-t-container.ff_excluded").length,f-=a.find(".fluentform-step.active > .ff-t-container.ff_excluded > .ff-t-cell > .ff_excluded").length,f+=a.find(".fluentform-step.active > .ff-t-container.ff_excluded > .ff-t-cell > div").length)),e===f)return t.find(".step-nav button[data-action="+l+"], .step-nav img[data-action="+l+"]").click(),void u()}a.find(".fluentform-step.active").find('.step-nav button[data-action="next"]').css("visibility","visible"),a.find(".fluentform-step.active").find('.step-nav button[data-action="prev"]').css("visibility","visible"),a.find(".fluentform-step.active").find('.step-nav img[data-action="next"]').css("visibility","visible"),a.find(".fluentform-step.active").find('.step-nav img[data-action="prev"]').css("visibility","visible"),u()}))}))};function y(t){var e=t.find("input, select, textarea, button").filter(":visible"),n=e.first(),a=e.last();t.on("keydown",(function(t){("Tab"===t.key||9===t.keyCode)&&(t.shiftKey?document.activeElement===n[0]&&(a.focus(),t.preventDefault()):document.activeElement===a[0]&&(n.focus(),t.preventDefault()))}))}var b=function(t,e){var a=t.find(":input").filter((function(t,e){return!n(e).closest(".has-conditions").hasClass("ff_excluded")}));a.filter((function(t,e){var a=n(e);return a.parents().hasClass("ff_repeater_table")&&"select"==a.attr("type")&&!a.val()})).prepend("<option selected disabled />");var f=a.serialize();n.each(t.find("[type=file]"),(function(t,e){var a={},i=e.name+"[]";a[i]=[],n(e).closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function(t,e){a[i][t]=n(this).data("src")})),n.each(a,(function(t,e){if(e.length){var a={};a[t]=e,f+="&"+n.param(a),!0}}))}));var r={active_step:e,data:f,form_id:t.data("form_id"),action:"fluentform_step_form_save_data"};return jQuery.post(i.ajaxUrl,r)},w=function(e,a){var f=e.closest(".ff-el-input--content").find(".ff-uploaded-list");n.each(a,(function(e,a){a="object"===t(a)?a:{url:a,data_src:a};var r=n("<div/>",{class:"ff-upload-preview","data-src":a.data_src,style:"border: 1px solid rgb(111, 117, 125)"}),s=n("<div/>",{class:"ff-upload-thumb"});s.append(n("<div/>",{class:"ff-upload-preview-img",style:"background-image: url('".concat(x(a.url),"');")}));var o=n("<div/>",{class:"ff-upload-details"}),l=n("<span/>",{html:i.upload_completed_txt,class:"ff-upload-progress-inline-text ff-inline-block"}),c=a.url.substring(a.url.lastIndexOf("/")+1);c.includes("-ff-")&&(c=c.substring(c.lastIndexOf("-ff-")+4));var d=n("<div/>",{class:"ff-upload-filename",html:c}),u=n('\n                <div class="ff-upload-progress-inline ff-el-progress">\n                    <div style="width: 100%;" class="ff-el-progress-bar"></div>\n                </div>\n            '),p=n("<span/>",{"data-href":"#",html:"&times;",class:"ff-upload-remove"}),v=n("<div>",{class:"ff-upload-filesize ff-inline-block",html:""}),m=n("<div>",{class:"ff-upload-error",style:"color:red;"});o.append(d,u,l,v,m,p),r.append(s,o),f.append(r)})),e.trigger("change_remaining",-a.length),e.trigger("change")},x=function(t){var e=t.split(/[#?]/)[0].split(".").pop().trim().toLowerCase();if(-1!=["jpg","jpeg","gif","png"].indexOf(e))return t;var n=document.createElement("canvas");n.width=60,n.height=60,n.style.zIndex=8,n.style.position="absolute",n.style.border="1px solid";var a=n.getContext("2d");return a.fillStyle="rgba(0, 0, 0, 0.2)",a.fillRect(0,0,60,60),a.font="13px Arial",a.fillStyle="white",a.textAlign="center",a.fillText(e,30,30,60),n.toDataURL()};return{init:function(){o&&jQuery(document).ready((function(t){jQuery.getJSON(i.ajaxUrl,{form_id:a.data("form_id"),action:"fluentform_step_form_get_data",nonce:null==i?void 0:i.nonce,hash:null==i?void 0:i.hash}).then((function(t){t&&p(t)}))})),a.find(".fluentform-step:first").find('.step-nav [data-action="prev"]').remove(),function(){var t=a.find(".ff-step-body"),e=a.find(".fluentform-step"),f=e.length,o=a.find(".ff-step-titles li");s=100*f+"%",t.css({width:s}),e.css({width:100/f+"%"}),n(e[r]).addClass("active"),n(o[r]).addClass("active");var l=e.first();l.hasClass("active")&&l.find('button[data-action="next"]').css("visibility","visible"),e.length&&!e.last().hasClass("active")&&a.find('button[type="submit"]').css("visibility","hidden"),m({activeStep:r,totalSteps:f}),_(i.stepAnimationDuration),v(o,e)}(),function(){function t(t){if(1==t.closest(".fluentform-step.active").find(".ff-el-group:not(.ff_excluded):not(.ff-custom_html)").length)if(t.closest(".fluentform-step.active").find(".ff_excluded").length){var e=window.ffTransitionTimeOut||400;setTimeout((function(){t.closest(".fluentform-step.active").find(".ff-btn-next").trigger("click")}),e)}else t.closest(".fluentform-step.active").find(".ff-btn-next").trigger("click")}"yes"==a.find(".ff-step-container").attr("data-enable_auto_slider")&&(a.find(".ff-el-form-check-radio,.ff-el-net-label, .ff-el-ratings label").on("click",(function(){t(n(this))})),a.find("select").on("change",(function(){t(n(this))})))}()},updateSlider:g,populateFormDataAndSetActiveStep:p}}var i;(i=jQuery)(document.body).on("fluentform_init",(function(t,e,n){var f="."+n.form_instance,r=-1,s="no";if(i(f).hasClass("ff-form-has-save-progress")){i(f).hasClass("ff-form-has-steps")&&(e.on("ff_to_next_page",(function(t,e){s=e})),e.on("ff_to_prev_page",(function(t,e){s=e}))),i(f).find(".ff-btn-save-progress").each((function(t,n){var a=i(n);a.on("click",(function(t){var n,f=this;t.preventDefault(),a.addClass("ff-working");var o=e.find(":input").filter((function(t,e){return!i(e).closest(".has-conditions").hasClass("ff_excluded")}));o.filter((function(t,e){var n=i(e);return n.parents().hasClass("ff_repeater_table")&&"select"==n.attr("type")&&!n.val()})).prepend("<option selected disabled />");var l=o.serialize();i.each(e.find("[type=file]"),(function(t,e){var n={},a=e.name+"[]";n[a]=[],i(e).closest("div").find(".ff-uploaded-list").find(".ff-upload-preview[data-src]").each((function(t,e){n[a][t]=i(this).data("src")})),i.each(n,(function(t,e){if(e.length){var n={};n[t]=e,l+="&"+i.param(n)}}))})),r=null===(n=window.form_state_save_vars)||void 0===n?void 0:n.key;var c={source_url:window.form_state_save_vars.source_url,action:"fluentform_save_form_progress_with_link",data:l,form_id:e.data("form_id"),hash:r,active_step:s,nonce:window.form_state_save_vars.nonce,save_progress_btn_name:i(a).attr("name")},d=c.form_id+"_save_progress_msg",u="#"+d;jQuery.post(fluentFormVars.ajaxUrl,c).then((function(t){if(t){var n;r=t.data.hash,e.find(".ff-saved-state-link"),""!=(null===(n=t.data)||void 0===n?void 0:n.message)&&(i(u).length&&i(u).slideUp("fast"),i("<div/>",{id:d,class:"ff-message-success ff-el-group"}).html(t.data.message).insertBefore(a.closest(".ff-el-group")));var s=window.form_state_save_vars.copy_button||"Copy",o='<div class="ff-el-input--content">\n                                <div class="ff_input-group">\n                                    <input readonly value="'.concat(t.data.saved_url,'" class="ff-el-form-control" >\n                                    <div class="ff_input-group-append">\n                                        <button class="ff-btn ff-btn-md ff_btn_style ff_btn_copy_link ff_input-group-text">').concat(s,"</button>\n                                    </div>\n                                </div>\n                            </div>"),l=i("<div/>",{class:"ff-el-group ff-saved-state-input ff-saved-state-link ff-hide-group",html:o});i(f).closest(".ff-el-group").after(l),l.fadeIn();var c=window.form_state_save_vars.email_placeholder_str||"Your Email Here",p=window.form_state_save_vars.email_button||"Email";if(i(f).hasClass("ff_resume_email_enabled")){var v='<div class="ff-el-input--content">\n                                    <div class="ff_input-group">\n                                        <input type="email" class="ff-el-form-control" placeholder="'.concat(c,'" class="ff-el-form-control">\n                                        <div class="ff_input-group-append">\n                                            <button class="ff-btn ff-btn-md ff_btn_style ff_btn_is_email ff_input-group-text">').concat(p,"</button>\n                                        </div>\n                                    </div>\n                                </div>"),m=i("<div/>",{class:"ff-el-group ff-saved-state-input  ff-email-address ff-hide-group",html:v});i(l).after(m),m.fadeIn()}}})).fail((function(t){i(u).length&&i(u).slideUp("fast"),i("<div/>",{id:d,class:"ff-message-success ff-el-group text-danger"}).html(t.responseJSON.data.message).insertBefore(a.closest(".ff-el-group"))})).always((function(){a.parent().hide()}))}))})),i(f).on("click",".ff_btn_copy_link",(function(t){t.preventDefault();var e=i(this).closest(".ff-el-input--content").find(".ff-el-form-control").val();navigator.clipboard.writeText(e);var n=window.form_state_save_vars.copy_success_button||"Copied";i(this).html("".concat(n))})),i(f).on("click",".ff_btn_is_email",(function(t){t.preventDefault();var n=i(this).closest(".ff-el-group"),a=i(this).closest(".ff-email-address").find("input").val();i(".ff-email-address").find("input").val("");var f=i(".ff-saved-state-link").find("input").val(),s={source_url:window.form_state_save_vars.source_url,action:"fluentform_email_progress_link",form_id:e.data("form_id"),to_email:a,link:f,hash:r,nonce:window.form_state_save_vars.nonce},o=s.form_id+"_save_progress_email_response",l="#"+o;jQuery.post(fluentFormVars.ajaxUrl,s).then((function(t){t&&(n.removeClass("ff-el-is-error"),i(l).length&&i(l).slideUp("fast"),i("<div/>",{id:o,class:"ff-message-success ff-el-group"}).html(t.data.response).insertAfter(n))})).fail((function(t){t&&(n.addClass("ff-el-is-error"),i(l).length&&i(l).slideUp("fast"),i("<div/>",{id:o,class:"ff-message-success ff-el-group text-danger"}).html(t.responseJSON.data.Error).insertAfter(n))}))}));var o=!1;void 0!==window.form_state_save_vars&&(o=window.form_state_save_vars.key),o&&(e.append('<input type="hidden" value="'.concat(o,'" class="__fluent_state_hash" name="__fluent_state_hash"/>')),"yes"==e.find(".ff-step-container").attr("data-enable_step_data_persistency")||jQuery.getJSON(fluentFormVars.ajaxUrl,{form_id:e.data("form_id"),action:"fluentform_get_form_state",hash:o,nonce:window.form_state_save_vars.nonce}).then((function(t){t&&a(i,e,window.fluentFormVars,f).populateFormDataAndSetActiveStep(t)})))}}))})();