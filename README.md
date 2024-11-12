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

## Routing
* `localhost:3000/about-us` 로 접근하기 위해서, `app/about-us/page.tsx` 파일 만들면 됨
* `not-found.tsx`: 404 (Not Found) 에러 코드 발생 시, 보여주는 페이지

## Hook
### client side
* usePathname
* [Client Components docs](https://nextjs.org/docs/app/building-your-application/rendering/client-components)
```
"use client"; // 1st line
```
  
## Typescript
### tsconfig.json
* `allowImportingTsExtensions` 옵션 추가
