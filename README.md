# joseph-movies

url : https://joseph-movies.netlify.app/

## 실행 방법
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

## Tech Stack
<img src="https://img.shields.io/badge/React-61DAFB?style=flat-square&logo=React&logoColor=white"/></a>
<img src="https://img.shields.io/badge/TypeScript-3178C6?style=flat-square&logo=TypeScript&logoColor=white"/></a>
<img src="https://img.shields.io/badge/React Router-CA4245?style=flat-square&logo=React Router&logoColor=white"/></a>
<img src="https://img.shields.io/badge/styled-components-DB7093?style=flat-square&logo=styled-components&logoColor=white"/></a><br><br>

## 개요
#### TMDB의 Api를 이용하여 만든 영화 정보 검색사이트입니다.<br>
#### 영화의 정보들을 확인하고, 영화 이름을 검색하여 결과를 확인하세요!<br><br>
- TMDB Api 소개 : https://developers.themoviedb.org/3/getting-started/introduction
<br><br>

## 소개

### 반응형 웹사이트
`joseph-movie`는 반응형 웹사이트로 제작되었습니다.<br>
모바일, 데스크탑 등 다양한 디스플레이로 확인 가능합니다.<br><br>

#### 모바일 환경

<img alt="모바일" src="https://user-images.githubusercontent.com/84559872/188114745-2cc21e7b-05d3-4b7f-89ee-c4dc2ea07e1e.png" width="30%" height="30%"/>

<br><br>


#### 데스크탑 환경
<img alt="모바일" src="https://user-images.githubusercontent.com/84559872/188114652-a395d080-d842-4ab7-8eb9-ad748fb96456.png" width="100%" height="30%"/>

<br><br>
---
### 분류된 영화 정보 
인기 있는 영화, 현재 상영중인 영화 등 원하는 정보의 탭을 눌러 영화 정보를 얻을 수 있습니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188105269-d48d9d79-bc28-478b-a307-60fbfd0085ca.png)

<br><br>
---
### 영화 이름 검색
찾고 싶은 영화의 이름을 검색하여 결과를 확인할 수 있습니다.<br><br>
![image](https://user-images.githubusercontent.com/84559872/188105345-07f40039-7a73-4c58-9ca5-af23c1ca4aea.png)

<br><br>
