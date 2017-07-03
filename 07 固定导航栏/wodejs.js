/**
 * Created by Administrator on 2017/3/24.
 */
function $(id){return document.getElementById(id);}
function scroll() {
    //ie9和其它普通浏览器都支持
    if(window.pageYOffset != null){
        return {
            left: window.pageXOffset,
            top: window.pageYOffset
        }
    }
    //判断文档有没有DTD声明，如果没有，就是怪异模式浏览器
    else if(document.compatMode == "CSS1Compat"){
        //声明了DTD的都支持，包括ie678，只有谷歌不支持
        return {
            left:document.documentElement.scrollLeft,
            top:document.documentElement.scrollTop
        }
    }
    //最后一个是怪异浏览器的选择
    return {
        left:document.body.scrollLeft,
        top:document.body.scrollTop
    }

}