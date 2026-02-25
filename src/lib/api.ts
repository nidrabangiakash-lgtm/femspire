const BASE_URL = "";

export const registerTeam = async (data: Record<string, unknown>) => {
  const res = await fetch(`${BASE_URL}/api/register`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  if (!res.ok) throw new Error("Registration failed");
  return res.json();
};

export const submitPayment = async (formData: FormData) => {
  const res = await fetch(`${BASE_URL}/api/payment/submit`, {
    method: "POST",
    body: formData,
  });
  if (!res.ok) throw new Error("Payment submission failed");
  return res.json();
};

export const checkStatus = async (teamId: string) => {
  const res = await fetch(`${BASE_URL}/api/status/${teamId}`);
  if (!res.ok) throw new Error("Status check failed");
  return res.json();
};

export const adminLogin = async (credentials: { username: string; password: string }) => {
  const res = await fetch(`${BASE_URL}/api/admin/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(credentials),
  });
  if (!res.ok) throw new Error("Invalid credentials");
  return res.json();
};

export const getRegistrations = async (token: string, params?: string) => {
  const res = await fetch(`${BASE_URL}/api/admin/registrations${params ? `?${params}` : ""}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch");
  return res.json();
};

export const approveRegistration = async (token: string, teamId: string) => {
  const res = await fetch(`${BASE_URL}/api/admin/approve/${teamId}`, {
    method: "POST",
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Approval failed");
  return res.json();
};

export const rejectRegistration = async (token: string, teamId: string, reason: string) => {
  const res = await fetch(`${BASE_URL}/api/admin/reject/${teamId}`, {
    method: "POST",
    headers: { "Content-Type": "application/json", Authorization: `Bearer ${token}` },
    body: JSON.stringify({ reason }),
  });
  if (!res.ok) throw new Error("Rejection failed");
  return res.json();
};

export const exportCSV = async (token: string) => {
  const res = await fetch(`${BASE_URL}/api/admin/export/csv`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Export failed");
  return res.blob();
};

export const getStats = async (token: string) => {
  const res = await fetch(`${BASE_URL}/api/admin/stats`, {
    headers: { Authorization: `Bearer ${token}` },
  });
  if (!res.ok) throw new Error("Failed to fetch stats");
  return res.json();
};
