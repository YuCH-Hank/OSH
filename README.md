# OSH

MkDocs 專案，彙整職業安全衛生筆記與圖示，使用 Python 3.11。

## 專案結構

-   `docs/`：Markdown 原始檔與插圖（MkDocs 來源資料）。
-   `python/`：Python 程式與相關腳本。
-   `site/`：`mkdocs build` 的靜態網站輸出（版本管控已忽略）。

## 快速開始

1. 建議使用 Python 3.11，安裝套件：`pip install -r requirements.txt`
2. 本地預覽：`mkdocs serve`，瀏覽 http://127.0.0.1:8000/
3. 匯出靜態網站：`mkdocs build`

完整文件索引請見 `docs/index.md`。
