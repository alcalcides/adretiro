export function signIn() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        token: "1234567812345678",
        user: {
            id: 10,
            fullName: "AABN",
            username: "alcides",
            birthday: "1990-02-02",
            mothersFullName: "MCAB",
            email: "meu@email.teste",
            phoneNumber: "+5571998765432",
            enrolledDepartments: ["Senhores", "Crianças"]
        }
      });
    }, 10);
  });
}