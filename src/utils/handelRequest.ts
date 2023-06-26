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
    console.log(error);
  }
};
