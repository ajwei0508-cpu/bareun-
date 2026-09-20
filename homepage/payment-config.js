/**
 * =========================================================================
 * BAREUN CLINIC (바른한의원 대전본점) - 온라인 실결제 PG 연동 환경설정
 * =========================================================================
 * 
 * [실제 결제(실승인 & 한의원 계좌 정산) 전환 가이드]
 * 1. 포트원(PortOne: https://admin.portone.io) 관리자 콘솔에 접속하여 로그인합니다.
 * 2. [결제 연동] -> [내 식별코드·API Keys] 메뉴에서 '가맹점 식별코드'를 확인합니다. (예: imp12345678)
 * 3. 아래 BAREUN_PAY_CONFIG.userCode 값에 해당 식별코드를 입력하시면 즉시 실제 카드로 과금 및 정산됩니다.
 * 4. 연동된 PG사(이니시스, 나이스, 토스페이먼츠 등)에 따라 pgMapping을 맞춤 설정할 수 있습니다.
 */

window.BAREUN_PAY_CONFIG = {
  // [필수] 포트원 실제 가맹점 식별코드 (User Code)
  // 실제 발급받으신 식별코드(예: 'imp12345678')를 입력해주세요.
  userCode: 'imp00000000',

  // 상점 기본 정보
  merchant: {
    name: '바른한의원 대전본점',
    tel: '042-488-1075',
    email: 'bareunhaniwon@naver.com',
    address: '대전광역시 서구 둔산동 중심상업지구',
    bizNumber: '305-XX-XXXXX',
    postcode: '35242'
  },

  // 결제 수단별 PG 설정 (포트원에 등록된 PG 채널 설정)
  pgMapping: {
    card: 'html5_inicis',      // 웹표준 신용카드 (KG이니시스, 나이스, KCP, 토스페이먼츠 등)
    kakaopay: 'kakaopay',      // 카카오페이 전용 CID
    naverpay: 'naverpay',      // 네이버페이 파트너센터 가맹점
    tosspay: 'tosspay',        // 토스페이 전용
    applepay: 'html5_inicis',  // 애플페이 (이니시스 경유)
    vbank: 'html5_inicis'      // 가상계좌 (무통장 입금)
  },

  // 실서버 배포 모드 여부
  isProduction: true
};
