export interface SuggestedFeesRequest {
  token?: string;
  inputToken: string;
  outputToken: string;
  originChainId: number;
  destinationChainId: number;
  amount: number;
  recipient?: string;
  message?: string;
  relayer?: string;
  timestamp?: number;
}

export async function getSuggestedFees(params: SuggestedFeesRequest) {
  const baseUrl = 'https://app.across.to/api/suggested-fees';
  const url = new URL(baseUrl);
  
  Object.entries(params).forEach(([key, value]) => {
    if (value !== undefined) {
      url.searchParams.append(key, String(value));
    }
  });

  const response = await fetch(url.toString());
  if (!response.ok) {
    throw new Error(`Failed to fetch data from ${url.pathname}: ${response.statusText}`);
  }
  
  return await response.json();
}
