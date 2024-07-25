export const fetchRequest = async (
  url: string,
  method: string,
): Promise<any> => {
  try {
    const res = await fetch(url, { method });

    return await res.json();
  } catch (error) {
    throw error;
  }
};
