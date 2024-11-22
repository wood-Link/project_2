export const handleChange = (e, setUserData) => {
  const { name, value } = e.target;
  setUserData((prev) => ({
    ...prev,
    [name]: value,
  }));
};
