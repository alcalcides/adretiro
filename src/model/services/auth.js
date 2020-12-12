export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "1234567812345678",
        user: {
            name: "alcides",
            id: 10
        }
      });
    }, 1500);
  });
}
