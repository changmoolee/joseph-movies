# joseph-movies

url : https://joseph-movies.netlify.app/

## 자세한 실행 방법
<br>
1. 해당 프로젝트를 개인 로컬환경에서 실행하기 위해서는, TBDB 사이트에 가입 후, API Key 발급이 필요합니다.<br>
https://www.themoviedb.org/ 에서 가입 및 로그인 후, 설정에서 API탭을 들어가면 API Key를 확인할 수 있습니다.<br><br>
2. git clone 명령어를 통해 로컬에 git 저장소를 복제합니다.
<pre><code>git clone https://github.com/changmoolee/joseph-movies.git</code></pre><br>
3. 다운 받은 폴더로 이동합니다.
<pre><code>cd joseph-movies</code></pre><br>
4. 환경변수 설정을 위해 .env 파일을 생성하고, 아래와 같이 발급받은 Api Key를 작성한 뒤, .env 파일을 저장합니다.<pre><code>REACT_APP_API_KEY = 발급 받은 API Key</code></pre><br>
5. npm install 명령어를 입력하여 모듈들을 다운로드합니다.
<pre><code>npm install</code></pre><br>
6. npm start 명령어를 입력하여 실행합니다.
<pre><code>npm start</code></pre><br><br>

## 개요

원하는 영화 정보를 찾고 검색하세요!

## 기능

### 분류된 영화 정보
인기 있는 영화, 현재 상영중인 영화 등 원하는 정보의 탭을 눌러 실시간 영화 정보를 얻을 수 있습니다.

### 영화 이름 검색
찾고 싶은 영화의 이름을 검색하여 찾아 볼 수 있습니다.
