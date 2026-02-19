# Neon 데이터베이스 연결 및 배포 가이드

Neon은 Serverless Postgres로, Netlify와 같은 환경에 최적화되어 있습니다.

## 0. 새 프로젝트 생성 (프로젝트가 없는 경우)
1. **[Neon Console](https://console.neon.tech/)**에 로그인합니다.
2. 대시보드에서 **"New Project"** 버튼을 클릭합니다.
3. **Project name**: 프로젝트 이름 입력 (예: `plc-site`)
4. **Postgres version**: 기본값 (예: 16) 유지.
5. **Region**: 서비스할 지역과 가까운 곳 선택 (AWS `ap-northeast-2` (Seoul) 추천, 없으면 `ap-southeast-1` (Singapore)).
6. **"Create Project"** 클릭.
   - 잠시 후 데이터베이스가 생성되고 **Dashboard** 화면으로 이동합니다.
   - 이때 화면에 뜨는 **Connection Details** 창의 내용을 복사해 두는 것이 좋습니다.

## 1. Neon 대시보드에서 주소 복사
1. 프로젝트 대시보드 (**Dashboard**) 화면에 있는지 확인합니다.
2. 프로젝트를 선택합니다.
3. **Dashboard** 화면의 **Connection Details** 위젯을 찾습니다.
4. **"Pooled connection"** 체크박스가 있다면 **체크합니다**. (Netlify 같은 서버리스 환경에서는 필수 권장사항입니다)
5. **Connection string**을 복사합니다.
   - 형식: `postgres://[user]:[password]@[host]/[dbname]?sslmode=require`
   - 비밀번호가 이미 포함되어 있어 별도로 입력할 필요가 없습니다.

## 2. Netlify 환경 변수 설정
이 주소가 바로 **운영 DB 주소 (`DATABASE_URL`)** 입니다.

1. [Netlify 대시보드](https://app.netlify.com/) > 해당 사이트 > **Site configuration** > **Environment variables** 로 이동합니다.
2. **"Add a variable"** 클릭.
3. **Key**: `DATABASE_URL`
4. **Value**: 방금 복사한 Neon 연결 문자열 붙여넣기.
5. **"Create variable"** 클릭.

## 3. 데이터베이스 스키마 동기화 (필수!)
현재 Neon DB는 비어있습니다. 로컬에서 만든 테이블 구조(Schema)를 Neon에 적용해야 합니다.

1. 로컬 터미널을 엽니다.
2. 다음 명령어를 실행하여 임시로 Neon DB에 스키마를 푸시합니다.
   ```bash
   # [YOUR_NEON_URL] 자리에 복사한 주소를 따옴표("") 안에 넣어주세요
   DATABASE_URL="postgres://..." npx prisma db push
   ```
   *또는 `.env` 파일을 잠시 수정해서 `npx prisma db push`를 해도 되지만, 위 방법이 기존 `.env`를 건드리지 않아 안전합니다.*

3. `🚀 Your database is now in sync with your Prisma schema.` 메시지가 뜨면 성공입니다.

## 4. Netlify 배포 재시도
이제 Netlify에서 다시 배포(Deploy)를 트리거하면 정상적으로 빌드되고 DB에 연결될 것입니다.
