# Supabase 운영 데이터베이스 생성 및 연결 가이드

현재 `package.json`에 `@supabase/supabase-js`가 설치되어 있어 Supabase를 사용하는 것이 가장 적합합니다. Netlify에서 웹사이트가 돌아가려면 클라우드에 있는 데이터베이스가 필요합니다.

## 1. Supabase 프로젝트 생성
1. [Supabase](https://supabase.com/)에 접속하여 로그인합니다.
2. **"New Project"**를 클릭합니다.
3. **Name**: 프로젝트 이름 (예: `plc-site`)
4. **Database Password**: **강력한 비밀번호를 생성하고 반드시 따로 적어두세요!** (나중에 다시 볼 수 없습니다)
5. **Region**: 한국과 가까운 `Seoul` (AWS) 또는 `Tokyo`를 권장합니다.
6. **"Create new project"** 클릭.

## 2. 연결 문자열 (Connection String) 가져오기
프로젝트가 생성되는 데 몇 분 걸릴 수 있습니다. 완료되면:

1. 왼쪽 메뉴에서 **Project Settings** (톱니바퀴 아이콘) > **Database**로 이동합니다.
2. **Connection string** 섹션을 찾습니다.
3. **"URI"** 탭을 선택합니다.
4. **"Mode: Session"** (기본값)인지 확인합니다. (Next.js/Prisma 사용 시 Transaction 모드가 필요할 수 있지만, 일단 Session으로 시작해도 됩니다. *Deploy 시 오류가 나면 Transaction 모드(포트 6543)를 사용해야 합니다.*)
   - 보통 `Transaction` 모드(Supavisor)를 권장하므로, **"Mode: Transaction"**을 선택하는 것이 안전합니다. 포트가 `6543`으로 바뀝니다.
5. 표시된 주소를 복사합니다.
   ```
   postgres://postgres.[project-ref]:[password]@aws-0-ap-northeast-2.pooler.supabase.com:6543/postgres
   ```
6. 복사한 주소의 `[YOUR-PASSWORD]` 부분을 **1단계에서 설정한 비밀번호**로 직접 바꿔야 합니다.

## 3. Netlify에 등록
이 완성된 주소가 바로 **운영 DB 주소 (`DATABASE_URL`)** 입니다.

1. Netlify 대시보드 > Site Settings > Environment variables.
2. `DATABASE_URL` 키에 위 주소를 값으로 넣어주세요.

## 4. 로컬 스키마 동기화 (선택 사항)
로컬에서 작업한 데이터베이스 구조(Schema)를 운영 DB에도 반영해야 합니다.

1. `.env` 파일의 `DATABASE_URL`을 방금 얻은 Supabase 주소로 **잠시** 변경합니다.
2. 터미널에서 다음 명령어를 실행하여 DB 구조를 밀어넣습니다.
   ```bash
   npx prisma db push
   ```
3. 완료되면 `.env`를 다시 원래 로컬 주소로 되돌립니다 (개발은 로컬에서 계속하기 위함).
