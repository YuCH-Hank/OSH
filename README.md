# OSH 職業安全衛生知識庫

以 MkDocs Material 建置的職業安全衛生（OSH）知識庫，協助整理與發布安全衛生相關資訊。

## 環境需求
- Python 3.11 以上
- pip

## 安裝與啟動
1. 安裝套件：`pip install -r requirements.txt`
2. 本地預覽：`mkdocs serve`，瀏覽 `http://127.0.0.1:8000/`
3. 正式輸出：`mkdocs build --clean --strict`
4. Windows 可執行 `StartWeb.bat` 快速啟動預覽。

## 專案結構
- `docs/`：Markdown 來源文件與圖檔
- `python/`：Python 程式與輔助腳本
- `site/`：`mkdocs build` 產出的靜態網站（已在 `.gitignore` 排除）

## 文件導覽
- 入口頁：`docs/index.md`
- 主題分區：`docs/作業/`（含局限空間等）、`docs/危害/`（化學品、物理性危害）、以及機械設備、營造設施、分級管理、職災補償、通報與備查、法規參考連結等。
- 圖片請置於對應子資料夾，並使用相對路徑引用。

## 編寫與貢獻
- 本專案路徑包含繁體中文，請確認系統與編輯器能正常顯示與處理。
- 提交前建議執行 `mkdocs serve` 或 `mkdocs build --clean --strict` 確認頁面與鏈結正常。
