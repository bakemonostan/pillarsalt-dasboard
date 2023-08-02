export const handleApiRequest = async (
  state: any,
  apiRequest: Promise<any>,
  setState: any
) => {
  try {
    state({ isLoading: true });
    const response = await apiRequest;
    const data = response?.data?.data;
    setState(data);
    state({ isLoading: false });
  } catch (error) {
    error;
  }
};

export const handleApiRequestTwo = async (
  state: any,
  apiRequest: Promise<any>,
  setState: any,
  setError: any
) => {
  try {
    state({ loading: true });
    const response = await apiRequest;
    const { data } = response.data;
    setState(data);
    state({ loading: false });
    setError(false);
  } catch (error) {
    error;
    state({ loading: false });
    setError(true);
  }
};
