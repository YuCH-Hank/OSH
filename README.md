# OSH

職業安全衛生（OSH）知識庫，使用 MkDocs Material 產生靜態網站。

## 專案結構

-   `docs/`：Markdown 原始文件與圖檔（MkDocs 的資料來源）
-   `python/`：Python 程式與輔助腳本
-   `site/`：`mkdocs build` 產出的靜態網站（已在 .gitignore 排除）

## 開發與編譯

1. 推薦 Python 3.11，安裝套件：`pip install -r requirements.txt`
2. 本地預覽：`mkdocs serve`，瀏覽 http://127.0.0.1:8000/
3. 正式輸出：`mkdocs build --clean --strict`

## 其他

完整文件清單請見 `docs/index.md`。
