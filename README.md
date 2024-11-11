# NextJS Begginer
> NextJS 버전 14

## 프로젝트 생성
### 1. 프로젝트 생성
```
mkdir my-app
cd my-app
npm init
npm install react@latest next@latest react-dom@latest
```
* react-dom: 브라우저의 Document Object Model(DOM)에 렌더하는 역할
### 2. package.json 파일 수정
```
{
  ...
  "scripts": {
    "dev": "next dev"
  },
  ...
}
```
### 3. `npm run dev` 
* NextJS는 `app/page.tsx` 파일을 찾아 실행
* `http://localhost:3000` 접근 시, `app/layout.tex`&`tsconfig.json` 파일 자동 생성됨