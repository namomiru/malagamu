# 국어사 아카이브

고전적인 국어학 사전의 분위기를 바탕으로 만든 Jekyll + GitHub Pages 시작 템플릿입니다.

## 구성
- `_entries/`: 현대어 표제어와 시대별 어휘 정보
- `_sources/`: 문헌 서지·원문·전사 정보
- `_posts/`: 국어학 연구 블로그
- `.pages.yml`: Pages CMS 웹 등록 화면 설정
- `search-index.json`: Jekyll이 생성하는 검색 색인

## 웹에서 자료 등록하기
1. 이 폴더의 파일을 GitHub 저장소 루트에 업로드합니다.
2. GitHub 저장소의 Settings → Pages에서 배포 브랜치와 폴더를 지정합니다.
3. `https://app.pagescms.org/`에 접속해 GitHub 계정으로 로그인합니다.
4. Pages CMS GitHub App을 본인 저장소에 설치하고 해당 저장소를 엽니다.
5. `국어사 표제어`, `문헌 원문 자료`, `연구 블로그` 메뉴에서 자료를 등록합니다.
6. Pages CMS가 GitHub 저장소의 파일을 수정하면 GitHub Pages가 사이트를 다시 빌드합니다.

Pages CMS는 별도 사전 데이터베이스를 만드는 대신 GitHub 저장소의 파일을 직접 편집합니다. 사이트 공개 페이지는 GitHub Pages가 생성합니다.

## 중요: 첫 등록 전 확인
- 표제어/문헌의 파일명은 영문·숫자·하이픈 형태의 식별자로 관리하는 것을 권장합니다.
- 문헌 원문은 반드시 출처와 면수 등을 확인하고 입력하세요.
- 저작권이 있는 원문 이미지·전사본은 이용 허락과 공개 범위를 확인하세요.
- `history_json`에는 유효한 JSON만 입력해야 합니다.
- `source_ids`는 `_sources/`에 등록한 문헌 파일의 파일명과 일치시켜야 합니다.

## GitHub Pages
이 저장소는 루트에 `index.html`과 `_config.yml`이 있는 Jekyll 사이트입니다. GitHub 저장소의 Settings → Pages에서 배포 설정을 마치면 공개됩니다.
