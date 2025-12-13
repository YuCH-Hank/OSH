# OSH

MkDocs 驅動的職業安全衛生文件站點。使用 Python 3.11。

## 專案結構

-   `docs/`：Markdown 文件與圖檔（MkDocs 來源）。
-   `python/`：Python 程式與輔助腳本。
-   `site/`：`mkdocs build` 產出的靜態網頁（已忽略版控）。

## 快速開始

1. 建議使用 Python 3.11, 安裝套件：`pip install -r requirements.txt`
2. 本地預覽：`mkdocs serve`
3. 輸出靜態站點：`mkdocs build`

更多說明與文件索引請見 `docs/index.md`。
