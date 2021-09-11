## 請找出三個課程裡面沒提到的 HTML 標籤並一一說明作用。

`<select>` ：用來建立下拉式選單，在 select 裡面需用  `<option> ` 標籤

`<mark> ` ：用來突顯或塗亮文字

`<textarea> ` ：建立一個可以輸入多行文字的輸入框，適用在表單其他類型區；如果要在 textarea 中設定預設文字，是直接將文字放在 `<textarea>內容</textarea>` 標籤之間



## 請問什麼是盒模型（box modal）

從 CSS 的視角來看網頁物件的話，所有網頁上的物件都像是一個一個被盒子裝起來後，擺放在頁面上。Box Modal 由物件內到外，依序的組成元素包含：

- content：物件本身的內容
- padding：內容外，border 內的空間
- border：包覆內容的框線。
- margin：最外層的空間，包覆著 content、padding、border

## 請問 display: inline, block 跟 inline-block 的差別是什麼？

display 可以自由設定網頁元素的顯示類型，每一個 html 標籤元素都會有一個預設的 display 屬性

- Inline 行內元素
  - **元素可在同一行內呈現**
  - **圖片或文字均不換行，也不會影響其版面配置**
- Block 區塊元素
  - **元素寬度預設會撐到最大，使其占滿整個容器**
  - **可以設定長寬、margin、padding，但仍會占滿一整行**
- inline-block
  - **以inline的方式呈現，但同時擁有block的屬性**
  - **可以設定長寬、margin、padding**
  - **可水平排列**

[可以在這裡測試](https://codepen.io/YTCLion/pen/eYYgyyg ) 




## 請問 position: static, relative, absolute 跟 fixed 的差別是什麼？

position 指定元素出現在文檔的定位方式

- static
  - `position: static;` 
  - 網頁預設排版方式
- relative
  - 相對定位，只會改變自己的位置
- fixed
  - 以目前瀏覽器視窗定位，固定在瀏覽視窗的固定位置
  - **強制覆蓋住所有其他的元素及畫面**
- absolute
  - 絕對定位，針對原本排版的地方做定位，會完全抽出原來的位置
  - 不會為元素預留空間 
