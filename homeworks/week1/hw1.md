## 交作業流程

1.   git clone 遠端資料到本機 ：`  git clone ( 網址 )`
2.   在本機的  master 上開 branch： ` git branch -b ( 版本 )   `
3.   寫作業如有增檔案記得加入： ` git add .`
4.   於 branch 的作業完成後把檔案版本控制：` git commit -am '( 名稱 )' `
5.   再把 branch 推到 GitHub ：` git push origin ( 版本 )`
6.   到 GitHub 的 Pull Requests 手動 PR 
7.   把 PR 連結複製起來在學習系統繳交
8.   助教改完會 merge 把 branch 合併到 master
9.   本機切換回 master ：` git checkout master`
10.   需要**手動抓取** GitHub 的資料到本機讓資料同步 ：`git pull origin master`
11.   刪除已經 merge 的 branch ：` git branch -d ( 版本 )`



### 雜記

因為沒有可以直接寫 MD 的工具，記事本不好使用。經過一番選擇後目前使用的是 *Typora* 來寫作業

