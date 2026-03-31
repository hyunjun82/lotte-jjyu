// 클라이언트 측 리드 데이터 수집
// Cloudflare Pages 정적 배포이므로 localStorage + 외부 서비스 연동

export interface LeadData {
  type: "consultation" | "registration" | "quick-registration";
  name: string;
  phone: string;
  email?: string;
  unitType?: string;
  preferredDate?: string;
  message?: string;
  address?: string;
  source?: string;
  timestamp: string;
}

export function saveLeadLocal(data: LeadData): void {
  try {
    const existing = JSON.parse(localStorage.getItem("penthill-leads") || "[]");
    existing.push(data);
    localStorage.setItem("penthill-leads", JSON.stringify(existing));
  } catch {
    // localStorage not available
  }
}

export function getLeadsLocal(): LeadData[] {
  try {
    return JSON.parse(localStorage.getItem("penthill-leads") || "[]");
  } catch {
    return [];
  }
}

// 외부 서비스 연동 (Google Sheets, Webhook 등)
export async function submitLead(data: LeadData): Promise<boolean> {
  // 1. 로컬 저장
  saveLeadLocal(data);

  // 2. 외부 서비스로 전송 (설정 시)
  const webhookUrl = process.env.NEXT_PUBLIC_WEBHOOK_URL;
  if (webhookUrl) {
    try {
      await fetch(webhookUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });
    } catch {
      // 네트워크 오류 시에도 로컬 저장은 완료
    }
  }

  return true;
}
