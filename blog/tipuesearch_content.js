var tipuesearch = {"pages":[{"tags":"misc","text":"2016Fall 修課成員網誌","url":"./pages/about/","title":"About"},{"tags":"HW","text":"四連桿機構Trace Point查驗 40423127四連桿機構Trace Point查驗結果 利用Excel查驗 Trace Point 利用程式碼查驗 Trace Point window.onload=function(){ brython(1); } from browser import document as doc from browser import html import math # 準備繪圖畫布 canvas = doc[\"fourbar\"] container1 = doc['container1'] ctx = canvas.getContext(\"2d\") fourbar_data = open(\"./../data/midterm4.csv\").read() fourbar_list = fourbar_data.splitlines() #container1 <= fourbar_list[0] # 以下可以利用 ctx 物件進行畫圖 # 先畫一條直線 ctx.beginPath() # 設定線的寬度為 1 個單位 ctx.lineWidth = 0.5 # 利用 transform 將 y 座標反轉, 且 offset canvas.height # (X scale, X skew, Y skew, Y scale, X offset, Y offset) # 配合圖形位置進行座標轉換 ctx.transform(1, 0, 0, -1, canvas.width/2+250, canvas.height/2+100) # 畫出 x 與 y 座標線 # 各座標值放大 8 倍 ratio = 8 ctx.moveTo(0, 0) ctx.lineTo(-30*ratio, 0) start_point = fourbar_list[0].split(\",\") ctx.moveTo(float(start_point[0])*ratio, float(start_point[1])*ratio) count = 0 for data in fourbar_list[1:]: point = data.split(\",\") #count = count + 1 #container1 <= str(count) + \":\" + point[0] + \",\" + point[1] #container1 <= html.BR() ctx.lineTo(float(point[0])*ratio, float(point[1])*ratio) # 設定顏色為藍色, 也可以使用 \"rgb(0, 0, 255)\" 字串設定顏色值 ctx.strokeStyle = \"blue\" # 實際執行畫線 ctx.stroke() ctx.closePath()","url":"./40423127-si-lian-gan-ji-gou-xie-tong-trace-point-cha-yan.html","title":"40423127 四連桿機構協同 Trace Point 查驗"},{"tags":"HW","text":"1.Fossil Server 實習查驗 2.四連桿機構協同 Trace Point 查驗 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 4.分組協同零件展示 1.Fossil Server 實習查驗 ag3期中考報告 fossil 2.四連桿機構協同 Trace Point 查驗 40423127 Trace Point 3.Fourbar Walker OnShape 零件協同繪圖與組立查驗 利用solvespace繪製Fourbar walker影片 Solvespace-Fourbar Walker from Fan chang zong on Vimeo . 成果圖 利用Onshape繪製: Onshape-Fourbar Walker from Fan chang zong on Vimeo . 4.分組協同零件展示 window.onload = function(){ var madeleine = new Madeleine({ target: 'target', // target div id data: './../data/Fourbar-Walker.stl', // data path path: './../work/madeleine/src/' // path to source directory from current html file }); }; select stl file: or drop stl file","url":"./xie-tong-chan-pin-she-ji-shi-xi-qi-zhong-bao-gao.html","title":"協同產品設計實習 期中報告"},{"tags":"HW","text":"四連桿導入vrep運動模擬 4bar_vrep from Fan chang zong on Vimeo . 八連桿導入vrep運動模擬 8連趕機構組裝 from Fan chang zong on Vimeo . 八連桿修正並運作 8連桿機構校正完成作動 from Fan chang zong on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-6zhou-zuo-ye.html","title":"協同產品設計實習 第6周作業"},{"tags":"HW","text":"用vrep讓旋轉機構旋轉 helicopter from Fan chang zong on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-5zhou-zuo-ye.html","title":"協同產品設計實習 第5周作業"},{"tags":"HW","text":"四連桿機構組立 === springw1 from Fan chang zong on Vimeo . ##將機構放入v-rep === vrep from Fan chang zong on Vimeo . ##stunnel更改IP === stunnel_ipchange from Fan chang zong on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-2zhou-zuo-ye.html","title":"協同產品設計實習 第2周作業"},{"tags":"HW","text":"小組翻譯影片 HyperWorks 14 - Novedades en armado y construcción de modelos內建字幕 from 40423118 on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-3zhou-zuo-ye.html","title":"協同產品設計實習 第3周作業"},{"tags":"HW","text":"將程式碼更改至start.bat 建立個人fossil fossil from Fan chang zong on Vimeo .","url":"./xie-tong-chan-pin-she-ji-shi-xi-di-4zhou-zuo-ye.html","title":"協同產品設計實習 第4周作業"}]};