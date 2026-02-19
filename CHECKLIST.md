# Netlify 배포 체크리스트

이 프로젝트를 Netlify에 성공적으로 배포하기 위한 단계별 가이드입니다.

## 1. 코드 푸시 (GitHub)
가장 먼저 변경된 설정(`netlify.toml`, `package.json`)을 원격 저장소에 업로드해야 합니다.

1. 터미널을 열고 다음 명령어를 실행하여 변경사항을 커밋하고 푸시합니다.
   ```bash
   git add .
   git commit -m "Configure for Netlify deployment"
   git push origin main
   ```

## 2. Netlify 사이트 생성 및 연결
1. [Netlify 대시보드](https://app.netlify.com/)에 로그인합니다.
2. **"Add new site"** > **"Import from existing project"** 클릭.
3. **GitHub**를 선택하고 해당 레포지토리를 선택합니다.

## 3. 빌드 설정 확인 (Build Configuration)
`netlify.toml` 파일을 추가했으므로 대부분 자동으로 설정되지만, 다음 내용이 맞는지 확인하세요.

- **Base directory**: (비워둠 - 프로젝트 루트)
- **Build command**: `npm run build`
- **Publish directory**: `.next`

## 4. 환경 변수 등록 (중요!)
배포 환경에서는 로컬 `.env` 파일이 업로드되지 않으므로, Netlify에 직접 등록해야 합니다.

1. Netlify 사이트 대시보드에서 **Site configuration > Environment variables**로 이동합니다.
2. **"Add a variable"**을 클릭하여 다음 변수들을 추가합니다.

| Key | Value 설명 |
|-----|------------|
| `DATABASE_URL` | **[필수]** 실제 운영용 데이터베이스 주소 (Supabase, Neon 등).<br>⚠️ `localhost` 주소는 절대 작동하지 않습니다. |
| `SUPABASE_URL` | Supabase 사용 시 프로젝트 URL (필요한 경우) |
| `SUPABASE_ANON_KEY` | Supabase 사용 시 공개 API 키 (필요한 경우) |

> **팁**: Prisma를 사용 중이므로, 배포 시 `prisma generate`가 실행될 때 DB 스키마를 읽을 수 있어야 합니다.

## 5. 배포 시작
1. 설정을 마쳤으면 **"Deploy site"**를 클릭합니다.
2. **"Deploys"** 탭에서 진행 상황을 볼 수 있습니다. 로그에서 `Success`가 뜨면 완료입니다.

## 문제 해결
- **배포 실패 (Prisma 관련)**: `DATABASE_URL`이 잘못되었거나 DB에 접근할 수 없는 경우 빌드가 실패할 수 있습니다. 연결 정보를 다시 확인하세요.
- **Node 버전 오류**: 프로젝트가 Node v22.15.0을 사용하도록 설정되어 있습니다. Netlify가 이를 자동으로 감지하지만, 만약 버전 오류가 난다면 Environment variables에 `NODE_VERSION` = `22`를 추가해보세요.
