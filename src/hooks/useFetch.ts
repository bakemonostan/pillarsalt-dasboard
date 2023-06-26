import { useState } from "react";

interface ApiRequestState<T> {
  isLoading: boolean;
  data: [];
  error: any | null;
}

export const useFetchReq = <T>(apiRequest: Promise<any>) => {
  const [apiState, setApiState] = useState<ApiRequestState<T>>({
    isLoading: false,
    data: [],
    error: null,
  });

  const fetchData = async () => {
    try {
      setApiState({ ...apiState, isLoading: true });
      const response = await apiRequest;
      const responseData = response?.data?.data;
      setApiState({ isLoading: false, data: responseData, error: null });
    } catch (error) {
      setApiState({ ...apiState, isLoading: false, error });
    }
  };

  return { ...apiState, fetchData };
};
