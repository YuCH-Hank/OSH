# OSH 知識庫

這裡彙整職業安全衛生相關的文件與圖示，並以 MkDocs 發佈為靜態網站。

## 文件列表

-   [安全衛生管理員](安全衛生管理員.md)
-   [作業](作業.md)
-   [化學品](化學品.md)
-   [指引 + CNS](指引 + CNS.md)
-   [機械設備](機械設備.md)
-   [營造設施](營造設施.md)
-   [計劃書](計劃書.md)

## 使用方式

1. 使用 Python 3.11，先執行 `pip install -r requirements.txt` 安裝 MkDocs。
2. 以 `mkdocs serve` 本地預覽，瀏覽器開啟 http://127.0.0.1:8000/。
3. 以 `mkdocs build` 產生靜態網站輸出到 `site/` 目錄。

## 結構

-   `docs/`: MkDocs 原始文件（含圖檔）。
-   `python/`: Python 程式與輔助腳本。
-   `site/`: MkDocs build 後的靜態網頁輸出。
